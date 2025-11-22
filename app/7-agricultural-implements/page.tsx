'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function AgriculturalImplementsPage() {
  useEffect(() => {
    document.title = 'Agricultural Machinery | Construction Machinery | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "Since 1995, YTO has committed to providing clients with high-quality agricultural and construction machinery, such as, tractors, harvesters and drilling rigs.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tractor, road roller, crawler tractor, agricultural equipment');
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
              <li>Agricultural Implements</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="bannerin bannerin3">
              <div className="bannerinfo_pro"></div>
            </div>
            
            <div className="js-gallery-wrap">
              <div>
                <h2 itemProp="name">Agricultural Implements</h2>
              </div>
              
              <div className="etw_products etw_products_two mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/7-1-front-loader-backhoe"><img src="/products/7-1-front-loader-backhoe_01b.jpg" alt="Front Loader & Backhoe" /></a></li>
                      <li className="product_con"><a href="/7-1-front-loader-backhoe">Front Loader & Backhoe</a>
                        <span>YTO's front-end loader and backhoe are highly versatile equipment that can be used for a variety of tasks, including digging, loading and grading.</span>
                      </li>
                      <div className="more2"><a href="/7-1-front-loader-backhoe">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/7-2-disc-plough-disc-harrow"><img src="/products/7-2-disc-plough-disc-harrow_01b.jpg" alt="Disc Plough & Disc Harrow" /></a></li>
                      <li className="product_con"><a href="/7-2-disc-plough-disc-harrow">Disc Plough & Disc Harrow</a>
                        <span>The independent plough frame is easy to replace. The whole structure is made of high-strength materials and thus is stable and durable.</span>
                      </li>
                      <div className="more2"><a href="/7-2-disc-plough-disc-harrow">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/7-3-rotary-tiller"><img src="/products/7-3-rotary-tiller_01b.jpg" alt="Rotary Tiller" /></a></li>
                      <li className="product_con"><a href="/7-3-rotary-tiller">Rotary Tiller</a>
                        <span>The integral frame with enhanced side plates is highly resistant to deformation. The separated rotary shaft is easy to replace and thus economic to use.</span>
                      </li>
                      <div className="more2"><a href="/7-3-rotary-tiller">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/7-4-planter"><img src="/products/7-4-planter_01b.jpg" alt="Planter" /></a></li>
                      <li className="product_con"><a href="/7-4-planter">Planter</a>
                        <span>The series of pneumatic precision planter can be used for sowing different crops by quickly changing the sowing discs. It is suitable for flat farming and ridge seeding after soil preparation.</span>
                      </li>
                      <div className="more2"><a href="/7-4-planter">Read More</a></div>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/7-5-dump-trailer"><img src="/products/7-5-dump-trailer_01b.jpg" alt="Dump Trailer" /></a></li>
                      <li className="product_con"><a href="/7-5-dump-trailer">Dump Trailer</a>
                        <span>The dump trailer with high load capacity is easy to use and maintain. It is particularly designed for heavy-duty transportation work.</span>
                      </li>
                      <div className="more2"><a href="/7-5-dump-trailer">Read More</a></div>
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
