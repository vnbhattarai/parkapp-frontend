import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import DatePicker from "material-ui/DatePicker";
import Paper from "material-ui/Paper";

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}
const ReservationSelector = () => {
  return (
    <MuiThemeProvider>
      <div className="row">
        <h5>Specify Time and Date</h5>
        <DatePicker
          hintText="Weekends Disabled"
          shouldDisableDate={disableWeekends}
        />
      </div>
    </MuiThemeProvider>
  );
};

export default ReservationSelector;
