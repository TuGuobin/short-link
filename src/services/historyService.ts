import type { SchemeType } from '../types/scheme';

// 管理历史记录的服务类
export class HistoryService {
  private static readonly STORAGE_KEY = 'shortLinkHistory';
  private static readonly MAX_HISTORY_ITEMS = 10;

  // 获取历史记录
  static getHistory(defaultHistory: Array<SchemeType> = []): Array<SchemeType> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultHistory;
    } catch (error) {
      console.error('获取历史记录失败:', error);
      return defaultHistory;
    }
  }

  // 保存历史记录
  static setHistory(history: Array<SchemeType>): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
      console.error('保存历史记录失败:', error);
    }
  }

  // 添加项目到历史记录
  static addToHistory(item: SchemeType, currentHistory: Array<SchemeType> = []): Array<SchemeType> {
    // 检查是否已存在相同的项目
    const existingIndex = currentHistory.findIndex(historyItem => 
      historyItem.action === item.action && 
      historyItem.scheme.ios === item.scheme.ios && 
      historyItem.scheme.android === item.scheme.android
    );

    let updatedHistory: Array<SchemeType>;
    
    if (existingIndex >= 0) {
      // 如果已存在，移除旧项目
      updatedHistory = [...currentHistory.slice(0, existingIndex), ...currentHistory.slice(existingIndex + 1)];
    } else {
      updatedHistory = [...currentHistory];
    }

    // 添加新项目到开头
    updatedHistory.unshift(item);
    
    // 保持历史记录不超过最大数量
    if (updatedHistory.length > this.MAX_HISTORY_ITEMS) {
      updatedHistory = updatedHistory.slice(0, this.MAX_HISTORY_ITEMS);
    }

    // 保存更新后的历史记录
    this.setHistory(updatedHistory);
    
    return updatedHistory;
  }

  // 清空历史记录
  static clearHistory(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('清空历史记录失败:', error);
    }
  }
}