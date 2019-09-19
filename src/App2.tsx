import React, { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import PromiseQueue from "easy-promise-queue";

// import SelectDb from "./pages/SelectDb";
// import IntrospectDb from "./pages/IntrospectDb";
// import SelectKit from "./pages/SelectKit";
// import SelectTools from "./pages/SelectTools";
// import GenerateTools from "./pages/GenerateTools";
// import NextSteps from "./pages/NextSteps";
//import SelectLanguage from "./pages/SelectLanguage";
import SetupDb from "./pages/SetupDb";

import "./App.css";
import Log from "./components/Log";

let pq = new PromiseQueue({ concurrency: 1 });

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
              if (status === 1) {
                sendMessage(message);
              }
              resolve();
            }, delay);
          })
      )
    );
    //}
  }, [logBatch]);

  let [step, setStep] = useState(0);

  const steps = [
    <SetupDb
      onPrev={() => setStep(step - 1)}
      onNext={() => setStep(step + 1)}
      onLog={(l: any) => setLogBatch(l)}
    />,
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
        <div style={{ width: "1100px" }}>{steps[step]}</div>
      </div>
      <Log items={log} />
    </>
  );
};

export default App;
