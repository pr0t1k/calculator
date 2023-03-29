import React from 'react';

export const InputText = ({ value, backgroundColor, textColor }) => {
  const InputStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
    padding: '35px 1px',
    fontSize: '26px',
    textAlign:'center',
  };
  return (
    <div>
      <form>
        <input type="text" value={value} style={InputStyle} /> 
      </form>
    </div>
  );
};

export default InputText;
