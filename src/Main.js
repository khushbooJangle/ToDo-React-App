import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskOne from "./Components/Task/TaskOne";
import TaskTwo from "./Components/Task/TaskTwo";
import "./Components/Style.css";

const Main = () => {
  return (
    <>
      <Header />

      <div className="main_container">
        <div className="task_one_container">
          <h3>Type-1</h3>
          <TaskOne />
        </div>
        <br />
        <div className="task_two_container">
          <h3>Type-2</h3>
          <TaskTwo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
