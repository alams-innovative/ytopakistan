'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Agricultural Machinery,Wheeled Tractor,Farm Tractor,China Tractor Manufacturer';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO is China agricultural machinery manufacturer. We are in Henan Province, China. We offer wheeled tractor, crawler tractor, combine harvester, provide construction machinery such as road roller, wheel loader, motor grader, excavator, bulldozer, paver and concrete mixing plant. We have widespread service network and spare parts center, quality farm equipment and construction machinery are provided at lower cost, welcome.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'agricultural machinery, wheeled tractor, tractor, harvester, farm machinery, road roller, wheel loader, motor grader, excavator, bulldozer, forklift truck, road paver, drilling rig, construction machinery, dump truck, pickup truck, diesel engine, farm equipment manufacturer, China farm tractor');
    }
  }, []);

  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container">
        <div id="etw_producttitle" className="pt-2">
          <div className="content">
            <ul>
              <li><a href="/">Home</a></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <p>YTO Pakistan is the official local presence of YTO Co, Ltd. Delivering advanced agricultural Tractors to the Pakistani market with a strong focus on reliability, performance, and long-term customer support. YTO International, Ltd., a subsidiary of the YTO Group, has established a strong presence in Pakistan, providing high-quality agricultural machinery and equipment to farmers and businesses across the country. The YTO Group offers four pillar products: agricultural equipment, construction machinery, vehicles, and power machinery. With our local office in Lahore, we are committed to serving the Pakistani market with world-class products and comprehensive after-sales support.</p>
          <p className="mb-4">YTO Pakistan warmly welcomes customers from across Pakistan with sincerity and efficient service. We are dedicated to supporting the agricultural sector in Pakistan with reliable machinery and excellent customer service for a prosperous future.</p>
          
          <div className="clearfix"></div>
          
          {/* Two Column Layout: Form Left, Map Right */}
          <div className="contact-two-col">
            {/* Left Side - Form */}
            <div className="contact-form-side">
              <ContactForm showTitle={true} />
              
              {/* WhatsApp Button - Under Form */}
              <div className="mt-4 text-center">
                <a 
                  href="https://wa.me/923115997569?text=Hi%2C%20I%20am%20interested%20in%20YTO%20Tractors.%20Please%20provide%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* Right Side - Google Map */}
            <div className="contact-map-side">
              <div className="contact-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703.2377027872283!2d74.32496115!3d31.45247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190145ae93ab97%3A0x72c098e47c3b07fe!2sPak%20Tractor%20Manufacturing%20Company!5e0!3m2!1sen!2spk!4v1712600000000!5m2!1sen!2spk"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pak Tractor Manufacturing Company - Location"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/C92so1ztScyUm1Ss5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="clearfix"></div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
    </div>
  );
}
