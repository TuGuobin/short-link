import { useState, useRef, useEffect } from "react"
import "./styles/layout.css"
import "./styles/theme.css"
import { openScheme } from "./utils/link"
import { useTheme } from "./hooks/useTheme"
import { analyzeWithLLM } from "./api/llm"
import { useSpeech } from "./hooks/useSpeech"
import type { SchemeType } from "./types/scheme"
import { defaultSchemes } from "./utils/scheme"
import { HistoryService } from "./services/historyService"
import { Header } from "./components/Header"
import { HistoryList } from "./components/HistoryList"
import { InputForm } from "./components/InputForm"
import { ErrorDisplay } from "./components/ErrorDisplay"

function App() {
  // 状态管理
  const [history, setHistory] = useState<Array<SchemeType>>(() => HistoryService.getHistory(defaultSchemes))
  const [inputText, setInputText] = useState("")
  const [interimText, setInterimText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // 语音识别钩子
  const {
    isListening,
    toggleListening,
    error: speechError,
  } = useSpeech({
    onResult: (transcript, isFinal) => {
      if (isFinal) {
        setInputText((prev) => prev + transcript)
        setInterimText("")
      } else {
        setInterimText(transcript)
      }
    },
    onEnd: () => {
      setInputText((prev) => prev + interimText)
      setInterimText("")
    },
    lang: "zh-CN",
    interimResults: true,
    continuous: true,
  })

  // 输入时暂停语音识别
  const handleInput = () => {
    if (!isListening) return
    toggleListening()
  }

  // 处理语音识别错误
  useEffect(() => {
    if (speechError) {
      setError(speechError)
    }
  }, [speechError])

  // 主题钩子
  useTheme()

  // 处理打开Scheme
  const handleOpenScheme = (scheme: SchemeType) => {
    openScheme({
      schemeUrl: scheme.scheme,
      failCallback: () => {
        setError("应用打开失败，跳转到应用商店")
        if (!scheme.download) return
        openScheme({
          schemeUrl: scheme.download,
        })
      },
    })
  }

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 验证输入
    if (!inputText.trim()) {
      setError("请输入内容")
      return
    }

    // 设置加载状态
    setIsLoading(true)
    setError("")
    if (isListening) {
      toggleListening()
    }

    try {
      // 调用LLM分析
      const scheme = await analyzeWithLLM(inputText)
      if (scheme.error) {
        setError(scheme.error)
        return
      }

      // 验证Scheme是否有效
      if (!scheme.scheme.ios && !scheme.scheme.android) {
        setError("无法识别有效的应用链接")
        return
      }

      // 打开Scheme并更新历史记录
      handleOpenScheme(scheme)
      const updatedHistory = HistoryService.addToHistory(scheme, history)
      setHistory(updatedHistory)
    } catch (err: unknown) {
      setError("处理请求时出错：" + ((err as Error).message || "未知错误"))
    } finally {
      setIsLoading(false)
    }
  }

  // 处理清除全部历史记录
  const handleClearAll = () => {
    if (!confirm("确定要清除全部历史记录吗？")) return
    HistoryService.clearHistory()
    setHistory([])
  }

  return (
    <div className="app-container">
      <Header isListening={isListening} toggleListening={toggleListening} isLoading={isLoading} />
      <HistoryList history={history} onItemClick={handleOpenScheme} onClearAll={handleClearAll} isLoading={isLoading} />
      <InputForm inputText={inputText + interimText} setInputText={setInputText} onInput={handleInput} onSubmit={handleSubmit} isLoading={isLoading} inputRef={inputRef} />
      <ErrorDisplay error={error} />
    </div>
  )
}

export default App
