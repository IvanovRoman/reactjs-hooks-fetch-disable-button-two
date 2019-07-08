import React from "react";

const Button = props => {
  return (
    <button onClick={props.sendRequest} disabled={props.isSending}>
      Click
    </button>
  );
};

export default Button;
