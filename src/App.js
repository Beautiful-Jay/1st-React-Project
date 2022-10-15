import React, { useState } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";
import * as math from "mathjs"

const App = () => {
  
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const text = (value) => {
    setInput((input) => [...input, value + "" ]);
  }
  const calculateResult = () => {
    const count = input.join("");
  
    setResult(math.evaluate(count));
  }

const del = () => {
  setInput(input.slice(0, input.length - 1))
}

  const resetInput = () => {
    setInput("");
    setResult("");
  };
    return (
      <div className="main-frame">
        <div className="calc-screen">
          <div ><Screen input={input} result={result} /></div>
          <div className="buttons">
                <Button symbol="7" handleClick={text} />
            <Button symbol="8"  handleClick={text}/>
           <Button symbol="9"  handleClick={text} />
           <Button symbol="DEL" handleClick={del} />
            </div>
            <div className="buttons">
            <Button symbol="4"  handleClick={text} />
            <Button symbol="5"  handleClick={text} />
            <Button symbol="6"  handleClick={text} />
          <Button symbol="CLR"  handleClick={resetInput}/>
            </div>

            <div className="buttons">
            <Button symbol="1"  handleClick={text} />
            <Button symbol="2"  handleClick={text} />
            <Button symbol="3"  handleClick={text} />
            <Button symbol="/" handleClick={text} />
            </div>
          
            <div className="buttons">
            <Button symbol="0"  handleClick={text} />
            <Button symbol="."  handleClick={text} />
            <Button symbol="-"  handleClick={text} />
            <Button symbol="*"  handleClick={text} />
            </div>

            <div className="buttons">
            <Button symbol="+" handleClick={text} />
            <Button symbol="=" handleClick={calculateResult} />
            </div>

          </div>
        </div>
    );
}


export default App;
