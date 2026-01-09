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
                      <li className="product_img"><a href="/yto-esk550"><img src="/tractors/yto-esk550/YTO-ESK550.jpg" alt="YTO-ESK550 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-esk550">YTO-ESK550 Wheeled Tractor</a>
                        <span>YTO Engine and fuel pump with engine torque reserve reaching 30%, the power is strong, high fuel injection pressure, good atomization performance, sufficient combustion, and low fuel consumption. 55hp power with 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-esk550">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ef804"><img src="/tractors/yto-ef804/YTO-EF804.jpg" alt="YTO-EF804 Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ef804">YTO-EF804 Wheeled Tractor</a>
                        <span>YTO Engine and fuel pump with engine torque reserve reaching 30%, the power is strong, high fuel injection pressure, good atomization performance, sufficient combustion, and low fuel consumption. 80hp power with 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ef804">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1054-cabin"><img src="/tractors/yto-ex1054-cabin/YTO-EX1054-Cabin.jpg" alt="YTO-EX1054 Cabin Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1054-cabin">YTO-EX1054 Cabin Wheeled Tractor</a>
                        <span>Fully enclosed cabin with climate control, sound insulation, and ergonomic design. YTO Engine with 105hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1054-cabin">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1054-canopy"><img src="/tractors/yto-ex1054-canopy/YTO-EX1054-Canopy.jpg" alt="YTO-EX1054 Canopy Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1054-canopy">YTO-EX1054 Canopy Wheeled Tractor</a>
                        <span>Weather-resistant protective canopy providing shade and protection. YTO Engine with 105hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1054-canopy">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-x1204-cabin"><img src="/tractors/yto-x1204-cabin/YTO-X1204-Cabin.jpg" alt="YTO-X1204 Cabin Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-x1204-cabin">YTO-X1204 Cabin Wheeled Tractor</a>
                        <span>Fully enclosed cabin with climate control, sound insulation, and ergonomic design. YTO Engine with 120hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-x1204-cabin">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-x1204-canopy"><img src="/tractors/yto-x1204-canopy/YTO-X1204-Canopy.jpg" alt="YTO-X1204 Canopy Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-x1204-canopy">YTO-X1204 Canopy Wheeled Tractor</a>
                        <span>Weather-resistant protective canopy providing shade and protection. YTO Engine with 120hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-x1204-canopy">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1254-cabin"><img src="/tractors/yto-ex1254-cabin/YTO-EX1254-Cabin.jpg" alt="YTO-EX1254 Cabin Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1254-cabin">YTO-EX1254 Cabin Wheeled Tractor</a>
                        <span>Fully enclosed cabin with climate control, sound insulation, and ergonomic design. YTO Engine with 125hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1254-cabin">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1254-canopy"><img src="/tractors/yto-ex1254-canopy/YTO-EX1254-Canopy.jpg" alt="YTO-EX1254 Canopy Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1254-canopy">YTO-EX1254 Canopy Wheeled Tractor</a>
                        <span>Weather-resistant protective canopy providing shade and protection. YTO Engine with 125hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1254-canopy">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1404-cabin"><img src="/tractors/yto-ex1404-cabin/YTO-EX1404-Cabin.jpg" alt="YTO-EX1404 Cabin Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1404-cabin">YTO-EX1404 Cabin Wheeled Tractor</a>
                        <span>Fully enclosed cabin with climate control, sound insulation, and ergonomic design. YTO Engine with 140hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1404-cabin">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/yto-ex1404-canopy"><img src="/tractors/yto-ex1404-canopy/YTO-EX1404-Canopy.jpg" alt="YTO-EX1404 Canopy Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-ex1404-canopy">YTO-EX1404 Canopy Wheeled Tractor</a>
                        <span>Weather-resistant protective canopy providing shade and protection. YTO Engine with 140hp power, 12F+4R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-ex1404-canopy">Read More</a></div>
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
                      <li className="product_img"><a href="/yto-nlx1604-cabin"><img src="/tractors/yto-nlx1604-cabin/YTO-NLX1604-Cabin.jpg" alt="YTO-NLX1604 Cabin Wheeled Tractor" /></a></li>
                      <li className="product_con"><a href="/yto-nlx1604-cabin">YTO-NLX1604 Cabin Wheeled Tractor</a>
                        <span>Fully enclosed cabin with climate control, sound insulation, and ergonomic design. YTO Engine with 160hp power, 24F+8R transmission.</span>
                      </li>
                      <div className="more2"><a href="/yto-nlx1604-cabin">Read More</a></div>
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
