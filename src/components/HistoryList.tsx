import type { FC } from 'react';
import type { SchemeType } from '../types/scheme';
import { HistoryItem } from './HistoryItem';
import '../styles/components/HistoryList.css';

interface HistoryListProps {
  history: Array<SchemeType>;
  onItemClick: (item: SchemeType) => void;
  onClearAll: () => void;
  isLoading: boolean;
}

/**
 * 历史记录列表组件
 */
export const HistoryList: FC<HistoryListProps> = ({ history, onItemClick, onClearAll, isLoading }) => {
  if (history.length === 0) return null;
  
  return (
    <div className="history-container">
      <div className="history-wrapper">
        <div className="history-items">
        {history.map((item, index) => (
          <HistoryItem
            key={index}
            item={item}
            onClick={onItemClick}
            disabled={isLoading}
          />
        ))}
      </div>
      <button 
        className="clear-all-button"
        onClick={onClearAll}
        disabled={isLoading}
        aria-label="清除全部历史记录"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
  );
};