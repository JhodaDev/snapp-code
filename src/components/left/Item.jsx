import PropTypes from 'prop-types';

export const Item = ({ title, children, ...props }) => {
  return (
    <div className="w-full">
      <h3 className="font-bold">{title}</h3>
      <div className={`ml-5 mt-4 ${props.className}`}>{children}</div>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
