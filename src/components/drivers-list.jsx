import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

import "../styles/drivers-list.css";
import WeekCalendar from "./weekCalendar";
import MainTitle from "../ui/main-title";
import Content from "../ui/content";
import vehicleStatIcon from "../assets/icons/vehicles-stats.svg";
import timeIcon from "../assets/icons/time-icon.svg";

import Search from "./search";

function DriversList({ loading, error }) {
  const [users, setUsers] = useState([]);
  const start = new Date("2021-02-01").toISOString().split("T")[0];
  const end = new Date("2021-02-07").toISOString().split("T")[0];
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchItem, setSearchItem] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

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

  useEffect(() => {
    axios
      .get("/data/drivers.json")
      .then((res) => {
        setUsers(res.data.data);

        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function validPeriod(start, end, bookings) {
    var valid = true;

    for (var i = 0; i < bookings.length; i++) {
      var date = bookings[i];
      if (start <= date && date <= end) {
        valid = false;
        break;
      }
    }

    return valid;
  }

  let resultTraces = users.map((user, index) => {
    let activity = user.traces.map((trs, ind) => trs.activity);
    let activityDate = user.traces.map((trs, ind) => trs.date);
    let actv = activityDate.map(
      (acDate) => new Date(acDate).toISOString().split("T")[0]
    );

    if (validPeriod(start, end, actv)) {
      // console.log("no activity found");
    } else {
      let durationMap = activity.map((dr, ind) => {
        let newArr = [];
        for (const [key, value] of Object.entries(dr)) {
          newArr.push(value.duration);
        }

        let ddd = newArr.reduce((partialSum, a) => partialSum + a, 0);

        return ddd;
      });

      let total = durationMap.reduce((partialSum, a) => partialSum + a, 0);
      if (total === 0 || total == undefined) return 0;
      return total;
    }
  });

  const activityDATE = users.map((user, index) => {
    let actv = user.traces.map((trs, ind) =>
      new Date(trs.date).toLocaleString("en-us", { weekday: "short" })
    );
    // setActivityDate(actv);
    return actv;
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
                  {/* <p> */}
                  <span className="drivers-list-name">
                    {user.forename} {user.surname}
                  </span>
                  <span className="drivers-list-reg">
                    <img
                      className="drivers-list-reg-icon"
                      src={vehicleStatIcon}
                    />
                    {user.vehicleRegistration}
                  </span>
                  <span className="drivers-list-time">
                    <img className="drivers-list-time-icon" src={timeIcon} />
                    {resultTraces[index]}
                    {console.log(resultTraces[index])}
                  </span>
                  {/* </p> */}

                  <div className="driver-list-calendar">
                    <WeekCalendar
                      users={users}
                      activeDay={activityDATE[index]}
                      indexX={index}
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
