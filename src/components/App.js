
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [val, setVal] = useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {val} times</p>
        <button  onClick={()=>setVal(val+1)}>Click me</button>
    </div>
  )
}

export default App
