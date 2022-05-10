import { useState } from "react";

export default function () {
  // let cnt = 0;
  // const cntArr = useState(0);
  // const cnt = cntArr[0];
  // const setCnt = cntArr[1];

  //Destructure
  const [cnt, setCnt] = useState(0);

  console.log(cnt);
  return (
    <div>
      <button onClick={() => setCnt(cnt + 1)}>➕</button>
      {cnt}
      <button onClick={() => setCnt(cnt - 1)}>➖</button>
    </div>
  );
}
