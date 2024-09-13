import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainContainer from "./ui/main-container";
import PageContainer from "./ui/page-container";
import Menu from "./components/menu";
import DriversList from "./components/drivers-list";
import DriversPage from "./components/drivers-page";
import VehiclesPage from "./components/vehicles-page";
import About from "./components/about-page";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <MainContainer>
          <Menu />
          <PageContainer>
            <Routes>
              <Route path="/" element={<DriversList />} />
              <Route path="drivers" element={<DriversPage />} />
              <Route path="vehicles" element={<VehiclesPage />} />
              <Route path="about" element={<About />} />
            </Routes>
          </PageContainer>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
