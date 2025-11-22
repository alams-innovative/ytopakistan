'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function TractorsPage() {
  useEffect(() => {
    document.title = 'Tractors | Agricultural Equipment Supplier | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO, an advanced agricultural machinery supplier, provides different types of utility tractors, compact tractors and narrow tractors to suit various needs.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tractors, utility tractors, compact tractors, narrow tractors');
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
              <li>Tractors</li>
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
            <div className="bannerin bannerin2">
              <div className="bannerinfo_pro"></div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">Tractors</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1054"><img src="/tractors/yto-ex1054/YTO-EX1054.jpg" alt="YTO-EX1054 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1054">YTO-EX1054 Wheeled Tractor</a>
                        <span>YTO Engine and fuel pump with engine torque reserve reaching 30%, the power is strong, high fuel injection pressure, good atomization performance, sufficient combustion, and low fuel consumption.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1054">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1404"><img src="/tractors/yto-ex1404/YTO-EX1404.jpg" alt="YTO-EX1404 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1404">YTO-EX1404 Wheeled Tractor</a>
                        <span>YTO Engine and fuel pump with engine torque reserve reaching 30%, the power is strong, high fuel injection pressure, good atomization performance, sufficient combustion, and low fuel consumption. Transmission dissipation system included.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1404">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-nlx1604"><img src="/tractors/yto-nlx1604/YTO-NLX1604.jpg" alt="YTO-NLX1604 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-nlx1604">YTO-NLX1604 Wheeled Tractor</a>
                        <span>YTO Engine and fuel pump with engine torque reserve reaching 30%, the power is strong. 24F+8R more gearshifts, 38km/h high speed gearbox. Individual hydraulic and transmission oil structure.</span>
                      </li>
                      <div className="more2"><a href="/yto-nlx1604">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-e2004"><img src="/tractors/yto-e2004/YTO-E2004.jpg" alt="YTO-E2004 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-e2004">YTO-E2004 Wheeled Tractor</a>
                        <span>Shangchai Engine with British Riccardo technology, turbocharged inter-cooled, engine reserve power reaches 30%, and the power is strong. 12F+4R transmission with 200hp power.</span>
                      </li>
                      <div className="more2"><a href="/yto-e2004">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-elx2404"><img src="/tractors/yto-elx2404/YTO-ELX2404.jpg" alt="YTO-ELX2404 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-elx2404">YTO-ELX2404 Wheeled Tractor</a>
                        <span>Shangchai Engine with British Riccardo technology, engine reserve power reaches 30%, and the power is strong. 3-stage emission standard engine, turbocharged inter-cooled and high-pressure common rail engine with 240hp power.</span>
                      </li>
                      <div className="more2"><a href="/yto-elx2404">Read More</a></div>
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
