import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does it cost to ship a car in Canada?",
      answer: "Car shipping costs in Canada typically range from $500 to $1,500 depending on the distance, vehicle type, and shipping method. Factors affecting price include pickup/delivery locations, vehicle size, transport type (open vs. enclosed), and seasonal demand. We provide free, instant quotes with transparent pricing and no hidden fees."
    },
    {
      question: "How long does car shipping take across Canada?",
      answer: "Transit times vary by distance: within the same province (1-3 days), coast-to-coast (7-10 days), and between neighboring provinces (3-5 days). Weather conditions, driver schedules, and route efficiency can affect timing. We provide estimated delivery windows and keep you updated throughout the journey."
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes, all vehicles are covered by comprehensive carrier insurance during transport. Our licensed carriers maintain commercial auto liability and cargo insurance. We recommend documenting your vehicle's condition before pickup and reviewing the insurance coverage details, which we'll provide with your shipping contract."
    },
    {
      question: "What's the difference between open and enclosed transport?",
      answer: "Open transport uses standard car carriers (like you see on highways) and is more affordable, while enclosed transport provides full protection from weather and road debris in a covered trailer. Enclosed shipping is recommended for luxury vehicles, classics, or high-value cars. Open transport is safe and suitable for most standard vehicles."
    },
    {
      question: "How do I prepare my car for shipping?",
      answer: "Remove all personal items, ensure your car has 1/4 tank of gas, clean the vehicle for inspection, secure or remove loose parts, disable toll tags/alarms, and take photos for documentation. We'll provide a detailed preparation checklist once you book. Your vehicle should be in running condition unless special arrangements are made."
    },
    {
      question: "Can I track my vehicle during shipping?",
      answer: "Yes, we provide real-time tracking and regular updates throughout the shipping process. You'll receive your driver's contact information for direct communication, estimated pickup/delivery times, and notifications of any schedule changes. Our customer service team is also available 24/7 for updates."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept cash, certified checks, money orders, and e-transfers. A small deposit may be required to secure your booking, with the balance due upon delivery. We do not accept personal checks or credit cards for the final payment to ensure secure transactions for both parties."
    },
    {
      question: "Do you ship to remote areas in Canada?",
      answer: "We provide service to most locations across Canada, including remote areas. For locations outside major cities, we may arrange delivery to the nearest accessible point and coordinate final delivery. Additional fees may apply for very remote locations. Contact us to confirm service availability to your specific location."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-canadian-red/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="h-4 w-4 text-canadian-red" />
            <span className="text-canadian-red font-semibold">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the most common questions about car shipping in Canada. 
            Can't find what you're looking for? Contact our team directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-smooth"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-navy pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-canadian-red" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert team is ready to help you with any questions about car shipping in Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1-800-SHIP-CAR">
                <button className="bg-canadian-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-canadian-red-light transition-smooth">
                  Call: 1-800-SHIP-CAR
                </button>
              </a>
              <a href="/contact">
                <button className="border border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-smooth">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}