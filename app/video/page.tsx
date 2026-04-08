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
            
            {/* Section 1: About Company (Main Video) */}
            <div className="protitle1"><span>About Company</span></div>
            <div className="etwvideo_hub etwvideo_hub1 mb-4">
              <ul>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '200px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">
                      <span className="video-section-title" style={{ fontWeight: 'bold', fontSize: '16px' }}>PTMC Company Profile</span>
                      <span>PTMC (Pak Tractor Machinery Company) is a dynamic and forward-thinking organization dedicated to delivering high-quality agricultural machinery and engineering solutions across Pakistan. With a strong commitment to innovation, reliability, and customer satisfaction.</span>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
            
            <div className="clearfix"></div>
            
            {/* Section 2: About Products */}
            <div className="protitle1"><span>About Products</span></div>
            <div className="etwvideo_hub mb-4">
              <ul>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Product Video 1</li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Product Video 2</li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Product Video 3</li>
                  </ol>
                </li>
              </ul>
            </div>
            
            <div className="clearfix"></div>
            
            {/* Section 3: Testimonials */}
            <div className="protitle1"><span>Testimonials</span></div>
            <div className="etwvideo_hub mb-4">
              <ul>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Customer Testimonial 1</li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Customer Testimonial 2</li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <div className="video-placeholder" style={{ 
                        background: '#f5f5f5', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        minHeight: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px'
                      }}>
                        <div className="video_btn2"></div>
                        <span style={{ color: '#666', fontSize: '14px' }}>Video Coming Soon</span>
                      </div>
                    </li>
                    <li className="product_con">Customer Testimonial 3</li>
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
