import { Eventcalendar, getJson } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import { momentTimezone } from "@mobiscroll/react";
import React, { useCallback } from "react";

const Calendar = () => {
  const [events, setEvents] = React.useState([]);
  const [draggable, setDraggable] = React.useState();

  const setDrag = React.useCallback((event) => {
    setDraggable(event);
  }, []);

  const myNewEvent = {
    title: "My new event",
    start: new Date(2021, 3, 10, 12),
    end: new Date(2021, 3, 10, 15),
    color: "green",
  };

  const onPageLoading = useCallback((event, inst) => {
    const fromDay = event.firstDay.toISOString();
    const toDay = event.lastDay.toISOString();

    getJson("https://example.com/events?from=" + fromDay + "&to=" + toDay).then(
      (events) => {
        setEvents(events);
      }
    );
  }, []);

  const view = {
    schedule: {
      type: "week",
      startDay: 1,
      endDay: 5,
      startTime: "07:30",
      endTime: "18:30",
      timeZone: "Asia/Tashkent",
      timeFormat: "hh:ii A",
    },
  };

  return (
    <Eventcalendar
      data={events}
      view={view}
      onPageLoading={onPageLoading}
      theme="ios"
      themeVariant="light"
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      eventDelete={true}
      dataTimezone="utc"
      displayTimezone="local"
    />
  );
};

export default Calendar;
