import { useEffect, useState } from "react";
import WeekCalendar from "./weekCalendar";
import MainTitle from "../ui/main-title";
import Content from "../ui/content";
import Search from "./search";
import vehicleStatIcon from "../assets/icons/vehicles-stats.svg";
import timeIcon from "../assets/icons/time-icon.svg";
import "../styles/drivers-list.css";

function DriversList({ users, loading, error }) {
  const start = new Date("2021-02-01").toISOString().split("T")[0];
  const end = new Date("2021-02-07").toISOString().split("T")[0];
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = users.filter(
      (user) =>
        user.forename.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.vehicleRegistration
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  useEffect(() => {
    if (searchItem.length == 0) {
      setFilteredUsers(users);
    }
  }, [searchItem.length, users]);

  function validPeriod(start, end, activeDate) {
    var valid = true;

    for (var i = 0; i < activeDate.length; i++) {
      var date = activeDate[i];
      if (start <= date && date <= end) {
        valid = false;
        break;
      }
    }

    return valid;
  }

  let resultTraces = users.map((user) => {
    let activity = user.traces.map((trs) => trs.activity);
    let activityDate = user.traces.map((trs) => trs.date);

    let actv = activityDate.map(
      (acDate) => new Date(acDate).toISOString().split("T")[0]
    );

    if (!validPeriod(start, end, actv)) {
      let durationMap = activity.map((dr, ind) => {
        let newArr = [];

        for (const [key, value] of Object.entries(dr)) {
          newArr.push(value.duration);
        }

        let newSum = newArr.reduce((partialSum, a) => partialSum + a, 0);

        return newSum;
      });

      let total = durationMap.reduce((partialSum, a) => partialSum + a, 0);

      return total;
    }
  });

  const activityDAY = users.map((user) => {
    let actvDate = user.traces.map((trs) =>
      new Date(trs.date).toLocaleString("en-us", { weekday: "short" })
    );
    return actvDate;
  });

  return (
    <div className="drivers-list">
      <div className="driver-list-header">
        <MainTitle>Drivers Stats</MainTitle>
        <Search searchItem={searchItem} onChange={handleInputChange} />
      </div>
      <ul>
        {loading && <p className="loading">Loading...</p>}
        {filteredUsers.length === 0 && (
          <p className="no-found">No user or registration number found</p>
        )}
        {!loading &&
          !error &&
          filteredUsers.map((user, index) => {
            return (
              <Content key={user.driverID}>
                <li className="drivers-list-item">
                  <div className="drivers-list-content">
                    <p className="drivers-list-name">
                      {user.forename} {user.surname}
                    </p>
                    <p className="drivers-list-reg">
                      <img
                        className="drivers-list-reg-icon"
                        src={vehicleStatIcon}
                      />
                      {user.vehicleRegistration}
                    </p>
                    <span className="drivers-list-time">
                      <img className="drivers-list-time-icon" src={timeIcon} />
                      <span>
                        {resultTraces[index] == undefined
                          ? 0
                          : resultTraces[index]}
                      </span>
                    </span>
                  </div>
                  <div className="driver-list-calendar">
                    <WeekCalendar
                      users={users}
                      activeDay={activityDAY[index]}
                    />
                  </div>
                </li>
              </Content>
            );
          })}
      </ul>
    </div>
  );
}

export default DriversList;
