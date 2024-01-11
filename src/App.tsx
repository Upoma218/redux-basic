import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count, numberOfBoxes } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border border-gray-400 rounded-xl p-6 bg-gray-200">
        <div className="flex justify-between items-center align-middle">
          <button
            onClick={() => dispatch(increment(1))}
            className="p-3 rounded-xl text-white text-xl font-semibold bg-yellow-700"
          >
            Increment
          </button>
          <h1 className="text-xl font-semibold rounded-md p-3 text-white bg-pink-700 mx-6">
            {count}
          </h1>
          <button
            onClick={() => dispatch(decrement(1))}
            className="p-3 rounded-xl text-white text-xl font-semibold bg-rose-700"
          >
            Decrement
          </button>
        </div>

        <div className="flex justify-between items-center align-middle mt-4 border border-gray-400 p-4 rounded-xl  bg-rose-500">
          {Array.from({ length: numberOfBoxes }, (_, index) => (
            <div key={index} className="h-5 w-1 bg-white"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
