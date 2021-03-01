import React, { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskListTwo from "../TaskList/TaskListTwo";

const TaskTwo = () => {
  const [inputTask, setInputTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const date = new Date().toLocaleString();

  const inputHandler = (event) => {
    setInputTask(event.target.value);
  };

  const addTaskHandler = () => {
    setTaskList((prevItem) => {
      return [...prevItem, inputTask];
    });
    setInputTask("");
  };

  return (
    <>
      <TaskInput
        inputHandler={inputHandler}
        inputTask={inputTask}
        addTaskHandler={addTaskHandler}
      />
      <br />
      {/* {date} */}
      <br/>
      <ul>
        {taskList.map((item, index) => {
          return (
            <TaskListTwo 
              task={item}
              key={index}
              id={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TaskTwo;
