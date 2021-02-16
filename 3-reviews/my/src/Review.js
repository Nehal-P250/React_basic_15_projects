import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const nextReview = () => {
    setIndex((index + 1) % data.length);
  };
  const prevReview = () => {
    if (index == 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((index - 1) % data.length);
    }
  };

  const randomReview = () => {
    setIndex(Math.floor(Math.random() * Math.floor(data.length)));
  };

  return (
    <article className="review">
      <div class="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
