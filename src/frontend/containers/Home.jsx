import React from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";
import useQueryData from "../hooks/useQueryData";

const Home = () => {
  const location = useLocation();
  useQueryData(location);
  return (
    <>
      <Header />
      <Table />
    </>
  );
};

export default Home;
