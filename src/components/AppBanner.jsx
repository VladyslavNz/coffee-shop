import React, { useRef } from "react";
import bannerImg from "../assets/coffee-cover.jpg";
import AppStore from "../assets/website/app_store.png";
import PlayStore from "../assets/website/play_store.png";
import { motion, useInView } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgorundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const AppBanner = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const appStoreRef = useRef(null);
  const playStoreRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const descInView = useInView(descRef, { once: true });
  const appStoreInView = useInView(appStoreRef, { once: true });
  const playStoreInView = useInView(playStoreRef, { once: true });

  return (
    <div className="container my-14 mx-auto">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
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
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <motion.p
              ref={descRef}
              animate={
                descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis{" "}
            </motion.p>
          </div>
          {/* imager link  */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <motion.img
                ref={appStoreRef}
                animate={
                  appStoreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4,
                }}
                src={AppStore}
                alt=""
              />
            </a>
            <a
              href="#"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <motion.img
                ref={playStoreRef}
                animate={
                  playStoreInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 100 }
                }
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5,
                }}
                src={PlayStore}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
