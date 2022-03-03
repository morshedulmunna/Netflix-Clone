import React from "react";
import Featured from "../Component/Featured/Featured";
import Navbar from "../Component/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
