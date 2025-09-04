export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ecd1a9] to-[#f5e9d2] shadow-inner">
      <div className="container mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#6b4f2c] mb-6">Cul AI</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive restaurant and inventory management platform with integrated POS system.
          </p>
          <p className="text-gray-600 mt-10 text-base">
            © 2025 Cul AI. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="font-bold text-2xl mb-6 text-[#6b4f2c]">Quick Links</h3>
          <a href="#" className="text-lg text-gray-700 mb-3 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">Pricing</a>
          <a href="#" className="text-lg text-gray-700 mb-3 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">Find Your Plan</a>
          <a href="#" className="text-lg text-gray-700 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">Get Started</a>
        </div>

        {/* Support */}
        <div className="flex flex-col md:w-1/4">
          <h3 className="font-bold text-2xl mb-6 text-[#6b4f2c]">Support</h3>
          <a href="#" className="text-lg text-gray-700 mb-3 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">Contact Support</a>
          <a href="#" className="text-lg text-gray-700 mb-3 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">Documentation</a>
          <a href="#" className="text-lg text-gray-700 hover:text-[#3a2e1c] transition-transform hover:translate-x-2">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
