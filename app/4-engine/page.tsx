'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function DieselEnginePage() {
  useEffect(() => {
    document.title = 'Diesel Engine,OEM Parts,Farm Machinery,China Engine Manufacturer';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO is China diesel engine manufacturer. Our diesel engine delivers much more of their rated power and burns less fuel. It produces less waste heat in exhaust. We also offer crawler tractor, combine harvester, wheel loader. Our products are CE, E-mark and CCC certified. We have widespread service network and spare parts center, quality farm equipment and construction machinery are provided at lower cost, welcome.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'diesel engine, tractor, farm machinery, wheeled tractor, construction machinery, road roller, wheel loader, motor grader, excavator, bulldozer, forklift truck, drilling rig, dump truck, farm equipment manufacturer, China farm tractor');
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
              <li>Diesel Engine & Genset</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="diesel-engine" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="bannerin bannerin4">
              <div className="bannerinfo_pro"></div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">Diesel Engine & Genset</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/4a-diesel-engine"><img src="/products/4a-diesel-engine_01b.jpg" alt="Diesel Engine" /></a></li>
                      <li className="product_con"><a href="/4a-diesel-engine">Diesel Engine</a>
                        <span>YTO is a professional ISO9001:2008 diesel engine manufacturer in China. Our diesel engines are available in more then 60 types. They are specially designed for tractor and construction machinery.</span>
                      </li>
                      <div className="more2"><a href="/4a-diesel-engine">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/4-2-generator-set"><img src="/products/4-2-generator-set_01b.jpg" alt="Generator Set" /></a></li>
                      <li className="product_con"><a href="/4-2-generator-set">Generator Set</a>
                        <span>YTO has developed YTR/LR/S/H series diesel generator sets (genset) made up of the diesel engines independently manufactured by YTO (Luoyang) Engine Machinery Company.</span>
                      </li>
                      <div className="more2"><a href="/4-2-generator-set">Read More</a></div>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
              
              <div>
                <p>As a diesel engine manufacturer with over 50 years of experience, we at YTO can provide customers with a wide range of diesel engines. In order to complement our collection of engines, we also offer related diesel engine parts for customers' convenience.</p>

                <p>As our diesel engine uses the heat of compression to initiate ignition to burn the fuel, it doesn't require an electrical ignition system, which significantly improves the reliability. In addition, compared with a petrol engine, our diesel engine delivers much more of their rated power and burns less fuel. Moreover, our diesel engine produces less waste heat in exhaust. As a result, our engine is very popular with customers all over the world.</p>

                <p className="mb-2"><strong>In order to help users reduce fuel costs, here we give some fuel saving methods</strong></p>
                <ul className="item">
                  <li>The utilization of a fuel saving, smoke reduction device can not only reduce environmental pollution but also save up to 5% on fuel costs.</li>
                  <li>The adoption of an inertia supercharger will help increase diesel engine's power by 15% and reduce fuel consumption by 3%～5%.</li>
                  <li>Wrapping the fuel filter element with 2-3 layers of absorbing paper can improve the fuel cleanliness and reduce fuel consumption as well.</li>
                  <li>Adding a layer of 8～20mm foam plastic between the two filter screens can improve the filtration effect and ensure normal combustion of the fuel, thus reducing fuel consumption.</li>
                  <li>Connecting the oil return pipe to the high pressure oil pipe could make the return oil enter into the low pressure oil circuit, which greatly saves fuel without affecting normal combustion.</li>
                </ul>

                <p>In addition to diesel engine, we also offer other products such as crawler tractor, combine harvester, wheel loader, and so on. Our products are CE, E-mark and CCC certified, so please feel at ease in using them.</p>
                <p>We at YTO have many overseas offices, branches, assembly factories, and spare parts centers in Asia, Africa, America and Europe. This, coupled with our more than 100 dealers throughout the world, makes it easier for customers to acquire spare parts and purchase our agriculture machinery and construction machinery. <br />
                  Thanks for visiting our website! If you are in need of more information, please contact us!</p>
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
