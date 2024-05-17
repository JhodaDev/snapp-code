import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export const Frame = ({ children, minWidth, ...props }) => {
  const currentLayout = useRef(null);

  const handleMouseMove = (e) => {
    const width = e.clientX - currentLayout.current.getBoundingClientRect().left;
    if (width <= minWidth) return;
    currentLayout.current.style.width = `${width}px`;
  };

  const handleOnClickDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleClickUp);
  };

  const handleClickUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleClickUp);
  };

  useEffect(() => {
    return () => {
      // Cleanup event listeners if component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleClickUp);
    };
  }, []);

  return (
    <div {...props} ref={currentLayout} className="text-[1rem] rounded-md p-8 bg-gradient-to-b relative">
      {children}
      <div
        onMouseDown={handleOnClickDown}
        className="w-2 h-2 absolute bg-white rounded-full -right-1 top-2/4 -translate-y-2/4"
      ></div>
    </div>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
  minWidth: PropTypes.number,
};
