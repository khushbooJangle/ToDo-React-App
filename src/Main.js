import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskOne from "./Components/Task/TaskOne";
import TaskTwo from "./Components/Task/TaskTwo";
import "./Components/Style.css";

const Main = () => {
  return (
    <> 
    <div className="main">
      <Header />

      <div className="main_container">
        <div className="task_one_container">
          <h2>Delete Items on List</h2>
          <TaskOne />
        </div>
        <br />
        <div className="task_two_container">
          <h2>Strike-Off Items on List</h2>
          <TaskTwo />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Main;
