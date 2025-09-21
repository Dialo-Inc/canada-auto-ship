import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "Angel's Trucking Services - Calgary Edmonton Saskatoon Grand Prairie Vehicle Transport",
  description = "Professional vehicle transport services along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. Safe, reliable, and insured auto shipping with over 10 years of experience.",
  keywords = "vehicle transport, car shipping, Calgary Edmonton, Saskatoon Grand Prairie, auto transport, car carrier, enclosed transport, Alberta Saskatchewan",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage
}: SEOHeadProps) {
  const baseUrl = "https://angelstrucking.ca"; // Update with actual domain

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || `${baseUrl}/og-image.jpg`} />
      <meta property="og:url" content={canonicalUrl || baseUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || `${baseUrl}/og-image.jpg`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Angel's Trucking Services",
          "description": "Professional vehicle transport services along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor",
          "url": baseUrl,
          "telephone": "(780) 707-8444",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Edmonton",
            "addressRegion": "Alberta",
            "addressCountry": "Canada"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.5461",
            "longitude": "-113.4938"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Calgary",
              "addressRegion": "Alberta"
            },
            {
              "@type": "City", 
              "name": "Edmonton",
              "addressRegion": "Alberta"
            },
            {
              "@type": "City",
              "name": "Saskatoon", 
              "addressRegion": "Saskatchewan"
            },
            {
              "@type": "City",
              "name": "Grand Prairie",
              "addressRegion": "Alberta"
            }
          ],
          "serviceType": "Vehicle Transport",
          "priceRange": "$$$",
          "image": `${baseUrl}/angels-trucking-logo.png`,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Transport Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Open Car Transport",
                  "description": "Cost-effective vehicle transport using open carriers"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Enclosed Transport",
                  "description": "Premium protection for luxury and classic vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Truck Transport",
                  "description": "Specialized transport for large vehicles and trucks"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
}