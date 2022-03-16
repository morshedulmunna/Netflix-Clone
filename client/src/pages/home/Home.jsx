import React from "react";
import Featured from "../../Component/Featured/Featured";
import List from "../../Component/List/List";
import Navbar from "../../Component/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
