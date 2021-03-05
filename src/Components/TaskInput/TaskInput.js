import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import '../Style.css';

const TaskInput = (props) => {
  
  const handleKeypress =(e) =>{
    if (e.code === "Enter") {
      props.addTaskHandler();
    }
  }
  return (
    <>
    <div className="input_container" >
      <input
        className="input_task"
        type="text"
        placeholder="Enter your task"
        name="task"
        onChange={props.inputHandler}
        value={props.inputTask}
        autoComplete="off"
        onKeyPress = {handleKeypress}
      />
      <button onClick={props.addTaskHandler} className="add_button" > <AddBoxIcon fontSize="large" /></button>
      </div>
    </>
  );
};

export default TaskInput;
