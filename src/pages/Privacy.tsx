import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().getFullYear()}</p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you request a quote, 
              book a shipment, or contact our customer service team.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you about your shipments.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy, please contact us at 
              <a href="mailto:privacy@canadaautoship.ca" className="text-canadian-red hover:underline ml-1">
                privacy@canadaautoship.ca
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}