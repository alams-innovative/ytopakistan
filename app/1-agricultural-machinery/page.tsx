'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function AgriculturalMachineryPage() {
  useEffect(() => {
    document.title = 'Wheeled Tractor,Crawler Tractor,Farm Tractor,China Agricultural Machinery';
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
              <li>Agricultural Machinery</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar activeCategory="products-b" activeProduct="agricultural-machinery" />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div >
                <h2>Agricultural Machinery</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/1a-wheel-tractor"><img src="/1-agricultural/1-1-1d.jpg" alt="Wheeled Tractor" /></a></li>
                      <li className="product_con">
                        <a href="/1a-wheel-tractor">Wheeled Tractor</a>
                        <span>YTO wheeled tractor is designed to deliver a high tractive effort, for the purposes of hauling implements used in agriculture or construction. According to its drive mode, the wheeled tractor can be generally classified into 2WD tractor and 4WD tractor.</span>
                      </li>
                      <div className="more2"><a href="/1a-wheel-tractor">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/1b-crawler-tractor"><img src="/1-agricultural/2-1-1d.jpg" alt="Crawler Tractor" /></a></li>
                      <li className="product_con">
                        <a href="/1b-crawler-tractor">Crawler Tractor</a>
                        <span>YTO crawler tractor is a vehicle that runs on continuous tracks. Compared with wheeled tractor, it is in contact with a large surface area, and consequently, exerts a much lower force per unit area on the ground.</span>
                      </li>
                    </ol>
                    <div className="more2"><a href="/1b-crawler-tractor">Read More</a></div>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/1c-combine-harvester"><img src="/1-agricultural/3-1-1d.jpg" alt="Combine Harvester" /></a></li>
                      <li className="product_con">
                        <a href="/1c-combine-harvester">Combine Harvester</a>
                        <span>As a Chinese combine harvester manufacturer with decades of experience, we can offer customers high quality grain harvester and corn harvester. Additionally, our combine harvesters are available in various models for you to choose from.</span>
                      </li>
                      <div className="more2"><a href="/1c-combine-harvester">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/1d-farming-tool"><img src="/1-agricultural/5-1-1d.jpg" alt="Implement & Attachment" /></a></li>
                      <li className="product_con">
                        <a href="/1d-farming-tool">Implement & Attachment</a>
                        <span>As an ISO9000 certified tractor implement manufacturer in China, we at YTO have been devoted to providing reliable and economical tractor implement and tractor with loader since our very beginning.</span>
                      </li>
                      <div className="more2"><a href="/1d-farming-tool">Read More</a></div>
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
                        <li className="pro_txt">
                          <a href="/capabilities">Capabilities</a>
                          <span>YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.</span>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <ol>
                        <li className="pro_img"><a href="/service"><img src="/images/service02.jpg" alt="Service & Support" /></a></li>
                        <li className="pro_txt">
                          <a href="/service">Service & Support</a>
                          <span>Wining trust of clients from more than 100 countries and regions, we have built manufacturing and R&D bases in France, Belarus, Cuba and South Africa.</span>
                        </li>
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
