'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';

export default function AboutYTO() {
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
              <li><a href="/about-yto">YTO</a></li>
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
                
                <p>Pak Tractor Manufacturing Company (PTMC) is the culmination of over 60 years of experience in the agricultural machinery industry. Built to provide trusted and reliable machines to farmers of all sizes and variety, PTMC offers tractors ranging from 26 to 400 hp under the ATS TRACTOR and YTO brand names.</p>
                
                <p>A part of the Wazir Pak Group, PTMC is a dynamic and forward-thinking organization dedicated to delivering high-quality agricultural machinery and engineering solutions across Pakistan and the region. With a strong commitment to innovation, reliability, and customer satisfaction, PTMC plays a vital role in supporting the country&apos;s agricultural and industrial development.</p>
                
                <p>Established with a vision to modernize farming practices, PTMC specializes in the distribution, support, and servicing of advanced machinery, including tractors, implements, and related equipment.</p>
                
                <p>PTMC is the authorized distributor of YTO tractors in Pakistan, offering the full range of YTO tractors and implements along with complete spares and service support.</p>
                
                <ul className="text_item mb-4">
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon01.jpg" alt="1st" /></li>
                      <li className="pro_txt">
                        <span>1st </span>
                        YTO is the leading agricultural machinery manufacturer in China.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon02.jpg" alt="1955" /></li>
                      <li className="pro_txt">
                        <span>1955</span>
                        Founded in Luoyang, YTO is the first tractor manufacturer in new China, which laid a solid foundation for China&apos;s agricultural machinery development and agricultural mechanization.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon03.jpg" alt="360+310" /></li>
                      <li className="pro_txt">
                        <span>360+310</span>
                        YTO has made a valuable contribution to China&apos;s agriculture industry development as it has supplied more than 3,600,000 tractors and 3,100,000 diesel engines.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon04.jpg" alt="A+H" /></li>
                      <li className="pro_txt">
                        <span>A+H</span>
                        YTO Co., Ltd., the largest subsidiary of the YTO Group, is listed on the Hong Kong Stock Exchange and Shanghai Stock Exchange and it is the first company in the agricultural machinery industry that issues both A shares and H shares.
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
            <div className="etw_hometitle">YTO</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about-yto" className="dq">Company Profile</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/capabilities">Capabilities</a></li>
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
