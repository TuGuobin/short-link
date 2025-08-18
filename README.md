# Short Link

<div align="center">
  <a href="./assets/short-link-demo.mp4" target="_blank">
    <picture>
      <source srcset="./assets/short-link-1920.gif" media="(min-width: 1920px)" />
      <source srcset="./assets/short-link-1080.gif" media="(min-width: 1080px)" />
      <img src="./assets/short-link-1080.gif" alt="Short Link Demo" width="100%" />
    </picture>
  </a>
  <p><em>An intelligent application link launcher</em></p>
</div>

## 🌐 Language / 语言

[English](README.md) | [中文](README_ZH.md)

## 🔗 Online Demo

[Try it online](https://short-link.tuguobin.site)

## 🚀 Overview

Short Link is an elegant, lightweight tool designed to intelligently recognize and launch deep links to various applications. It supports both text and voice input, providing a seamless experience across platforms.

## ✨ Key Features

- **AI-Powered Recognition**: Leverages LLM technology to analyze natural language commands and generate corresponding application links
- **Voice Input Support**: Hands-free operation through voice recognition
- **Cross-Platform Compatibility**: Provides optimized links for both iOS and Android devices
- **Intelligent Error Handling**: Offers app store redirection when applications are not installed
- **Dark Mode Integration**: Automatically adapts to system theme preferences
- **History Management**: Stores recent links for quick access

## 🛠️ Technology Stack

**Frontend**:

- React 19.1.1
- TypeScript 5.8.3
- Vite 7.1.2
- Web Speech API

**Backend**:

- Express.js
- OpenAI API Integration
- CSV Data Management

## 📁 Project Structure

The project consists of two main components:

- **Frontend**: A React application that provides the user interface and handles user input
- **LLM Service**: A Node.js service that processes commands and generates application links

## 📱 Supported Applications

Short Link supports a comprehensive range of applications across various categories. Here's a detailed breakdown:

### System Applications

| Application | Features | Platform |
|-------------|----------|----------|
| Windows Settings | System Settings, Apps, Bluetooth, Network, Personalization | Windows |
| macOS Built-in Apps | Messages, Phone, Mail, Calendar, Photos, Maps | macOS |
| Microsoft Office | Word, PowerPoint, Excel | Cross-platform |

### Social Media

| Application | Features | Platform |
|-------------|----------|----------|
| WeChat | QR Code Scanning, Payment Code, Mini Programs | iOS/Android |
| Alipay | Payment Code, Collection Code, Credit Card Payment, Ride Hailing | iOS/Android |
| QQ | QR Code Scanning, User Profile | iOS/Android |
| Xiaohongshu (RED) | Search, Posts, User Profile | iOS/Android |
| Weibo | QR Code Scanning, Search, Post Creation | iOS/Android |
| Zhihu | QR Code Scanning, Search, Questions | iOS/Android |
| Telegram | Messaging | iOS/Android |
| Facebook | QR Code Scanning | iOS/Android |
| Instagram | Search | iOS/Android |

### E-commerce

| Application | Features | Platform |
|-------------|----------|----------|
| Taobao | Search, Store Search, QR Code Scanning | iOS/Android |
| JD | Search, QR Code Scanning, Payment Code, Order Management | iOS/Android |
| Pinduoduo | Search | iOS/Android |
| Tmall | Search | iOS/Android |
| Suning | Basic Functions | iOS/Android |
| Xiaomi Mall | Basic Functions | iOS/Android |

### Video & Live Streaming

| Application | Features | Platform |
|-------------|----------|----------|
| Bilibili | Search, User Page, Live Streaming, History, Favorites | iOS/Android |
| Douyin (TikTok) | Search, User Profile, Videos, Live Streaming | iOS/Android |
| Kuaishou | Search, QR Code Scanning, User Profile, Videos, Live Streaming | iOS/Android |
| Tencent Video | Basic Functions | iOS/Android |
| Youku | Basic Functions | iOS/Android |
| iQiyi | QR Code Scanning | iOS/Android |
| YouTube | Search | iOS/Android |
| Huya | Basic Functions | iOS/Android |
| Douyu | Basic Functions | iOS/Android |

### Lifestyle & Utilities

| Application | Features | Platform |
|-------------|----------|----------|
| Meituan | Search, Hotel Search, Bike Sharing, Ride Hailing | iOS/Android |
| Meituan Waimai | Food Delivery Search | iOS/Android |
| Ele.me | Food Delivery, QR Code Scanning | iOS/Android |
| Cainiao | Package Tracking, ID Code | iOS/Android |
| Gaode Map | Navigation | iOS/Android |
| Baidu Map | Basic Functions | iOS/Android |
| Tencent Map | Basic Functions | iOS/Android |
| Didi Chuxing | Ride Hailing | iOS/Android |

### Music & Audio

| Application | Features | Platform |
|-------------|----------|----------|
| NetEase Cloud Music | Song Recognition, Downloaded Music | iOS/Android |
| QQ Music | Music Recognition | iOS/Android |
| Himalaya | Basic Functions | iOS/Android |
| Douban FM | Basic Functions | iOS/Android |
| Xiami Music | Personal Radio, Song Recognition | iOS/Android |

### Productivity

| Application | Features | Platform |
|-------------|----------|----------|
| Feishu (Lark) | QR Code Scanning, Minutes, Attendance, Calendar, Tasks, Documents | iOS/Android |
| DingTalk | QR Code Scanning, Profile | iOS/Android |
| WeChat Work | QR Code Scanning, Contacts | iOS/Android |
| Tencent Meeting | Basic Functions | iOS/Android |
| Notion | Basic Functions | iOS/Android |
| Evernote | Basic Functions | iOS/Android |
| Youdao Cloud Notes | Basic Functions | iOS/Android |

### Finance

| Application | Features | Platform |
|-------------|----------|----------|
| China Merchants Bank | Basic Functions | iOS/Android |
| China Construction Bank | Basic Functions | iOS/Android |
| Industrial and Commercial Bank of China | Basic Functions | iOS/Android |
| UnionPay | QR Code Scanning, Payment Code, Transit Code, Credit Card Payment | iOS/Android |

### Browsers & Tools

| Application | Features | Platform |
|-------------|----------|----------|
| Google Chrome | URL Search | iOS/Android |
| UC Browser | URL Search | iOS/Android |
| QQ Browser | URL Search | iOS/Android |
| Baidu Browser | Basic Functions | iOS/Android |
| Firefox | Basic Functions | iOS/Android |
| Quark Browser | Basic Functions | iOS/Android |

### Developer Tools

| Application | Platform |
|-------------|----------|
| Apifox | Cross-platform |
| Clash | Cross-platform |
| OpenVPN Connect | Cross-platform |
| SourceTree | Cross-platform |
| XMind | Cross-platform |
| uTools | Cross-platform |
| WebStorm | Cross-platform |
| IntelliJ IDEA | Cross-platform |

## ⚙️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📄 License

[MIT License](LICENSE)
