import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmt } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.swanniesCounter.sum);
  const dispatch = useDispatch();
  const [incrementAmt, setIncrementAmt] = useState(0);
  const addValue = Number(incrementAmt) || 0;

  const resetAll = () => {
    setIncrementAmt(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        autoFocus
        value={incrementAmt}
        onChange={(e) => setIncrementAmt(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmt(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
