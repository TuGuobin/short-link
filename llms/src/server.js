import express from "express"
import { Config } from "./config/env.js"
import chatRouter from "./routes/chatRoute.js"
import openaiService from "./services/openaiService.js"

const app = express()
app.use(express.json())

// 设置CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", Config.allowedOrigin)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

// 注册路由
app.use("/api", chatRouter)

app.get("/", (req, res) => {
  res.send("Server is running")
})

async function startServer() {
  try {
    await openaiService.init()
    app.listen(Config.port, () => {
      console.log(`Server running on http://localhost:${Config.port}`)
    })
  } catch (error) {
    console.error("Failed to start server:", error)
    process.exit(1)
  }
}

startServer()

export default app
