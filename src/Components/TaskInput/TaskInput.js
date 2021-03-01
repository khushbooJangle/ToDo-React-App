import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';

const TaskInput = (props) => {
  const handleKeypress =(e) =>{
    if (e.code === "Enter") {
      props.addTaskHandler();
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        name="task"
        onChange={props.inputHandler}
        value={props.inputTask}
        autoComplete="off"
        onKeyPress = {handleKeypress}
      />
      <br />
      {/* <input type="date" name="date" onChange={props.inputHandler} /> */}
      <button onClick={props.addTaskHandler}> <AddBoxIcon /></button>
    </>
  );
};

export default TaskInput;
