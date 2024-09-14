import "../styles/week-calendar.css";
import redTickIcon from "../assets/icons/red-tick.svg";

function WeekCalendar({ activeDay }) {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const active = activeDay.map((type) => type);

  return (
    <div className="week-calendar-container">
      {weekDays.map((day, i) => {
        return (
          <div key={i} className="week-calendar">
            <p className="week-calendar-day"> {day}</p>
            <div className="week-calendar-box">
              {activeDay.map((type, index) => {
                return (
                  <span key={index}>
                    {active[index] === day ? <img src={redTickIcon} /> : null}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeekCalendar;
