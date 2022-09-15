import React from "react";
import CheckDigit from "./components/CheckDigit";
import UpcEToUpcA from "./components/UpcEToUpcA";

import "./App.css";

const App = () => {
  return (
    <div className="mc-wrapper">
      <div className="mc-contents">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <CheckDigit />
          </div>
          <div style={{ display: "flex" }}>
            <UpcEToUpcA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
