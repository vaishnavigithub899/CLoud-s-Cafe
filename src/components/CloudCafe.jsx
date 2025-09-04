import React from "react";
import { motion } from "framer-motion";

export const CloudCafe = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="max-w-6xl mx-auto py-32 px-4 font-sans">
      <motion.h2
        className="text-[52px] font-bold text-center mb-16 text-black"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Who we serve
      </motion.h2>

      <div className="flex flex-col gap-24">
        {/* Restaurants */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="text-[#D7520A] mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D7520A]">
                Restaurants
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-6">
              From fine dining to fast casual, our POS is built to handle
              complex orders, manage tables, and keep your front and back of
              house perfectly in sync. Streamline service and turn tables
              faster.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#D7520A] font-semibold hover:text-black transition-colors"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-96 h-96 rounded-2xl bg-[#D7520A] ml-8"></div>
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <img
                alt="Restaurants"
                className="rounded-xl shadow-2xl object-cover w-96 h-96 mt-24"
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Cafés */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 md:flex-row-reverse"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="text-[#D7520A] mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D7520A]">Cafés</h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-6">
              Serve your customers their daily brew faster with quick order
              entry and seamless integrated payments. Effortlessly manage your
              inventory of beans, pastries, and supplies.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#D7520A] font-semibold hover:text-black transition-colors"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-96 h-96 rounded-2xl bg-[#D7520A] mr-8"></div>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <img
                alt="Cafés"
                className="rounded-xl shadow-2xl object-cover w-96 h-96 mt-24"
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Cloud Kitchens */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="text-[#D7520A] mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D7520A]">
                Cloud Kitchens
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-6">
              Optimize your delivery-focused model with robust online order
              integration and kitchen display systems. Ensure every order is
              accurate and sent out on time.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#D7520A] font-semibold hover:text-black transition-colors"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-96 h-96 rounded-2xl bg-[#D7520A] ml-8"></div>
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <img
                alt="Cloud Kitchens"
                className="rounded-xl shadow-2xl object-cover w-96 h-96 mt-24"
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
