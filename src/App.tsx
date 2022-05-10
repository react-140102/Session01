import Counter from "./components/Counter";
import Message from "./components/Message"; // default export/import
// import {messageFunction} from './components/Message' // import named

//javascript with xml
//1- class -> className
//2- tag colosed
//3- one root element
//  fragment
//  React.fragment  -> <></>
//4-style -> object

function App() {
  const title = "Session 01";

  return (
    <>
      <h1>{title}</h1>
      {/* {messageFunction("hello word!")} */}
      <Message msg="hello word!"></Message>
      <Message msg="goodby donya" color="blue"></Message>
      <Counter></Counter>
    </>
  );
}

export default App;
