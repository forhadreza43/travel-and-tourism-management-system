
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 text-xl font-bold mr-1">Travel</span>
              <span className="text-gray-800 text-xl font-bold">Explorer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition">Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] grid grid-cols-2 gap-3 p-4">
                      <Link to="/" className="block p-3 hover:bg-blue-50 rounded-md">
                        <div className="font-medium">Popular Destinations</div>
                        <div className="text-sm text-gray-500">Explore our most visited places</div>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-blue-50 rounded-md">
                        <div className="font-medium">Beach Getaways</div>
                        <div className="text-sm text-gray-500">Relax on beautiful shores</div>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-blue-50 rounded-md">
                        <div className="font-medium">Mountain Escapes</div>
                        <div className="text-sm text-gray-500">Adventure in the heights</div>
                      </Link>
                      <Link to="/" className="block p-3 hover:bg-blue-50 rounded-md">
                        <div className="font-medium">City Breaks</div>
                        <div className="text-sm text-gray-500">Explore urban wonders</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition px-4 py-2 inline-block">Tours</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition px-4 py-2 inline-block">Hotels</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition px-4 py-2 inline-block">About</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition px-4 py-2 inline-block">Contact</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Search">
                <Search className="text-gray-700" size={20} />
              </Button>
              <Button variant="outline" className="flex items-center gap-2" aria-label="Login">
                <User size={18} />
                <span>Login</span>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMenu} aria-label="Menu">
              <Menu className="text-gray-700" size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Destinations</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tours</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Hotels</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">About</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Contact</Link>
          </div>
          <div className="px-5 py-4 border-t border-gray-200 flex justify-between">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <User size={18} />
              <span>Login</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
