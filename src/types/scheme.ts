export interface SchemeType {
  scheme: {
    ios: string
    android: string
  }
  action: string
  download?: {
    ios: string
    android: string
  }
  error?: string | null
}
