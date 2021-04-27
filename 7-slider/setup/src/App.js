import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    } else if (index >= people.length) {
      setIndex(0);
    }
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>

      {/* main view area */}
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (index === personIndex) {
            position = "activeSlide";
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={person.id} className={position}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h4>{person.name}</h4>
              <p>{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
