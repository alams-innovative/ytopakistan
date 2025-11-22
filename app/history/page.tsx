'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function History() {
  useEffect(() => {
    document.title = 'History | Agricultural Machinery Supplier | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO, a leading agricultural machinery supplier in China, has committed to producing quality machines and equipment since 1955. Learn more about our history.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tractor, agricultural implements, diesel engine, harvester');
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
              <li>History</li>
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
                  <div itemProp="name">History</div>
                </div>
                
                <ul className="history text_item text_item1 my-4">
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><span>1955-1980 </span></li>
                      <li className="pro_txt"><span>YTO's story began</span>
                        <ul className="item">
                          <li>1955 The opening ceremony of the First Tractor Factory was held.</li>
                          <li>1958 The first crawler tractor in China was built based on the advanced technology introduced from the former Soviet Union.</li>
                          <li>1959 The crawler tractor was put into production.</li>
                          <li>1980 The annual output of crawler tractors reached 24,000.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><span>1981-2007 </span></li>
                      <li className="pro_txt"><span>YTO reformed to be better</span>
                        <ul className="item">
                          <li>1983 The small wheeled tractor was put into production.</li>
                          <li>1985 We introduced the advanced diesel engine technology from Ricardo, Britain and wheeled tractor technology from FIAT, Italy.</li>
                          <li>1992 China First Tractor Company established an office in Cote d'Ivoire and has exported localized high-horsepower wheeled tractors to Africa.</li>
                          <li>1994 The former Luoyang Tractor Research Laboratory under the Agricultural Machinery Department was merged into China First Tractor Company.</li>
                          <li>1995 YTO International was founded to export tractors.</li>
                          <li>1997 China First Tractor Company was renamed YTO Co., Ltd. and YTO started to issue H shares on the Hong Kong Stock Exchange.</li>
                          <li>2005 Sales volume of big wheeled tractors reached 10,000 sets.</li>
                          <li>2006 Diesel engines were sold more than 100,000 sets and YTO's value rose up to more than 10 billion yuan.</li>
                          <li>2007 Construction of the YTO industrial park began.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><span>From 2008</span></li>
                      <li className="pro_txt"><span>YTO aims higher</span>
                        <ul className="item mt-2">
                          <li>April, 2009 YTO and China-Africa Development Fund signed a comprehensive cooperation frame agreement to found China-Africa Machinery Corporation.</li>
                          <li>2010 The first tractor with power shift transmission in China was invented by YTO.</li>
                          <li>2012 YTO began to issue A shares on the Shanghai Stock Exchange.</li>
                          <li>2018 Driverless tractors passed the first round of driverless operation tests in China.</li>
                          <li>2019 YTO led the establishment of National Agricultural Equipment Innovation Center which obtained the approval of the Ministry of Industry and Information Technology.</li>
                          <li>2019 YTO International continued to improve the overseas business as it developed the mode of "international trade + overseas marketing + overseas services" by establishing the overseas management system and innovating marketing patterns.</li>
                          <li>2020 The first cab-less tractor driven by hydrogen energy and equipped with 5G technology in China was developed by YTO; Dongfanghong (Luoyang) International Land Port undertaken by YTO Group Corporation (YTO) was included in the list of National Logistics Hub Construction.</li>
                          <li>2021 320HP CVT tractors developed by YTO was put on the market; fully autonomous "driverless" solutions on staple food crop production provided by YTO got on the list of China's Top 10 Scientific Achievements of Intelligent Manufacturing in 2021; YTO won the nomination of China's Quality Awards.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ul>

                <div className="clearfix"></div>

                <div className="etw_service etw_service_pro">
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

                <div className="clearfix"></div>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">About YTO</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
                <li><a href="/history" className="dq">History</a></li>
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
