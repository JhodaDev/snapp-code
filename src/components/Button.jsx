import PropTypes from 'prop-types';

const classNames =
  'rounded-[0.375rem] bg-gradient-to-t flex items-center gap-[0.5rem] font-semibold inline-block text-white px-[1.25rem] py-[0.375rem]';

export const Button = ({ component, children }) => {
  return (
    <>
      {component === 'button' ? (
        <button className={classNames}>{children}</button>
      ) : (
        <a className={classNames}>{children}</a>
      )}
    </>
  );
};

Button.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node.isRequired,
};
