import type { SchemeType } from '../types/scheme';

// 管理Scheme相关的业务逻辑
export class SchemeService {
  // 保存历史记录到本地存储
  static saveHistory(schemes: Array<SchemeType>): void {
    try {
      localStorage.setItem('shortLinkHistory', JSON.stringify(schemes));
    } catch (error) {
      console.error('保存历史记录失败:', error);
    }
  }

  // 从本地存储加载历史记录
  static loadHistory(defaultSchemes: Array<SchemeType>): Array<SchemeType> {
    try {
      const saved = localStorage.getItem('shortLinkHistory');
      return saved ? JSON.parse(saved) : defaultSchemes;
    } catch (error) {
      console.error('加载历史记录失败:', error);
      return defaultSchemes;
    }
  }

  // 验证Scheme是否有效
  static isValidScheme(scheme: SchemeType): boolean {
    return !!(scheme.scheme?.ios || scheme.scheme?.android);
  }

  // 添加新的Scheme到历史记录中（保持最新10条）
  static addToHistory(newScheme: SchemeType, currentHistory: Array<SchemeType>): Array<SchemeType> {
    const updatedHistory = [newScheme, ...currentHistory.filter(item => 
      item.action !== newScheme.action || 
      item.scheme.ios !== newScheme.scheme.ios || 
      item.scheme.android !== newScheme.scheme.android
    )].slice(0, 10);
    
    this.saveHistory(updatedHistory);
    return updatedHistory;
  }
}