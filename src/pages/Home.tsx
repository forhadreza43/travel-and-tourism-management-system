
import React from "react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Map, 
  Calendar, 
  Plane, // Changed from Airplane to Plane
  Hotel, 
  Globe, 
  Search,
  ChevronRight
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/Badge";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const popularDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: "$1,200",
    tags: ["Beach", "Culture", "Relaxation"]
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: "$1,500",
    tags: ["Romantic", "History", "Food"]
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: "$1,300",
    tags: ["Island", "Views", "Luxury"]
  }
];

const specialOffers = [
  {
    id: 1,
    title: "Summer Escape",
    description: "20% off on beach destinations",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "City Breaks",
    description: "Explore urban destinations with 15% discount",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80"
  }
];

const Home = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80" 
            alt="Beautiful landscape" 
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 px-4 py-24 md:py-32 lg:py-40 max-w-7xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the World's <span className="text-blue-300">Hidden Gems</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            Explore breathtaking destinations, create unforgettable memories, and experience the journey of a lifetime.
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-4xl mx-auto transform translate-y-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                <Map className="text-blue-500" size={20} />
                <div>
                  <p className="text-gray-500 text-sm">Destination</p>
                  <Input 
                    placeholder="Where to go?" 
                    className="border-none text-gray-800 p-0 h-auto text-base placeholder:text-gray-400 focus-visible:ring-0" 
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                <Calendar className="text-blue-500" size={20} />
                <div>
                  <p className="text-gray-500 text-sm">Check-in</p>
                  <Input 
                    placeholder="Add date" 
                    className="border-none text-gray-800 p-0 h-auto text-base placeholder:text-gray-400 focus-visible:ring-0" 
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                <Calendar className="text-blue-500" size={20} />
                <div>
                  <p className="text-gray-500 text-sm">Check-out</p>
                  <Input 
                    placeholder="Add date" 
                    className="border-none text-gray-800 p-0 h-auto text-base placeholder:text-gray-400 focus-visible:ring-0" 
                  />
                </div>
              </div>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center transition duration-300 ease-in-out">
                <Search size={18} className="mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore By Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Plane className="text-blue-500" size={24} /> {/* Changed from Airplane to Plane */}
            </div>
            <h3 className="text-lg font-medium text-gray-800">Flights</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Explore affordable flight options worldwide</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Hotel className="text-green-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Hotels</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Find perfect accommodations for your stay</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
              <Compass className="text-yellow-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Tours</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Discover guided tours and experiences</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Globe className="text-purple-500" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Packages</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Complete travel packages for easy planning</p>
          </div>
        </div>
      </div>
      
      {/* Popular Destinations */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <Link to="/" className="text-blue-500 flex items-center hover:text-blue-700 transition">
              <span>View all</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-52">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" className="bg-white text-blue-500">
                      {destination.price}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
                  <div className="flex items-center space-x-1 mb-3">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-700">{destination.rating}</span>
                    <span className="text-gray-400">• Excellent</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-500 border-blue-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-4">
                  <button className="text-blue-500 font-medium hover:text-blue-700 transition">
                    View Details
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Special Offers */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white text-sm mb-4">{offer.description}</p>
                <button className="self-start bg-white text-blue-500 px-4 py-2 rounded-lg font-medium transform transition duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">Find a lower price? We'll match it and give you an additional 10% discount.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Safe and Secure</h3>
              <p className="text-gray-600">Your security is our priority. We use industry-standard encryption for all transactions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated customer support team is available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
          <div className="md:flex justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100">Get the latest travel deals, offers, and tips straight to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input 
                placeholder="Your email address" 
                className="rounded-r-none border-white bg-white/10 text-white placeholder:text-blue-200"
              />
              <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-medium whitespace-nowrap hover:bg-blue-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Travel Explorer</h3>
              <p className="text-gray-400 mb-6">Discover the world with us. We offer the best travel experiences at affordable prices.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-400">123 Travel Street, City, Country</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-400">+1 234 567 890</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-400">info@travelexplorer.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
