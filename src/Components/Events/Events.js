import React from "react";
import { TbMapShare } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import gsap from "gsap";

const Event = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState(null);
  const cardsPerPage = 6; // Number of cards to show per page
  const totalCards = 12; // Adjust according to the actual number of cards
  const maxIndex = Math.ceil(totalCards / cardsPerPage) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      animateCards('next');
      setActiveButton('next');
      resetButtonColor();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      animateCards('prev');
      setActiveButton('prev');
      resetButtonColor();
    }
  };

  const resetButtonColor = () => {
    setTimeout(() => setActiveButton(null), 300); // Reset button color after 300ms
  };

  const animateCards = (direction) => {
    const cardsContainer = document.querySelector(".cards-container");
    gsap.fromTo(cardsContainer, { x: direction === 'next' ? '100%' : '-100%' }, { x: '0%', duration: 0.5 });
  };

  React.useEffect(() => {
    let timer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen m-auto sm:w-11/12">
      {/* Hero Section */}
      <div
        className="mb-4 flex items-center justify-center w-full h-52 sm:h-96 md:h-[40rem] rounded-sm bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Events/event-hero-modified.jpg")`,
        }}
      >
        <h1 className="text-6xl font-semibold text-white">Events</h1>
      </div>

      {/* Container for the Cards */}
      <div className="flex flex-col items-center mx-10">
        {/* Events */}
        <div className="flex-1 overflow-hidden">
          <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Array.from({ length: totalCards }, (_, index) => (
              index >= currentIndex * cardsPerPage && index < (currentIndex + 1) * cardsPerPage ? (
                <Card key={index} isScrolling={isScrolling} />
              ) : null
            ))}
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-md ${activeButton === 'prev' ? 'bg-black text-white' : 'bg-gray-300'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`p-2 rounded-md ${activeButton === 'next' ? 'bg-black text-white' : 'bg-gray-300'}`}
          >
            Next
          </button>
        </div>

        {/* Additional Space Below the Cards */}
        <div className="mt-10"></div>
      </div>

      {/* Inline CSS for Custom Styles */}
      <style jsx>{`
        .glowing-border {
          box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.8);
        }
        .card {
          transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          margin: 0; /* Remove margin to fix spacing issue */
          padding: 1rem; /* Add padding to card content */
          box-sizing: border-box; /* Ensure padding and border are included in the total width and height */
        }
        .card:hover {
          border-color: black;
          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
        }
        .card__description {
          bottom: 0;
          left: 0;
          right: 0;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .card:hover .card__description {
          transform: translateY(0);
          opacity: 1;
        }
        .link-button {
          background: none;
          border: none;
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const Card = ({ isScrolling }) => {
  return (
    <div
      className={`relative w-full p-4 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform border-2 border-transparent ${
        isScrolling
          ? ""
          : "hover:scale-105 hover:shadow-lg hover:border-black hover:glowing-border"
      } card`}
    >
      {/* Event Image */}
      <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="/Events/Medical-Camp.jpg"
          alt="Medical Camp"
        />
        {/* Event Description */}
        <div
          className="absolute inset-0 bg-white p-4 text-gray-900 rounded-lg transform translate-y-full opacity-0 transition-transform duration-300 ease-in-out hover:translate-y-0 hover:opacity-100 card__description"
        >
          <p className="text-sm">Sep. 10, 2018</p>
          <h3 className="text-xl font-semibold">World Wide Donation</h3>
          <div className="flex justify-between">
            <div className="flex items-center">
              <FaRegClock className="text-orange-500 w-5 h-5 mr-2" />
              <p className="text-sm">10:30AM-03:30PM</p>
            </div>
            <div className="flex items-center">
              <TbMapShare className="text-orange-500 w-6 h-6 mr-2" />
              <p className="text-sm">Venue:</p>
            </div>
          </div>
          <p className="text-sm mt-2">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          {/* View More Button */}
          <button className="link-button" onClick={() => console.log('View More')}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

// GSAP Animations
gsap.from(".card", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
  stagger: 0.5,
});

gsap.to(".event-heading", {
  y: -100,
  duration: 1,
  opacity: 0,
});

export default Event;
