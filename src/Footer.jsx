import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Globe, ChevronDown, MessageCircle } from "lucide-react";

function Footer() {
  const options = [
    "United States ($)",
    "Canada ($)",
    "India (₹)",
    "Australia ($)"
  ];

  const phoneNumber = "919815204055";
  const displayPhone = "+91 98152-04055";
  const businessEmail = "varmmeetkumar07@gmail.com";
  const primaryEmail = "vareetkumar07@gmail.com";
  const secondaryEmail = "stylehuntjalandhar@gmail.com";

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("India (₹)");
  const dropdownRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full text-black mb-10 px-4 sm:px-10 lg:px-20">

      {/* Shipping Info */}
      <div className="flex flex-col lg:flex-row py-12 gap-8 border-t">
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Free Shipping & Extended Returns
          </h1>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-base sm:text-lg lg:text-xl">
            Get free shipping for orders over $120. Plus, if you bought a gift
            for the skier in your life this holiday season, take until January
            5th for returns or exchanges.
          </h3>
        </div>
      </div>

      {/* WhatsApp Booking */}
      <div 
        onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Enquiry: Hi, I would like to know more about your products on Style Hunt website.`, '_blank')}
        className="w-full bg-green-500 hover:bg-green-600 transition-colors rounded-3xl flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-6 sm:py-0 h-auto sm:h-32 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <MessageCircle size={32} strokeWidth={2} className="text-white" />
          <div className="text-white">
            <p className="text-xl sm:text-2xl font-semibold">Book via WhatsApp</p>
            <p className="text-sm sm:text-base opacity-90">Get instant assistance for your orders</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <ArrowRight size={48} strokeWidth={1.5} className="text-white" />
        </div>
      </div>

      {/* Business Details */}
      <div className="mt-12 border-t pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base sm:text-lg">
        <div>
          <h3 className="font-bold mb-2">Style Hunt</h3>
          <p>Clothing Business</p>
          <p>GSTIN: 03ACRPC0386N1ZE</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Deals In</h3>
          <p>All Kinds of Readymade, Old & Used Worn Mix Clothing</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Ph: {displayPhone}</p>
          <p>{businessEmail}</p>
          <p>{primaryEmail}</p>
          <p>{secondaryEmail}</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Address</h3>
          <p>EQ 198, Pacca Bagh, Rainak Bazar, Jalandhar City, India</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-16 border-t w-full py-12 grid grid-cols-2 sm:grid-cols-3 gap-10 text-lg sm:text-xl lg:text-2xl">

        {[
          {
            title: "Shop All",
            links: ["FAQ", "Return", "Gift Cards"]
          },
          {
            title: "About",
            links: ["Stockists", "Jobs", "Press"]
          },
          {
            title: "Social",
            links: ["Instagram", "Faceboo k", "Twitter"]
          }
        ].map((section, idx) => (
          <div key={idx}>
            <h3
              onClick={scrollToTop}
              className="relative cursor-pointer font-bold group mb-2"
            >
              {section.title}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-1/4"></span>
            </h3>

            {section.links.map((item) => (
              <h3
                key={item}
                onClick={scrollToTop}
                className="relative cursor-pointer font-medium group mb-2"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-1/3"></span>
              </h3>
            ))}
          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div
        ref={dropdownRef}
        className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-t py-8"
      >
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="
              flex items-center gap-4 border-2 border-black rounded-full
              px-6 py-2 text-lg cursor-pointer hover:bg-gray-100 transition
            "
          >
            <Globe size={20} strokeWidth={1.5} />
            <span>{selected}</span>
            <ChevronDown
              size={20}
              strokeWidth={1.5}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute bottom-full mb-2 w-60 bg-white border border-black rounded-2xl shadow-xl z-50">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className="px-6 py-3 text-lg cursor-pointer hover:bg-gray-100 transition"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-6 text-sm sm:text-base">
          <h3>Style Hunt Clothing Business 2026</h3>

          {["Privacy", "Cookies", "Terms"].map((item) => (
            <h3
              key={item}
              onClick={scrollToTop}
              className="relative cursor-pointer group"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </h3>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Footer;
