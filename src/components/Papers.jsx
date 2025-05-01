import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Papers = () => {
  const [papersData, setPapersData] = useState([]);

  useEffect(() => {
    fetch("papersData.json")
      .then((response) => response.json())
      .then((data) => {
        setPapersData(data);
      })
      .catch((error) => {
        console.error("Error fetching papers data:", error);
      });
  }, []);

  return (
    <div className="sm:w-10/12 w-11/12 mx-auto py-12 mt-5">
      <h3 className="text-4xl font-bold text-center text-[#1e88e5] mb-8">
        Research Papers
      </h3>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8">
        {papersData.map((paper) => (
          <div
            key={paper.id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col justify-between border border-gray-200 hover:border-[#45b3e0] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Paper Title */}
            <h4 className="text-lg font-bold text-gray-800 mb-3 hover:underline">
              {paper.title}
            </h4>
            {/* Authors */}
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Authors:</span>{" "}
              <span className="italic">{paper.authors.join(", ")}</span>
            </p>
            {/* Journal */}
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Journal:</span>{" "}
              <span className="text-[#45b3e0] font-medium">
                {paper.journal}
              </span>
            </p>
            {/* Published Date */}
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">Published:</span>{" "}
              <span className="text-gray-600">{paper.published_date}</span>
            </p>
            {/* PDF Link */}
            <Link
              to={paper.pdf_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-[#45b3e0] text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-[#87ceeb] transition-all duration-200 text-center shadow-md"
            >
              View PDF
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Papers;
