import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/global.css";
import reportWebVitals from "./reportWebVitals";
import { Background } from "./ui/background/background";
import { MainContainer } from "./ui/main-container/main-container";
import { WorkflowSection1 } from "./ui/workflow-section1/workflow-section1";
import { WorkflowSection2 } from "./ui/workflow-section2/workflow-section2";
import { WorkflowSection3 } from "./ui/workflow-section3/workflow-section3";
import { WorkflowSection4 } from "./ui/workflow-section4/workflow-section4";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Background>
      <MainContainer>
        <WorkflowSection1 />
        <WorkflowSection2 />
        <WorkflowSection3 />
        <WorkflowSection4 />
      </MainContainer>
    </Background>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
