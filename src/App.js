
import { useReducer, useState , useEffect, useRef } from 'react';
import axios from "axios";
import './App.css';

//useState
// const App = () =>{
//   const [count, setCount] = useState(0);


//   return (
//     <>
//     {count}
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </>
//   );

// }

//useReducer
// const reducer = (state,action) => {
//   switch(action.type){
//     case 'increment':
//       return {count: state.count + 1, showText: state.showText}
//     case 'decrement':
//       return {count: state.count - 1, showText: state.showText}
//     case 'toggle':
//       return {count: state.count, showText: !state.showText}
//     default:
//       return state;
//   }
// }


// const App = () =>{
//   const [count, dispatch] = useReducer(reducer, {
//     count:0, showText: true
//   })

//   return (
//     <>
//     {count.showText && <h1>{count.count}</h1>}
//     <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
//     <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
//     <button onClick={() => dispatch({type: 'toggle'})}>Toggle</button>
//     </>
//   );

// }

//useEffect

// function App(){

//   const [data, setData] = useState("")
//   const [count, setCount] = useState(0)

//  useEffect (() =>{
//   axios.get('https://jsonplaceholder.typicode.com/comments')
//   .then((response) => {
    
//     setData(response.data[0].email)
//     console.log("API was called")
//   })

// },[count])


//   return(
//     <>
//     <h1>UseEffect {data}</h1>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   )
 
// }

function App(){

  const inputRef = useRef(null);


  const onClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return(
   
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="Enter your name" ref={inputRef}/>
      <button onClick={onClick}>Submit</button>
    </div>
    
  )
}

export default App;
