"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { TypeAnimation } from "react-type-animation";
import HeroParticles from "./hero_particles";

const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const fireConfetti = () => {
  const defaults = {
    origin: { y: 0.6 },
    spread: randomInRange(50, 80),
    particleCount: randomInRange(60, 110),
    scalar: 1.2,
    colors: ["#FFC0CB", "#9370DB", "#87CEFA", "#FFA500"], // Pastel confetti colors
  };
  confetti({
    ...defaults,
    angle: randomInRange(100, 140),
  });
  confetti({
    ...defaults,
    angle: randomInRange(40, 80),
  });
};

const Hero = ({
  aboutRef,
  darkMode,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
  darkMode: boolean;
}): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fireConfetti();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <HeroParticles darkMode={darkMode} />

      <div className="relative flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 dark:from-gray-600 dark:to-gray-800 mb-8 flex items-center justify-center shadow-xl"
        >
          <span className="text-4xl md:text-5xl">👋</span>
        </motion.div>

        <motion.h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent ${
            darkMode
              ? "bg-gradient-to-r from-gray-300 to-white" // Dark mode
              : "bg-gradient-to-t from-gray-900 to-gray-600" // Bright mode
          }`}
        >
          Hey, I'm Praveen
        </motion.h1>
        <div className="text-xl md:text-2xl lg:text-3xl min-h-[60px] md:min-h-[80px]">
          <TypeAnimation
            key={darkMode ? "dark" : "light"}
            sequence={[
              "Full-Stack Developer",
              2000,
              "Building Modern Web Experiences",
              2000,
              "From Pixel-Perfect UI to Scalable APIs",
              2000,
              "Delivering Elegant Code",
              2000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
            style={{
              display: "inline-block",
              background: darkMode
                ? "linear-gradient(90deg, #a0aec0, #ffffff)"
                : "linear-gradient(90deg,rgb(1, 1, 10),rgb(93, 93, 93))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 500,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 2.0,
            },
          }}
          className="mt-16 cursor-pointer group"
          onClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div
            className="w-10 h-16 rounded-full border-2 border-white/50 flex justify-center 
          p-1 group-hover:border-white/80 transition-colors"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
          <p className="mt-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
            Explore More
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
