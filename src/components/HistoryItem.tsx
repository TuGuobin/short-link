import type { FC } from 'react';
import type { SchemeType } from '../types/scheme';
import '../styles/components/HistoryItem.css';

interface HistoryItemProps {
  item: SchemeType;
  onClick: (item: SchemeType) => void;
  disabled?: boolean;
}

/**
 * 历史记录项组件，用于显示和点击历史记录
 */
export const HistoryItem: FC<HistoryItemProps> = ({ item, onClick, disabled = false }) => {
  return (
    <button 
      type="button" 
      className="history-item"
      onClick={() => onClick(item)}
      disabled={disabled}
      aria-label={item.action}
    >
      {item.action}
    </button>
  );
};