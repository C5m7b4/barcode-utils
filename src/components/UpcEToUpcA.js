import React, { useState } from "react";
import { convert } from "../utils";

const UpcEToUpcA = () => {
  const [barcode, setBarCode] = useState("345450");
  const [result, setResult] = useState("0");

  const convertBarCode = () => {
    const newBarCode = convert(barcode);
    setResult(newBarCode);
  };

  return (
    <div className="upce-to-upca">
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Convert UpcE to UpcA
      </h2>
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarCode(e.target.value)}
      ></input>
      <button style={{ marginTop: "10px" }} onClick={() => convertBarCode()}>
        Convert
      </button>
      <div style={{ marginTop: "10px" }}>{result}</div>
    </div>
  );
};

export default UpcEToUpcA;
