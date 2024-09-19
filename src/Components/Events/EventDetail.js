import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams();

  // Fetch event details based on eventId
  // For now, we'll use placeholder data

  // Placeholder data for demonstration
  const eventDetails = {
    "1": {
      title: "World Wide Donation",
      date: "Sep. 10, 2018",
      time: "10:30AM-03:30PM",
      venue: "Venue Address",
      description: "Detailed description of the World Wide Donation event.",
      image: "/Events/Medical-Camp.jpg"
    },
    // Add more event details as needed
  };

  const event = eventDetails[eventId] || {};

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.venue}</p>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;
