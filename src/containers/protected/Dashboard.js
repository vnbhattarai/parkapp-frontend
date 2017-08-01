import React from "react";

const Dashboard = props => {
  return (
    <div>
      <div className="row">
        <h5>
          Hi {props.user}, Your upcoming reservations
        </h5>
      </div>
      <div className="row">
        <div className="col s12" />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Starting Time</th>
              <th>Ending Time</th>
              <th>Parking space</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2017-01-03</td>
              <td>12:00</td>
              <td>13:00</td>
              <td>A12</td>
            </tr>
            <tr>
              <td>2017-04-10</td>
              <td>16:00</td>
              <td>17:00</td>
              <td>B8</td>
            </tr>
            <tr>
              <td>2017-06-10</td>
              <td>08:00</td>
              <td>10:00</td>
              <td>E8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
