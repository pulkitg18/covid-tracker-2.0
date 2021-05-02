import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Trends from "../Trends/Trends";

const Main = () => {
  return (
    <div
      style={{
        color: "#000",
        backgroundColor: "#fff",
        display: "flex",
      }}
    >
      {/* <Sidebar /> */}
      <Trends />
    </div>
  );
};

export default Main;
