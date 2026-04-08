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
                          <a 
                            href={`https://wa.me/923115997569?text=${encodeURIComponent('Hi, I am interested in YTO-ELX2404 Wheeled Tractor. Please provide more details.')}`}
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
                      <div className="col-12">
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
                      
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related">
                          <ul>
                            <li><a href="/yto-esk550">YTO-ESK550</a></li>
                            <li><a href="/yto-ef804">YTO-EF804</a></li>
                            <li><a href="/yto-ex1054">YTO-EX1054</a></li>
                            <li><a href="/yto-x1204">YTO-X1204</a></li>
                            <li><a href="/yto-ex1254">YTO-EX1254</a></li>
                            <li><a href="/yto-ex1404">YTO-EX1404</a></li>
                            <li><a href="/yto-nlx1604">YTO-NLX1604</a></li>
                            <li><a href="/yto-e2004">YTO-E2004</a></li>
                            <li><a href="/yto-elx2404">YTO-ELX2404</a></li>
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
