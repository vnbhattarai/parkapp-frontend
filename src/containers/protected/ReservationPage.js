import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Reservation extends Component {
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
          title: "Meeting",
          start: new Date(2015, 3, 12, 10, 30, 0, 0),
          end: new Date(2015, 3, 12, 12, 30, 0, 0),
          desc: "Pre-meeting meeting, to prepare for the meeting"
        },
        {
          title: "Lunch",
          start: new Date(2015, 3, 12, 12, 0, 0, 0),
          end: new Date(2015, 3, 12, 13, 0, 0, 0),
          desc: "Power lunch"
        },
        {
          title: "Meeting",
          start: new Date(2015, 3, 12, 14, 0, 0, 0),
          end: new Date(2015, 3, 12, 15, 0, 0, 0)
        },
        {
          title: "Happy Hour",
          start: new Date(2015, 3, 12, 17, 0, 0, 0),
          end: new Date(2015, 3, 12, 17, 30, 0, 0),
          desc: "Most important meal of the day"
        },
        {
          title: "Dinner",
          start: new Date(2015, 3, 12, 20, 0, 0, 0),
          end: new Date(2015, 3, 12, 21, 0, 0, 0)
        },
        {
          title: "Birthday Party",
          start: new Date(2015, 3, 13, 7, 0, 0),
          end: new Date(2015, 3, 13, 10, 30, 0)
        }
      ],
      user: this.props.user
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <h3>Hello</h3>
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

export default Reservation;
