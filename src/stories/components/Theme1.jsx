import React, { useState } from 'react';
import Button from '../Q1 & Q2/Button';
import InputText from '../Q1 & Q2/InputText'

function Theme1({theme}) {
  const [input, setInput] = useState('');
  const [first, setfirst] = useState(false);

  const handleClick = (x) => {
    let ch=input.charAt(input.length-1);
    let str="+-*/%";
    if(str.includes(ch) && str.includes(x)){
      setInput("Some error occured");
      return;
    }
    setInput(input + x);
    console.log(input);
  };
  const handlePlusMinusClick = ()=> {
    if(input.charAt(0)!=='-'){
      setInput('-'+input);
      return;
    }
    if(input.charAt(0)==='-'){
      let s=input;
      let index=0;
      s = '+' + s;
      setInput(s);
    }
    else{
      let s=input;
      let index=0;
      s =  '-' + s;
      setInput(s);
    }
  }
  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      const result = eval(input);

      setInput(result.toString());
    } catch (error) {
      setInput("Some Error Ouccured");
    }
  };

  return (
    //<div style={{textAlign:'center',marginTop:'70px'}}>
    <div>
      <InputText value={input} backgroundColor={theme==="Theme1"?"#050404":"#f6ecec"} textColor={theme==="Theme1"?"white":"black"}/>
      <div className="calculator-buttons">
        <Button
        backgroundColor={theme==="Theme1"?"#beb1b1":"#413636"} 
          buttonSize="large"
          onClick={handleClear}
          text="AC"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#beb1b1":"#413636"} 
          buttonSize="large"
          onClick={()=>handlePlusMinusClick()}
          text="+/-"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#beb1b1":"#413636"} 
          buttonSize="large"
          onClick={()=>{handleClick("%")}}
          text="%"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ff7a00":"#005cfc"}
          buttonSize="large"
          onClick={()=>handleClick("/")}
          text="/"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
      </div>

      <div className="calculator-buttons">
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(7)}
          text="7"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>{handleClick(8)}}
          text="8"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>{handleClick(9)}}
          text="9"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ff7a00":"#005cfc"}
          buttonSize="large"
          onClick={()=>{handleClick("*")}}
          text="x"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
      </div>

      <div className="calculator-buttons">
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(4)}
          text="4"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(5)}
          text="5"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>{handleClick(6)}}
          text="6"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ff7a00":"#005cfc"}
          buttonSize="large"
          onClick={()=>handleClick("-")}
          text="-"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
      </div>

      <div className="calculator-buttons">
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(1)}
          text="1"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(2)}
          text="2"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(3)}
          text="3"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ff7a00":"#005cfc"}
          buttonSize="large"
          onClick={()=>handleClick("+")}
          text="+"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
      </div>
      <div>
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="xl"
          onClick={()=>handleClick(0)}
          text="0"
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
          //flag="xl"
          //pad="10px 84px"
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ebebeb":"#0c0b0b"}
          buttonSize="large"
          onClick={()=>handleClick(".")}
          text="."
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
        <Button
          backgroundColor={theme==="Theme1"?"#ff7a00":"#005cfc"}
          buttonSize="large"
          onClick={()=>handleEqual()}
          text="="
          textColor={theme==="Theme1"?"#fffff":"#fff7f7"}
        />
      </div>
    </div>
  );
}

export default Theme1;

