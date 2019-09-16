import React, { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import PromiseQueue from "easy-promise-queue";

import "./App.css";

let pq = new PromiseQueue({ concurrency: 1 });

const logfile = [
  { message: "Hello", delay: 1000 },
  { message: "Yo", delay: 2000 },
  { message: "Hm", delay: 5000 }
];

const App: FC = () => {
  const [sendMessage, lastMessage, status] = useWebSocket(
    "ws://localhost:9000"
  );

  const [log, addLog] = useState([]);

  useEffect(() => {
    if (status === 1) {
      logfile.forEach(({ message, delay }) =>
        pq.add(
          () =>
            new Promise(resolve => {
              setTimeout(() => {
                sendMessage(message);
                addLog(log => [...log, message] as []);
                resolve();
              }, delay);
            })
        )
      );
    }
  }, [status, sendMessage]);

  // Receive messages from the backend 
  
  // useEffect(() => {
  //   if (lastMessage && lastMessage.data) {
  //     addLog(log => [...log, lastMessage.data] as []);
  //   }
  // }, [lastMessage]);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {JSON.stringify(log)}
    </div>
  );
};

export default App;
