import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const updateIndex = (newIndex) => {
    if (!(newIndex < 0 || newIndex >= people.length)) {
      setIndex(newIndex);
    }
  };

  const randomPerson = () => {
    const random = parseInt(Math.random() * people.length);
    setRandomPerson(random);
  };

  const setRandomPerson = (random) => {
    if (random == index) {
      randomPerson();
    } else {
      setIndex(random);
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={() => updateIndex(index - 1)} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => updateIndex(index + 1)} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => randomPerson()} className="random-btn">
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
