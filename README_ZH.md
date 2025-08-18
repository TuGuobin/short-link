# Short Link

<div align="center">
  <a href="./assets/short-link-demo.mp4" target="_blank">
    <picture>
      <source srcset="./assets/short-link-1920.gif" media="(min-width: 1920px)" />
      <source srcset="./assets/short-link-1080.gif" media="(min-width: 1080px)" />
      <img src="./assets/short-link-1080.gif" alt="Short Link Demo" width="100%" />
    </picture>
  </a>
  <p><em>一款智能应用链接启动器</em></p>
</div>

## 🌐 语言选择 / Language

[英文](README.md) | [中文](README_ZH.md)

## 🔗 在线演示

[立即体验](https://short-link.tuguobin.site)

## 🚀 项目概述

Short Link 是一款优雅、轻量级的工具，旨在智能识别并启动各种应用的深层链接。它支持文本和语音输入，为跨平台使用提供无缝体验。

## ✨ 核心功能

- **AI 驱动识别**：利用 LLM 技术分析自然语言命令并生成相应的应用链接
- **语音输入支持**：通过语音识别实现免手动操作
- **跨平台兼容**：为 iOS 和 Android 设备提供优化的链接
- **智能错误处理**：当应用未安装时提供应用商店重定向
- **深色模式集成**：自动适配系统主题偏好
- **历史记录管理**：存储最近使用的链接以便快速访问

## 🛠️ 技术栈

**前端**:

- React 19.1.1
- TypeScript 5.8.3
- Vite 7.1.2
- Web Speech API

**后端**:

- Express.js
- OpenAI API 集成
- CSV 数据管理

## 📁 项目结构

项目由两个主要组件组成:

- **前端**：React 应用，提供用户界面并处理用户输入
- **LLM 服务**：Node.js 服务，处理命令并生成应用链接

## 📱 支持的应用

Short Link 支持各类应用，覆盖多个领域。以下是详细分类列表：

### 系统应用

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| Windows 设置 | 系统设置、应用管理、蓝牙、网络、个性化 | Windows |
| macOS 内置应用 | 短信、电话、邮件、日历、照片、地图 | macOS |
| Microsoft Office | Word、PowerPoint、Excel | 跨平台 |

### 社交媒体

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 微信 | 扫一扫、付款码、小程序 | iOS/Android |
| 支付宝 | 付款码、收款码、信用卡还款、打车 | iOS/Android |
| QQ | 扫一扫、用户主页 | iOS/Android |
| 小红书 | 搜索、帖子、用户主页 | iOS/Android |
| 微博 | 扫一扫、搜索、发微博 | iOS/Android |
| 知乎 | 扫一扫、搜索、问题页面 | iOS/Android |
| Telegram | 消息发送 | iOS/Android |
| Facebook | 扫一扫 | iOS/Android |
| Instagram | 搜索 | iOS/Android |

### 电商购物

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 淘宝 | 搜索、店铺搜索、扫一扫 | iOS/Android |
| 京东 | 搜索、扫一扫、付款码、订单管理 | iOS/Android |
| 拼多多 | 搜索 | iOS/Android |
| 天猫 | 搜索 | iOS/Android |
| 苏宁 | 基本功能 | iOS/Android |
| 小米商城 | 基本功能 | iOS/Android |

### 视频与直播

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| Bilibili | 搜索、用户页面、直播、历史记录、收藏 | iOS/Android |
| 抖音 | 搜索、用户主页、视频、直播 | iOS/Android |
| 快手 | 搜索、扫一扫、用户主页、视频、直播 | iOS/Android |
| 腾讯视频 | 基本功能 | iOS/Android |
| 优酷 | 基本功能 | iOS/Android |
| 爱奇艺 | 扫一扫 | iOS/Android |
| YouTube | 搜索 | iOS/Android |
| 虎牙 | 基本功能 | iOS/Android |
| 斗鱼 | 基本功能 | iOS/Android |

### 生活服务

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 美团 | 搜索、酒店搜索、共享单车、打车 | iOS/Android |
| 美团外卖 | 外卖搜索 | iOS/Android |
| 饿了么 | 外卖、扫一扫 | iOS/Android |
| 菜鸟裹裹 | 快递查询、身份码 | iOS/Android |
| 高德地图 | 导航 | iOS/Android |
| 百度地图 | 基本功能 | iOS/Android |
| 腾讯地图 | 基本功能 | iOS/Android |
| 滴滴出行 | 打车 | iOS/Android |

### 音乐音频

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 网易云音乐 | 听歌识曲、已下载音乐 | iOS/Android |
| QQ音乐 | 识别音乐 | iOS/Android |
| 喜马拉雅 | 基本功能 | iOS/Android |
| 豆瓣FM | 基本功能 | iOS/Android |
| 虾米音乐 | 私人电台、听歌识曲 | iOS/Android |

### 办公效率

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 飞书 | 扫一扫、妙记、考勤打卡、日历、任务、文档 | iOS/Android |
| 钉钉 | 扫一扫、个人信息 | iOS/Android |
| 企业微信 | 扫一扫、联系人 | iOS/Android |
| 腾讯会议 | 基本功能 | iOS/Android |
| Notion | 基本功能 | iOS/Android |
| 印象笔记 | 基本功能 | iOS/Android |
| 有道云笔记 | 基本功能 | iOS/Android |

### 金融理财

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| 招商银行 | 基本功能 | iOS/Android |
| 建设银行 | 基本功能 | iOS/Android |
| 工商银行 | 基本功能 | iOS/Android |
| 云闪付 | 扫一扫、付款码、乘车码、信用卡还款 | iOS/Android |

### 浏览器与工具

| 应用名称 | 功能特点 | 平台 |
|---------|---------|------|
| Google Chrome | 网址搜索 | iOS/Android |
| UC浏览器 | 网址搜索 | iOS/Android |
| QQ浏览器 | 网址搜索 | iOS/Android |
| 百度浏览器 | 基本功能 | iOS/Android |
| Firefox 火狐浏览器 | 基本功能 | iOS/Android |
| 夸克浏览器 | 基本功能 | iOS/Android |

### 开发工具

| 应用名称 | 平台 |
|---------|------|
| Apifox | 跨平台 |
| Clash | 跨平台 |
| OpenVPN Connect | 跨平台 |
| SourceTree | 跨平台 |
| XMind | 跨平台 |
| uTools | 跨平台 |
| WebStorm | 跨平台 |
| IntelliJ IDEA | 跨平台 |

## ⚙️ 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📄 许可证

[MIT 许可证](LICENSE)
