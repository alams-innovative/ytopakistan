'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';

export default function About() {
  const [showVideo, setShowVideo] = useState(false);
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
              <li><a href="/about">About YTO</a></li>
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
                  <div>Company Profile</div>
                </div>
                
                <div className="img_left video_show" onClick={() => setShowVideo(true)} style={{ cursor: 'pointer' }}>
                  <div className="video_btn1"></div>
                  <img src="/about/company.jpg" alt="About YTO" />
                </div>
                
                <p>PTMC (Pak Tractor Machinery Company) is a dynamic and forward-thinking organization dedicated to delivering high-quality agricultural machinery and engineering solutions across Pakistan. With a strong commitment to innovation, reliability, and customer satisfaction, PTMC plays a vital role in supporting the country&apos;s agricultural and industrial development.</p>
                
                <p>Established with a vision to modernize farming practices, PTMC specializes in the distribution, support, and servicing of advanced machinery, including tractors, implements, and related equipment. The company works closely with globally recognized manufacturers to ensure that customers receive durable, efficient, and cost-effective solutions tailored to local needs.</p>
                
                <p>At PTMC, quality and performance are at the core of every operation. The company emphasizes strict standards in product selection, technical support, and after-sales service. Its team of skilled professionals ensures that clients receive expert guidance, timely maintenance, and reliable spare parts availability.</p>
                
                <p>Driven by integrity and long-term partnerships, PTMC continues to expand its footprint by building trust with farmers, contractors, and businesses nationwide. The company&apos;s mission is to empower its customers with modern technology, enhance productivity, and contribute to the sustainable growth of Pakistan&apos;s agricultural sector.</p>
                
                {/* Vision & Mission Section */}
                <div className="vision-mission-section" style={{ marginTop: '32px', marginBottom: '32px' }}>
                  <div style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '12px', padding: '24px', marginBottom: '20px', borderLeft: '4px solid #c8102e' }}>
                    <h3 style={{ color: '#c8102e', fontSize: '20px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>&#9733;</span> Our Vision
                    </h3>
                    <p style={{ margin: 0, lineHeight: 1.7 }}>To become a leading provider of agricultural and industrial machinery solutions in Pakistan, recognized for excellence, innovation, and customer trust.</p>
                  </div>
                  
                  <div style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #c8102e' }}>
                    <h3 style={{ color: '#c8102e', fontSize: '20px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>&#9873;</span> Our Mission
                    </h3>
                    <p style={{ margin: 0, lineHeight: 1.7 }}>To deliver high-quality machinery, reliable services, and innovative solutions that enhance productivity and support sustainable development.</p>
                  </div>
                </div>
                
                <ul className="text_item mb-4">
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon01.jpg" alt="Quality" /></li>
                      <li className="pro_txt">
                        <span>Quality</span>
                        PTMC is committed to delivering high-quality agricultural machinery and engineering solutions across Pakistan.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon02.jpg" alt="Innovation" /></li>
                      <li className="pro_txt">
                        <span>Innovation</span>
                        Established with a vision to modernize farming practices, PTMC brings advanced machinery and cutting-edge technology to local farmers.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon03.jpg" alt="Support" /></li>
                      <li className="pro_txt">
                        <span>Support</span>
                        Our team of skilled professionals provides expert guidance, timely maintenance, and reliable spare parts availability.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon04.jpg" alt="Partnership" /></li>
                      <li className="pro_txt">
                        <span>Partnership</span>
                        PTMC works closely with globally recognized manufacturers like YTO to ensure durable, efficient, and cost-effective solutions.
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
              
              {/* Service Section */}
              <div className="etw_service etw_service_pro">
                <ul>
                  <li>
                    <ol>
                      <li className="pro_img">
                        <a href="/capabilities">
                          <img src="/images/service01.jpg" alt="Capabilities" />
                        </a>
                      </li>
                      <li className="pro_txt">
                        <a href="/capabilities">Capabilities</a>
                        {/* <span>
                          YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.
                        </span> */}
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
                        {/* <span>
                          Winning trust of clients from more than 100 countries and regions, we have built manufacturing and R&D bases in France, Belarus, Cuba and South Africa.
                        </span> */}
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
            <div className="etw_hometitle">About YTO</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about" className="dq">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
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

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="/videos/yto-company-video.mp4"
        title="YTO Company Video"
      />
    </div>
  );
}
