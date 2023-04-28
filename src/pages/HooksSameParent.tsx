import { useState } from "react";

type MyButtonProps={
    count:number
    onClick?:()=>void
}
function MyButton(props:MyButtonProps){
    return (
        <button onClick={props.onClick}>
          Clicked {props.count} times
        </button>
      );
}

export default function HooksSameParent(){
    const [count, setCount] = useState(0);        

    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    );

}