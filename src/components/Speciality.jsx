import { motion } from "framer-motion";

export const Speciality = () => {
  return (
    <div>
      <section className="py-24 bg-gradient-to-b from-[#f9f7f4] to-[#f6f0e5]">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              All-in-One Platform
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              From inventory to sales, our platform provides all the tools you
              need to run your restaurant efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side */}
            <motion.div
              className="flex flex-col lg:mt-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Inventory */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 bg-[#F9FAFB] text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-box w-7 h-7"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                  <span className="font-medium">Inventory</span>
                </motion.button>

                {/* Recipes */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 bg-[#d29f54] text-white shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers w-7 h-7"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                  <span className="font-medium">Recipes</span>
                </motion.button>

                {/* Staff */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 bg-[#F9FAFB] text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-7 h-7"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span className="font-medium">Staff</span>
                </motion.button>

                {/* POS */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 bg-[#F9FAFB] text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-monitor-smartphone w-7 h-7"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                    <path d="M10 19v-3.96 3.15"></path>
                    <path d="M7 19h5"></path>
                    <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                  </svg>
                  <span className="font-medium">POS</span>
                </motion.button>

                {/* Dashboard */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 bg-[#F9FAFB] text-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-dashboard w-7 h-7"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                  <span className="font-medium">Dashboard</span>
                </motion.button>
              </div>

              {/* Content Box */}
              <motion.div
                className="p-6 rounded-xl bg-[#F9FAFB] border-1 border-[#d29f54]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-black mb-4">Recipes</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Digitize your recipes, calculate costs with precision, and
                  ensure consistency across all your dishes. Create detailed
                  recipe cards with ingredients, measurements, cooking
                  instructions, and nutritional information. Track recipe
                  profitability, scale portions automatically, and maintain
                  quality standards across all locations with step-by-step
                  cooking guides.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0">
                  <div className="w-full h-full grid grid-cols-2 gap-2 p-2 bg-white">
                    <img
                      alt="Recipe ingredients"
                      className="w-full h-full object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1710091691777-3115088962c4?w=600&auto=format&fit=crop&q=60"
                    />
                    <div className="flex flex-col gap-2">
                      <img
                        alt="Cooking process"
                        className="w-full h-1/2 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=200&fit=crop&crop=entropy&auto=format&q=80"
                      />
                      <img
                        alt="Recipe book"
                        className="w-full h-1/2 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
