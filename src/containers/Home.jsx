import React from "react";
import Header from "@/components/Header";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import useGetPlanets from "@/hooks/useGetPlanets";

const Home = () => {
  const location = useLocation();
  const planets = useGetPlanets(location);
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
