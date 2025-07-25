import { Quote, Truck, MapPin, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Quote,
      title: "Get Your Quote",
      description: "Fill out our simple form or call us. Get an instant, transparent quote with no hidden fees.",
      step: "01"
    },
    {
      icon: Truck,
      title: "Book Your Transport",
      description: "Choose your preferred shipping method and schedule. We'll match you with verified carriers.",
      step: "02"
    },
    {
      icon: MapPin,
      title: "Track Your Vehicle",
      description: "Stay updated with real-time tracking and direct communication with your driver.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Safe Delivery",
      description: "Your vehicle arrives safely at the destination. Inspect and sign off on successful delivery.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shipping your car across Canada has never been easier. Our simple 4-step process 
            ensures a smooth, hassle-free experience from quote to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-medium">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-canadian-red/10 rounded-full flex items-center justify-center group-hover:bg-canadian-red/20 transition-smooth">
                    <IconComponent className="h-8 w-8 text-canadian-red" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connection Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-canadian-red to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-navy/5 rounded-full px-6 py-3">
            <CheckCircle className="h-5 w-5 text-canadian-red" />
            <span className="text-navy font-semibold">Ready to get started? Get your free quote in under 2 minutes!</span>
          </div>
        </div>
      </div>
    </section>
  );
}