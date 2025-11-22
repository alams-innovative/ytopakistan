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
          <p>YTO International, Ltd., a subsidiary of the YTO Group, dealing with international business exclusively, has extended the business in more than 100 countries/regions, and has established fixed and friendly cooperation with several hundreds of world famous companies. The YTO Group has four pillar products, namely agricultural equipment, construction machinery, vehicles and power machinery. The YTO undertakes extensive international cooperation, including trades, labor export, OEM and BOT. Now the company has established overseas service centers, branches, assembly factories, and spare parts centers in Asia, Africa, America and Europe. Our worldwide network is ready to provide high-quality products and perfect service.</p>
          <p className="mb-4">YTO International, Ltd. would like to warmly welcome customers from all over the world with sincerity and efficient service for the best future of both sides.</p>
          
          <div className="clearfix"></div>
          
          <div className="table-responsive mb-5">
            <table className="table table-hover table-striped ke-zeroborder tables">
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <p className="mb-0"><strong>YTO International, Ltd.</strong></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>Address: 16 km, Multan Road, Pakka Mile Stop, Shahpur, Lahore Pakistan</td>
                </tr>
                <tr>
                  <td>Office in Pakistan</td>
                  <td>Tel.:<a href="tel:+92-42-37512567-8">92-42-37512567-8</a></td>
                  <td>Email:<a href="mailto:info@ptmc.com.pk">info@ptmc.com.pk</a>, <a href="mailto:sales@ptmc.com.pk">sales@ptmc.com.pk</a></td>
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
