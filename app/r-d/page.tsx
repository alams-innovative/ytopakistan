'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

export default function RD() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Research and Development | Agricultural Machinery | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YTO is a leading agricultural machinery manufacturer in China with outstanding research and development capacity which sets it apart from the competition.');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tractor, harvester, front loader, genset');
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
              <li><a href="/capabilities">Capabilities</a></li>
              <li>R&D</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="bannerin bannerin6">
            <div className="bannerinfo_pro"></div>
          </div>
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div itemProp="name">R&D</div>
                </div>
                <p>YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.</p>

                <div className="protitle">The outstanding R&D capability enables YTO to be at the leading edge in China in terms of agricultural machinery technologies.</div>
                <ul className="text_item my-4">
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><img src="/images/r-d_01.png" alt="6 institutions" /></li>
                      <li className="pro_txt"><span>6 </span>YTO boasts the China National Key Lab of Tractor Engine Systems, the China National Tractor Quality Supervision and Test Center, a national-level enterprise technology center, a national-level industrial design center and an advanced pilot base. Apart from these achievements, YTO also played a leading role in the construction of national innovation center of agricultural machinery.</li>
                    </ol>
                  </li>

                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><img src="/images/r-d_02.png" alt="450+ standards" /></li>
                      <li className="pro_txt"><span>450+ </span>The secretariat of China National Tractor Technical Standardization Committee in YTO formulated more than 450 standards at the national, industrial and organizational level.</li>
                    </ol>
                  </li>
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><img src="/images/r-d_03.png" alt="1860+ patents" /></li>
                      <li className="pro_txt"><span>1860+ </span>YTO has been authorized more than 1860 patents, including over 630 patents in force.</li>
                    </ol>
                  </li>
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><img src="/images/r-d_04.png" alt="1700+ people" /></li>
                      <li className="pro_txt"><span>1700+ </span>YTO has a strong technical team of over 1700 people.</li>
                    </ol>
                  </li>
                  <li>
                    <ol className="align-items-start">
                      <li className="pro_img"><img src="/images/r-d_05.png" alt="25-400HP" /></li>
                      <li className="pro_txt"><span>25-400HP </span> YTO has rolled out the most comprehensive series of tractors in China; <br />
                        We have the independent intellectual property rights of advanced technologies;<br />
                        We have developed the mature technologies of gear couplings, synchronizers, power steering and power shift products, and we are now preparing a series of power shift products and the commercialization of continuously variable transmission (CVT) and researching intelligent technologies like autonomous driving and new energy products.
                      </li>
                    </ol>
                  </li>
                </ul>

                <div className="clearfix"></div>

                <div className="protitle">The biggest world-class pilot base in China</div>
                <p>The pilot base in YTO has a complete chain of performance testing and calibration laboratories to analyze and test product performance ranging from materials, paint coating to service life. Thanks to the advanced pilot base, agricultural machinery produced by YTO is safe, reliable and eco-friendly.</p>

                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_01.jpg'); }}><img src="/about/r-d_01.jpg" alt="High temperature testing lab" /></a></figure><span>High temperature testing lab</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_02.jpg'); }}><img src="/about/r-d_02.jpg" alt="The biggest vehicle noise testing lab in Asia" /></a></figure><span>The biggest vehicle noise testing lab in Asia</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_03.jpg'); }}><img src="/about/r-d_03.jpg" alt="Emission testing lab" /></a></figure><span>Emission testing lab</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_04.jpg'); }}><img src="/about/r-d_04.jpg" alt="Strength testing lab" /></a></figure><span>Strength testing lab</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_05.jpg'); }}><img src="/about/r-d_05.jpg" alt="Vibration testing lab" /></a></figure><span>Vibration testing lab</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/r-d_06.jpg'); }}><img src="/about/r-d_06.jpg" alt="Drivetrain testing lab for 400 HP tractors" /></a></figure><span>Drivetrain testing lab for 400 HP tractors</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <div className="protitle">Layout of Our Industrial Facilities</div>
                <p className="mb-2"><strong>4 domestic industrial bases</strong></p>
                <div className="etw_photo etw_pic4 etw_shadowpic">
                  <ul>
                    <li><img src="/about/r-d_07.jpg" alt="Headquarter in Luoyang, Henan" /><span>Headquarter in Luoyang, Henan</span></li>
                    <li><img src="/about/r-d_08.jpg" alt="Base in Urumchi, Xinjiang" /><span>Base in Urumchi, Xinjiang</span></li>
                    <li><img src="/about/r-d_09.jpg" alt="Base in Qiqihar, Heilongjiang" /><span>Base in Qiqihar, Heilongjiang</span></li>
                    <li><img src="/about/r-d_10.jpg" alt="Base in Jiangyan, Jiangsu" /><span>Base in Jiangyan, Jiangsu</span></li>
                  </ul>
                </div>

                <div className="clearfix"></div>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">Capabilities</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/r-d" className="dq">R&D</a></li>
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
      
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="R&D Facility"
      />
    </div>
  );
}
