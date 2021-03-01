import React from "react";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const TaskListOne = (props) => {

  return (
    <>
      <br />
      
      <span>
        <li style={{textDecoration:"none"}}>
        <button
        onClick={() => {
          props.removeTaskClick(props.id);
        }}
      >
        <RemoveCircleIcon />
      </button>
          {props.task}
        </li>
      </span>
      
    </>
  );
};

export default TaskListOne;
