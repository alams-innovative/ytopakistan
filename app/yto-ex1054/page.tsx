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
    document.title = 'YTO-EX1054 | Agricultural Tractor | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO-EX1054 wheeled tractor with 105hp power, YTO engine, 12F+4R transmission.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'YTO-EX1054, Agricultural Tractor, YTO, Wheeled Tractor');
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
              <li>YTO-EX1054</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="tractors" 
            activeProduct="yto-ex1054" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div itemScope itemType="http://data-vocabulary.org/Product">
                <div itemProp="description">
                  <div>
                    <h2 itemProp="name" className="d-block d-md-none small_h2">YTO-EX1054 WHEELED TRACTOR</h2>
                    
                    <div className="row mb-3">
                      <div className="col-12 col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure>
                              <a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/tractors/yto-ex1054/YTO-EX1054.jpg'); }}>
                                <img itemProp="image" src="/tractors/yto-ex1054/YTO-EX1054.jpg" alt="YTO-EX1054 Wheeled Tractor" />
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
                        <h2 className="d-none d-md-block small_h2">YTO-EX1054 WHEELED TRACTOR</h2>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Main Characteristics</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li><strong>YTO Engine and fuel pump:</strong> The engine torque reserve reaches 30%, the power is strong, high fuel injection pressure, good atomization performance, sufficient combustion, and low fuel consumption;</li>
                          <li><strong>Second-order inertial force balance device:</strong> The vibration amplitude of the engine reduced by nearly 70%, with light vibration and small noise, and improve the stability and reliability of engine;</li>
                          <li><strong>Air prefilter (desert air filter):</strong> Automatic dust removal, no need for cleaning, free daily maintenance;</li>
                          <li><strong>Independent double-acting clutch:</strong> LUK brand, independent control Driving and PTO;</li>
                          <li><strong>The drivetrain system:</strong> adopts Italian technology, with reasonable structure and high transmission efficiency;</li>
                          <li><strong>Brake:</strong> Safe and reliable wet disc brake. With double circuit air brake controlling trailer braking;</li>
                          <li><strong>PTO:</strong> Power output can reach 540 and 1000r/min, capable of meeting different operational requirements;</li>
                          <li><strong>The structure of mixed hydraulic and transmission oil:</strong> Mixed lubricating oil between lifter and gearbox, Good lubrication, and extend the service life of gearbox and lifter;</li>
                          <li><strong>Force-down Lifter:</strong> Force the depth in soil of the implements, improve the working efficiency and effect of tractors with implements, and more suitable for poor soil conditions;</li>
                          <li><strong>Hydraulic output:</strong> 2-pair of hydraulic outputs with European connector, 3-pair as option;</li>
                          <li><strong>Weight ballasts:</strong> With front 6pcs of weight ballasts.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                          <div className="etw_title1">Technical Specifications List — YTO-EX1054</div>
                          <div className="table-responsive mb-2">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td><strong>Model</strong></td>
                                  <td>YTO-EX1054</td>
                                </tr>
                                <tr>
                                  <td>Engine</td>
                                  <td>YTO LR4V5-23</td>
                                </tr>
                                <tr>
                                  <td>Air-inlet way</td>
                                  <td>4-cylinder, water-cooling, naturally aspirated</td>
                                </tr>
                                <tr>
                                  <td>Rated housepower</td>
                                  <td>105hp (77.2kW)</td>
                                </tr>
                                <tr>
                                  <td>Engine rated rotation speed</td>
                                  <td>2300r/min</td>
                                </tr>
                                <tr>
                                  <td>Torque (N.m)</td>
                                  <td>401</td>
                                </tr>
                                <tr>
                                  <td>Engine bore x stroke (mm*mm)</td>
                                  <td>115*135</td>
                                </tr>
                                <tr>
                                  <td>Compression ratio</td>
                                  <td>17.1</td>
                                </tr>
                                <tr>
                                  <td>Fuel consumption</td>
                                  <td>≤235g/kW·h</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank capacity</td>
                                  <td>115L</td>
                                </tr>
                                <tr>
                                  <td>Lube oil capacity (Engine) (L)</td>
                                  <td>15</td>
                                </tr>
                                <tr>
                                  <td>Coolant capacity (L)</td>
                                  <td>16</td>
                                </tr>
                                <tr>
                                  <td>Transmission oil capacity (L)</td>
                                  <td>49.2</td>
                                </tr>
                                <tr>
                                  <td>Air pre cleaner oil capacity (L)</td>
                                  <td>1</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic oil capacity (L)</td>
                                  <td>/</td>
                                </tr>
                                <tr>
                                  <td>Travelling speed</td>
                                  <td>1.65-27.17/4.28-12.85 km/h</td>
                                </tr>
                                <tr>
                                  <td>Gearbox gears</td>
                                  <td>12F+4R</td>
                                </tr>
                                <tr>
                                  <td>Gearshift type</td>
                                  <td>Engagement sleeve shift</td>
                                </tr>
                                <tr>
                                  <td>Clutch</td>
                                  <td>12-inch LUK</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic pump flow</td>
                                  <td>45L/min</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic pump pressure (Mpa)</td>
                                  <td>20±0.5</td>
                                </tr>
                                <tr>
                                  <td>Lifting force</td>
                                  <td>≥2300kg</td>
                                </tr>
                                <tr>
                                  <td>PTO</td>
                                  <td>540/1000r/min, 6-teeth/21-teeth</td>
                                </tr>
                                <tr>
                                  <td>PTO power output (Kw)</td>
                                  <td>540 (6splines): 63 / 1000 (2splines): 63</td>
                                </tr>
                                <tr>
                                  <td>Wheelbase</td>
                                  <td>2314mm</td>
                                </tr>
                                <tr>
                                  <td>Wheeltread (front/rear)</td>
                                  <td>1564-2000mm / 1532-2132mm</td>
                                </tr>
                                <tr>
                                  <td>Min. ground clearance</td>
                                  <td>475mm</td>
                                </tr>
                                <tr>
                                  <td>Min. turning radius</td>
                                  <td>5.6±0.3m</td>
                                </tr>
                                <tr>
                                  <td>Overall sizes (L*W*H)</td>
                                  <td>4350*2300*2500mm</td>
                                </tr>
                                <tr>
                                  <td>Net weight</td>
                                  <td>4550kg</td>
                                </tr>
                                <tr>
                                  <td>Rated traction force</td>
                                  <td>20.9KN</td>
                                </tr>
                                <tr>
                                  <td>Tires (front/rear)</td>
                                  <td>14.9-24/18.4-34</td>
                                </tr>
                                <tr>
                                  <td>Electronic voltage (V)</td>
                                  <td>12</td>
                                </tr>
                                <tr>
                                  <td>Starter motor power (kW)</td>
                                  <td>4</td>
                                </tr>
                                <tr>
                                  <td>Alternator (Amps)</td>
                                  <td>50A</td>
                                </tr>
                                <tr>
                                  <td>Battery type (Ah)</td>
                                  <td>Lead-acid Battery 120ah</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank capacity (L)</td>
                                  <td>Under-laid 115L</td>
                                </tr>
                                <tr>
                                  <td>Brake type</td>
                                  <td>Oil bath, disc type</td>
                                </tr>
                                <tr>
                                  <td>Gauge / safeties</td>
                                  <td>Water temperature gauge, turn single lamp, fuel gauge, Brake light indicator, high beam indicator, charging indicator, low beam indicator, hour meter, oil pressure warning indicator, low pressure warning indicator, rear work light indicator, water temperature indicator</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="mt-4 p-3 bg-light border">
                            <p className="mb-1"><strong>Distributed in Pakistan By:</strong></p>
                            <p className="mb-1">PAK TRACTOR MANUFACTURING COMPANY</p>
                            <p className="mb-1">16-KM, Multan Road, Pakka Mile Stop, Shahpur, Lahore.</p>
                            <p className="mb-1">Phone: 92-42-37512567-8</p>
                            <p className="mb-1">UAN: 111-787-456</p>
                            <p className="mb-0">Fax: 92-42-37512569</p>
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
                        
                        <ContactForm productName="YTO-EX1054" showTitle={true} />
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
        alt="YTO-EX1054 Tractor"
      />
      
      <InquiryModal 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName="YTO-EX1054"
      />
    </div>
  );
}
