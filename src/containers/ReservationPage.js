import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class ReservationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "Long Event",
          start: new Date(2015, 3, 7),
          end: new Date(2015, 3, 10)
        },

        {
          title: "DTS STARTS",
          start: new Date(2016, 2, 13, 0, 0, 0),
          end: new Date(2016, 2, 20, 0, 0, 0)
        },

        {
          title: "DTS ENDS",
          start: new Date(2016, 10, 6, 0, 0, 0),
          end: new Date(2016, 10, 13, 0, 0, 0)
        },

        {
          title: "Some Event",
          start: new Date(2015, 3, 9, 0, 0, 0),
          end: new Date(2015, 3, 9, 0, 0, 0)
        },

        {
          title: "Lunch",
          start: new Date(2015, 3, 12, 12, 0, 0, 0),
          end: new Date(2015, 3, 12, 13, 0, 0, 0),
          desc: "Power lunch"
        },

        {
          title: "Happy Hour",
          start: new Date(2015, 3, 12, 17, 0, 0, 0),
          end: new Date(2015, 3, 12, 17, 30, 0, 0),
          desc: "Most important meal of the day"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <h3>This page shows mapping view of reservations</h3>
        </div>
        <div className="row">
          <div {...this.props}>
            <h6 className="callout">
              Click an event to see more info, or drag the mouse over the
              calendar to select a date/time range.
            </h6>
            <br />
            <BigCalendar
              selectable
              events={this.state.events}
              defaultView="week"
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(2015, 3, 12)}
              onSelectEvent={event => console.log(event.title)}
              onSelectSlot={slotInfo =>
                alert(
                  `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}`
                )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationPage;
