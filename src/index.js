import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Button from "./components/Button";
import useFetchData from "./components/useFetchData";

function App() {
  const [url, setUrl] = useState(
    "https://api.github.com/repositories/19438/issues",
  );
  // "https://uinames.com/api/?amount=25&region=nigeria";
  const { sendRequest, isSending, names } = useFetchData(url);

  const handleInputChange = event => {
    setUrl(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" name="url" value={url} onChange={handleInputChange} />
      <Button sendRequest={sendRequest} isSending={isSending} />
      <div>
        {names.map((item, i) => (
          <div key={i}>
            {item.url}
            {/* {item.name} {item.surname} */}
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
