/**
 * URL链接工具类
 */

export interface OpenSchemeOptions {
  schemeUrl: {
    ios: string
    android: string
  }
  successCallback?: () => void
  failCallback?: () => void
  finalCallback?: () => void
  timeout?: number // 默认3000ms
}

/**
 * 重定向到指定URL
 * @param url 目标URL
 */
export function redirectTo(url: string): void {
  if (!url || typeof url !== "string") {
    throw new Error("无效的URL参数")
  }

  try {
    // 验证URL格式
    new URL(url)
  } catch {
    // 如果不是标准URL格式，可能是自定义协议
    if (!url.includes("://")) {
      throw new Error("URL格式不正确")
    }
  }

  window.location.href = url
}

/**
 * 打开应用协议链接
 * @param options 打开链接的选项配置
 * @returns 清理函数，用于取消监听和清除定时器
 */
export function openScheme(options: OpenSchemeOptions): () => void {
  const { schemeUrl, successCallback, failCallback, finalCallback, timeout = 3000 } = options

  // 验证参数
  if (!schemeUrl) {
    throw new Error("缺少schemeUrl参数")
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const url = isIOS ? schemeUrl.ios : schemeUrl.android

  if (!url) {
    throw new Error("当前设备不支持该应用链接")
  }

  let isUserAway = false

  // 检查用户是否离开当前页面
  const checkUserAway = (): void => {
    if (isUserAway) return
    isUserAway = true
  }

  // 添加可见性变化监听
  document.addEventListener("visibilitychange", checkUserAway)

  try {
    // 尝试重定向到应用协议
    redirectTo(url)
  } catch (error) {
    console.error("重定向失败:", error)
    // 立即执行失败回调
    failCallback?.()
    cleanup()
    return cleanup // 返回清理函数
  }

  // 设置超时检查
  const timer = setTimeout(() => {
    try {
      if (isUserAway || document.hidden || !document.hasFocus()) {
        successCallback?.()
      } else {
        failCallback?.()
      }
    } catch (callbackError) {
      console.error("回调执行错误:", callbackError)
    } finally {
      try {
        finalCallback?.()
      } catch (finalError) {
        console.error("最终回调执行错误:", finalError)
      }
      cleanup()
    }
  }, timeout)

  // 清理函数
  function cleanup(): void {
    clearTimeout(timer)
    document.removeEventListener("visibilitychange", checkUserAway)
  }

  return cleanup
}
