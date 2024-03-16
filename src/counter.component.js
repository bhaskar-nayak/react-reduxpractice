import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Slices/counter.slice";
export default function CounterComponent(){
    //here store.js reducer complete structure comes here
    const counter = useSelector((state) =>state.counter);
    const dispatch= useDispatch();
    // console.log(counter);
    return(
        <>
        <div className="container"> 
        <div className="row">
            <div className="col-sm">
                <h2>counter:{counter.value}</h2>
                <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>Increment</button>
                <button className="btn btn-warning me-2" onClick={() =>dispatch(decrement())}>Decrement</button>
                <button className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
        </div>
        </>
    )
}