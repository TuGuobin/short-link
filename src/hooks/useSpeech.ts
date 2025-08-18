import { useRef, useState, useCallback, useEffect } from "react"
import type { SpeechRecognitionEvent, SpeechRecognitionType } from "../types/speech"

/**
 * 语音识别钩子的选项接口
 */
export interface UseSpeechOptions {
  onResult?: (text: string, isFinal: boolean) => void
  onStart?: () => void
  onEnd?: () => void
  onError?: (error: Error) => void
  lang?: string
  continuous?: boolean
  interimResults?: boolean
  maxAlternatives?: number
}

/**
 * 语音识别钩子的返回值接口
 */
export interface UseSpeechReturn {
  isListening: boolean
  toggleListening: () => void
  startListening: () => void
  stopListening: () => void
  error: string | null
}

/**
 * 初始化语音识别对象
 * @returns 语音识别类或null（如果浏览器不支持）
 */
const initSpeechRecognition = (): typeof SpeechRecognitionType | null => {
  // @ts-expect-error SpeechRecognitionType
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || null
  return SpeechRecognition
}

/**
 * 语音识别自定义钩子
 * 提供语音识别功能，可用于语音输入
 */
export const useSpeech = ({ onResult, onStart, onEnd, onError, lang = "zh-CN", continuous = true, interimResults = true, maxAlternatives = 1 }: UseSpeechOptions = {}): UseSpeechReturn => {
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognitionType | null>(null)
  const SpeechRecognition = useRef<typeof SpeechRecognitionType | null>(null)
  const resetTimeoutRef = useRef<number | null>(null)

  /**
   * 清理语音识别资源
   */
  const cleanupRecognition = useCallback(() => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current)
      resetTimeoutRef.current = null
    }

    if (recognitionRef.current) {
      // 移除所有事件监听器
      recognitionRef.current.onresult = null
      recognitionRef.current.onend = null
      recognitionRef.current.onerror = null
      recognitionRef.current.onstart = null
      recognitionRef.current.onstop = null

      // 尝试停止识别
      try {
        if (isListening) {
          recognitionRef.current.stop()
        }
      } catch (stopError) {
        console.error("停止语音识别失败:", stopError)
      }
    }
  }, [isListening])

  /**
   * 初始化语音识别实例
   */
  useEffect(() => {
    // 避免重复初始化
    if (recognitionRef.current) return

    SpeechRecognition.current = initSpeechRecognition()
    if (!SpeechRecognition.current) {
      setError("您的浏览器不支持语音识别功能")
      return
    }

    try {
      // 创建语音识别实例并配置
      recognitionRef.current = new SpeechRecognition.current()
      recognitionRef.current.continuous = continuous
      recognitionRef.current.interimResults = interimResults
      recognitionRef.current.lang = lang
      recognitionRef.current.maxAlternatives = maxAlternatives
    } catch (initError) {
      console.error("初始化语音识别失败:", initError)
      setError("初始化语音识别失败")
    }

    // 组件卸载时清理
    return () => {
      cleanupRecognition()
    }
  }, [lang, continuous, interimResults, maxAlternatives, cleanupRecognition])

  /**
   * 处理语音识别结果
   */
  const handleSpeechResult = useCallback(
    (event: SpeechRecognitionEvent) => {
      if (!event.results) return

      try {
        const results = event.results
        const transcript = results[results.length - 1][0].transcript
        const isFinal = results[results.length - 1].isFinal

        if (onResult) {
          onResult(transcript, isFinal)
        }
      } catch (resultError) {
        console.error("处理语音识别结果失败:", resultError)
        setError("处理语音识别结果失败")
      }
    },
    [onResult]
  )

  /**
   * 开始语音识别
   */
  const startListening = useCallback(() => {
    // 防止重复启动
    if (!recognitionRef.current || isListening) return
    if (onStart) onStart()

    try {
      // 设置事件监听器
      recognitionRef.current.onresult = handleSpeechResult
      recognitionRef.current.onend = () => {
        // 防止在组件卸载后执行
        if (!isListening) return

        // 自动重新开始识别（如果用户还在继续说话）
        resetTimeoutRef.current = setTimeout(() => {
          // 再次检查状态，避免在等待期间状态已更改
          if (isListening && recognitionRef.current) {
            startListening()
          }
        }, 100)
      }
      recognitionRef.current.onerror = (err: Error) => {
        console.error("语音识别错误:", err)
        if (onError) onError(err)

        setError(`语音识别错误: ${err.message || "未知错误"}`)
        setIsListening(false)
      }

      // 开始识别
      recognitionRef.current.start()
      setIsListening(true)
      setError(null)
    } catch (startError) {
      console.error("启动语音识别失败:", startError)
      setError("启动语音识别失败")
    }
  }, [isListening, handleSpeechResult, onError, onStart])

  /**
   * 停止语音识别
   */
  const stopListening = useCallback(() => {
    // 防止重复停止
    if (!recognitionRef.current || !isListening) return
    if (onEnd) onEnd()

    try {
      cleanupRecognition()
      setIsListening(false)
    } catch (stopError) {
      console.error("停止语音识别失败:", stopError)
      setError("停止语音识别失败")
    }
  }, [isListening, cleanupRecognition, onEnd])

  /**
   * 切换语音识别状态
   */
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }, [isListening, startListening, stopListening])

  return {
    isListening,
    toggleListening,
    startListening,
    stopListening,
    error,
  }
}
