import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    author,
    title,
    details,
    image_url,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
       <div className="flex gap-1">
        <CiBookmark size={28} className="hover:text-blue-500 cursor-pointer"/>
         <FaShareAlt size={25} className="text-gray-500 hover:text-blue-500 cursor-pointer" />
       </div>
      </div>

      {/* Body */}
      <div className="px-4">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <figure className="rounded-xl overflow-hidden">
          <img src={image_url} alt={title} className="w-full object-cover" />
        </figure>
        <p className="text-sm text-gray-600 mt-3">
          {details.slice(0, 180)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 cursor-pointer hover:underline font-medium">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-dashed border-gray-300 mt-3">
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>

        <div className="flex items-center text-gray-600 gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );


};

export default NewsCard;
