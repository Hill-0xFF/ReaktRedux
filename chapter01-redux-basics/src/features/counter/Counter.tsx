// import { AnyAction, Reducer, Slice } from "@reduxjs/toolkit";
// import { WritableDraft } from 'immer/dist/internal';
// import { Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from './counterSlice';

import '../../css/style.css';

// type T_CounterSlice = {
// count: number;
// increment: (state: WritableDraft<{ count: number }>) => void;
// decrement: (state: WritableDraft<{ count: number }>) => void;
// counter: Pick<Slice, Name>;
//   state: Slice<{ count: number; }, { increment: (state: WritableDraft<{ count: number; }>) => void; decrement: (state: WritableDraft<{ count: number; }>) => void; }, "counter">;reducer: Reducer<{
//     count: number;
// }, AnyAction>;
//  Slice<{ count: number; }, { increment: (state: WritableDraft<{ count: number; }>) => void; decrement: (state: WritableDraft<{ count: number; }>) => void; }, "counter">.reducer: Reducer<{
// count: number;
// }, AnyAction>
//   // CreateSliceOptions<{ count: number; }, { increment: (state: WritableDraft<{ count: number; }>) => void; decrement: (state: WritableDraft<{ count: number; }>) => void; },
// };

const Counter = () => {
  // const count = useSelector((state: WritableDraft<StateFromReducersMapObject<Slice | unknown >>) => state.counter);
  // const count = useSelector((state: Pick<Slice, Name>) => state.counter.count);
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | string>(0);

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(0);
    const value = evt.currentTarget.value;
    // console.log(typeof value);
    const newvalue = Number(value) || 0;
    setAmount(newvalue)
    return;
  };

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  }

  return (
    <section className="counter__section">
      <p>Counter state: {count ? count : 0}</p>
      <div className="counter__input">
        <label htmlFor="amount__input">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount__input"
          onChange={(evt) => handleInput(evt)}
          value={amount}
        />
      </div>
      <div className="counter__button">
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment By Amount
        </button>
        <button
          className="button"
          onClick={() => dispatch(decrementByAmount(amount))}
        >
          Decrement By Amount
        </button>
        <button className="button" onClick={resetAll}>Reset All</button>
      </div>
    </section>
  );
};

export default Counter;
