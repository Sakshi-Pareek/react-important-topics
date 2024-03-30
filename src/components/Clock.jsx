import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day} : ${hours} : ${minutes < 10 ? "0" : ""}${minutes} : ${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col pb-5 mt-5 bg-black pt-10">
        <div className="bg-[#5f9ea0] px-[50px] py-[30px]">
          <h1 className="text-black fw-bold pb-4 text-center text-4xl font-bold">
            Clock
          </h1>
          <p className="fw-medium text-black text-[25px] ">
            Clock :- {formatTime(time)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
