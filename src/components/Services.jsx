import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee3 from "../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "lorem ipsum dolor sit amet",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const descInView = useInView(descRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  return (
    <div className="container my-16 space-y-4 mx-auto">
      {/* header section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          ref={titleRef}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-light-gray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          ref={descRef}
          animate={
            descInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit qui
          aliquid ullam libero, dolorem at ipsam culpa consequuntur possim.
        </motion.p>
      </div>
      {/* card section  */}
      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow-2
            max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-dark-gray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
