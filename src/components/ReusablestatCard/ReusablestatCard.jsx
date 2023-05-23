import React, { useState, useEffect } from "react";
import "./ReusablestatCard.scss";
function StatisticCard({ number, photo, title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= number) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [number]);

  return (
    <div className="card bg-white p-4 shadow tw-shadow">
      <img className="w-12 mx-auto" src={photo} alt="Photo" />
      <h3 className="text-center mb-5 text-xs opacity-70">{title}</h3>
      <p className="text-center opacity-70">Count: {count}</p>
    </div>
  );
}

export default StatisticCard;
