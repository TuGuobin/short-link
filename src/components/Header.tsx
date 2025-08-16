import type { FC } from 'react';
import '../styles/components/Header.css';

interface HeaderProps {
  isListening: boolean;
  toggleListening: () => void;
  isLoading: boolean;
}

/**
 * 应用头部组件，包含标题和语音输入按钮
 */
export const Header: FC<HeaderProps> = ({ isListening, toggleListening, isLoading }) => {
  return (
    <div className="header">
      <h1>Short Link</h1>
      <button 
        className={`voice-button ${isListening ? "voice-button-active" : ""}`} 
        onClick={toggleListening} 
        disabled={isLoading} 
        aria-label={isListening ? "正在聆听..." : "语音输入"}
      >
        <i className="fa-solid fa-microphone"></i>
      </button>
    </div>
  );
};