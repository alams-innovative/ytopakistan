'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Videos() {
  useEffect(() => {
    document.title = 'Agricultural Machinery Manufacturer | Videos | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'As an experienced manufacturer of agricultural machinery since 1955, YTO has committed to manufacturing a variety of high quality agricultural equipment such as tractors, harvesting equipment, agricultural implements, diesel engines and generator sets.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Agricultural machinery, agricultural tractors, harvesting equipment');
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
              <li>Videos</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="js-gallery-wrap">
            <div>
              <div className="video_title">
                <div itemProp="name">Videos</div>
              </div>
            </div>
            
            <div className="clearfix"></div>
            
            <div className="protitle1"><span>Company Videos</span></div>
            <div className="etwvideo_hub etwvideo_hub1 mb-4">
              <ul>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/company-profile">
                        <div className="video_btn2"></div>
                        <img src="/images/video01.jpg" alt="Company Profile" />
                      </a>
                    </li>
                    <li className="product_con">
                      <a href="/video/company-profile">Company Profile</a>
                      <span>YTO Co., Ltd., or YTO, has committed to manufacturing agricultural machinery since 1955, such as, tractors, harvesting equipment, agricultural implements, diesel engines and generator sets. YTO is a major and long-standing agricultural machine manufacturer in China. Its predecessor, China First Tractor Company, was one of the 156 major projects outlined in the First Five-Year Plan (1953-57) and a giant in China's agricultural industry.</span>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
            
            <div className="clearfix"></div>
            
            <div className="protitle1"><span>Product Videos</span></div>
            <div className="etwvideo_hub mb-4">
              <ul>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/yto-tractor-in-pakistan">
                        <div className="video_btn2"></div>
                        <img src="/images/video02.jpg" alt="YTO Tractor in Pakistan" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/yto-tractor-in-pakistan">YTO Tractor in Pakistan</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/yto-tractor-in-ukrain">
                        <div className="video_btn2"></div>
                        <img src="/images/video03.jpg" alt="YTO Tractor in Ukrain" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/yto-tractor-in-ukrain">YTO Tractor in Ukrain</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/tractor">
                        <div className="video_btn2"></div>
                        <img src="/images/video04.jpg" alt="LF2204 Tractor" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/tractor">LF2204 Tractor</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/tractor-in-ploughing-operation">
                        <div className="video_btn2"></div>
                        <img src="/images/video05.jpg" alt="LK1204 Tractor in Ploughing Operation" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/tractor-in-ploughing-operation">LK1204 Tractor in Ploughing Operation</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/features-of-tractor">
                        <div className="video_btn2"></div>
                        <img src="/images/video06.jpg" alt="Features of LW3204 Tractor" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/features-of-tractor">Features of LW3204 Tractor</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/driverless-tractor-in-test">
                        <div className="video_btn2"></div>
                        <img src="/images/video07.jpg" alt="LY1104-C Driverless Tractor in Test" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/driverless-tractor-in-test">LY1104-C Driverless Tractor in Test</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/driverless-tractor-in-operation">
                        <div className="video_btn2"></div>
                        <img src="/images/video08.jpg" alt="LY1104-C Driverless Tractor in Operation" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/driverless-tractor-in-operation">LY1104-C Driverless Tractor in Operation</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/immersive-video-of-tractor">
                        <div className="video_btn2"></div>
                        <img src="/images/video09.jpg" alt="Immersive Video of Tractor" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/immersive-video-of-tractor">Immersive Video of Tractor</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/the-most-advanced-driverless-tractor">
                        <div className="video_btn2"></div>
                        <img src="/images/video10.jpg" alt="The Most Advanced Driverless Tractor of YTO" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/the-most-advanced-driverless-tractor">The Most Advanced Driverless Tractor of YTO</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/tractor-with-newly-designed-cab">
                        <div className="video_btn2"></div>
                        <img src="/images/video11.jpg" alt="ME504-5 Tractor with Newly Designed Cab" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/tractor-with-newly-designed-cab">ME504-5 Tractor with Newly Designed Cab</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/mf704-tractor-with-newly-designde-cab">
                        <div className="video_btn2"></div>
                        <img src="/images/video12.jpg" alt="MF704-7 Tractor with Newly Designed Cab" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/mf704-tractor-with-newly-designde-cab">MF704-7 Tractor with Newly Designed Cab</a></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a href="/video/nlx1404-1utility-tractor">
                        <div className="video_btn2"></div>
                        <img src="/images/video13.jpg" alt="YTO X1304-1/NLX1404-1 Utility Tractor" />
                      </a>
                    </li>
                    <li className="product_con"><a href="/video/nlx1404-1utility-tractor">YTO X1304-1/NLX1404-1 Utility Tractor</a></li>
                  </ol>
                </li>
              </ul>
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
