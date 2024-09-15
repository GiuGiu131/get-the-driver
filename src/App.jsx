import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchUsers } from "./services/apiService";
import Header from "./components/header";
import MainContainer from "./ui/main-container";
import PageContainer from "./ui/page-container";
import MenuDesktop from "./ui/menu-desktop";
import DriversList from "./components/drivers-list";
import DriversPage from "./components/drivers-page";
import VehiclesPage from "./components/vehicles-page";
import About from "./components/about-page";
import { MenuProvider } from "./context/MenuContext";
import MenuMobile from "./ui/menu-mobile";

function App() {
  const [users, setUsers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res.data);

        const drivs = res.data.map(
          (driv) => `${driv.forename} ${driv.surname}`
        );
        const vehics = res.data.map(
          (vehics) => `${vehics.vehicleRegistration}`
        );

        setDrivers(drivs);
        setVehicles(vehics);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);
  return (
    <MenuProvider>
      <BrowserRouter>
        <Header>
          <MenuMobile />
        </Header>

        <MainContainer>
          <MenuDesktop />
          <PageContainer>
            <Routes>
              <Route
                path="/"
                element={
                  <DriversList users={users} loading={loading} error={error} />
                }
              />
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
    </MenuProvider>
  );
}

export default App;
