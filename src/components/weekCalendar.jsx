function WeekCalendar({ activeDay }) {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      WeekCalendar:{activeDay}
      <div>
        {activeDay.map((type, index) => {
          return (
            <div
              //   style={
              //     type === activeD[offset] ? { color: "red" } : { color: "green" }
              //   }
              key={index}
            >
              {type}
            </div>
          );
        })}
        {weekDays.map((day, i) => {
          return <p key={i}>{day}</p>;
        })}
      </div>
    </div>
  );
}

export default WeekCalendar;

{
  /* {console.log("ddd", user.traces)} */
}

{
  /* {weekDays.forEach((number) => console.log(number))} */
}
{
  /* {weekDays.map((day, ind) => { */
}
{
  /* {weekDays.map((day, ind) => {
   // console.log(Object.entries(traces), "ttre");
   // console.log(ind, "ind", index, "index");
   let activeDay = user.traces.map((d) => {
     // console.log(d.date);
     return new Date(d.date).toLocaleString("en-us", {
       weekday: "short",
     });
   }); */
}
{
  /* // for (let j = 0; j < day.length; j++) {
   // if (activeDay[j].value === day){
   //   <
   // activeDay[j].value === day ? "hello" : null;

   // console.log(weekDays, "ppp", day, "ttt", activeDay);
   const includesAll = (arr, values) =>
     values.every((v) => arr.includes(v));
   // console.log(includesAll(weekDays, activeDay);
   // console.log(weekDays, activeDay);
   // console.log(weekDays.includes(activeDay));
   // const free = weekDays.filter((org, ind) => org === activeDay);
   // console.log(free); */
}
{
  /* return ( */
}
{
  /* <li key={ind}>
   {/* {console.log("active", active)} */
}
//    <div
// style={
//   weekDays.filter((dd) => dd === activeDay[ind])
//     ? // weekDays.every((id) =>
//       //   id.includes((obj) => obj === activeDay[id])
//       // )
//       // weekDays.some((r, ind) => r.includes(activeDay))
//       // weekDays.filter((org, ind) => org === activeDay[ind])
//       { color: "red" }
//     : { color: "black" }
// }
//    >
{
  /* {day} */
}
{
  /* {activeDay} */
}
{
  /* {ind} */
}
{
  /* {activityDate} */
}
{
  /* {day[ind] === activeDay ? "ciao" : null} */
}
{
  /* {console.log(active)} */
}
{
  /* </div>
 </li>
 {/* ); })} */
}
{
  /* </ul>

</div>
</li>
)} */
}
