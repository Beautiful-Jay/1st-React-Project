import React from 'react';

    const Button = ({symbol, handleClick}) => {
             return(
              <div
           onClick={() => handleClick(symbol)}
            className="button-com">{symbol}
                 </div>);
}

export default Button;