import React from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Table from "../components/Table";
import useGetPlanets from "../hooks/useGetPlanets";

const Home = () => {
  const location = useLocation();
  useGetPlanets(location);
  return (
    <>
      <Header />
      <Filter />
      <Table />
    </>
  );
};

export default Home;
