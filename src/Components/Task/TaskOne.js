import React, { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskListOne from "../TaskList/TaskListOne";

const TaskOne = () => {
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

  const removeTaskHandler = (id) => {
    setTaskList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
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
            <TaskListOne
              task={item}
              removeTaskClick={removeTaskHandler}
              key={index}
              id={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TaskOne;
