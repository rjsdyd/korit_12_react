import Drink from './Drink.jsx';
import Hello from './Hello.jsx';
import MyComponent from './MyComponent.jsx';
import MyComponent2 from './MyComponent2.jsx';
import MyComponent3 from './MyCommponent3.jsx';

export default function App() {
  
  return(
    <>
      <MyComponent3 isLoggedin={false} />
      <MyComponent2 isLoggedin={true} />
      <MyComponent></MyComponent>
      <Drink drink='coffee'/>
      <Hello firstName='Jack' lastName='Killer'/>
      <Hello firstName='Hong' lastName='Hero'/>
      <Hello firstName='Sejong' lastName='King'/>
    </>
  );
}