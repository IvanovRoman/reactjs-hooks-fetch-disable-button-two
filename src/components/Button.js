import React from "react";
import useFetchData from "./useFetchData";

const Button = () => {
  const { bind, isSending } = useFetchData(
    "https://api.github.com/repositories/19438/issues",
  );
  return (
    <button {...bind} disabled={isSending}>
      Click
    </button>
  );
};

export default Button;
