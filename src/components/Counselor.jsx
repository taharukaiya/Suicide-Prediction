import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLanguage,
  FaSms,
} from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const Counselor = () => {
  const [counselorsData, setCounselorsData] = useState([]);

  useEffect(() => {
    // Fetching data from counselorsData.json
    fetch("counselorsData.json")
      .then((response) => response.json())
      .then((data) => {
        setCounselorsData(data);
      })
      .catch((error) => {
        console.error("Error fetching counselors data:", error);
      });
  }, []);

  return (
    <div className="bg-[#f3fafd]">
      <div className="sm:w-10/12 w-11/12 mx-auto py-12">
        <h3 className="text-4xl font-bold text-center text-[#1e88e5] mb-8">
          Counselor Details
        </h3>

        {/* List of Counselors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {counselorsData.map((counselor) => (
            <div
              key={counselor.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Counselor Name */}
              <h4 className="text-2xl font-bold text-[#1e88e5] mb-4">
                {counselor.name || "N/A"}
              </h4>

              {/* Details */}
              <ul className="space-y-3">
                {/* Location */}
                <li className="text-sm text-gray-700 flex items-center">
                  <FaGlobe className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Location:
                  </span>
                  {counselor.state || "N/A"}, {counselor.country || "N/A"}
                </li>

                {/* Phone */}
                <li className="text-sm text-gray-700 flex items-center">
                  <FaPhoneAlt className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Phone:
                  </span>
                  {counselor.contact.phone || "N/A"}
                </li>

                {/* Text Support */}
                <li className="text-sm text-gray-700 flex items-center">
                  <FaSms className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Text:
                  </span>
                  {counselor.contact.text || "N/A"}
                </li>

                {/* Email */}
                <li className="text-sm text-gray-700 flex items-center flex-wrap">
                  <FaEnvelope className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Email:
                  </span>
                  {counselor.contact.email ? (
                    <Link
                      href={`mailto:${counselor.contact.email}`}
                      className="text-[#1e88e5] hover:underline"
                    >
                      {counselor.contact.email}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </li>

                {/* Website */}
                <li className="text-sm text-gray-700 flex items-center flex-wrap">
                  <FaGlobe className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Website:
                  </span>
                  {counselor.contact.website ? (
                    <Link
                      to={counselor.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1e88e5] hover:underline"
                    >
                      {counselor.contact.website}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </li>

                {/* Languages */}
                <li className="text-sm text-gray-700 flex items-center">
                  <FaLanguage className="text-[#1e88e5] mr-3" />
                  <span className="font-semibold text-gray-800 mr-2">
                    Languages:
                  </span>
                  {counselor.languages && counselor.languages.length > 0
                    ? counselor.languages.join(", ")
                    : "N/A"}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counselor;
