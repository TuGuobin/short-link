import type { SchemeType } from "../types/scheme"

// API配置
const BASE_URL = import.meta.env.VITE_BASE_URL || '';
const API_URL = `${BASE_URL}/api/chat`;

interface LLMRequest {
  messages: string;
}

/**
 * 调用LLM服务分析文本并生成应用链接方案
 * @param text 用户输入的文本命令
 * @returns 包含应用链接和操作信息的SchemeType对象
 */
export const analyzeWithLLM = async (text: string): Promise<SchemeType> => {
  // 验证输入
  if (!text.trim()) {
    throw new Error("请提供有效的文本命令");
  }

  try {
    const requestBody: LLMRequest = {
      messages: text,
    };

    // 设置超时的fetch请求
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30秒超时

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API请求失败: ${response.status} ${errorText}`);
    }

    // 确保响应是有效的JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API返回的不是有效的JSON格式");
    }

    const responseData: SchemeType = await response.json();
    return responseData;
  } catch (error) {
    console.error("API调用错误:", error);
    
    // 处理超时错误
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error("请求超时，请稍后重试");
    }
    
    // 重新抛出错误，保持原始错误信息
    throw error;
  }
}
