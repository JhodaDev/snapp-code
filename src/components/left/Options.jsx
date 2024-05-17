import PropTypes from 'prop-types';

export const Option = ({ children, ...props }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-3 ${props.between ? 'justify-between' : 'justify-start'} ${props.className}`}
    >
      {children}
    </div>
  );
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  between: PropTypes.bool,
};
