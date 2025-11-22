'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ProductSidebar from '../components/ProductSidebar';
import ContactForm from '../components/ContactForm';

export default function TractorDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    document.title = 'YTO-ELX2404 | Agricultural Tractor | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO-ELX2404 wheeled tractor with 240hp power, Shangchai engine, 12F+4R transmission, front and rear PTO.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'YTO-ELX2404, Agricultural Tractor, YTO, Wheeled Tractor');
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
              <li><a href="/products">Products</a></li>
              <li><a href="/5-tractors">Tractors</a></li>
              <li>YTO-ELX2404</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="tractors" 
            activeProduct="yto-elx2404" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div itemScope itemType="http://data-vocabulary.org/Product">
                <div itemProp="description">
                  <div>
                    <h2 itemProp="name" className="d-block d-md-none small_h2">YTO-ELX2404 Wheeled Tractor</h2>
                    
                    <div className="row mb-3">
                      <div className="col-12 col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure>
                              <a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/tractors/yto-elx2404/YTO-ELX2404.jpg'); }}>
                                <img itemProp="image" src="/tractors/yto-elx2404/YTO-ELX2404.jpg" alt="YTO-ELX2404 Wheeled Tractor" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback">
                          <a href="#" onClick={(e) => { e.preventDefault(); setIsInquiryOpen(true); }}>
                            Inquiry
                          </a>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-7">
                        <h2 className="d-none d-md-block small_h2">YTO-ELX2404 Wheeled Tractor</h2>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Main Characteristics</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li><strong>Shangchai Engine:</strong> British Riccardo technology, engine reserve power reaches 30%, and the power is strong. 3-stage emission standard engine, turbocharged inter-cooled and high-pressure common rail engine, electric control precise injection of fuel, fuel saving and high efficiency;</li>
                          <li><strong>Air prefilter (desert air filter):</strong> Automatic dust removal, no need for cleaning, free daily maintenance;</li>
                          <li><strong>Clutch:</strong> LUK brand, air-assisted single-acting main clutch, large bearing capacity, high reliability. Electro control oil immersed PTO clutch, one button control, operation easy and convenient, stable performance, high transmission efficiency;</li>
                          <li><strong>Difference lock:</strong> Electro-hydraulic control, keep in sync with the rear wheels;</li>
                          <li><strong>The drivetrain system:</strong> adopts Italian technology, with reasonable structure and high transmission efficiency;</li>
                          <li><strong>Transmission box:</strong> 12F+4R engagement sleeve gearshift, gearshift reliable, and large bearing capacity;</li>
                          <li><strong>Brake:</strong> Safe and reliable wet disc brake. With pedal-type single circuit cutoff type of air brake controlling trailer braking;</li>
                          <li><strong>PTO and Hydraulic outputs:</strong> front PTO and rear PTO. Front PTO (1000r/min, 6-teeth), with front suspension and 2-pair of hydraulic outputs. Rear PTO (540/1000rpm, 6 teeth+8 teeth+21 teeth), with rear CAT Ⅲ suspension and 3-pair of hydraulic outputs;</li>
                          <li><strong>The structure of individual hydraulic and transmission oil:</strong> Lifter and gearbox are lubricated separately to reduce lifter hydraulic failures;</li>
                          <li><strong>Force-down Lifter:</strong> Force the depth in soil of the implements, improve the working efficiency and effect of tractors with implements, and more suitable for poor soil conditions;</li>
                          <li><strong>Weight ballasts:</strong> With front 6pcs (300kg) and rear 4pcs (360kg) of weight ballasts.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                          <div className="etw_title1">Technical Specifications List — YTO-ELX2404</div>
                          <div className="table-responsive mb-2">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td><strong>Model</strong></td>
                                  <td>YTO-ELX2404</td>
                                </tr>
                                <tr>
                                  <td>Engine</td>
                                  <td>Shangchai SC9D250G3</td>
                                </tr>
                                <tr>
                                  <td>Air-inlet way</td>
                                  <td>6-cylinder, Turbocharged inter-cooled (high pressure common rail), emission 3-stage</td>
                                </tr>
                                <tr>
                                  <td>Rated housepower</td>
                                  <td>240hp (177kW)</td>
                                </tr>
                                <tr>
                                  <td>Engine rated rotation speed</td>
                                  <td>2200r/min</td>
                                </tr>
                                <tr>
                                  <td>Fuel consumption</td>
                                  <td>≤225g/kW·h</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank capacity</td>
                                  <td>400L</td>
                                </tr>
                                <tr>
                                  <td>Travelling speed</td>
                                  <td>2.0-36.69/4.44-14.48 km/h</td>
                                </tr>
                                <tr>
                                  <td>Gearbox gears</td>
                                  <td>12F+4R</td>
                                </tr>
                                <tr>
                                  <td>Gearshift type</td>
                                  <td>Engagement sleeve gearshift</td>
                                </tr>
                                <tr>
                                  <td>Clutch</td>
                                  <td>16-inch LUK</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic pump flow</td>
                                  <td>70L/min</td>
                                </tr>
                                <tr>
                                  <td>Lifting force</td>
                                  <td>≥7500kg</td>
                                </tr>
                                <tr>
                                  <td>PTO</td>
                                  <td>Front:1000r/min, 6-teeth; Rear: 540/1000r/min, 6-teeth/8-teeth/21-teeth</td>
                                </tr>
                                <tr>
                                  <td>Wheelbase</td>
                                  <td>2928mm</td>
                                </tr>
                                <tr>
                                  <td>Wheeltread (front/rear)</td>
                                  <td>1600-2300mm / 2400mm</td>
                                </tr>
                                <tr>
                                  <td>Min. ground clearance</td>
                                  <td>420mm</td>
                                </tr>
                                <tr>
                                  <td>Min. turning radius</td>
                                  <td>7±0.3m</td>
                                </tr>
                                <tr>
                                  <td>Overall sizes (L*W*H)</td>
                                  <td>5430*3550*3490mm</td>
                                </tr>
                                <tr>
                                  <td>Net weight</td>
                                  <td>8778kg</td>
                                </tr>
                                <tr>
                                  <td>Rated traction force</td>
                                  <td>43KN</td>
                                </tr>
                                <tr>
                                  <td>Tires (front/rear)</td>
                                  <td>Radial tires, Front 540/65R28, Rear 650/65R38 single tires</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="mt-4 p-3 bg-light border text-center">
                            <p className="mb-1">www.ytocorp.com</p>
                            <p className="mb-0">cis5@yto.com.cn</p>
                          </div>
                        </div>
                      <div className="col-12  col-lg-3">
                        <ul className="contact_item">
                          <li><a href="/contact"><img src="/images/email.jpg" alt="Visit and Contact Us" /> <span>Visit and Contact</span></a></li>
                          <li className="video_btn"><a href="/video"><img src="/images/video.jpg" alt="Video" /> <span>Video</span></a></li>
                        </ul>
                      </div>
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related">
                          <ul>
                            <li><a href="/yto-e2004">YTO-E2004</a></li>
                            <li><a href="/yto-elx2404">YTO-ELX2404</a></li>
                            <li><a href="/yto-ex1054">YTO-EX1054</a></li>
                            <li><a href="/yto-ex1404">YTO-EX1404</a></li>
                            <li><a href="/yto-nlx1604">YTO-NLX1604</a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                        
                        <ContactForm productName="YTO-ELX2404" showTitle={true} />
                        <div className="clearfix"></div>
                    <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div className="clearfix"></div>
      
      <Footer />
      
      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="Tractor Image"
      />
      
      <InquiryModal 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName="YTO-ELX2404"
      />
    </div>
  );
}
