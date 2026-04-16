import { useState } from "react";
import { ChevronLeft, ChevronRight, Ruler } from "lucide-react";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const [current, setCurrent] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const navigate = useNavigate();

  const prev = () =>
    setCurrent((i) => (i === 0 ? product.images.length - 1 : i - 1));

  const next = () =>
    setCurrent((i) => (i === product.images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col w-90 shrink-0 h-170 "
             
    >

      {/* Image slider */}
      <div className="relative h-110 overflow-hidden rounded-2xl bg-zinc-300">

        <img
          src={product.images[current]}
          className="w-full h-full object-cover transition duration-300 cursor-pointer"
           onClick={() => navigate(`/equipment`)}
          alt={product.name}
        />

        {/* Left */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {product.images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Info */}
      <h1 className="mt-4 font-bold text-xl">{product.name}</h1>
      <p className="text-sm mt-2">{product.description}</p>
      <p className="font-bold mt-3">${product.price}.00</p>
      
      {/* Size Chart Link */}
      <button 
        onClick={() => setShowSizeChart(!showSizeChart)}
        className="mt-3 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Ruler size={16} />
        Size Guide
      </button>
      
      {/* Size Chart Image */}
      {showSizeChart && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Size Chart</h3>
          <img 
            src="https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg" 
            alt="Size Chart"
            className="w-full h-48 object-cover rounded-md"
          />
          <button 
            onClick={() => setShowSizeChart(false)}
            className="mt-2 text-xs text-gray-500 hover:text-gray-700"
          >
            Close size chart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
