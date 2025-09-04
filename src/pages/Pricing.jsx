import { useState } from "react";
import { motion } from "framer-motion";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div>
      {/* Pricing Section */}
      <section className="bg-[#f6f0e5] py-24 font-sans overflow-x-hidden">
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-[52px] font-bold text-black leading-tight">
              Find the perfect plan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start for free, then grow with us. Simple, transparent pricing.
            </p>

            {/* Toggle Switch */}
            <div
              className="mt-10 flex justify-center items-center gap-4"
              onClick={togglePricing}
            >
              <span
                className={`font-medium ${
                  !isYearly ? "text-[#D7520A]" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <div
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  isYearly ? "bg-[#D7520A]" : "bg-[#d29a48]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full shadow-md transform-gpu transition-transform duration-300 ease-in-out bg-white ${
                    isYearly ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span
                className={`font-medium ${
                  isYearly ? "text-[#D7520A]" : "text-gray-500"
                }`}
              >
                Yearly (Save 20%)
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto mt-20">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Basic Package */}
            <motion.div
              className="w-96 h-[550px] bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-semibold text-black">
                  Basic Package
                </h3>
                <p className="text-gray-500 mt-4 h-12">
                  Perfect for new restaurants and cafes getting started.
                </p>
                <div className="my-6">
                  <span className="text-5xl font-bold text-[#d29a48]">
                    {isYearly ? "₹45,000" : "₹4,500"}
                  </span>
                  <span className="text-gray-500">
                    {isYearly ? "/yr" : "/mo"}
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">✅ Basic POS System</li>
                  <li className="flex items-center gap-3">✅ Menu Management</li>
                  <li className="flex items-center gap-3">✅ Real-time Sales Tracking</li>
                  <li className="flex items-center gap-3">✅ Email Support</li>
                  <li className="flex items-center gap-3">✅ 2 Hardware Units Included</li>
                </ul>
              </div>
              <button className="w-full mt-6 py-3 rounded-lg font-semibold text-lg text-white bg-[#D7520A] transition-transform hover:scale-105">
                Sign Up
              </button>
            </motion.div>

            {/* Founders Package */}
            <motion.div
              className="w-96 h-[550px] bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-[#D7520A] shadow-2xl relative"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 -translate-y-1/2 bg-[#D7520A] text-white text-sm font-semibold px-4 py-1 rounded-full self-center">
                Most Popular
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-semibold text-black">
                  Founders Package
                </h3>
                <p className="text-gray-500 mt-4 h-12">
                  For established businesses looking to scale and optimize.
                </p>
                <div className="my-6">
                  <span className="text-5xl font-bold text-[#d29a48]">
                    {isYearly ? "₹50,000" : "₹5,000"}
                  </span>
                  <span className="text-gray-500">
                    {isYearly ? "/yr" : "/mo"}
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">✅ Everything in Basic Package</li>
                  <li className="flex items-center gap-3">✅ Advanced Inventory Management</li>
                  <li className="flex items-center gap-3">✅ Up to 2 Branch Licenses Included</li>
                </ul>
              </div>
              <button className="w-full mt-6 py-3 rounded-lg font-semibold text-lg text-white bg-[#D7520A] transition-transform hover:scale-105">
                Sign Up
              </button>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              className="w-96 h-[550px] bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-semibold text-black">Enterprise</h3>
                <p className="text-gray-500 mt-4 h-12">
                  Comprehensive solution for multi-location enterprises.
                </p>
                <div className="my-6">
                  <span className="text-2xl text-[#d29a48] font-semibold">
                    Contact for pricing
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">✅ Multi-Outlet Management</li>
                  <li className="flex items-center gap-3">✅ AI Sales Forecasting</li>
                  <li className="flex items-center gap-3">✅ Priority Phone Support</li>
                  <li className="flex items-center gap-3">✅ Table & Floor Plan Management</li>
                  <li className="flex items-center gap-3">✅ Customer Loyalty Program</li>
                </ul>
              </div>
              <button className="w-full mt-6 py-3 rounded-lg font-semibold text-lg text-white bg-[#D7520A] transition-transform hover:scale-105">
                Sign Up
              </button>
            </motion.div>
          </div>
        </div>

        {/* Choose Your Plan Section */}
        <div className="container mx-auto px-6 text-center mt-20 relative">
          <h3 className="text-2xl font-bold text-black">
            Still not sure which plan is right for you?
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Let us help you find the perfect fit for your business needs.
          </p>
          <button className="inline-block mt-6 px-7 py-3 bg-[#d29a48] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
            Choose Your Plan
          </button>
        </div>
      </section>
    </div>
  );
};
