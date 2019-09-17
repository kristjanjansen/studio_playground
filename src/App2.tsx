import React, { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import PromiseQueue from "easy-promise-queue";

import InitStepOne from "./pages/InitStepOne";
import InitStepTwo from "./pages/InitStepTwo";
import InitStepThree from "./pages/InitStepThree";

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

  let [step, setStep] = useState(0);

  const steps = [
    <InitStepOne onNext={() => setStep(step + 1)} />,
    <InitStepTwo onPrev={() => setStep(step - 1)} onNext={() => setStep(step + 1)} />,
    <InitStepThree onPrev={() => setStep(step - 1)} />,
  ]

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--gray-400)"
      }}
    >
      <div style={{ width: "500px" }}>
        { steps[step] }
      </div>
    </div>
  );
};

export default App;
