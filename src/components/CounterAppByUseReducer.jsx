import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (sakshi, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: sakshi.count + 1 };
    case "DECREMENT":
      return { count: sakshi.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return sakshi;
  }
};

const CounterAppByUseReducer = () => {
  const [sakshi, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-black pt-5 pb-10 mt-4">
      <h2 className="text-center text-white text-5xl font-bold">COUNTER APP</h2>
      <div className="h-[200px] w-[500px] mx-auto bg-[#5f9ea0] text-center mt-4 pt-16">
        <p className="mb-3">Count: {sakshi.count}</p>
        <button
          className="border px-1 me-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="border me-2 px-1"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="border px-1"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterAppByUseReducer;
