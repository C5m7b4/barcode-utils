import React, { useState } from "react";
import { checkDigit } from "../utils";

const CheckDigit = () => {
  const [check, setCheck] = useState("4470002410");
  const [checkResult, setCheckResult] = useState("");
  const [error, setError] = useState("");

  const getCheckDigit = () => {
    if (check.length < 10) {
      setError("The barcode must by 11 digits");
      return;
    }
    setError("");
    const result = checkDigit(check);
    setCheckResult(result);
  };

  return (
    <div className="check-digit">
      <h2 style={{ marginBottom: "30px" }}>Calculate Check Digits</h2>
      <input
        type="text"
        value={check}
        onChange={(e) => setCheck(e.target.value)}
      />
      <button
        style={{ margin: "10px" }}
        type="button"
        onClick={() => getCheckDigit()}
      >
        Get Check Digit
      </button>
      <div>The Check Digit is {checkResult}</div>
      <div>Example Barcode: 4470002410 = 04470002410</div>
      <div>
        Take all the even numbers 0 4 0 0 4 0 = 8 then multiply by 3 = 24
      </div>
      <div>Take all the odd number 4 7 0 2 1 = 14</div>
      <div>Total is 38</div>
      <div>Get the modulus of 10 = 8</div>
      <div>Subtract from 10 = 10 - 8 = 2</div>
      <div>The check digit will be 2</div>
      <div className="error">{error}</div>
    </div>
  );
};

export default CheckDigit;
