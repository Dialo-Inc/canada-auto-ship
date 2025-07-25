import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/cd053653-855d-459f-ab26-ec7a02f6f4da.png",
      title: "Professional Truck Transport",
      description: "Specialized hauling for pickup trucks and large vehicles"
    },
    {
      src: "/lovable-uploads/a3f4466b-b7e3-4d1b-8811-28fb486fa5e7.png", 
      title: "Multi-Vehicle Car Carriers",
      description: "Efficient transport for multiple vehicles in one shipment"
    },
    {
      src: "/lovable-uploads/798b0daf-4947-406f-ab73-1b1596ca848e.png",
      title: "Open Auto Transport",
      description: "Cost-effective shipping for cars, SUVs, and trucks"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            Our Fleet in Action
          </h2>
          <p className="text-xl text-text-dark max-w-2xl mx-auto">
            See our professional transport vehicles delivering across Canada
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large feature images */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              src="/lovable-uploads/cd053653-855d-459f-ab26-ec7a02f6f4da.png"
              alt="Professional Transport"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-blue/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Professional Loading</h3>
              <p className="text-white/90">Expert handling of every vehicle</p>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              src="/lovable-uploads/a3f4466b-b7e3-4d1b-8811-28fb486fa5e7.png"
              alt="Multi-Vehicle Transport"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-blue/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Efficient Transport</h3>
              <p className="text-white/90">Multiple vehicles, single journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-200">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}