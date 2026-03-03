import Drink from './Drink.jsx';
import Hello from './Hello.jsx';
import MyComponent from './MyComponent.jsx';


export default function App() {
  
  return(
    <>
      <MyComponent></MyComponent>
      <Drink drink='coffee'/>
      <Hello firstName='Jack' lastName='Killer'/>
      <Hello firstName='Hong' lastName='Hero'/>
      <Hello firstName='Sejong' lastName='King'/>
    </>
  );
}