import Content from "../ui/content";
import MainTitle from "../ui/main-title";

function DriversPage({ drivers }) {
  return (
    <div>
      <MainTitle>Drivers</MainTitle>
      <ul>
        {drivers.map((driver, index) => {
          return (
            <li key={index}>
              <Content>{driver}</Content>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DriversPage;
