//PascalCase

interface MessageProps {
  msg: string;
  color?: "red" | "green" | "blue"; // type union
}

//Destructure
export default function Message({ msg, color = "red" }: MessageProps) {
  // const color = props.color;
  // const msg = props.msg;

  //Destructure
  // const { color, msg } = props;

  const style = {
    color: color,
  };
  return <h3 style={style}>{msg}</h3>;
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
