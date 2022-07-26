// import { useState } from 'react';
// import { useEffect, useState, useRef } from 'react';
import './App.css';
import { Form } from "./components/Forms"

function App() {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);


  // let x = 10;
  // const [age, setAge] = useState(0);
  // const ref = useRef(null)
  // console.log(ref.current);

  // useEffect(() => {
  //   countRef.current = setInterval(() => {
  //     setCount((p) => p + 1);
  //   }, 1000);
  //   // ref.current = 20;
  //   // console.log('eee');
  //   // x = 20;
  // },[]);


  // const [mousePosition,setMousePosition] = useState('')
  return (
    <div className="App">
      <Form/>

      {/* <button onClick={(e) => console.log(e)}>click me</button> */}

      {/* <div onMouseMove = {(e) => {
        console.log(e);
      }}
      style = {{
        width:150,
        height:150,backgroundColor:"coral",color:"white"
      }}
      >
        mouse:
      </div> */}


      {/* <div onMouseMove = {(e) => {
          // console.log(e);
          setMousePosition(`${e.clientX}-${e.clientY}`)
        }}
        style = {{
          width:150,
          height:150,backgroundColor:"coral",color:"white"
        }}
        >
          mouse: {mousePosition}
      </div> */} 

      {/* <button onClick={() => {
        // setAge(age + 1);
      }}>Add age</button>
      {/* {ref.current} */}
      {/* <div>{x}</div>  */}

      {/* Timer: {count}
      <button onClick={() => { 
        clearInterval(countRef.current);
        // console.log("c i ",countRef.current);
      //
      }}
      >
        Pause
      </button> */}
    </div>
  );
}

export default App;
