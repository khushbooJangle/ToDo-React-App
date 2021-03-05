import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "../Style.css";

const TaskListOne = (props) => {
  return (
    <>
      <div>
        <li className="list">
          <button className="remove_button"
            onClick={() => {
              props.removeTaskClick(props.id);
            }}
          >
            <RemoveCircleIcon  style={{color:"rgb(244, 159, 244)"}} />
          </button>
          <span>
          {props.task}
          </span>
        </li>
      </div>
    </>
  );
};

export default TaskListOne;
