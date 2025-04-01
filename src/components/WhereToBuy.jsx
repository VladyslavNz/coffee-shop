import React, { useRef } from "react";
import WorldMap from "../assets/world-map.png";
import { motion, useInView } from "framer-motion";

const WhereToBuy = () => {
  const titleRef = useRef(null);
  const inputsRef1 = useRef(null);
  const inputsRef2 = useRef(null);
  const buttonRef = useRef(null);
  const mapRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const inputs1InView = useInView(inputsRef1, { once: true });
  const inputs2InView = useInView(inputsRef2, { once: true });
  const buttonInView = useInView(buttonRef, { once: true });
  const mapInView = useInView(mapRef, { once: true });

  return (
    <div className="container my-36 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="space-y-8">
          <motion.h1
            ref={titleRef}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-dark-gray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            ref={inputsRef1}
            animate={
              inputs1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            ></input>
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            ></input>
          </motion.div>
          <motion.div
            ref={inputsRef2}
            animate={
              inputs2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            ></input>
            <input
              type="email"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            ></input>
          </motion.div>
          <motion.button
            ref={buttonRef}
            animate={
              buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.8,
            }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map section  */}
        <div className="col-span-2">
          <motion.img
            ref={mapRef}
            animate={
              mapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt="world map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
