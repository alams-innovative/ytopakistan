'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Certificates | Agricultural Machinery Supplier | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO, a leading agricultural machinery supplier in China, is certified to various international standards and meets different markets\' entry requirements.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Utility tractors, compact tractors, harvesting equipment, front loaders');
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
              <li><a href="/about">About YTO</a></li>
              <li>Certificates</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="bannerin bannerin7">
            <div className="bannerinfo_pro">
            </div>
          </div>
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div itemProp="name">Certificates</div>
                </div>
                
                <div className="protitle">Enterprise Certifications</div>
                <div className="etw_photo etw_pic5 etw_shadowpic">
                  <ul>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer5b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer5s.jpg" alt="Enterprise Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer19b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer19s.jpg" alt="Enterprise Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer20b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer20s.jpg" alt="Enterprise Certifications" />
                        </a>
                      </figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                
                <div className="protitle">Product Certifications</div>
                <div className="etw_photo etw_pic5 etw_shadowpic">
                  <ul>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer1b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer1s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer3b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer3s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer4b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer4s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer8b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer8s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer9b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer9s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer10b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer10s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer12b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer12s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer16b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer16s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer17b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer17s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <a onClick={() => setSelectedImage('/about/cer18b.jpg')} style={{ cursor: 'pointer' }}>
                          <img src="/about/cer18s.jpg" alt="Product Certifications" />
                        </a>
                      </figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                
                <p>YTO Group Corporation, founded in 1955, is an experienced agriculture machinery and construction machinery manufacturer in China. Through decades of experience and our consistent efforts, now we provide a comprehensive line of products, including wheeled tractor, crawler tractor, combine harvester, wheel loader, forklift truck, and more.</p>
                <p>At YTO, providing high quality construction equipment and farm equipment is our goal. To do this, we have established our technology center, introduced highly automated equipment, and applied a thorough quality control system to monitor each phase of manufacturing, from raw material acquisition, through production, to the delivery to our customers. In addition, we produce our products strictly in accordance with the related environmental standards. As a result, our company has received the ISO9000 and ISO14000 certificates, and our products have been awarded the E-mark, OECD, CE, EPA, and CCC certificates as well.</p>
                <p>If you are in need of our products, whether tractors, tractor implements, or bulldozers etc., please feel free to contact us! We look forward to working with you!</p>
              </div>
              
              <div className="clearfix"></div>
              
              <div className="etw_service etw_service_pro">
                <ul>
                  <li>
                    <ol>
                      <li className="pro_img"><a href="/capabilities"><img src="/images/service01.jpg" alt="Capabilities" /></a></li>
                      <li className="pro_txt"><a href="/capabilities">Capabilities</a><span>YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.</span></li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><a href="/service"><img src="/images/service02.jpg" alt="Service & Support" /></a></li>
                      <li className="pro_txt"><a href="/service">Service & Support</a><span>Wining trust of clients from more than 100 countries and regions, we have built manufacturing and R&D bases in France, Belarus, Cuba and South Africa.</span></li>
                    </ol>
                  </li>
                </ul>
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">About YTO</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about">Company Profile</a></li>
                <li><a href="/certificate" className="dq">Certificates</a></li>
                <li><a href="/history">History</a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="Certificate"
      />
    </div>
  );
}
