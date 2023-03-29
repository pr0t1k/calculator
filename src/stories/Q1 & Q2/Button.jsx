import React from 'react'
import PropTypes from 'prop-types';

const Button = ({onClick,backgroundColor,text,buttonSize,textColor }) => {
  {textColor= textColor==="#fff7f7"?"white":"black"}
  const buttoncss = {
    color: textColor,
    backgroundColor: backgroundColor,
    padding: buttonSize === 'xl' ? '0px 84px' : '18px 26px',
    fontSize: buttonSize === 'xl' ? '2rem' : '2rem',
    //borderRadius: '4px',
    height: '80px',
    width: '85px',
    border: '1px solid black',
    //padding: pad,
  };
  return (
    <button style={buttoncss} onClick={onClick}>
      {text}
  </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  buttonSize: PropTypes.oneOf(['large','small']).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'button',
  textColor: 'red',
  backgroundColor:'dark',
  buttonSize: 'large',
  onClick: () => {},
};

export default Button;
