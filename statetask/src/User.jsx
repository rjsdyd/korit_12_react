import { useState } from "react";

export default function User() {
  const [ username, setUsername ] = useState({username: ''});
  const [ password, setPassword ] = useState({password: ''});
  const [ email, setEmail ] = useState({email: ''});
  const onSubmit = e => {
    alert(`Hello ${username}!`);
    e.prevetDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <label>username</label><br />
      <input type="text" onChange={e=> setUsername(e.target.value)} value={username} /> <br />
      <label>password</label><br />
      <input type="password" onChange={e=> setPassword(e.target.value)} value={password}/> <br />
      <label>e-mail</label><br />
      <input type="email" onChange={e=> setEmail(e.target.value)} value={email}/> <br /><br />
      <input type="submit" />
    </form>
  )
}