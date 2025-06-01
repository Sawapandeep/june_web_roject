import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      fetchLocationByIP();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const city = data.city || data.locality || "Unknown City";
          const region = data.principalSubdivision || "Unknown Region";
          setLocation(`${city}, ${region}`);
        } catch (error) {
          setLocation("Unable to fetch location");
        }
      },
      () => {
        fetchLocationByIP();
      }
    );
  };

  const fetchLocationByIP = async () => {
    try {
      const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
      const data = await response.json();
      const city = data.city || data.locality || "Unknown City";
      const region = data.principalSubdivision || "Unknown Region";
      setLocation(`${city}, ${region}`);
    } catch (error) {
      setLocation("Unable to fetch location");
    }
  };

  return (
    <header className="w-full shadow-md bg-black fixed z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo + Location */}
        <div className="flex items-center space-x-2">
          <img src="logo.svg" alt="FoodieHUB" className="h-8 w-auto" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-sm">
              <span role="img" aria-label="location">
                📍
              </span>
              <button onClick={getLocation} className="text-white hover:text-orange-500 underline">
                Update Location
              </button>
            </div>
            <p className="text-xs text-gray-400">{location}</p>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-sm">
            📞 Call us at{" "}
            <span className="font-semibold text-orange-600">0123456789</span>
          </div>
          {/* <button className="hover:text-orange-600">Search</button> */}
          <Link href="/cart" className="hover:text-orange-600">Cart</Link>
          <Link href="/signin" className="hover:text-orange-600">Sign In</Link>
          <Link href="/profile" className="hover:text-orange-600">My Profile</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md px-4 pb-4 space-y-2 text-white">
          <div className="text-sm">
            📞 Call us at{" "}
            <span className="font-semibold text-orange-600">0123456789</span>
          </div>
          {/* <button className="block w-full text-left hover:text-orange-600">
            Search
          </button> */}
          <Link href="/cart" className="hover:text-orange-600">Cart</Link>
          <Link href="/signin" className="hover:text-orange-600">Sign In</Link>
          <Link href="/profile" className="hover:text-orange-600">My Profile</Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;
