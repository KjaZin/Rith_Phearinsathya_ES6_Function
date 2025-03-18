import React,{useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function onCompute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    if (isNaN(numA) || isNaN(numB)) {
      setResult("A and B shall be numbers!");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={a} onChange={(e) => setA(e.target.value)} />


      <label>B =</label>
      <input type="text" value={b} onChange={(e) => setB(e.target.value)} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input type="text" value={result} disabled className={isError ? "error" : ""} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
