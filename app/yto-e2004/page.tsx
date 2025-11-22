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
    document.title = 'YTO-E2004 | Agricultural Tractor | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO-E2004 wheeled tractor with 200hp power, Shangchai engine, 12F+4R transmission.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'YTO-E2004, Agricultural Tractor, YTO, Wheeled Tractor');
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
              <li>YTO-E2004</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="tractors" 
            activeProduct="yto-e2004" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div itemScope itemType="http://data-vocabulary.org/Product">
                <div itemProp="description">
                  <div>
                    <h2 itemProp="name" className="d-block d-md-none small_h2">YTO-E2004 WHEELED TRACTOR</h2>
                    
                    <div className="row mb-3">
                      <div className="col-12 col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure>
                              <a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/tractors/yto-e2004/YTO-E2004.jpg'); }}>
                                <img itemProp="image" src="/tractors/yto-e2004/YTO-E2004.jpg" alt="YTO-E2004 Wheeled Tractor" />
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
                        <h2 className="d-none d-md-block small_h2">YTO-E2004 WHEELED TRACTOR</h2>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Main Characteristics</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li><strong>Shangchai Engine:</strong> British Riccardo technology, turbocharged inter-cooled, engine reserve power reaches 30%, and the power is strong;</li>
                          <li><strong>Air prefilter (desert air filter):</strong> Automatic dust removal, no need for cleaning, free daily maintenance;</li>
                          <li><strong>Clutch:</strong> Air-assisted single-acting main clutch, large bearing capacity, high reliability. Electro control oil immersed PTO clutch, one button control, operation easy and convenient, stable performance, high transmission efficiency;</li>
                          <li><strong>Difference lock:</strong> Electro-hydraulic control, keep in sync with the rear wheels;</li>
                          <li><strong>The drivetrain system:</strong> adopts Italian technology, with reasonable structure and high transmission efficiency;</li>
                          <li><strong>Transmission box:</strong> 12F+4R engagement sleeve gearshift, gearshift reliable, and large bearing capacity;</li>
                          <li><strong>Brake:</strong> Safe and reliable wet disc brake. With pedal-type single circuit cutoff type of air brake controlling trailer braking;</li>
                          <li><strong>PTO and Hydraulic outputs:</strong> 540/1000rpm, 6 teeth+8 teeth+21 teeth, with rear CAT Ⅲ suspension and 3-pair of hydraulic outputs;</li>
                          <li><strong>The structure of individual hydraulic and transmission oil:</strong> Lifter and gearbox are lubricated separately to reduce lifter hydraulic failures;</li>
                          <li><strong>Position Lifter:</strong> Realize the depth adjustment of implements, keep tillage at the same depth, and improve effect of work;</li>
                          <li><strong>Weight ballasts:</strong> With front 18pcs (810kg) and rear 4pcs (360kg) of weight ballasts.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                          <div className="etw_title1">Technical Specifications List — YTO-E2004</div>
                          <div className="table-responsive mb-2">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td><strong>Model</strong></td>
                                  <td>YTO-E2004</td>
                                </tr>
                                <tr>
                                  <td>Engine</td>
                                  <td>Shangchai SC8D215G2</td>
                                </tr>
                                <tr>
                                  <td>Air-inlet way</td>
                                  <td>6-cylinder, Turbocharged inter-cooled, emission 2-stage</td>
                                </tr>
                                <tr>
                                  <td>Rated housepower</td>
                                  <td>200hp (147kW)</td>
                                </tr>
                                <tr>
                                  <td>Engine rated rotation speed</td>
                                  <td>2200r/min</td>
                                </tr>
                                <tr>
                                  <td>Torque (N.m)</td>
                                  <td>535</td>
                                </tr>
                                <tr>
                                  <td>Engine bore x stroke (mm*mm)</td>
                                  <td>110*135</td>
                                </tr>
                                <tr>
                                  <td>Compression ratio</td>
                                  <td>17.1</td>
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
                                  <td>Lube oil capacity (Engine) (L)</td>
                                  <td>21</td>
                                </tr>
                                <tr>
                                  <td>Coolant capacity (L)</td>
                                  <td>20</td>
                                </tr>
                                <tr>
                                  <td>Transmission oil capacity (L)</td>
                                  <td>60</td>
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
                                  <td>2.38-30.39/4.44-11.99 km/h</td>
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
                                  <td>15-inch</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic pump flow</td>
                                  <td>70L/min</td>
                                </tr>
                                <tr>
                                  <td>Hydraulic pump pressure (Mpa)</td>
                                  <td>20±0.5</td>
                                </tr>
                                <tr>
                                  <td>Lifting force</td>
                                  <td>≥5700kg</td>
                                </tr>
                                <tr>
                                  <td>PTO</td>
                                  <td>540/1000r/min, 6-teeth/8-teeth/21-teeth</td>
                                </tr>
                                <tr>
                                  <td>PTO power output at different rpm (Kw)</td>
                                  <td>540 (6splines): 65 / 1000 (2splines): 81.7</td>
                                </tr>
                                <tr>
                                  <td>Wheelbase</td>
                                  <td>2848mm</td>
                                </tr>
                                <tr>
                                  <td>Wheeltread (front/rear)</td>
                                  <td>1560-2260mm/1960-2360mm</td>
                                </tr>
                                <tr>
                                  <td>Min. ground clearance</td>
                                  <td>495mm</td>
                                </tr>
                                <tr>
                                  <td>Min. turning radius</td>
                                  <td>7±0.3m</td>
                                </tr>
                                <tr>
                                  <td>Overall sizes (L*W*H)</td>
                                  <td>5390*3550*3490mm</td>
                                </tr>
                                <tr>
                                  <td>Net weight</td>
                                  <td>9630kg</td>
                                </tr>
                                <tr>
                                  <td>Rated traction force</td>
                                  <td>39KN</td>
                                </tr>
                                <tr>
                                  <td>Tires (front/rear)</td>
                                  <td>16.9-28/20.8-38 (Rear double tires)</td>
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
                                  <td>80A</td>
                                </tr>
                                <tr>
                                  <td>Battery type (Ah)</td>
                                  <td>Lead-acid Battery 150ah</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank capacity (L)</td>
                                  <td>Under-laid 230L</td>
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
                        <div className= "etw_title1">Related Products</div>
                        <div className='etw_related'>
                          <ul >
                            <li><a href="/yto-e2004">YTO-E2004</a></li>
                            <li><a href="/yto-elx2404">YTO-ELX2404</a></li>
                            <li><a href="/yto-ex1054">YTO-EX1054</a></li>
                            <li><a href="/yto-ex1404">YTO-EX1404</a></li>
                            <li><a href="/yto-nlx1604">YTO-NLX1604</a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                        
                        <ContactForm productName="YTO-E2004" showTitle={true} />
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
        alt="YTO-E2004 Tractor"
      />
      
      <InquiryModal 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName="YTO-E2004"
      />
    </div>
  );
}
