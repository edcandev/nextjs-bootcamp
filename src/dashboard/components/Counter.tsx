"use client";

import { useEffect, useState } from "react";

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="py-4 px-4 text-xl bg-blue-500 rounded-lg flex flex-col justify-between items-center">
      <span className="text-3xl text-bold mb-4">Counter value: { counter }</span>

      <div className="w-full flex justify-around">
        <button
          className="bg-blue-700 text-white p-3 rounded-xl" 
          onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button
          className="bg-blue-700 text-white p-3 rounded-xl" 
          onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};
