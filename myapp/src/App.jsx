import './App.css';
import Count5 from './Counter5';
import {useRef} from 'react';

export default function App() {
  const inputRef = useRef(null);
  return(
    <>
      <Count5 />
      <br /><br />
      <input type='text' ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  )
}