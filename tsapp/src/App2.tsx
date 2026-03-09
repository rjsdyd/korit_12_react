import HelloComponent from "./HelloComponent"
import './App.css'
import { useState } from "react"

function App() {
  // const [age, setAge] = useState(0);
  
  // initalValue와 다른 매개변수를 입력해서 호출
  // setAge('ten');
  return (
    <>
      <HelloComponent name={'안중근'} /> 
    </>
  )
}

export default App