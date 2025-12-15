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
                
                <p>YTO Pakistan is the official local presence of YTO Co, Ltd. Delivering advanced agricultural Tractors to the Pakistani market with a strong focus on reliability, performance, and long-term customer support. YTO Co., Ltd., or YTO, has committed to manufacturing agricultural machinery since 1955, such as, tractors, harvesting equipment, agricultural implements, diesel engines and generator sets. YTO is a major and long-standing agricultural machine manufacturer in China. Its predecessor, China First Tractor Company, was one of the 156 major projects outlined in the First Five-Year Plan (1953-57) and a giant in China&apos;s agricultural industry. After the reshuffle of tractor-related services, manufacturing, assets, liability and personnel, the YTO Co., Ltd. was established in 1997.</p>
                
                <p>YTO is a listed company that issues both A shares and H shares in the agricultural machinery industry. It got listed on the Hong Kong Stock Exchange on June 23, 1997 and began to issue H shares. On August 8, 2012, its shares started to be traded on the Shanghai Stock Exchange. The success in the stock market is partly contributed to our reliable products. We manufacture agricultural machinery in accordance with international standards and we are certified to ISO 9001, ISO 14001 and OHSAS 18001. With its quality products, YTO has been awarded as China&apos;s Quality Control Top Brand.</p>
                
                <p>YTO International Co., Ltd. (hereinafter referred as YTO International) was founded in 1995 as a subsidiary of the YTO Group. It is an international trading company that has been granted the self-managed import and export right by the Ministry of Commerce. YTO International is responsible for importing and exporting complete products, accessories and manufacturing technology provided by YTO.</p>
                
                <p>Proud of nearly a hundred production lines, YTO enjoys strong production capacity of forging, processing, assembly and testing. It specializes in Dongfanghong series of crawler tractors, wheeled tractors, diesel engines, harvesting equipment and agricultural machinery. Global service network provides strong services and supports to foreign clients. Thanks to the continuous development of machines and accessories and the professional service team, YTO has seen a long-term exporting success with stable sales volume.</p>
                
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
