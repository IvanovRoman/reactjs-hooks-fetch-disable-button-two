import { useState, useCallback } from "react";

const useFetchData = url => {
  let [names, setNames] = useState([]);
  let [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(() => {
    // if (isSending) return;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNames(data);
        console.log(names);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setIsSending(false), 1500);
      });

    setIsSending(true);
  }, [url, names]);

  return {
    names,
    isSending,
    sendRequest,
    bind: {
      onClick: () => {
        sendRequest();
        // setIsSending(!isSending);
      },
    },
  };
};

export default useFetchData;
