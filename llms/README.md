# Scheme解析服务

这是一个基于 Express 和 OpenAI 的 Scheme 解析服务，用于根据用户指令生成对应的应用信息。

## 目录结构

```
llms/
├── .env              # 环境变量配置
├── .gitignore        # Git 忽略文件
├── README.md         # 项目说明
├── package.json      # 依赖管理
├── scheme.csv        # 应用 Scheme 数据
├── src/
│   ├── config/
│   │   └── env.js    # 环境变量配置
│   ├── routes/
│   │   └── chatRoute.js  # API 路由
│   ├── services/
│   │   ├── csvService.js  # CSV 数据服务
│   │   └── openaiService.js  # OpenAI 服务
│   ├── utils/
│   │   └── format.js  # 工具函数
│   └── server.js     # 主入口文件
└── vercel.json       # Vercel 配置
```

## 功能说明

1. **配置管理**：通过 `config/env.js` 管理环境变量和应用配置
2. **数据服务**：通过 `services/csvService.js` 读取和解析 CSV 数据
3. **AI 服务**：通过 `services/openaiService.js` 处理 OpenAI API 调用
4. **路由处理**：通过 `routes/chatRoute.js` 处理 API 请求
5. **主入口**：`src/server.js` 整合所有组件并启动服务器

## 环境变量

在 `.env` 文件中配置以下变量：
- `API_KEY`: OpenAI API 密钥
- `OPENAI_BASE_URL`: OpenAI API 基础 URL
- `OPENAI_MODEL`: 使用的模型名称
- `PORT`: 服务器端口

## 启动服务

1. 安装依赖：
```bash
npm install
```

2. 启动服务：
```bash
npm run serve
```

3. 开发模式（自动重启）：
```bash
npm run dev
```

## 部署

该服务可以部署到 Vercel、Heroku 等平台，确保设置正确的环境变量。