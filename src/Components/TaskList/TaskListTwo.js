import React, { useState } from "react";
import "../Style.css";

const TaskListTwo = (props) => {
  const [completedTask, setCompletedTask] = useState(false);
  const [isdisabled, setIsDisabled] = useState(false);
  const completedTaskHandler = () => {
    setCompletedTask(true);
    setIsDisabled(true);
  };

  return (
    <>
      <span>
        <label
          className="container"
          style={{ textDecoration: completedTask ? "line-through" : "none" }}
        >
          <input type="checkbox" onClick={completedTaskHandler} disabled={isdisabled} />
          {props.task}
          <span className="checkmark"></span>
        </label>
      </span>
    </>
  );
};

export default TaskListTwo;
