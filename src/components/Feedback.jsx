import { motion } from "framer-motion";

export const Feedback = () => {
  return (
    <div>
      <section className="bg-white text-[#d29f54] py-20 sm:py-28 font-sans">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="mx-auto max-w-2xl text-center mb-12"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-[52px] font-bold tracking-tight text-black leading-tight">
              What our clients say
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              Discover how businesses like yours are leveraging our platform to
              drive growth and operational excellence.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Quote */}
            <motion.div
              className="relative h-40 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
                "This platform has completely transformed our operations. The
                ability to see real-time inventory and sales data in one place
                is a game-changer for our business."
              </blockquote>
            </motion.div>

            {/* Clients */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              {/* Sarah Johnson */}
              <motion.div
                className="p-4 rounded-xl cursor-pointer transition-all duration-300 border bg-gray-50 border-gray-200 hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
                  />
                  <div className="flex-grow">
                    <p className="font-bold text-base text-gray-900">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-gray-500">
                      Owner, The Corner Bistro
                    </p>
                  </div>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#d29f54] rounded-full transition-all ease-linear w-full"
                    style={{ transitionDuration: "5000ms" }}
                  ></div>
                </div>
              </motion.div>

              {/* Michael Chen */}
              <motion.div
                className="p-4 rounded-xl cursor-pointer transition-all duration-300 border border-transparent opacity-70 hover:opacity-100 hover:bg-gray-50 hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
                  />
                  <div className="flex-grow">
                    <p className="font-bold text-base text-gray-900">
                      Michael Chen
                    </p>
                    <p className="text-sm text-gray-500">
                      Head Chef, Urban Spoon
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Emily Rodriguez */}
              <motion.div
                className="p-4 rounded-xl cursor-pointer transition-all duration-300 border border-transparent opacity-70 hover:opacity-100 hover:bg-gray-50 hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Emily Rodriguez"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
                  />
                  <div className="flex-grow">
                    <p className="font-bold text-base text-gray-900">
                      Emily Rodriguez
                    </p>
                    <p className="text-sm text-gray-500">
                      Operations Manager, Brew &amp; Co.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
