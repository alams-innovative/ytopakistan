'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPTMC() {
  useEffect(() => {
    document.title = 'About PTMC | YTO Pakistan Authorized Distributor';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'PTMC is the authorized distributor of YTO tractors and agricultural machinery in Pakistan. Learn about our company profile and services.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'PTMC Pakistan, YTO Pakistan, tractor distributor, agricultural machinery Pakistan');
    }
  }, []);

  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container" className="etw_container">
        {/* Breadcrumb */}
        <div id="etw_producttitle" className="pt-2">
          <div className="content">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-ptmc">About PTMC</a></li>
              <li>Company Profile</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          {/* Banner */}
          <div className="bannerin bannerin7">
            <div className="bannerinfo_pro d-none"></div>
          </div>
          
          {/* Main Content */}
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div>PTMC Company Profile</div>
                </div>
                
                <div className="img_left">
                  <img src="/logo2.png" alt="PTMC Logo" style={{ maxWidth: '300px', marginBottom: '20px' }} />
                </div>
                
                <p>PTMC (Pakistan Tractor & Machinery Company) is the official authorized distributor of YTO agricultural machinery and tractors in Pakistan. Established with a vision to revolutionize Pakistan&apos;s agricultural sector, PTMC brings world-class Chinese agricultural technology to Pakistani farmers.</p>
                
                <p>In 2025, YTO officially appointed PTMC as its exclusive distributor in Pakistan, marking a significant milestone in the agricultural machinery industry of the country. This partnership combines YTO&apos;s 70+ years of manufacturing excellence with PTMC&apos;s deep understanding of the local agricultural landscape and farmer needs.</p>
                
                <p>PTMC is committed to providing Pakistani farmers with reliable, efficient, and technologically advanced tractors and farming equipment. Our products are carefully selected and tailored to meet the diverse farming conditions across Pakistan, from the fertile plains of Punjab to the rugged terrains of Khyber Pakhtunkhwa.</p>
                
                <p>Our mission is to empower Pakistani farmers with modern agricultural machinery that enhances productivity, reduces operational costs, and contributes to the nation&apos;s food security goals. We believe that mechanization is key to transforming Pakistan&apos;s agriculture sector and improving the livelihoods of millions of farming families.</p>
                
                <ul className="text_item mb-4">
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon01.jpg" alt="Authorized" /></li>
                      <li className="pro_txt">
                        <span>Authorized</span>
                        PTMC is the official authorized distributor of YTO tractors and agricultural machinery in Pakistan.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon02.jpg" alt="2025" /></li>
                      <li className="pro_txt">
                        <span>2025</span>
                        Partnership established in 2025, bringing YTO&apos;s world-class machinery to Pakistani farmers.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon03.jpg" alt="Nationwide" /></li>
                      <li className="pro_txt">
                        <span>Nationwide</span>
                        Comprehensive dealer network and service centers across Pakistan for sales and after-sales support.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon04.jpg" alt="Quality" /></li>
                      <li className="pro_txt">
                        <span>Quality</span>
                        Genuine spare parts availability and professional technical support for all YTO products.
                      </li>
                    </ol>
                  </li>
                </ul>
                
                <div className="etw_hometitle mt-4">
                  <div>Our Services</div>
                </div>
                
                <p>At PTMC, we offer comprehensive services to ensure our customers get the best value from their YTO machinery:</p>
                
                <ul className="item mb-4" style={{ paddingLeft: '20px' }}>
                  <li>Sales of YTO tractors ranging from 55HP to 240HP</li>
                  <li>Genuine YTO spare parts and accessories</li>
                  <li>Professional after-sales service and maintenance</li>
                  <li>Technical training and operator guidance</li>
                  <li>Warranty support and claims processing</li>
                  <li>Financing assistance and guidance</li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
              
              {/* Service Section */}
              <div className="etw_service etw_service_pro">
                <ul>
                  <li>
                    <ol>
                      <li className="pro_img">
                        <a href="/certificate">
                          <img src="/images/service01.jpg" alt="Certificates" />
                        </a>
                      </li>
                      <li className="pro_txt">
                        <a href="/certificate">Certificates</a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img">
                        <a href="/service">
                          <img src="/images/service02.jpg" alt="Service & Support" />
                        </a>
                      </li>
                      <li className="pro_txt">
                        <a href="/service">Service & Support</a>
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div id="etw_sidebar">
            <div className="etw_hometitle">About PTMC</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about-ptmc" className="dq">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
                <li><a href="/partners">Our Partners</a></li>
              </ul>
              <div className="clearfix"></div>
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
