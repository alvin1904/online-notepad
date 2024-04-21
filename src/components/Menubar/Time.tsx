"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function Time() {
  const getDateTime = () => {
    const date = new Date().toString().split(" ");
    return `${date[4]}`;
  };
  const [time, setTime] = useState(getDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p className="time bold">{time}</p>
    </>
  );
}

export default dynamic(() => Promise.resolve(Time), { ssr: false });
