import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskOne from "./Components/Task/TaskOne";
import TaskTwo from "./Components/Task/TaskTwo";


const Main = () => {
  return (
    <>
    <Header />
      <div>
        <TaskOne />
      </div>
      <br />
      <div>
        <TaskTwo />
      </div>
      <Footer />
    </>
  );
};

export default Main;
