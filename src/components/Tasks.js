import React from "react";
import { Checkbox } from "../components/Checkbox";
import { useTasks } from "../hooks";

export const Tasks = () => {
  const { tasks } = useTasks("Lv3kw9JTee8WkWZiw7f9");

  console.log(tasks);

  let projectName = "";
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
