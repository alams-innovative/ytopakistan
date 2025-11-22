'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function ProductsBPage() {
  useEffect(() => {
    document.title = 'Tractor,Wheeled Tractor,Crawler Tractor,Farm Implement,China Tractor Manufacturer';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO is China wheeled tractor manufacturer, provide wheel tractor, crawler tractor, combine harvester, wheel loader, forklift truck. Our company has received ISO9000 and ISO14000 certificates, and our products have been awarded E-mark, OECD, CE, EPA, and CCC certificate. We have widespread service network and spare parts center, quality farm equipment and construction machinery are provided at lower cost, welcome.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'wheeled tractor, tractor, crawler tractor, harvester, farm machinery, farm implement, agricultural machinery, road roller, wheel loader, motor grader, excavator, bulldozer, forklift truck, road paver, drilling rig, construction machinery, dump truck, pickup truck, diesel engine, farm equipment manufacturer, China farm tractor');
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
              <li><a href="/products">Products</a></li>
              <li>1995-2018 Products</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="products-b" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="bannerin bannerin10">
              <div className="bannerinfo_pro"></div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">1995-2018 Products</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/1-agricultural-machinery"><img src="/products/1-agricultural-machinery_01.jpg" alt="Agricultural Machinery" /></a></li>
                      <li className="product_con"><a href="/1-agricultural-machinery">Agricultural Machinery</a>
                        <span>In modern times, agricultural equipment such as tractor, seed drill and harvester has been used for plowing, planting and harvesting jobs which were formerly carried out by men or animals such as oxen and horses.</span>
                      </li>
                      <div className="more2"><a href="/1-agricultural-machinery">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/2f-forklift-truck"><img src="/products/2f-forklift-truck_01.jpg" alt="Forklift Truck" /></a></li>
                      <li className="product_con"><a href="/2f-forklift-truck">Forklift Truck</a>
                        <span>As a professional forklift truck manufacturer in China, we can provide a wide range of stacker trucks, such as hydraulic internal combustion fork truck, mechanical internal combustion lift truck, electric forklift, gasoline forklift, and rough terrain lift truck, etc.</span>
                      </li>
                      <div className="more2"><a href="/2f-forklift-truck">Read More</a></div>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
              
              <div className="etw_service etw_service_pro">
                <div className="content">
                  <ul>
                    <li>
                      <ol>
                        <li className="pro_img"><a href="/capabilities"><img src="/images/service01.jpg" alt="Capabilities" /></a></li>
                        <li className="pro_txt"><a href="/capabilities">Capabilities</a></li>
                      </ol>
                    </li>
                    <li>
                      <ol>
                        <li className="pro_img"><a href="/service"><img src="/images/service02.jpg" alt="Service & Support" /></a></li>
                        <li className="pro_txt"><a href="/service">Service & Support</a></li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
    </div>
  );
}
