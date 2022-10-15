import React from "react";

const Screen = ({ input, result }) => {
  return (
    <div className="main-screen">
     <div className="result">
        <h1>{result}</h1>
        </div>
     <div className="input">
        <h3>{input}</h3>
      </div>
    </div>
  );
};

export default Screen;
