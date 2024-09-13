import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";
import MainContainer from "./ui/main-container";
import PageContainer from "./ui/page-container";
import Menu from "./components/menu";
import DriversList from "./components/drivers-list";
import DriversPage from "./components/drivers-page";
import VehiclesPage from "./components/vehicles-page";
import About from "./components/about-page";

function App() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("/data/drivers.json")
      .then((res) => {
        // setUsers(res.data.data);
        console.log(res.data.data);
        const drivs = res.data.data.map(
          (driv) => `${driv.forename} ${driv.surname}`
        );
        const vehics = res.data.data.map(
          (vehics) => `${vehics.vehicleRegistration}`
        );

        setDrivers(drivs);
        setVehicles(vehics);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <BrowserRouter>
        <MainContainer>
          <Menu />
          <PageContainer>
            <Routes>
              <Route path="/" element={<DriversList />} />
              <Route
                path="drivers"
                element={<DriversPage drivers={drivers} />}
              />
              <Route
                path="vehicles"
                element={<VehiclesPage vehicles={vehicles} />}
              />
              <Route path="about" element={<About />} />
            </Routes>
          </PageContainer>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
