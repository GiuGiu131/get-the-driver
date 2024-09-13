import { act, useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

import "../styles/drivers-list.css";

function DriversList() {
  const [users, setUsers] = useState([]);
  const [traces, setTraces] = useState();
  const [activityDate, setActivityDate] = useState();
  const [duration, setDuration] = useState([]);
  const [active, setActive] = useState([]);
  const [driverActiveDay, setDriverActiveDay] = useState();

  const start = new Date("2021-02-01").toISOString().split("T")[0];
  const end = new Date("2021-02-07").toISOString().split("T")[0];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    axios
      .get("/data/drivers.json")
      .then((res) => {
        setUsers(res.data.data);

        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // var bookings = [new Date("2018-05-26"), new Date("2018-05-28")];

  // if (validPeriod(start, end, bookings)) {
  //   console.log("no bookings found");
  // } else {
  //   console.log("found at least one booking");
  // }

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

  function getDriversActivity() {
    // let traces = users.map((user) => user.traces);
    // // console.log("rr", traces);
    // // console.log(traces.map((date) => date.date));
    // let activeDay = traces.map((d) => {
    //   // console.log(d.date);

    //   return new Date(d.date).toLocaleString("en-us", {
    //     weekday: "short",
    //   });
    // });
    // console.log(traces);
    // console.log(Object.values(traces));
    // setTraces(traces);
    // setActivityDate(activeDay);
    // // return traces;

    let activityDate = users.map((user, ind) => {
      return user.traces.map((trs) => trs.date);
    });

    let actv = activityDate.map(
      (acDate) => new Date(acDate).toLocaleString("en-us", { weekday: "short" })
      // Object.values()
    );
    console.log(actv);
    // setDriverActiveDay(actv);
    // setActive([actv]);
    return actv;
  }

  let resultTraces = users.map((user, index) => {
    // console.log(user);
    let newArrDuration = [];
    let activity = user.traces.map((trs, ind) => trs.activity);
    let activityDate = user.traces.map((trs, ind) => trs.date);
    // console.log(new Date(activityDate));
    // let actv = [new Date(activityDate)];
    let actv = activityDate.map(
      (acDate) => new Date(acDate).toISOString().split("T")[0]
    );
    // console.log(actv);
    if (validPeriod(start, end, actv)) {
      // console.log("no activity found", start, end, "ddd", actv);
      // console.log("no activity found");
    } else {
      // let www = activity.map((obj) => obj.duration);
      // let duration = activity.map((dur, ind) => dur.duration);

      let durationMap = activity.map((dr, ind) => {
        let newArr = [];
        for (const [key, value] of Object.entries(dr)) {
          // console.log(key, value.duration);
          // let ddd = value.duration.reduce((partialSum, a) => partialSum + a, 0);
          // console.log(value.duration);
          // console.log(newArr);
          // return value.duration;
          newArr.push(value.duration);
        }
        // console.log(newArr);
        let ddd = newArr.reduce((partialSum, a) => partialSum + a, 0);
        // console.log(ddd);
        // setDuration(ddd);
        return ddd;
      });

      // newArr.push(duration);

      // console.log("found activity");

      let total = durationMap.reduce((partialSum, a) => partialSum + a, 0);
      return total;
      // setDuration(total);
      // activity.map((rr, dd) => rr.map((ee, mm) => console.log(ee.duration)));
    }

    // let duration = activity.map((us, ind) => {
    //   // us.map((o, inx) => newArrDuration.push(o.duration))
    //   // console.log(us., "us");
    //   us.map((rr, idd) => rr.duration).reduce(
    //     (partialSum, a) => partialSum + a,
    //     0
    //   );
    // return resd;
  });

  // console.log(resultTraces);

  // const totalTraces =
  // console.log(totalTraces);
  // let result = users.map((user, index) => user.filter((obj) => obj.traces));
  // var result = users.filter((obj) => {
  //   return obj.traces;
  // });

  // let resAct =
  // console.log(resultTraces);
  // console.log(sum);
  // let resultTraces = users.map((user, index) => {
  //   // console.log(user);
  //   let newArrDuration = [];
  //   let activity = user.traces.map((trs, ind) => trs.activity);
  //   let duration = activity.map((us, ind) => {
  //     // us.map((o, inx) => newArrDuration.push(o.duration))
  //     // console.log(us., "us");
  //     us.map((rr, idd) => rr.duration).reduce(
  //       (partialSum, a) => partialSum + a,
  //       0
  //     );
  //     // return resd;
  //   });
  // console.log(typeof duration);

  // return duration;

  // return duration;
  // });
  // const sum = resultTraces.map((rep, inn) => {
  //   let resd = rep.reduce((partialSum, a) => partialSum + a, 0);
  //   return resd;
  //   // setDuration(resd);
  // });

  // console.log(resultTraces);

  // let resultCalendar = users.map((user, index) => {
  //   let activity = user.traces.map((trs, ind) => trs.activity);
  //   let activityDate = user.traces.map((trs, ind) => trs.date);
  //   console.log(activity, activityDate);
  //   let actv = activityDate.map((acDate) =>
  //     new Date(acDate).toLocaleString("en-us", { weekday: "short" })
  //   );
  //   console.log(actv);
  //   const found = weekDays.some((r) => actv.includes(r));
  //   console.log(found);
  //   if (found) {
  //     // setActive(true);
  //   }

  // const filteredUsers = activity.map((tt, ii) => {
  //   for (const [key, value] of Object.entries(tt)) {
  //     //   // console.log(key, value.duration);
  //     //   // let ddd = value.duration.reduce((partialSum, a) => partialSum + a, 0);
  //     //   // console.log(value.type);
  //     //   // console.log(newArr);
  //     //   // return value.duration;
  //     //   // newArr.push(value.duration);
  //     //   let dd = value.type.filter((data) => data === "drive");
  //     //   console.log(dd);
  //   }
  //   let dd = Object.values(tt).filter((data) => data.type == "drive");
  //   console.log(dd);
  // });
  // .filter((user) => user.type == "drive")
  // .map(({ type }) => ({ type }));

  // const searchWord = (word) =>
  //   Object.values(activity).filter((data) => data.type.includes(word));
  // console.log(searchWord("drive"));
  // let workType = activity.map((dr, ind) => {
  //   for (const [key, value] of Object.entries(dr)) {
  //     console.log(key, value.type);
  //     let ttt = value.type.filter((dd) => dd.type === "drive");
  //   }
  //   // console.log(dr.filter((dd) => dd.type === "drive"));
  // });

  // console.log(filteredUsers);
  // let weekDay = user.map(console.log());
  //   return;
  // });

  const resultActiveDate = [
    ...new Set(users.map(({ traces }) => traces).flat(1)),
  ];

  const compareDates = () => {
    // let arrNew = [];
    let activityDate = users.map((user, index) => {
      let dayWeek = user.traces.map((trs, ind) => trs.date);

      let activeDay = dayWeek.map((acDate, index) =>
        new Date(acDate).toLocaleString("en-us", { weekday: "short" })
      );
      // console.log(activeDay, "active", weekDays, "week");
      // console.log("ddd", activeDay);
      // const releases = weekDays.map((b) => b).filter((b) => b === activeDay);
      let found = weekDays.filter((r) => activeDay.includes(r));
      // console.log(found);
      return found;
      // console.log([
      //   new Date(dayWeek).toLocaleString("en-us", { weekday: "short" }),
      // ]);
      // return new Date(dayWeek[index]).toLocaleString("en-us", { weekday: "short" });
    });

    // arrNew.push(activityDate);
    // console.log(activityDate, "last");
    // setActive(activityDate);

    // console.log(activityDate, "dta");

    // let dayWeeks = activityDate.map(
    //   (acDate, index) =>
    //     new Date(acDate[index]).toLocaleString("en-us", { weekday: "short" })
    //   // Object.values()
    // );
    // console.log(dayWeeks);
    // let found = weekDays.map((r) => dayWeek.includes(r));
    // console.log(activityDate);
    // console.log(dayWeek, weekDays, found);
    // setActive(weekDays.some((r) => dayWeek.includes(r)));
  };

  // console.log(compareDates, "dta");
  const mergedDays = () => {};

  useEffect(function () {
    compareDates();
    getDriversActivity();
    // console.log(active);
  }, []);

  let ccc = () =>
    users.map((user, index) => {
      let activityDate = user.traces.map((trs, ind) => trs.date);

      let actv = activityDate.map(
        (acDate) =>
          new Date(acDate).toLocaleString("en-us", { weekday: "short" })
        // Object.values()
      );
      // console.log(actv);
      // setDriverActiveDay(actv);
      // setActive([actv]);
      return actv;
    });

  // console.log(ccc);

  function chekDate(weekDate, driverDate) {
    let date = weekDate.filter((dd) => dd === driverDate);
    return date;
  }

  // console.log(chekDate(weekDays, ccc));

  function checkActiveWeekDay() {
    // let resultCalendar = users.map((user, index) => {
    //   let activity = user.traces.map((trs, ind) => trs.activity);
    //   let activityDate = user.traces.map((trs, ind) => trs.date);
    //   // console.log(activity, activityDate);
    //   let actv = activityDate.map(
    //     (acDate) =>
    //       new Date(acDate).toLocaleString("en-us", { weekday: "short" })
    //     // Object.values()
    //   );
    //   // const values = Object.values(actv);
    //   // console.log(actv, weekDays);
    //   let rrr = JSON.stringify(actv) == JSON.stringify(weekDays);
    // let search = actv.reduce((acc, status) => {
    //   // retrieve objects from the messages array that match
    //   const matches = weekDays.filter((message) => message === status);
    //   if (matches.length > 0) {
    //     // if matches were found concat the returned array with the accumulator
    //     acc = acc.concat(matches);
    //   }
    //   // setActive(acc);
    //   // return the accumulator to be used in the next iteration
    //   // console.log(acc)
    //   return acc;
    // }, []);
    // setActive(search);
    // console.log(search, weekDays, actv);
    // const found = weekDays.some((r) => actv.includes(r));
    // console.log(found);
    // if (weekDays.map((rr, i) => rr).some((rr) => actv.includes(rr))) {
    //   setActive(rr);
    // }
    // let red = weekDays.map((rr, ii) => {
    //   console.log(rr);
    //   let blue = rr.filter((r) => r === actv[i]);
    // });
    // const found = weekDays.filter((r, i) => {
    //   return actv.includes(r);
    // });
    // const filteredProjects = weekDays.filter((project) => {
    //   console.log("pp", typeof project, actv);
    //   // return project === Object.values(actv);
    //   project === actv;
    // });
    // const filteredProjects = Object.values(actv).filter((project, index) => {
    //   console.log("pp", typeof project, typeof actv);
    //   return project === weekDays[index];
    //   project === actv;
    // });
    // console.log(filteredProjects);
    // let item;
    // if (actv.hasOwnProperty(weekDays)) {
    //   item = actv[weekDays];
    //   console.log(item, weekDays);
    // }
    // setActive(filteredProjects);
    // setActive(found);
    // if (weekDays.filter((r, i) => actv.includes(r))) {
    //   console.log(found);
    //   // setActive(weekDays[i]);
    // }
    // console.log(weekDays.filter((r, i) => actv.includes(r)));
    // return;
    // });
  }
  function getDriversTraces() {
    const traces = users.map((user) => user.traces);
    console.log(traces, "yyy");
    setTraces(traces);
  }

  function getDriversActivityDate() {
    // console.log("traces", traces);
    let traces = users.map((user) => user.traces);
    let accdd = users.map((user) => user.traces.map((option) => option.date));
    console.log(accdd, "kkk");
    let activeDay = traces.map((d) => {
      // console.log(
      //   new Date(d.date).toLocaleString("en-us", {
      //     weekday: "short",
      //   }),
      //   "pppp"
      // );
      // return new Date(d.date).toLocaleString("en-us", {
      //   weekday: "short",
      // });
    });
  }
  useEffect(function () {
    // getDriversTraces();
    getDriversActivityDate();
  }, []);
  useEffect(function () {
    checkActiveWeekDay();
  }, []);

  return (
    <div className="drivers-list">
      <p> DriversList</p>
      {users.map((user, index) => (
        <li key={user.driverID}>
          <p>
            {user.forename} {user.surname}
            <span> {user.vehicleRegistration}</span>
            <span> {resultTraces[index]}</span>
          </p>
          <div className="driver-list-calendar">
            {/* {console.log("ddd", user.traces)} */}
            <ul>
              {/* {weekDays.forEach((number) => console.log(number))} */}
              {/* {weekDays.map((day, ind) => { */}
              {weekDays.map((day, ind) => {
                // console.log(Object.entries(traces), "ttre");
                let activeDay = user.traces.map((d) => {
                  // console.log(d.date);
                  return new Date(d.date).toLocaleString("en-us", {
                    weekday: "short",
                  });
                });
                // for (let j = 0; j < day.length; j++) {
                // if (activeDay[j].value === day){
                //   <
                // activeDay[j].value === day ? "hello" : null;

                // console.log(weekDays, "ppp", day, "ttt", activeDay);
                const includesAll = (arr, values) =>
                  values.every((v) => arr.includes(v));
                // console.log(includesAll(weekDays, activeDay);
                // console.log(weekDays.includes(activeDay));
                // const free = weekDays.filter((org, ind) => org === activeDay);
                // console.log(free);
                return (
                  <li key={ind}>
                    {/* {console.log("active", active)} */}
                    <div
                      style={
                        weekDays.includes(activeDay[ind])
                          ? // weekDays.filter((org, ind) => org === activeDay[ind])
                            { color: "red" }
                          : { color: "black" }
                      }
                    >
                      {day}
                      {activeDay}
                      {/* {day[ind] === activeDay ? "ciao" : null} */}
                      {/* {console.log(active)} */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </div>
  );
}

export default DriversList;
