'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Capabilities() {
  useEffect(() => {
    document.title = 'Agricultural Machinery Manufacturer | Capabilities | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'As an experienced manufacturer of agricultural machinery, YTO has made a breakthrough in power shifting, CVT and autonomous driving technology to further improve performance of tractors.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Agricultural machinery, tractors, harvesting equipment, agricultural implements');
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
              <li>Capabilities</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="bannerin bannerin5">
            <div className="bannerinfo_pro"></div>
          </div>
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div itemProp="name">Capabilities</div>
                </div>
              </div>
              
              <div className="clearfix"></div>
              
              <div className="about_box1 mt-0 mb-4">
                <ul>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/r-d"><img src="/about/r-d_0.jpg" alt="R&D" /></a></li>
                      <li className="product_con">
                        <a href="/r-d">R&D</a>
                        <span>YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.</span>
                        <a href="/r-d" className="more">More</a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="product_img"><a href="/manufacturing"><img src="/about/manufacturing_0.jpg" alt="Manufacturing" /></a></li>
                      <li className="product_con">
                        <a href="/manufacturing">Manufacturing</a>
                        <span>As an agricultural machinery solution provider, YTO has made a breakthrough in power shifting, CVT and autonomous driving technology to further improve performance of tractors. </span>
                        <a href="/manufacturing" className="more">More</a>
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">Capabilities</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/r-d">R&D</a></li>
                <li><a href="/manufacturing">Manufacturing</a></li>
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
