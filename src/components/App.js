
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";

const App = () => {
  
        {/* Do not remove the main div */}
        const [show,setShow]=useState(false);
   function handleClick(){
    setShow(true);
   }
   
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <div className='child'>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Show Modal</button>
      {show && <Parent/>}
      </div>
    </div>
  )
   
}

export default App
