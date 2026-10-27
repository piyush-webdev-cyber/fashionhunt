import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../api/api";

function Women() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getProductsByCategory("women").then(setProducts);
  }, []);

  return (
    <div className="text-black">

      {/* Heading */}
      <div className="px-6 sm:px-10 lg:px-20 mt-40 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Women's Apparel
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-3xl">
          Our full collection of technical apparel and lifestyle pieces that seamlessly
          transition from the mountain to Main Street. Designed in San Francisco and
          inspired by classic silhouettes.
        </p>
      </div>

      {/* Product Grid */}
      <div className="px-6 sm:px-10 lg:px-20 pb-20">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">

          {products.map((item) => (
              <div key={item._id} className="group cursor-pointer"
             onClick={() => navigate(`/product/${item._id}`)}

              >
              {/* Image Card */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-65 sm:h-80 lg:h-90 object-cover
                             transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <h2 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {item.description}
              </p>

              <h3 className="font-bold text-sm sm:text-base">
                ₹{item.price}
              </h3>

              {/* Color Dots (UI Only) */}
              <div className="flex gap-2 mt-3">
                <span className="w-4 h-4 rounded-full bg-stone-300 border"></span>
                <span className="w-4 h-4 rounded-full bg-stone-500 border"></span>
                <span className="w-4 h-4 rounded-full bg-black border"></span>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Women;
