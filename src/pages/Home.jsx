import { motion } from "framer-motion";
import { CloudCafe } from "../components/CloudCafe.jsx";
import { Pricing } from "./Pricing.jsx";
import { Feedback } from "../components/Feedback.jsx";
import { Speciality } from "../components/Speciality.jsx";
import { Faq } from "../components/Faq.jsx";

export const Home = () => {
  return (
    <div>
      {/* Main */}
      <main className="flex-grow">
        <div>
          {/* Hero Section */}
          <motion.div
            className="relative bg-[#f4e3cf] pb-48 md:pb-64 lg:pb-80"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                className="pt-24 md:pt-16 max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Smarter Restaurant &amp; Inventory Management
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#D7520A] leading-tight mt-2">
                  with POS included.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-[#8e6e3e]">
                  "Stay on top of sales and stock with ease. A complete POS
                  solution to simplify restaurant and inventory management."
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 rounded-md bg-[#d29a48] text-white font-semibold text-lg hover:bg-[#c6821c] transition-colors duration-300"
                >
                  Get Started 
                </motion.button>
              </motion.div>
            </div>

            {/* Video Section */}
            <motion.div
              className="absolute bottom-0 left-1/2 w-[90%] md:w-[80%] lg:w-[70%] -translate-x-1/2 translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div
                className="relative w-full h-auto overflow-hidden shadow-2xl rounded-xl 
                           transform scale-75 hover:scale-90 
                           transition-transform duration-500 ease-in-out hover:shadow-3xl"
                style={{ paddingBottom: "56.25%" }}
              >
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/food_video.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Section (Merged) */}
          <div className="mt-80">
            <section className="bg-[#d29a48] pt-16 pb-24 rounded-[2.5rem] -mt-5 font-sans">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12 mt-12">
                  <motion.h2
                    className="text-[52px] font-bold tracking-tight text-white leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Built for Modern Operations
                  </motion.h2>
                  <motion.p
                    className="mt-8 mb-24 text-lg leading-7 text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    Our platform is engineered to tackle your biggest
                    challenges, from data complexity to operational efficiency,
                    enabling you to focus on what matters most.
                  </motion.p>
                </div>

                {/* First Grid */}
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden h-64 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        alt="Inventory & Supplier Management"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="/image1.jpg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
                        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                          Inventory &amp; Supplier Management
                        </h3>
                        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
                            Gain complete control with real-time stock tracking,
                            automated purchase orders, and seamless supplier
                            communication.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden h-64 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <img
                        alt="Recipe & Menu Management"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="/image2 copy.jpg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
                        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                          Recipe &amp; Menu Management
                        </h3>
                        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
                            Easily create, cost, and scale recipes. Instantly
                            update menus across all platforms to ensure
                            consistency and profitability.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden h-64 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <img
                        alt="Staff & Outlet Management"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="/image3 copy.jpg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
                        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                          Staff &amp; Outlet Management
                        </h3>
                        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
                            Manage schedules, track performance, and oversee
                            multiple locations from a single, intuitive
                            dashboard.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Second Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 4 */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden h-64 group lg:col-span-2"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <img
                        alt="AI Insights & Forecasting"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="/image4 copy.jpg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
                        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                          AI Insights &amp; Forecasting
                        </h3>
                        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
                            Leverage artificial intelligence to predict sales
                            trends, prevent stockouts, and make smarter,
                            data-driven decisions.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div
                      className="relative rounded-2xl overflow-hidden h-64 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <img
                        alt="Integrated POS (for seamless sales & operations)"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        src="/image5 copy.jpg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
                        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                          Integrated POS (for seamless sales &amp; operations)
                        </h3>
                        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
                            Our POS is the heart of your operation, connecting
                            sales data directly to your inventory and analytics
                            for a flawless workflow.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <CloudCafe />
        <Pricing />
        <Feedback />
        <Speciality />
        <Faq />
      </main>
    </div>
  );
};
