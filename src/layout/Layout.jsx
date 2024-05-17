import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <div className="h-screen w-full bg-body font-poppins">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
