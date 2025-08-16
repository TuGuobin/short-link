import type { FC } from 'react';
import '../styles/components/ErrorDisplay.css';

interface ErrorDisplayProps {
  error: string;
}

/**
 * 错误信息显示组件
 */
export const ErrorDisplay: FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="error-container">
      <p className="error-message">{error}</p>
    </div>
  );
};