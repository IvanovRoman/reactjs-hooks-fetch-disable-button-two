import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import Button from "./components/Button";
import useFetchData from "./components/useFetchData";

const Button = () => {
  const { names, bind, isSending } = useFetchData(
    "https://api.github.com/repositories/19438/issues",
  );
  return (
    <div>
      <button {...bind} disabled={isSending}>
        Click
      </button>
      <div>
        {names.map((item, i) => (
          <div key={i}>{item.url}</div>
          // <div key={i}>"HI"</div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [url, setUrl] = useState(
    "https://api.github.com/repositories/19438/issues",
  );
  const { names } = useFetchData(url);
  const handleInputChange = event => {
    setUrl(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" name="url" value={url} onChange={handleInputChange} />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <div>
        {names.map((item, i) => (
          // <div key={i}>{item.url}</div>
          <div key={i}>"HI"</div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
