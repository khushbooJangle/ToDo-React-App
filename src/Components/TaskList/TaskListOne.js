import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "../Style.css";

const TaskListOne = (props) => {
  return (
    <>
      <div>
        <li className="list">
          <button
            onClick={() => {
              props.removeTaskClick(props.id);
            }}
          >
            <RemoveCircleIcon  />
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
