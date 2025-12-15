import { useEffect, useState } from "react";
import eventsData from "../services/events.json";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsData);
    }, 400);
  }, []);

  return events;
};

export default useEvents;
