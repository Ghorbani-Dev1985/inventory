import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Features/Counter/CounterSlice";



const Counter = () => {
 const counter = useSelector((state) => state.counter);
 const dispatch = useDispatch();
 const [inputValue , setInputValue] = useState(1);

    return ( 
        <div>
            <h1>شمارنده بوسیله Redux Toolkit</h1>
            <div className="flex justify-center items-center">
            <button onClick={() => dispatch(increment(Number(inputValue) | 0))} className="w-7"> + </button>
            <input type="number" min="0" className="w-10 mx-1 text-center px-1" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={() => dispatch(decrement(Number(inputValue) | 0))} className="w-7"> - </button>
            </div>
             تعداد انتخاب شده : <span className="text-green-500 bg-green-100 px-4 py-1 font-bold rounded-lg">{counter.value}</span>
           
        </div>
     );
}
 
export default Counter;