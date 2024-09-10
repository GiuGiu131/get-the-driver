import { useState } from "react";
import Header from "./components/header";
import MainContainer from "./components/main-container";
import Menu from "./components/menu";
import DriversList from "./components/drivers-list";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Menu />
        <DriversList />
      </MainContainer>
    </>
  );
}

export default App;
