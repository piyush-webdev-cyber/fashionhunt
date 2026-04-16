import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: `url("https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg")` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-6 z-10">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white">About Fashion Hunt</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Your destination for premium fashion and accessories
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a passion for quality and style, Fashion Hunt has been serving fashion enthusiasts 
                with carefully curated collections since our inception. We believe that fashion is not just about 
                clothing—it's about expressing your unique identity and confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our journey began with a simple mission: to provide high-quality, fashionable accessories and 
                clothing that cater to diverse tastes and preferences. From premium technical gear to everyday 
                essentials, we've built a reputation for excellence and customer satisfaction.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Fashion store interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg" 
                  alt="Quality craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is carefully selected to meet our high standards.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg" 
                  alt="Fashion style"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Style</h3>
                <p className="text-gray-600">
                  Stay ahead of trends with our curated collections that blend contemporary fashion with timeless elegance.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                  alt="Customer service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Customer</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're committed to providing exceptional service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our latest collections and find your perfect style
          </p>
          <Link 
            to="/equipment"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}