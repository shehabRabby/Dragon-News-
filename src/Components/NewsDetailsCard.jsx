import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  // console.log(news)
  return (
    // <div>
    //     <img src={news.image_url} alt="" />
    //     <h2>{news.title}</h2>
    //     <p>{news.details}</p>
    //     <Link to={`/category/${news.category_id}`}>Back to Category</Link>
    // </div>
 
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        
      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">{news.title}</h2>

        <p className="text-sm text-gray-500 mb-4">
          {news.author?.name && (
            <>
              By <span className="font-medium">{news.author.name}</span> |{" "}
            </>
          )}
          {news.published_date}
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">{news.details}</p>

        <Link
          to={`/category/${news.category_id}`}
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          ← Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
