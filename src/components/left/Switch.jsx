import PropTypes from 'prop-types';
import { useState } from 'react';

export const Switch = ({ options }) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = (toggle) => {
    setIsToggled(toggle);

    if (!isToggled) {
      options[0].action();
    } else {
      options[1].action();
    }
  };

  return (
    <div className="flex items-center bg-primary max-w-[130px] w-full rounded-md p-1">
      <button
        onClick={() => handleToggle(true)}
        className={`flex items-center justify-center p-1 rounded-md transition-colors duration-300 text-sm w-2/4 ${isToggled ? 'bg-active' : 'bg-transparent'}`}
      >
        {options[0].label}
      </button>
      <button
        onClick={() => handleToggle(false)}
        className={`flex items-center justify-center p-1 rounded-md transition-colors duration-300 text-sm w-2/4 ${isToggled ? 'bg-transparent' : 'bg-active'}`}
      >
        {options[1].label}
      </button>
    </div>
  );
};

Switch.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      action: PropTypes.func,
    }),
  ).isRequired,
};
