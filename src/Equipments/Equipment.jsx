import { useEffect, useState } from "react";
import EquipBg from "./images/Equip.webp";
import StoryBg from "./images/Story.webp";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../api/api";

export default function Equipment() {
  const [accessories, setAccessories] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [child, setChild] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductsByCategory("accessories").then(setAccessories);
    getProductsByCategory("men").then(setMen);
    getProductsByCategory("women").then(setWomen);
    getProductsByCategory("kids").then(setChild);
  }, []);

  return (
    <div className="text-black">

      {/* Hero */}
      <div
        className="h-[70vh] sm:h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("https://images.pexels.com/photos/5418933/pexels-photo-5418933.jpeg")` }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Shop All
        </h1>
      </div>

      {/* Sections */}
      <Section title="Accessories"
        desc="Durable aluminum ski poles & customizable accessories.">
        <ProductGrid products={accessories} />
      </Section>

      <Section title="Men"
        desc="Premium technical gear & everyday essentials.">
        <ProductGrid products={men} />
      </Section>

      <Section title="Women"
        desc="Technical layers & lifestyle pieces designed for comfort.">
        <ProductGrid products={women} />
      </Section>

      <Section title="Child"
        desc="Technical layers you can ski in, made for young explorers.">
        <ProductGrid products={child} />
      </Section>

      {/* Story Hero */}
      <div
        className="h-[70vh] sm:h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${StoryBg})` }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Our Story
        </h1>
        <button 
          onClick={() => navigate('/about')}
          className="mt-6 px-8 py-3 bg-white rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          About Us
        </button>
      </div>

    </div>
  );
}

/* ------------------ UI COMPONENTS ------------------ */

function Section({ title, desc, children }) {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="mt-3 max-w-3xl text-gray-600">
        {desc}
      </p>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function ProductGrid({ products }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
      {products.map((item) => (
        <div key={item._id} className="group cursor-pointer"
          // onClick={() => navigate(`/products/${item._id}`)}
           onClick={() => navigate(`/product/${item._id}`)}

        >

          <div className="bg-gray-100 rounded-3xl overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] sm:h-[320px] lg:h-[360px]
                         object-cover transition-transform duration-700
                         group-hover:scale-105"
            />
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {item.description}
          </p>

          <h4 className="mt-2 font-bold">
            ${item.price}
          </h4>

        </div>
      ))}
    </div>
  );
}
