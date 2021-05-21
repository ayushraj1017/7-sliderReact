import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [reviews] = useState(data);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const slider = setTimeout(() => {
      setCount(checkNumber(count + 1));
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [count]);

  const checkNumber = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (number > reviews.length - 1) {
      return 0;
    }
    return number;
  };

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "backward") {
      setCount(checkNumber(count - 1));
    }
    if (value === "forward") {
      setCount(checkNumber(count + 1));
    }
  };

  const { id, image, name, quote, title } = reviews[count];
  return (
    <div>
      <h1 className="text-center">
        <span className="text-yellow-500">/ </span>Reviews
      </h1>

      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center  max-w-xs">
          <img src={image} width="100%" className="rounded-full " />
        </div>
        <div className="flex justify-between items-center text-center width">
          <button
            onClick={handleClick}
            value="backward"
            className="bg-yellow-500 text-yellow-100 p-2 my-1 hover:bg-yellow-300"
          >
            <FiChevronLeft />
          </button>
          <div>
            <h4 className="uppercase text-yellow-600">{name}</h4>
            <h4>{title}</h4>
          </div>
          <button
            onClick={handleClick}
            value="forward"
            className="bg-yellow-500 text-yellow-100 p-2 my-1 hover:bg-yellow-300"
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="info text-center flex flex-col justify-center items-center">
          <p>{quote}</p>
          <FaQuoteRight className="text-6xl text-yellow-500" />
        </div>
      </section>
    </div>
  );
}

export default App;
