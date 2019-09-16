import React, { FC } from "react";
import CardContainer from "./CardContainer";
import InitHeader from "./InitHeader";
import InitFooter from "./InitFooter";
import CardButton from "./CardButton";

const Init: FC = () => (
  <div
    style={{
      width: "400px",
      height: "400px"
    }}
  >
    <CardContainer>
      <InitHeader>Hello</InitHeader>
      <InitFooter>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gridGap: "8px",
            height: "100%"
          }}
        >
          <CardButton icon="i" subtitle="b">
            a
          </CardButton>
          <CardContainer>a</CardContainer>
          <CardContainer>a</CardContainer>
          <CardContainer>a</CardContainer>
        </div>
      </InitFooter>
    </CardContainer>
  </div>
);

export default Init;
