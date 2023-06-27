// import { AnyAction, Reducer, Slice } from "@reduxjs/toolkit";
// import { WritableDraft } from 'immer/dist/internal';
// import { Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

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

  return (
    <section className="counter__section">
      <p>Counter state: {count ? count : 0}</p>
      <div className="counter__button">
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </section>
  );
};

export default Counter;
