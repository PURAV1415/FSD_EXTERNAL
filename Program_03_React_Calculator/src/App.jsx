import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const a = Number(num1);
    const b = Number(num2);

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <button onClick={() => calculate("+")}>+</button>{" "}
      <button onClick={() => calculate("-")}>-</button>{" "}
      <button onClick={() => calculate("*")}>*</button>{" "}
      <button onClick={() => calculate("/")}>/</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;