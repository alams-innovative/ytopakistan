'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';

export default function Products() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoId = 'yZp_XLVrI8k';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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
                  {/* YouTube Video Card */}
                  <li>
                    <ol>
                      <li className="product_img">
                        <div 
                          onClick={() => setIsVideoModalOpen(true)}
                          style={{
                            position: 'relative',
                            cursor: 'pointer',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          <img 
                            src={thumbnailUrl} 
                            alt="YTO Tractors Video" 
                            style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block',
                              transition: 'transform 0.3s ease',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          {/* Play Button Overlay */}
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'rgba(185, 28, 28, 0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                          }}>
                            <svg 
                              width="32" 
                              height="32" 
                              viewBox="0 0 24 24" 
                              fill="white"
                              style={{ marginLeft: '4px' }}
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="product_con">
                        <span 
                          onClick={() => setIsVideoModalOpen(true)} 
                          style={{ cursor: 'pointer', fontWeight: '600', color: '#b91c1c' }}
                        >
                          Watch YTO Tractors in Action
                        </span> 
                        <span>See our powerful YTO tractors performing in real agricultural conditions. Experience the quality and reliability firsthand.</span>
                      </li>
                      <div className="more2">
                        <a onClick={() => setIsVideoModalOpen(true)} style={{ cursor: 'pointer' }}>Watch Video</a>
                      </div>
                    </ol>
                  </li>
                  {/* Tractors Card */}
                  <li>
                    <ol>
                      <li className="product_img"><a href="/5-tractors"><img src="/images/products-tractor.jpg" alt="Tractors" /></a></li>
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YTO Tractors Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
