
import React from "react";
import { NewsCard } from "@/components/NewsCard";

const newsData = {
  id: "defabc9876543210defabc98",
  category_id: 2,
  title: "Bangladesh Aims to Diversify its Export Basket Beyond Garments",
  rating: {
    number: 3,
    badge: "trending"
  },
  total_view: 4321,
  author: {
    name: "Farida Yasmin",
    published_date: "2025-04-22T16:30:00.000Z",
    img: "https://randomuser.me/api/portraits/women/51.jpg"
  },
  thumbnail_url: "https://lightcastlepartners.com/wp-content/uploads/2024/05/Ready-made-garments-exports-earning-and-its-contribution-to-economic-growth-in-Bangladesh-ezgif.com-jpg-to-webp-converter.webp",
  image_url: "https://lightcastlepartners.com/wp-content/uploads/2024/05/Ready-made-garments-exports-earning-and-its-contribution-to-economic-growth-in-Bangladesh-ezgif.com-jpg-to-webp-converter.webp",
  details: "The government of Bangladesh is actively pursuing strategies to diversify its export basket and reduce the country's heavy reliance on the readymade garments (RMG) sector. Efforts are being made to promote the export of other potential goods and services, including agricultural products, pharmaceuticals, and information technology. This diversification drive aims to enhance economic resilience and create new avenues for growth in the global market. Various policy initiatives and incentives are being considered to support the development and promotion of these non-traditional export sectors. The success of this diversification strategy is considered crucial for the long-term sustainable economic development of Bangladesh.",
  tags: ["exports", "economy", "business", "diversification", "trade"],
  others: {
    is_today_pick: true,
    is_trending: false
  },
  production: true
};

// Sample data matching the screenshot
const sampleNewsData = {
  id: "abc123",
  title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
  rating: {
    number: 4.9,
    badge: "trending"
  },
  total_view: 499,
  author: {
    name: "Awlad Hossain",
    published_date: "2022-08-21T10:30:00.000Z",
    img: "/lovable-uploads/a4e272e7-71fd-4793-b2c4-77eac76b7670.png"
  },
  thumbnail_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  image_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  details: "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.",
  tags: ["Biden", "EU", "Ukraine", "Military", "News"],
  others: {
    is_today_pick: true,
    is_trending: true
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">News Card Example</h1>
      <div className="max-w-xl w-full">
        <NewsCard {...sampleNewsData} />
      </div>
    </div>
  );
};

export default Index;
