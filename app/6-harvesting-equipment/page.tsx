'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function HarvestingEquipmentPage() {
  useEffect(() => {
    document.title = 'Harvesting Equipment | Agricultural Machinery Manufacturer | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO has developed a series of mature harvesters to meet the needs of harvesting wheat, corn, soybeans and other crops. We are the first manufacturer in China to make a breakthrough in harvesting waterlogged or drought-induced lodged crops.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Harvesting equipment, grain harvester, corn harvester, electric riding lawn mower');
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
              <li>Harvesting Equipment</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="harvesting-equipment" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="bannerin bannerin9">
              <div className="bannerinfo_pro"></div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">Harvesting Equipment</h2>
                <p>When the harvest season is coming, you need a trustworthy and reliable harvester. YTO has developed a series of mature harvesters to meet the needs of harvesting wheat, corn, soybeans and other crops. The harvesters are equipped with the anti-clogging mechanism and the advanced technology of grain threshing and cleaning. We are the first manufacturer in China to make a breakthrough in harvesting waterlogged or drought-induced lodged crops.</p>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/6-1-grain-harvester"><img src="/products/6-1-grain-harvester_01b.jpg" alt="Grain Harvester" /></a></li>
                      <li className="product_con"><a href="/6-1-grain-harvester">Grain Harvester</a>
                        <span>Reliable – the high-strength frame made of 16Mn rectangular steel tube reduces damage of vibration; the transmission system applies Peer's bearings and quality belts that have long service life; the hydraulic system consisting of "one hydraulic pump and one motor" is stable and dependable.</span>
                      </li>
                      <div className="more2"><a href="/6-1-grain-harvester">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/6-2-corn-harvester"><img src="/products/6-2-corn-harvester_01b.jpg" alt="Corn Harvester" /></a></li>
                      <li className="product_con"><a href="/6-2-corn-harvester">Corn Harvester</a>
                        <span>Fuel injectors made by Bosch and the high-pressure common rail multimode engine ensure high efficiency while consuming less fuel. The corn header with the unique design has the advantage of quick corn cutting and collecting and it is adjustable for various row spaces.</span>
                      </li>
                      <div className="more2"><a href="/6-2-corn-harvester">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/6-3-electric-riding-lawn-mower"><img src="/products/6-3-electric-riding-lawn-mower_01b.jpg" alt="Electric Riding Lawn Mower" /></a></li>
                      <li className="product_con"><a href="/6-3-electric-riding-lawn-mower">Electric Riding Lawn Mower</a>
                        <span>The lawn mower is particularly designed to mow lawns in yards, park, golf courses and airports. It is driven by the lithium iron phosphate battery which is clean, environmentally friendly and long-endurance. 360 degree zero-turn radius steering design enable strong adaptability to different terrains and smooth steering.</span>
                      </li>
                      <div className="more2"><a href="/6-3-electric-riding-lawn-mower">Read More</a></div>
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
