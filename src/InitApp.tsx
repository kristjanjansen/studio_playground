import React, { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import PromiseQueue from "easy-promise-queue";

import Starterkit from "./pages/Starterkit";
import Existing from "./pages/Existing";
import Start from "./pages/Start";
import GenerateTools from "./pages/GenerateTools";
import NextSteps from "./pages/NextSteps";

import "./App.css";
import Log from "./components/Log";

let pq = new PromiseQueue({ concurrency: 1 });

const App: FC = () => {
  // eslint-disable-next-line
  const [sendMessage, lastMessage, status] = useWebSocket(
    "ws://localhost:9000"
  );

  const [log, addLog] = useState([]);
  const [logBatch, setLogBatch] = useState([]);

  useEffect(() => {
    logBatch.forEach(({ message, delay }) =>
      pq.add(
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              addLog(log => [...log, message] as []);
              if (status === 1) {
                sendMessage(message);
              }
              resolve();
            }, delay);
          })
      )
    );
  }, [logBatch,sendMessage,status]);

  let [step, setStep] = useState(0);

  const steps = [
    <Start
      onStep={(newStep: any) => setStep(newStep)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    <Existing
      onPrev={() => setStep(0)}
      onNext={() => setStep(3)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    <Starterkit
      onPrev={() => setStep(0)}
      onNext={() => setStep(3)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    <GenerateTools
      onPrev={() => setStep(0)}
      onDone={() => setStep(4)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    <NextSteps onPrev={() => setStep(0)} onLog={(l: any) => setLogBatch(l)} />
  ];

  return (
    <>
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
        <div style={{ width: "700px" }}>{steps[step]}</div>
      </div>
      <Log items={log} />
    </>
  );
};

export default App;
