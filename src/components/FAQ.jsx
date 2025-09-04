import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the POS system integrate with inventory management?",
      answer:
        "Our POS system offers seamless, real-time integration with inventory. Every sale automatically updates your stock levels, tracks ingredient usage for each recipe, and provides low-stock alerts to prevent shortages before they happen.",
    },
    {
      question: "Is the system easy for new staff to learn and use?",
      answer:
        "Yes! Our system is designed with simplicity in mind. Even staff with minimal technical experience can quickly get comfortable using the intuitive interface.",
    },
    {
      question: "What kind of hardware is compatible with your software?",
      answer:
        "Our software works seamlessly with most standard POS hardware, including receipt printers, barcode scanners, and cash drawers.",
    },
    {
      question: "What types of reports and analytics can I access?",
      answer:
        "You can access detailed sales reports, inventory usage, staff performance, and customer insights to help you make informed business decisions.",
    },
    {
      question: "What is the pricing model for the POS and inventory system?",
      answer:
        "We offer flexible pricing plans based on your restaurant size and needs. Choose between monthly and yearly subscriptions with no hidden fees.",
    },
  ];

  return (
    <section className="bg-[#f9f7f4] py-24">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Have questions? We have answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-xl font-semibold text-black">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <MinusCircle
                    className="h-7 w-7 flex-shrink-0 text-[#D7520A]"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusCircle
                    className="h-7 w-7 flex-shrink-0 text-[#d29f54]"
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && faq.answer && (
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ marginTop: "16px" }}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
