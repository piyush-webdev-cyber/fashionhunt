import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Explore() {
  const navigate = useNavigate()
  return (
    <div className="w-full text-white mt-10 mb-10">

      <motion.div
        className="w-full relative overflow-hidden rounded-xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >

        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/35265834/pexels-photo-35265834.jpeg"
          alt="Explore"
          className="w-full h-[60vw] sm:h-[50vh] md:h-screen object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/20">

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3">
            Looking for more?
          </h1>

          <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-6">
            Shop Everything We Got
          </h3>

          <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:text-white hover:bg-black transition"
            onClick={() => navigate('/equipment')}
          >

          
            Explore
          </button>

        </div>

      </motion.div>

      <hr className="mt-12 border-gray-300" />
    </div>
  )
}

export default Explore
