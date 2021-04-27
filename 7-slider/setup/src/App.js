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

  useEffect(() => {
    // https://youtu.be/a_7Z7C_JCyo?t=10043
    // important on why we need to call clearInterval.
    // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks#:~:text=Using%20setInterval%20inside%20React%20components,some%20code%20at%20specific%20intervals.&text=This%20will%20schedule%20once%20the,Hook%2C%20passing%20in%20the%20interval.

    // here if we dont pass the clearInterval then , every time the
    // index is changing it will call this hook, and will continue
    // to show animations if we click the next/ prev buttom multiple
    // times which we dont want ,
    // instead we clear out the previous hook and detach it so if
    // rapid next / prev button is placed it will get cleared for
    // the previous index value and will only be active for the next
    // index value.
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
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
