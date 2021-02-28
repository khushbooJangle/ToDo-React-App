import React, { useState } from "react";

const TaskList = (props) => {
  const [completedTask, setCompletedTask] = useState(false);
  const completedTaskHandler = () => {
    setCompletedTask(true);
  };

  return (
    <>
    <br/>
    <br />
    <br />
    <span>
      <button onClick={completedTaskHandler}>Completed Task</button>
      <li style={{ textDecoration: completedTask ? "line-through" : "none" }}>
        {props.task}
      </li>
      </span>
      <button
        onClick={() => {
          props.removeTaskClick(props.id);
        }}
      >
        Remove task
      </button>
      
    </>
  );
};

export default TaskList;
