import React,{useState}  from "react";

function Component(){

const [count,setCount]=useState(0);
  const increment = ()=>{
    setCount(count+1);
  }
  const decrement = ()=>{
    setCount(count-1);
  }
  const reset = ()=>{
    setCount(0);
  }
return(<div className="counter-body" >
    <p className="counter-disp" >{count}</p>
    <button className="counter-button" onClick={increment}>Increment</button>
    <button className="counter-button" onClick={decrement}>Decrement</button>
    <button className="counter-button" onClick={reset}>Reset</button>

</div>);

}
export default Component