import { motion } from "framer-motion";
import { JSX } from "react";
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = (): JSX.Element => {
  return (
    <section className="px-8 py-20 bg-gray-100 dark:bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 dark:text-white"
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        <motion.h3
          variants={item}
          className="text-3xl font-semibold md:col-span-3 
                     bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-cyan-300 
                     bg-clip-text text-transparent"
        >
          Recursive Programming
        </motion.h3>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <h4 className="text-2xl font-bold mb-2 dark:text-white">
            {" "}
            Grid Flow Connectivity
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Interactive web app visualizing & solving 2D pipe network puzzles.
            Finds connected sinks using recursive search.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://praveenm09081999.github.io/Connected-Sinks-Vitejs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline mr-4 font-medium"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/praveenm09081999/Connected-Sinks-Vitejs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              View Code
            </a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <h4 className="text-2xl font-bold mb-2 dark:text-white">
            Organisational Chart Visualiser
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Innovative recursive algorithm that parses nested array structures
            into interactive organisational charts.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex gap-4">
            <a
              href="https://praveenm09081999.github.io/tree_structure/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              Live Demo
            </a>
            <div className="relative group">
              <a
                href="https://github.com/praveenm09081999/tree_structure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
              >
                View Code
              </a>
              <span className="text-xs text-red-500 ml-1">(Deprecated)</span>
              <div className="absolute z-10 w-64 p-2 text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Built with react-scripts (now deprecated). Architecture
                demonstrates recursive programming despite outdated build tools.
              </div>
            </div>
          </div>
        </motion.div>
        {/* --- End of Recursive Programming Category --- */}
        <motion.h3
          variants={item}
          className="text-3xl font-semibold mt-8 md:col-span-3 
                     bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-cyan-300 
                     bg-clip-text text-transparent"
        >
          Pattern Recognition - Programming
        </motion.h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <div className="flex items-start gap-3 mb-2">
            <h4 className="text-2xl font-bold dark:text-white flex-grow">
              Hops
            </h4>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
            Solved by recognising the movement pattern - computes minimum time
            for all frogs to reach shore in O(F) time.
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://github.com/praveenm09081999/hops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              View Code
            </a>
          </div>
        </motion.div>
        {/* --- End of Pattern Recognition Category --- */}
        <motion.h3
          variants={item}
          className="text-3xl font-semibold mt-8 md:col-span-3 
                     bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-cyan-300 
                     bg-clip-text text-transparent"
        >
          Imperative Programming
        </motion.h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <h4 className="text-2xl font-bold mb-2 dark:text-white">
            {" "}
            Kaitenzushi Dish Counter
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Designed an O(N) time algorithm using a sliding window approach with
            a Set and pointer-based eviction to track the last K eaten dishes.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://github.com/praveenm09081999/Kaitenzushi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              View Code
            </a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <div className="flex items-start gap-3 mb-2">
            <h4 className="text-2xl font-bold dark:text-white flex-grow">
              Cafeteria
            </h4>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
            Optimal solution for seating additional diners while maintaining
            social distancing constraints (K empty seats between diners).
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://github.com/praveenm09081999/cafeteria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium mr-4"
            >
              View Code
            </a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <div className="flex items-start gap-3 mb-2">
            <h4 className="text-2xl font-bold dark:text-white flex-grow">
              Director of Photography - 1
            </h4>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
            Brute-force solution demonstrating precise constraint checking and
            combinatorial logic. Efficient for the problem's bounded input size
            (N ≤ 200).
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://github.com/praveenm09081999/director_of_photography1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              View Code
            </a>
          </div>
        </motion.div>
        {/* --- End of Imperative Programming Category --- */}
        <motion.h3
          variants={item}
          className="text-3xl font-semibold mt-8 md:col-span-3 
                     bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-cyan-300 
                     bg-clip-text text-transparent"
        >
          Greedy Algorithm
        </motion.h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
        >
          <div className="flex items-start gap-3 mb-2">
            <h4 className="text-2xl font-bold dark:text-white flex-grow">
              Stack Stabilization - 1
            </h4>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
            Solved by sequentially checking each disc from top to bottom,
            ensuring each disc's radius is strictly smaller than the one below
            it through minimal deflations.
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="https://github.com/praveenm09081999/stack_stabilization1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
            >
              View Code
            </a>
          </div>
        </motion.div>
        {/* --- End of Greedy Algorithm Category --- */}
      </div>{" "}
      {/* End of Grid Container */}
    </section>
  );
};

export default Projects;
