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
  title = "Angel's Trucking Services – Professional Vehicle Transport, Contact us at (780) 707-8444",
  description = "Professional vehicle transport across Alberta & Saskatchewan—Calgary, Edmonton, Saskatoon, Grande Prairie. We also buy scrap cars. Call (780) 707-8444.",
  keywords = "vehicle transport, car shipping, Calgary Edmonton, Saskatoon Grande Prairie, auto transport, car carrier, enclosed transport, Alberta Saskatchewan",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage
}: SEOHeadProps) {
  const baseUrl = "https://www.anglestrucking.com";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:site_name" content="Angel's Trucking Services" />
      <meta property="og:url" content={canonicalUrl || baseUrl} />
      {/* Prefer canonical image; include alt for accessibility */}
      <meta property="og:image" content={ogImage || `${baseUrl}/og-image.jpg?v=3`} />
      <meta property="og:image:secure_url" content={ogImage || `${baseUrl}/og-image.jpg?v=3`} />
      <meta property="og:image:alt" content="Angel's Trucking – Professional Vehicle Transport" />
      <meta property="og:image:width" content="2016" />
      <meta property="og:image:height" content="1134" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || `${baseUrl}/og-image.jpg?v=3`} />
      <meta name="twitter:image:alt" content="Angel's Trucking – Professional Vehicle Transport" />
      
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
          "image": `${baseUrl}/og-image.jpg?v=3`,
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