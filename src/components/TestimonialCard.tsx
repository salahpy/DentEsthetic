import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ content, author, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </div>
  );
};

export default TestimonialCard;