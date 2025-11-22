'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Service() {
  useEffect(() => {
    document.title = 'Construction Machinery,Wheeled Tractor,Farm Machinery China,YTO Service';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO is China construction machinery manufacturer. We have overseas service center, branch, assembly factory, and spare parts center in Asia, Africa, America and Europe. We have established long-term relationships with over 100 dealers worldwide, and our comprehensive sales and service network extends all over the world, making it easier for customers to purchase our products and acquire spare parts at their convenience. We offer wheeled tractor, crawler tractor, combine harvester, provide construction machinery such as road roller, wheel loader, motor grader, excavator, bulldozer, paver and concrete mixing plant. We have widespread service network and spare parts center, quality farm equipment and construction machinery are provided at lower cost, welcome.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'construction machinery, wheeled tractor, drilling rig, dump truck, pickup truck, farm machinery, tractor, harvester, agricultural machinery, road roller, wheel loader, motor grader, excavator, bulldozer, forklift truck, road paver, diesel engine, farm equipment manufacturer, China farm tractor');
    }
  }, []);

  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container" className="etw_container">
        <div id="etw_producttitle" className="pt-2">
          <div className="content">
            <ul>
              <li><a href="/">Home</a></li>
              <li>Service & Support</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="bannerin bannerin7">
            <div className="bannerinfo_pro"></div>
          </div>
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div itemProp="name">Service & Support</div>
                </div>
                <ul className="discitem3">
                  <li><img src="/images/ser01.png" alt="90 service points" /><span>90 service points</span></li>
                  <li><img src="/images/ser02.png" alt="100 countries and regions" /><span>100 countries and regions</span></li>
                  <li><img src="/images/ser03.png" alt="Reliably and precisely" /><span>Reliably and precisely</span></li>
                </ul>
                <div className="clearfix"></div>
                <p>YTO has a global distribution network consisting of almost 90 service points, through which our products have been exported to over 100 countries and regions. Besides, we have established R&D and production bases in France, Belarus, Côte d'Ivoire, South Africa, etc. to empower us to quick response to customer needs, as well as provide them after-sales service reliably and precisely.</p>
                <p>YTO provides its global dealers with EPC system for online ordering of spare parts (link: epc.yituochina.cn:9000).</p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">About YTO</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
                <li><a href="/history">History</a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
    </div>
  );
}
