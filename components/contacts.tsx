import { motion } from "framer-motion";
import { JSX } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const Contacts = (): JSX.Element => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/praveen-murugan99/",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:praveenmurugan743@gmail.com",
    },
    { icon: <FaPhone />, label: "Phone", url: "tel:+447436208913" },
    {
      icon: <FaGlobe />,
      label: "Website",
      url: "https://sites.google.com/view/praveenmurugan/",
    },
  ];

  return (
    <section className="px-8 py-20" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-center mb-6"
      >
        Get in Touch
      </motion.h2>

      {/* Social Icons Row */}
      <motion.div
        className="flex justify-center gap-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-4xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <div className="flex flex-col items-center">
        <form className="flex flex-col w-full md:w-1/2 gap-4 text-gray-400">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700"
            placeholder="Your Name"
          />
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700"
            placeholder="Email"
            type="email"
          />
          <motion.textarea
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700"
            placeholder="Message"
            rows={4}
          />
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors"
            type="button"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
