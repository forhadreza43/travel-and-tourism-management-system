
import React from "react";
import { Bookmark, Share, Star, Eye } from "lucide-react";
import { Badge } from "./Badge";
import { formatDate } from "../utils/formatDate";
import { cn } from "@/lib/utils";

export interface NewsCardProps {
  id: string;
  title: string;
  author: {
    name: string;
    published_date: string;
    img: string;
  };
  thumbnail_url?: string;
  image_url: string;
  details: string;
  tags: string[];
  rating: {
    number: number;
    badge?: string;
  };
  total_view: number;
  others?: {
    is_today_pick?: boolean;
    is_trending?: boolean;
  };
}

export const NewsCard = ({
  title,
  author,
  image_url,
  details,
  tags,
  rating,
  total_view,
}: NewsCardProps) => {
  // Format the author's published date
  const formattedDate = formatDate(author.published_date);
  
  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating.number ? "text-orange-500 fill-orange-500" : "text-gray-300"
          )}
        />
      );
    }
    return stars;
  };

  // Truncate details for preview
  const truncatedDetails = details.length > 200 
    ? `${details.substring(0, 200)}...` 
    : details;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl">
      {/* Author and action buttons section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title section */}
      <div className="px-4 pb-3">
        <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
      </div>

      {/* Image section */}
      <div className="w-full aspect-video">
        <img 
          src={image_url} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4">{truncatedDetails}</p>
        
        {/* Tags section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Footer with ratings and views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-2 text-gray-600 font-medium">{rating.number.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Eye className="w-5 h-5 mr-1" />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Read more link */}
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
