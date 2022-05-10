import { useState } from "react";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default function () {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, title: "Anjam kar 1", done: true },
    { id: 2, title: "Anjam kar 2", done: true },
    { id: 3, title: "Anjam kar 3", done: false },
  ]);

  //statment
  //  const x = 21;
  //expression
  // (x) => x + 2
  function toggleDown(task: Task) {
    task.done = !task.done;

    //show copy
    //spread ...
    setTaskList([...taskList]);
  }

  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>
          <input type="checkbox" disabled checked={task.done} />
          <a onClick={() => toggleDown(task)}>{task.title}</a>
        </li>
      ))}
    </ul>
  );
}
