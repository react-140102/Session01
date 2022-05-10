import { useState } from "react";
import Counter from "./components/Counter";
import Message from "./components/Message"; // default export/import
import TaskList from "./components/TaskList";
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
  const [showTasks, setShowTasks] = useState(true);

  return (
    <>
      <h1>{title}</h1>
      {/* {messageFunction("hello word!")} */}
      <Message msg="hello word!"></Message>
      <Message msg="goodby donya" color="blue"></Message>
      <Counter></Counter>

      <button onClick={() => setShowTasks(!showTasks)}>Toggle Tasks</button>
      {/* {showTasks ? <TaskList></TaskList> : null} */}
      {showTasks && <TaskList></TaskList>}
    </>
  );
}

export default App;
