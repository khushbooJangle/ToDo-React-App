import React from "react";

const TaskInput = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        name="task"
        onChange={props.inputHandler}
        value={props.inputTask}
      />
      {/* <input type="date" name="date" onChange={props.inputHandler} /> */}
      <button onClick={props.addTaskHandler}>Add task</button>
    </>
  );
};

export default TaskInput;
