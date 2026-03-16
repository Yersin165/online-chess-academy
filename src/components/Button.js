import React from "react";

function Button({ text, onClick }) { // destructuring: props.text -> just text
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
