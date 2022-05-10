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
  function toggleDone(task: Task) {
    task.done = !task.done;

    //show copy
    //spread ...
    setTaskList([...taskList]);
  }

  function removeTask(task: Task) {
    setTaskList(taskList.filter((t) => t.id !== task.id));
  }

  function newTask() {
    const rnd = Math.random();
    setTaskList([
      ...taskList,
      { id: Math.random(), title: "Anjam kar " + rnd, done: false },
    ]);
  }

  return (
    <>
      <button onClick={newTask}>New Task</button>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <input type="checkbox" disabled checked={task.done} />
            <a onClick={() => toggleDone(task)}>{task.title}</a>
            <button onClick={() => removeTask(task)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
