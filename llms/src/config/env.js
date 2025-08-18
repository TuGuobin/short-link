import dotenv from "dotenv"

dotenv.config()

export const Config = {
  apiKey: process.env.API_KEY || "",
  openaiBaseUrl: process.env.OPENAI_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1",
  openaiModel: process.env.OPENAI_MODEL || "deepseek-v3",
  port: process.env.PORT || 8000,
  allowedOrigin: process.env.NODE_ENV === "production" ? "https://short-link.tuguobin.site" : "*",
  csvFilePath: process.env.NODE_ENV === "production" ? path.join(process.cwd(), "llms", "src/data/scheme.csv") : path.join(process.cwd(), "src/data/scheme.csv"),
}
