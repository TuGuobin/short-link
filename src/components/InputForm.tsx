import type { FC, FormEvent, KeyboardEvent, RefObject } from 'react';
import '../styles/components/InputForm.css';

interface InputFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
  inputRef: RefObject<HTMLTextAreaElement | null>;
}

/**
 * 输入表单组件，包含文本输入框和提交按钮
 */
export const InputForm: FC<InputFormProps> = ({
  inputText,
  setInputText,
  onSubmit,
  isLoading,
  inputRef
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <form onSubmit={onSubmit} className="input-container">
      <textarea
        ref={inputRef}
        value={inputText}
        rows={3}
        maxLength={100}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入命令（如“小红书搜索北京旅游攻略”）"
        disabled={isLoading}
        className="search-input"
        enterKeyHint="done"
      />
      <button type="submit" disabled={isLoading} className="launch-button">
        {isLoading ? (
          <span>
            <i className="fa-solid fa-spinner fa-spin icon"></i>处理中
          </span>
        ) : (
          <span>
            <i className="fa-solid fa-play icon"></i>启动
          </span>
        )}
      </button>
    </form>
  );
};