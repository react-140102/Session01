import React from "react";
import logo from "./logo.svg";
// import "./App.css";

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
      <Message msg="salam"></Message>
    </>
  );
}

//PascalCase
function Message(props: any) {
  const style = {
    color: "red",
  };
  // return (<h3 style={{color: 'red'}} >{msg}</h3>)
  return <h3 style={style}>{props.msg}</h3>;
}

function messageFunction(msg: string) {
  const style = {
    color: "red",
  };
  // return (<h3 style={{color: 'red'}} >{msg}</h3>)
  return <h3 style={style}>{msg}</h3>;
}

export default App;
