// useWebSocket.js
import { useEffect, useState } from "react";

// define a custom hook
// accept the url to connect to
// number of times the hook should retry a connection
// the interval between retries
const useWebSocket = ({
  socketUrl,
  retry: defaultRetry = 3,
  retryInterval = 1500,
}) => {
  // message and timestamp
  const [data, setData] = useState();
  // send function
  const [send, setSend] = useState(() => undefined);
  // state of our connection
  //const [retry, setRetry] = useState(defaultRetry);
  // retry counter
  const [readyState, setReadyState] = useState(false);

  useEffect(() => {
    let ref;
    const webSocket = async () => {
      const ws = await new WebSocket(socketUrl);
      ref = ws;
      ws.onopen = () => {
        console.log("Connected to socket");
        setReadyState(true);

        // function to send messages
        setSend(() => {
          return (data) => {
            try {
              console.log(data);
              const d = JSON.stringify(data);
              ws.send(d);
              return true;
            } catch (err) {
              return false;
            }
          };
        });

        // receive messages
        ws.onmessage = (event) => {
          const msg = formatMessage(event.data);
          setData({ message: msg, timestamp: getTimestamp() });
        };
      };

      // on close we should update connection state
      // and retry connection
      ws.onclose = () => {
        setReadyState(false);
        /*
        // retry logic
        if (retry > 0) {
          setTimeout(() => {
            setRetry((retry) => retry - 1);
          }, retryInterval);
        }

         */
      };
    };
    webSocket();

    // terminate connection on unmount
    return () => {
      ref && ref.close();
    };
  }, [socketUrl]);

  return { send, data, readyState };
};

// small utilities that we need
// handle json messages
const formatMessage = (data) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

// get epoch timestamp
const getTimestamp = () => {
  return new Date().getTime();
};

export default useWebSocket;
