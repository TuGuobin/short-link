import { OpenAI } from 'openai'
import { Config } from '../config/env.js'
import csvService from './csvService.js'
import { formatJSON } from '../utils/format.js'

class OpenaiService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: Config.apiKey,
      baseURL: Config.openaiBaseUrl,
    })
    this.prompt = ''
  }

  async init() {
    await csvService.loadData()
    this.prompt = this.generatePrompt()
  }

  generatePrompt() {
    const formattedAppList = csvService.getFormattedAppList()

    return `
你是一个Scheme解析器，根据用户指令生成对应的应用信息。以下是详细规则：

### 返回格式要求
interface SchemeType {
  scheme: {
    ios: string
    android: string
  }
  action: string
  download: {
    ios: string
    android: string
  } // 下载链接
  error?: string | null // 错误信息
}

### app列表
你需要参考以下信息列表：${formattedAppList}

### 生成示例
输入：打开相机
{
  "scheme": { "ios": "camera://", "android": "camera://" },
  "action": "相机📷",
  "error": null
}

输入：微信付款码
{
  "scheme": { "ios": "weixin://widget/pay", "android": "weixin://widget/pay" },
  "action": "微信付款码💴",
  "download": { "ios": "https://itunes.apple.com/cn/app/id414478124", "android": "https://play.google.com/store/apps/details?id=com.tencent.mm" },
  "error": null
}

输入：打开未知的app
{
  "scheme": {"ios": "", "android": ""},
  "action": "",
  "error": "未找到此 APP [未知的APP]"
}

### 注意事项
1. 如果没有找到到对应的APP，返回的内容scheme为空，返回对应error信息
2. 你只能返回json格式的数据，不要返回任何其他内容
    `
  }

  async chat(messages) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: Config.openaiModel,
        messages: [
          {
            role: 'system',
            content: this.prompt,
          },
          {
            role: 'user',
            content: messages.slice(0, 100),
          },
        ],
      })

      const result = formatJSON(completion.choices[0].message.content)
      return result
    } catch (error) {
      console.error('OpenAI request failed:', error)
      throw error
    }
  }
}

export default new OpenaiService()