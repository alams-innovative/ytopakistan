'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Videos() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

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
                      <a 
                        onClick={() => openVideoModal('yZp_XLVrI8k')}
                        style={{ cursor: 'pointer', display: 'block', position: 'relative' }}
                      >
                        <img 
                          src="https://img.youtube.com/vi/yZp_XLVrI8k/maxresdefault.jpg"
                          alt="YTO Tractors Video" 
                          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                          onError={(e) => {
                            e.currentTarget.src = 'https://img.youtube.com/vi/yZp_XLVrI8k/hqdefault.jpg';
                          }}
                        />
                        <span className="video_btn2"></span>
                      </a>
                    </li>
                    <li className="product_con">
                      <a 
                        onClick={() => openVideoModal('yZp_XLVrI8k')} 
                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Product Video 1
                      </a>
                      <span>Watch YTO tractors performing in real agricultural conditions. Experience the quality and reliability firsthand.</span>
                    </li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li className="product_img">
                      <a 
                        onClick={() => openVideoModal('GnQBosin0GU')}
                        style={{ cursor: 'pointer', display: 'block', position: 'relative' }}
                      >
                        <img 
                          src="/images/yto-ex1054-canopy-video.png"
                          alt="YTO EX 1054 Tractor Canopy Video" 
                          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                        />
                        <span className="video_btn2"></span>
                      </a>
                    </li>
                    <li className="product_con">
                      <a 
                        onClick={() => openVideoModal('GnQBosin0GU')} 
                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        YTO EX 1054 Tractor Canopy
                      </a>
                      <span>Watch the YTO EX 1054 tractor with canopy in action, demonstrating powerful performance in real field conditions.</span>
                    </li>
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
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
              title="YTO Video"
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
