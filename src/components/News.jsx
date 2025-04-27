import React, { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null); // State to store the selected news
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    fetch("newsData.json")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div className="sm:w-10/12 w-11/12 mx-auto py-12">
      <h3 className="text-3xl font-bold text-center text-[#45b3e0] mb-6">
        Latest News
      </h3>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
          >
            {/* News Image */}
            <img
              src={item.image_link}
              alt={item.news_title}
              className="w-full h-48 object-cover"
            />
            {/* News Details */}
            <div className="p-4">
              {/* Date and Time */}
              <p className="text-sm text-gray-500 mb-1">
                {item.date} | {item.news_time}
              </p>
              {/* Channel Name */}
              <p className="text-sm text-[#45b3e0] font-semibold mb-2">
                {item.channel_name}
              </p>
              {/* News Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                {item.news_title}
              </h4>
              {/* See More Button */}
              <button
                onClick={() => openModal(item)}
                className="mt-2 bg-[#45b3e0] text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-[#3a9dc4] transition-all duration-200"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedNews && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-11/12 sm:w-8/12 lg:w-6/12 max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-[#45b3e0] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#3a9dc4] transition-all duration-200"
            >
              ✕
            </button>
            {/* Modal Content */}
            <img
              src={selectedNews.image_link}
              alt={selectedNews.news_title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">
              {selectedNews.date} | {selectedNews.news_time}
            </p>
            <p className="text-sm text-[#45b3e0] font-semibold mb-4">
              {selectedNews.channel_name}
            </p>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedNews.news_title}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {selectedNews.news_description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
