import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Window = ({ type }) => {
  const [isTyping, setIsTyping] = useState(false);
  const refSpan = useRef(null);

  const handleDoubleClick = () => {
    setIsTyping(true);
    refSpan.current.classList.add('isTyping');
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (!isTyping) return;
      const value = refSpan.current.textContent;
      if (e.key === 'Backspace') {
        refSpan.current.textContent = value.slice(0, value.length - 1);
      }

      if (e.key === 'Enter') {
        setIsTyping(false);
        refSpan.current.classList.remove('isTyping');
      }

      if (e.key.match(/^[a-zA-Z0-9-._]$/)) {
        refSpan.current.textContent = value + e.key;
      }
    },
    [isTyping],
  );

  const handleInactive = useCallback(
    (e) => {
      if (isTyping && e.target !== refSpan.current) {
        setIsTyping(false);
        refSpan.current.classList.remove('isTyping');
      }
    },
    [isTyping],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleInactive);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleInactive);
    };
  }, [isTyping, handleKeyDown, handleInactive]);

  return (
    <div className="bg-primary w-full px-3 max-h-10 h-10 rounded-md flex items-center gap-1">
      <div className="h-3 w-3 rounded-full bg-red"></div>
      <div className="h-3 w-3 rounded-full bg-yellow"></div>
      <div className="h-3 w-3 rounded-full bg-green"></div>
      {type === 'file' && (
        <div
          onDoubleClick={handleDoubleClick}
          className="bg-active rounded-md px-3 select-none cursor-pointer min-w-3 min-h-6 content-center relative "
        >
          <span ref={refSpan} className="text-ssm">
            Untlited
          </span>
        </div>
      )}
    </div>
  );
};

Window.propTypes = {
  type: PropTypes.string,
};
