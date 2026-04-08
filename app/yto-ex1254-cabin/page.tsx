'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ProductSidebar from '../components/ProductSidebar';
import ContactForm from '../components/ContactForm';
import DistributorCard from '../components/DistributorCard';
import RelatedProducts from '../components/RelatedProducts';

export default function TractorDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    document.title = 'YTO-EX1254 Cabin | Agricultural Tractor | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO-EX1254 Cabin wheeled tractor with 125hp power, YTO engine, 12F+4R transmission, fully enclosed cabin.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'YTO-EX1254 Cabin, Agricultural Tractor, YTO, Wheeled Tractor, Cabin Tractor');
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
              <li>YTO-EX1254 Cabin</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="tractors" 
            activeProduct="yto-ex1254-cabin" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div itemScope itemType="http://data-vocabulary.org/Product">
                <div itemProp="description">
                  <div>
                    <h2 itemProp="name" className="d-block d-md-none small_h2">YTO-EX1254 CABIN WHEELED TRACTOR</h2>
                    
                    <div className="row mb-3">
                      <div className="col-12 col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure>
                              <a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/tractors/yto-ex1254-cabin/YTO-EX1254-Cabin.jpg'); }}>
                                <img itemProp="image" src="/tractors/yto-ex1254-cabin/YTO-EX1254-Cabin.jpg" alt="YTO-EX1254 Cabin Wheeled Tractor" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback">
                          <a href="#" onClick={(e) => { e.preventDefault(); setIsInquiryOpen(true); }}>
                            Inquiry
                          </a>
                          <a 
                            href={`https://wa.me/923115997569?text=${encodeURIComponent('Hi, I am interested in YTO-EX1254 Cabin Wheeled Tractor. Please provide more details.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp Us
                          </a>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-7">
                        <h2 className="d-none d-md-block small_h2">YTO-EX1254 CABIN WHEELED TRACTOR</h2>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Main Characteristics</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li><strong>Fully Enclosed Cabin:</strong> Comfortable and weather-protected operator environment with climate control, sound insulation, and ergonomic design for extended operation;</li>
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
                          <li><strong>Weight ballasts:</strong> With front 8pcs and rear 6pcs of weight ballasts.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12">
                          <div className="etw_title1">Technical Specifications List — YTO-EX1254 Cabin</div>
                          <div className="table-responsive mb-2">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td><strong>Model</strong></td>
                                  <td>YTO-EX1254 Cabin</td>
                                </tr>
                                <tr>
                                  <td>Engine</td>
                                  <td>YTO LR6M5-23</td>
                                </tr>
                                <tr>
                                  <td>Air-inlet way</td>
                                  <td>6-cylinder, water-cooling, naturally aspirated</td>
                                </tr>
                                <tr>
                                  <td>Rated housepower</td>
                                  <td>125hp (92kW)</td>
                                </tr>
                                <tr>
                                  <td>Engine rated rotation speed</td>
                                  <td>2300r/min</td>
                                </tr>
                                <tr>
                                  <td>Torque (N.m)</td>
                                  <td>480</td>
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
                                  <td>≤235g/kW·h</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank capacity</td>
                                  <td>200L</td>
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
                                  <td>2.0-28.5/4.5-13.5 km/h</td>
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
                                  <td>13-inch LUK</td>
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
                                  <td>≥4000kg</td>
                                </tr>
                                <tr>
                                  <td>PTO</td>
                                  <td>540/1000r/min, 6-teeth/21-teeth</td>
                                </tr>
                                <tr>
                                  <td>PTO power output (Kw)</td>
                                  <td>540 (6splines): 60 / 1000 (2splines): 75</td>
                                </tr>
                                <tr>
                                  <td>Wheelbase</td>
                                  <td>2600mm</td>
                                </tr>
                                <tr>
                                  <td>Wheeltread (front/rear)</td>
                                  <td>1680-2100mm / 1560-2200mm</td>
                                </tr>
                                <tr>
                                  <td>Min. ground clearance</td>
                                  <td>470mm</td>
                                </tr>
                                <tr>
                                  <td>Min. turning radius</td>
                                  <td>6.8±0.3m</td>
                                </tr>
                                <tr>
                                  <td>Overall sizes (L*W*H)</td>
                                  <td>4900*2350*2700mm (with cabin)</td>
                                </tr>
                                <tr>
                                  <td>Net weight</td>
                                  <td>5800kg (with cabin)</td>
                                </tr>
                                <tr>
                                  <td>Rated traction force</td>
                                  <td>28KN</td>
                                </tr>
                                <tr>
                                  <td>Tires (front/rear)</td>
                                  <td>14.9-26/18.4-38</td>
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
                                  <td>Under-laid 200L</td>
                                </tr>
                                <tr>
                                  <td>Brake type</td>
                                  <td>Oil bath, disc type</td>
                                </tr>
                                <tr>
                                  <td>Cabin Features</td>
                                  <td>Fully enclosed cabin with climate control, sound insulation, ergonomic seating, and enhanced visibility</td>
                                </tr>
                                <tr>
                                  <td>Gauge / safeties</td>
                                  <td>Water temperature gauge, turn single lamp, fuel gauge, Brake light indicator, high beam indicator, charging indicator, low beam indicator, hour meter, oil pressure warning indicator, low pressure warning indicator, rear work light indicator, water temperature indicator</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                          
                          <DistributorCard />
                        </div>
                      
                        <RelatedProducts currentProduct="YTO-EX1254" />
                        <div className="clearfix"></div>
                        
                        <ContactForm productName="YTO-EX1254 Cabin" showTitle={true} />
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
        alt="YTO-EX1254 Cabin Tractor"
      />
      
      <InquiryModal 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName="YTO-EX1254 Cabin"
      />
    </div>
  );
}

