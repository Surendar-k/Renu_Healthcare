import React from "react";
import { TbMapShare } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

const Event = () => {
  return (
    <>
      {/* Hero section */}
      <div className="bg-gray-100 m-auto sm:w-11/12">
        <div
          className="mb-4 contact-hero flex items-center justify-center w-full h-40 sm:h-60 md:h-80 lg:h-[40rem] rounded-sm bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/Events/event-hero-modified.jpg")`,
          }}
        >
          <h1 className="event-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-center">
            Events
          </h1>
        </div>

        {/* Events */}
        <div className="events-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 mt-10 mb-20">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

/* Single event */
const Card = () => {
  return (
    <>
      <div className="card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg hover:border-black hover:border hover:scale-105">
        {/* Event image */}
        <div className="h-40 sm:h-48 lg:h-56">
          <img
            className="object-cover w-full h-full"
            src="/Events/Medical-Camp.jpg"
            alt="Medical-Camp"
          />
        </div>
        {/* Event description */}
        <div className="flex flex-col justify-around h-40 sm:h-48 lg:h-56 p-4">
          <p className="text-sm text-gray-500">Sep. 10, 2018</p>
          <h3 className="text-lg sm:text-xl font-semibold">
            World Wide Donation
          </h3>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <FaRegClock className="text-orange-500 w-5 h-5 mr-2" />
              <p className="event-time text-sm">10:30 AM - 03:30 PM</p>
            </div>
            <div className="flex items-center">
              <TbMapShare className="text-orange-500 w-6 h-6 mr-2" />
              <p className="event-venue text-sm">Venue:</p>
            </div>
          </div>
          <p className="event-content text-gray-600 mt-2">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;
