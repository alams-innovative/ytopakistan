'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          
          <div className="table-responsive mb-5">
            <table className="table table-hover table-striped ke-zeroborder tables">
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <p className="mb-0"><strong>YTO Pakistan - Official Local Presence</strong></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>Address: 16 km, Multan Road, Pakka Mile Stop, Shahpur, Lahore, Pakistan</td>
                </tr>
                <tr>
                  <td>YTO Pakistan Office</td>
                  <td>Tel.:<a href="tel:+92-42-37512567-8">92-42-37512567-8</a></td>
                  <td>Email:<a href="mailto:info@ptmc.com.pk">info@ptmc.com.pk</a>, <a href="mailto:Sales@ptmc.com.pk">Sales@ptmc.com.pk</a></td>
                </tr>
                <tr>
                  <td>WhatsApp</td>
                  <td colSpan={2}><a href="https://wa.me/923026612010" target="_blank" rel="noopener noreferrer">+92 302 6612010</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="clearfix"></div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
    </div>
  );
}
