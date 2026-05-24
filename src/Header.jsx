import React, { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "./context/UseCart";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, isOpen, setIsOpen, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Accessories", path: "/equipment" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Child", path: "/child" },
  ];

  // Lock body scroll when cart open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="absolute top-10 w-full z-50 text-black">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative flex items-center h-14 rounded-full bg-white px-5">

            {/* LEFT */}
            <div className="flex items-center gap-6">
              <button
                className="lg:hidden relative w-6 h-6"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span className="absolute top-1/2 w-full h-0.5 bg-black -translate-y-2" />
                <span className="absolute top-1/2 w-full h-0.5 bg-black" />
                <span className="absolute top-1/2 w-full h-0.5 bg-black translate-y-2" />
              </button>

              <nav className="hidden lg:flex gap-6 text-sm font-medium">
                {navLinks.map((item) => (
                  <Link key={item.name} to={item.path} className="relative group">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 font-bold text-xl">
              <Link to="/">Style Hunt</Link>
            </div>

            {/* CART ICON */}
            <div
              className="ml-auto cursor-pointer relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag size={24} className="cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`lg:hidden absolute left-0 right-0 top-full mt-4 transition-all duration-300 cursor-pointer ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="bg-[#fffbe8] rounded-3xl px-6 py-8 space-y-6 shadow-lg cursor-pointer">
              {navLinks.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-between text-2xl sm:font-serif cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span>{item.name}</span>
                  <span>+</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ================= CART DRAWER ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] text-black">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full bg-white w-full sm:w-[420px]">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 h-16 border-b">
              <span className="text-lg">Bag</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-6 space-y-6 overflow-y-auto h-[calc(100vh-240px)]">
              {cart.length === 0 && (
                <h2 className="text-2xl sm:font-serif font-bold">
                  Your Cart Is Empty
                </h2>
              )}

              {cart.map((item) => (
                <div key={item._id + item.size} className="flex gap-4">
                  <img
                    src={item.image}
                    className="w-20 h-24 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>

                    <div className="flex items-center gap-4 mt-2">
                      <button
                        onClick={() =>
                          updateQty(item._id, item.size, item.qty - 1)
                        }
                        className="w-7 h-7 border rounded-full"
                      >
                        −
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() =>
                          updateQty(item._id, item.size, item.qty + 1)
                        }
                        className="w-7 h-7 border rounded-full"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className="text-sm underline mt-2"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="font-semibold">
                    ${item.price * item.qty}
                  </p>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="absolute bottom-0 w-full px-6 pb-6 border-t pt-6">
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="font-semibold">₹{total}</span>
                </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/checkout");
                }}
                className="w-full py-4 rounded-full bg-[#2b1d0e] text-white cursor-pointer"
              >
                Checkout
              </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
