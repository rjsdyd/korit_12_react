import { useState } from "react"

export default function MyForm2() {
  const [text, setText] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  const handleSubmit = e => {
    alert(`당신은 ${text}라고 입력하셨네요 !`);
    e.preventDefualt();
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} placeholder="내용을 입력하세요." />
      <input type="submit" value="Press Me!"/>
    </form>
  )
}