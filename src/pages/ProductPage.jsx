import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/UseCart.jsx";
import { getProductById } from "../api/api";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("S");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProductById(id)
      .then((data) => {
        console.log("PRODUCT API RESPONSE:", data);
        setProduct(data);
      })
      .catch((err) => console.error("Product fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="p-10 text-lg">Loading product...</p>;
  }

  if (!product || !product._id) {
    return <p className="p-10 text-lg">Product not found.</p>;
  }

  return (
    <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT IMAGE */}
      <div className="bg-[#ededed] flex items-center justify-center p-12">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[80vh] object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col px-10 md:px-16 lg:px-20 pt-36 mt-10 text-black">

        <p className="text-sm tracking-widest uppercase mb-6 text-gray-500">
          Style Hunt.
        </p>

        <h1 className="text-4xl md:text-5xl sm:font-serif font-bold leading-tight mb-3">
          {product.title}
        </h1>

        <p className="text-lg font-semibold mb-6">
          ${product.price}
        </p>

        <p className="text-gray-600 leading-relaxed max-w-xl mb-10">
          {product.description}
        </p>

        {/* SIZE SELECTOR */}
        <div className="flex items-center gap-4 mb-12 flex-wrap">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-14 h-12 rounded-lg border text-sm font-semibold transition
                ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:border-black"
                }`}
            >
              {size}
            </button>
          ))}

          <button 
            onClick={() => setShowSizeChart(!showSizeChart)}
            className="text-sm underline cursor-pointer ml-2 hover:text-blue-600 transition-colors"
          >
            Size Chart
          </button>
        </div>

        {/* Size Chart Modal Overlay */}
        {showSizeChart && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowSizeChart(false)}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-semibold">Size Chart</h3>
                <button 
                  onClick={() => setShowSizeChart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0363/2493/3763/files/SIZE_CHART-01_1_480x480.jpg?v=1676102635" 
                  alt="Size Chart"
                  className="w-auto max-h-full object-contain rounded-md mb-6 mx-auto"
                />
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Size Guide</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Tops</h5>
                      <ul className="space-y-1 text-sm">
                        <li><strong>S:</strong> Chest 36-38"</li>
                        <li><strong>M:</strong> Chest 39-41"</li>
                        <li><strong>L:</strong> Chest 42-44"</li>
                        <li><strong>XL:</strong> Chest 45-47"</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium mb-2">Bottoms</h5>
                      <ul className="space-y-1 text-sm">
                        <li><strong>S:</strong> Waist 30-32"</li>
                        <li><strong>M:</strong> Waist 33-35"</li>
                        <li><strong>L:</strong> Waist 36-38"</li>
                        <li><strong>XL:</strong> Waist 39-41"</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> If you're between sizes, we recommend sizing up for the best fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          className="w-full max-w-xl bg-[#2a1a08] hover:bg-black transition text-white py-5 rounded-full text-lg font-medium cursor-pointer"
          onClick={() => addToCart(product, selectedSize)}
        >
          Add to Bag
        </button>

        <p className="text-sm text-center mt-4 text-gray-600 max-w-xl">
          Free & Easy Return or Exchange Coverage for $2.98
        </p>
      </div>
    </section>
  );
}
