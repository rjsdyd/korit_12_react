import './App.css'
import AuthContext from './createContext';
import Mycomponent from './Mycomponent';

function App() {
  const username = 'KimZero';
  return (
    <AuthContext.Provider value={username}>
      <Mycomponent />
    </AuthContext.Provider>
  );
}
export default App