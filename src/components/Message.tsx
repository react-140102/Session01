//PascalCase

interface MessageProps {
  msg: string;
  color: string;
}

export default function Message(props: MessageProps) {
  console.log(props);
  const style = {
    color: props.color,
  };
  return <h3 style={style}>{props.msg}</h3>;
}

export function messageFunction(msg: string) {
  const style = {
    color: "red",
  };
  // return (<h3 style={{color: 'red'}} >{msg}</h3>)
  return <h3 style={style}>{msg}</h3>;
}

export const PI = 3.141596;
// export default Message;
