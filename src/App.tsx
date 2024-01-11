import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-between align-middle items-center border border-gray-400 rounded-xl p-6 bg-gray-200 ">
        <button
          onClick={() => dispatch(increment(5))}
          className="p-3 mr-6 rounded-xl text-white text-xl font-semibold bg-yellow-700"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment(1))}
          className="p-3 rounded-xl text-white text-xl font-semibold bg-yellow-700"
        >
          Increment
        </button>
        <h1 className="text-xl font-semibold  rounded-md p-3 text-white bg-indigo-800 mx-6">
          {count}
        </h1>
        <button
          onClick={() => dispatch(decrement(1))}
          className="p-3 rounded-xl text-white text-xl font-semibold bg-rose-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
