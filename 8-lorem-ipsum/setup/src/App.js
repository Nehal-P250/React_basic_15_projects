import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function min(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //here the count value returned is string , For this program it is not that important , but
    //it is some techinacality that will help in future.
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 0;
    }
    let mi = min(data.length, count);
    setText(data.slice(0, mi));
  };

  return (
    <section className="section-center">
      <h3>lorem ipsum project setup</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        {/* controled input  */}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
