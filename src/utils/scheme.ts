import type { SchemeType } from "../types/scheme";

export const defaultSchemes: Array<SchemeType> = [
  {
    scheme: { ios: "weixin://scanqrcode", android: "weixin://scanqrcode" },
    action: "微信扫一扫📷",
    download: { ios: "https://itunes.apple.com/cn/app/id414478124", android: "https://play.google.com/store/apps/details?id=com.tencent.mm" },
    error: null,
  },
  {
    scheme: { ios: "photos-redirect://", android: "photos-redirect://" },
    action: "照片🧩",
    error: null,
  },
  {
    scheme: { ios: "camera://", android: "camera://" },
    action: "相机📷",
    error: null,
  },
  {
    scheme: { ios: "weixin://widget/pay", android: "weixin://widget/pay" },
    action: "微信付款码💴",
    download: { ios: "https://itunes.apple.com/cn/app/id414478124", android: "https://play.google.com/store/apps/details?id=com.tencent.mm" },
    error: null,
  },
  {
    scheme: {
      ios: "alipay://platformapi/startapp?saId=20000056",
      android: "alipayqr://platformapi/startapp?saId=20000056",
    },
    action: "支付宝付款码💴",
    download: {
      ios: "https://apps.apple.com/cn/app/id333206289",
      android: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
    },
    error: null,
  },
  {
    scheme: {
      ios: "alipays://platformapi/startapp?appId=2021001141626787",
      android: "alipays://platformapi/startapp?appId=2021001141626787",
    },
    action: "菜鸟小程序📦",
    download: {
      ios: "https://apps.apple.com/cn/app/id333206289",
      android: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
    },
    error: null,
  },
  {
    scheme: {
      ios: "alipay://platformapi/startapp?appId=20000123",
      android: "alipay://platformapi/startapp?appId=20000123",
    },
    action: "支付宝收款码💴",
    download: {
      ios: "https://apps.apple.com/cn/app/id333206289",
      android: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
    },
    error: null,
  },
  {
    scheme: {
      ios: "bilibili://search?keyword=鬼畜",
      android: "bilibili://search?keyword=鬼畜",
    },
    action: "BiliBili搜鬼畜📺",
    download: {
      ios: "https://apps.apple.com/cn/app/id736536022",
      android: "https://play.google.com/store/apps/details?id=com.bilibili.app.in",
    },
    error: null,
  },
  {
    scheme: {
      ios: "xhsdiscover://search/result?keyword=秋天",
      android: "xhsdiscover://search/result?keyword=秋天",
    },
    action: "小红书搜索秋天🍂",
    download: {
      ios: "https://apps.apple.com/cn/app/id741292507",
      android: "https://play.google.com/store/apps/details?id=com.xingin.xhs",
    },
    error: null,
  },
  {
    scheme: {
      ios: "snssdk1128://search?keyword=chiikawa",
      android: "snssdk1128://search?keyword=chiikawa",
    },
    action: "抖音搜索chiikawa📺",
    download: {
      ios: "https://apps.apple.com/cn/app/id1142110895",
      android: "https://play.google.com/store/apps/details?id=com.ss.android.ugc.aweme",
    },
    error: null,
  },
  {
    scheme: {
      ios: "imeituan://www.meituan.com/search?q=奶茶",
      android: "imeituan://www.meituan.com/search?q=奶茶",
    },
    action: "美团搜索奶茶🍵",
    download: {
      ios: "https://apps.apple.com/cn/app/id423084029",
      android: "https://play.google.com/store/apps/details?id=com.sankuai.meituan",
    },
    error: null,
  },
  {
    scheme: {
      ios: "orpheuswidget://recognize",
      android: "orpheuswidget://recognize",
    },
    action: "网易云音乐识别歌曲🎵",
    download: {
      ios: "https://apps.apple.com/cn/app/id590338362",
      android: "https://play.google.com/store/apps/details?id=com.netease.cloudmusic",
    },
    error: null,
  },
]
