import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../api/api";

function Men() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductsByCategory("men").then(setProducts);
  }, []);

  return (
    <div className="text-black">

      {/* Heading */}
      <div className="px-6 md:px-20 mt-40 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold">Men's Apparel</h1>
        <p className="mt-5 text-gray-700">
          Our full collection of technical apparel and lifestyle pieces that seamlessly
          transition from the mountain to Main Street. Designed in San Francisco and
          inspired by classic silhouettes.
        </p>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/product/${item._id}`)}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-95 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold group-hover:underline">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="mt-2 font-semibold text-lg">
                  ₹{item.price}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Men;
