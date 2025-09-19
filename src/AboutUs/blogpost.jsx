import React from 'react';

const BlogPostCard = ({ image, category, title, introduction, date, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-4 right-4 bg-[#25337C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-['poppins'] font-semibold text-xl text-[#25337C] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {introduction}
        </p>
        <a href="#" className="text-[#25337C] font-semibold text-sm hover:underline">
          READ MORE »
        </a>
        <div className="flex items-center text-gray-500 text-xs mt-4">
          <span className="mr-3">{date}</span>
          <span>•</span>
          <span className="ml-3">{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;