import React, { useState } from "react";
import "../Style.css";
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
      <div>
        <label
          className="container"
          style={{ textDecoration: completedTask ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            onClick={completedTaskHandler}
            disabled={isdisabled}
          />
          {props.task}
          <span className="checkmark"></span>
        </label>
      </div>
    </>
  );
};

export default TaskListTwo;
