import React, { useRef, useState } from "react";
import CoffeeMain from "../assets/black.png";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  
  // Create refs for each animated element
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const circleRef = useRef(null);
  const bigTextRef = useRef(null);
  const thirdDivRef = useRef(null);
  
  // Use inView with once:true to trigger animations only once
  const titleInView = useInView(titleRef, { once: true });
  const descInView = useInView(descRef, { once: true });
  const imgInView = useInView(imgRef, { once: true });
  const circleInView = useInView(circleRef, { once: true });
  const bigTextInView = useInView(bigTextRef, { once: true });
  const thirdDivInView = useInView(thirdDivRef, { once: true });

  return (
    <main className="bgImage">
      <section className="relative min-h-[750px] w-full">
        <div className="container mx-auto">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section*/}
            <div className="text-light-orange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: -100 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                ref={descRef}
                initial={{ opacity: 0, y: 100 }}
                animate={descInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1.2 }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis optio laudantium aspernatur ratione quis et tenetur
                    distinctio provident sed sunt explicabo, iusto ad vero quod
                    laboriosam repellat? Accusantium, eius aspernatur?
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero image section */}
            <div className="relative">
              <motion.img
                ref={imgRef}
                initial={{ opacity: 0, scale: 0 }}
                animate={imgInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                src={CoffeeMain}
                alt="Coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring */}
              <motion.div
                ref={circleRef}
                initial={{ opacity: 0, y: 100 }}
                animate={circleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Sidebar section */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primary-dark/80 backdrop-blur-sm z-50"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
