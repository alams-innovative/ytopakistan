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
            </div>
            
            {/* Right Side - Google Map */}
            <div className="contact-map-side">
              <p className="contact-map-intro">
                <a
                  href="https://maps.app.goo.gl/jdQqsYWKJbYyfszh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-pin-link"
                >
                  Google Maps pin — PTMC Lahore
                </a>
              </p>
              <div className="contact-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.4754055744567!2d74.32276!3d31.45247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190145ae93ab97%3A0x72c098e47c3b07fe!2sPak%20Tractor%20Manufacturing%20Company!5e0!3m2!1sen!2spk!4v1712600000000!5m2!1sen!2spk"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pak Tractor Manufacturing Company — Google Maps location"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/jdQqsYWKJbYyfszh8" 
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
