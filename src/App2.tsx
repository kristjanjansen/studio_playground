import React, { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import PromiseQueue from "easy-promise-queue";

import SelectDb from "./pages/SelectDb";
import SetupDb from "./pages/SetupDb";
import IntrospectDb from "./pages/IntrospectDb";
import SelectKit from "./pages/SelectKit";
import SelectTools from "./pages/SelectTools";
import GenerateTools from "./pages/GenerateTools";
import NextSteps from "./pages/NextSteps";

import "./App.css";
import Log from "./components/Log";
import SelectLanguage from "./pages/SelectLanguage";

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
  const [logBatch, setLogBatch] = useState([]);

  useEffect(() => {
    logBatch.forEach(({ message, delay }) =>
      pq.add(
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              addLog(log => [...log, message] as []);
              resolve();
            }, delay);
          })
      )
    );
    //}
  }, [logBatch]);

  let [step, setStep] = useState(0);

  const steps = [
    // 0
    <SelectDb onNext={() => setStep(step + 1)} onLog={(l: any) => setLogBatch(l)} />,
    // 1
    <SetupDb
      onPrev={() => setStep(step - 1)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 2
    <IntrospectDb
      onPrev={() => setStep(step - 1)}
      onDone={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 3
    <SelectLanguage
      onPrev={() => setStep(step - 2)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 4
    <SelectTools
      onPrev={() => setStep(step - 1)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 5
    <SelectKit
      onPrev={() => setStep(step - 1)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 6
    <GenerateTools
      onPrev={() => setStep(step - 1)}
      onDone={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
    // 7
    <NextSteps
      onPrev={() => setStep(step - 2)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />
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
        <div style={{ width: "500px" }}>{steps[step]}</div>
      </div>
      <Log items={log} />
    </>
  );
};

export default App;
