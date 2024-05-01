// import React, { useState } from "react";

// function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

//   // Function to toggle dark mode
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   // Function to get the current time of the day
//   const getTimeOfDay = () => {
//     const hour = new Date().getHours();
//     if (hour >= 5 && hour < 12) {
//       return "Good Morning";
//     } else if (hour >= 12 && hour < 17) {
//       return "Good Afternoon";
//     } else if (hour >= 17 && hour < 20) {
//       return "Good Evening";
//     } else {
//       return "Good Night";
//     }
//   };

//   // Function to format the date as "Day, Month Date, Year"
//   const getFormattedDate = () => {
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     return new Date().toLocaleDateString("en-US", options);
//   };

//   return (
//     <div className="flex flex-row items-center justify-between text-white p-4">
//       <div className="flex">
//         <span className="text-3xl font-bold px-16">{getTimeOfDay()} 👋🏽</span>
//       </div>
//       <div className="flex flex-row items-center gap-8 px-16">
//         <div className="text-3xl font-bold">{getFormattedDate()}</div>
//         <span
//           className="text-3xl cursor-pointer"
//           role="img"
//           aria-label="Dark Mode Emoji"
//           onClick={toggleDarkMode}
//         >
//           {isDarkMode ? "🌚" : "🌞"}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


/* Navbar.jsx */
import React, { useState } from "react";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to get the current time of the day
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else if (hour >= 17 && hour < 20) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  // Function to format the date as "Day, Month Date, Year"
  const getFormattedDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-white p-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <span className="text-3xl font-bold">{getTimeOfDay()} 👋🏽</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="text-lg font-bold">{getFormattedDate()}</div>
        <span
          className="text-3xl cursor-pointer"
          role="img"
          aria-label="Dark Mode Emoji"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "🌚" : "🌞"}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
