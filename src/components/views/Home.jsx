import React from "react";
import Header from "../molecules/Header";
import Main from "../molecules/Main";

const Home = () => {
  return (
    <>
      <div className="bg-custom-gradient">
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
