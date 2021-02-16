import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!expanded);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={expand}>
          {/* **********Conditional Rendering *********** */}
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />};
        </button>
      </header>
      {/* **********Conditional Rendering *********** */}
      {expanded && <p>{info}</p>}
    </article>
  );
};

export default Question;
