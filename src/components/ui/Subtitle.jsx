import PropTypes from 'prop-types';

export const Subtitle = ({ children, ...props }) => {
  return (
    <span className="text-ssm text-white" {...props}>
      {children}
    </span>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};
