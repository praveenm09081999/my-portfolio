import { motion } from "framer-motion";
import { JSX } from "react";
import profilePicture from "@/assets/profile-transparent.webp";

const About = ({
  aboutRef,
  darkMode,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
  darkMode: boolean;
}): JSX.Element => {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 30,
      zIndex: -1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={aboutRef}
      className="min-h-screen px-8 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-lg leading-relaxed list-none"
        >
          {[
            "2.5+ years of experience building web apps and RESTful APIs",
            "Strong foundation in OOP, SOLID, DRY, TDD & BDD principles",
            "Experience with KANBAN and Waterfall agile methodologies",
            "Quick learner, problem solver & friendly collaborator",
          ].map((point, idx) => (
            <motion.li
              key={"about_points_" + idx}
              variants={itemVariants}
              className="flex items-start"
            >
              <span className="text-yellow-400 mr-2">⭐</span>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        src={profilePicture.src}
        alt="Avatar"
        className={`rounded-full w-64 h-64 object-cover border-4 ${
          darkMode ? "border-white" : "border-black"
        } shadow-lg hover:shadow-xl transition-shadow`}
      />
    </section>
  );
};

export default About;
