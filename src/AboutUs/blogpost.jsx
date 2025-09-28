import React from "react";

const BlogPostCard = ({ image, title, introduction, date }) => {
  let modifyDate = new Date(date).toLocaleDateString();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_APP_URL}${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-['poppins'] font-semibold text-xl text-[#25337C] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {introduction}
        </p>

        <div className="flex items-end text-gray-500 text-xs mt-4">
          <span className="mr-3">Date:</span>
          <span className="ml-3">{modifyDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
