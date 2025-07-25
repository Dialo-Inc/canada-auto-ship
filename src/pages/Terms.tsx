import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().getFullYear()}</p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Service Agreement</h2>
            <p className="text-gray-600 mb-4">
              By using our services, you agree to these terms and conditions. Please read them carefully 
              before booking any auto transport services.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Vehicle Condition</h2>
            <p className="text-gray-600 mb-4">
              Vehicles must be in running condition unless special arrangements are made. 
              You are responsible for preparing your vehicle according to our guidelines.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Insurance Coverage</h2>
            <p className="text-gray-600 mb-4">
              All shipments are covered by carrier insurance. Additional coverage options are available. 
              Claims must be reported within 24 hours of delivery.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For questions about these terms, contact us at 
              <a href="mailto:legal@canadaautoship.ca" className="text-canadian-red hover:underline ml-1">
                legal@canadaautoship.ca
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}