'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function Products() {
  useEffect(() => {
    document.title = 'Tractors | Agricultural Machinery | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO provides a complete range of tractors, including utility tractors, compact tractors and narrow tractors to suit various agricultural needs.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tractors, utility tractors, compact tractors, narrow tractors, agricultural machinery');
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
              <li>Products</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="tractors" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="bannerin bannerin1">
              <div className="bannerinfo_pro">
              </div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">Products</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/5-tractors"><img src="/tractors/yto-ex1054/YTO-EX1054.jpg" alt="Tractors" /></a></li>
                      <li className="product_con"><a href="/5-tractors">Tractors</a> <span>YTO, an advanced agricultural machinery supplier, provides different types of utility tractors, compact tractors and narrow tractors to suit various needs.</span> </li>
                      <div className="more2"><a href="/5-tractors">Read More</a></div>
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
