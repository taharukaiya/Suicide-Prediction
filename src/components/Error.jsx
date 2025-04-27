import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-2 w-11/12 mx-auto">
      <img
        src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif"
        alt="Error"
        className="md:max-w-lg max-w-xs"
      />
      <h1 className="sm:text-4xl text-3xl font-bold text-[#45b3e0] mb-4">
        Oops! Page Not Found
      </h1>
      <p className="sm:text-lg text-base text-gray-600 mb-6 sm:max-w-lg max-w-full">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-[#45b3e0] text-white font-semibold rounded-lg shadow-md hover:bg-[#3a9dc4] transition-all duration-200 text-base"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
