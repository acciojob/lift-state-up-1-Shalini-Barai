
import React from "react";
import './../styles/App.css';

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
      {show && <div><h1>Modal Content</h1><h3>This is modal content</h3></div>}
      </div>
    </div>
  )
   
}

export default App
