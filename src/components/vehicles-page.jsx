import MainTitle from "../ui/main-title";
import Content from "../ui/content";
import vehicleStatIcon from "../assets/icons/vehicles-stats.svg";
import "../styles/vehicles-page.css";

function VehiclesPage({ vehicles }) {
  return (
    <div>
      <MainTitle>Vehicles</MainTitle>
      <ul className="vehicles-page-list">
        {vehicles.map((vehicle, index) => {
          return (
            <li key={index}>
              <Content>
                <img src={vehicleStatIcon} />
                <span>{vehicle}</span>
              </Content>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VehiclesPage;
