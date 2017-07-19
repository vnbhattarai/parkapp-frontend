import React from "react";

const Reservation = ({ props }) => {
  return (
    <div>
      <h2>This is reservation portion</h2>
      {props.map((reservation, user) =>
        <li>
          reservation list: {reservation}
          user list: {user}
        </li>
      )}
    </div>
  );
};

export default Reservation;
