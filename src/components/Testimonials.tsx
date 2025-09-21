import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Calgary to Edmonton",
      rating: 5,
      text: "Outstanding service! My car was picked up on time in Calgary and delivered in perfect condition in Edmonton. The driver was professional and kept me updated throughout the journey. Highly recommend Angel's Trucking!",
      vehicle: "2022 Honda Civic"
    },
    {
      name: "David Chen",
      location: "Edmonton to Saskatoon",
      rating: 5,
      text: "I was nervous about shipping my classic Mustang, but Angel's Trucking made the process smooth and stress-free. The enclosed transport option gave me peace of mind. Excellent communication and fair pricing.",
      vehicle: "1967 Ford Mustang"
    },
    {
      name: "Maria Rodriguez",
      location: "Saskatoon to Calgary",
      rating: 5,
      text: "Professional service from start to finish. The quote was accurate, pickup was on schedule, and my SUV arrived exactly when promised. Will definitely use them again for my next transport.",
      vehicle: "2021 Toyota RAV4"
    },
    {
      name: "Robert Thompson",
      location: "Grand Prairie to Edmonton",
      rating: 5,
      text: "Great experience shipping my truck along their main route. The team was responsive to my questions and the tracking system kept me informed. Fair pricing and reliable service.",
      vehicle: "2020 Ford F-150"
    },
    {
      name: "Jennifer Park",
      location: "Calgary to Saskatoon",
      rating: 5,
      text: "I needed to ship my car quickly for a job relocation. Angel's Trucking accommodated my tight timeline and delivered my vehicle safely. Professional and efficient service!",
      vehicle: "2023 Subaru Outback"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Customer Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Don't just take our word for it. Here's what real customers say about 
            their experience with Angel's Trucking Services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-strong">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-accent/50" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-white hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <div className="flex items-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-accent font-semibold">{testimonials[currentIndex].location}</div>
                  <div className="text-gray-200 text-sm font-medium">{testimonials[currentIndex].vehicle}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-300">Vehicle shipped</div>
                  <div className="font-semibold text-white">Safely & On Time</div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-gray-200">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-gray-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
            <div className="text-gray-200">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}