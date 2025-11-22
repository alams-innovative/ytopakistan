'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function GrainHarvesterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Grain Harvester | Agricultural Machinery | YTO';
  }, []);

  const handleInquiry = (productName: string) => {
    setInquiryProduct(productName);
    setShowInquiryModal(true);
  };

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
              <li><a href="/6-harvesting-equipment">Harvesting Equipment</a></li>
              <li>Grain Harvester</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="harvesting-equipment" 
            activeProduct="grain-harvester" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2" data-title="Grain Harvester">Grain Harvester (Combine Harvester with Grain Header)</h2>
                    <h4 className="d-block d-md-none">YTO-4LZ-9B1</h4>
                    
                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_01b.jpg')}>
                              <img src="/products/6-1-grain-harvester_01b.jpg" alt="Grain Harvester (Combine Harvester with Grain Header)" />
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Grain Harvester'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Grain Harvester (Combine Harvester with Grain Header)</h2>
                          <h4 className="d-none d-md-block">YTO-4LZ-9B1</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Features</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li>Reliable – the high-strength frame made of 16Mn rectangular steel tube reduces damage of vibration; the transmission system applies Peer's bearings and quality belts that have long service life; the hydraulic system consisting of "one hydraulic pump and one motor" is stable and dependable.</li>
                          <li>Efficient – the high-pressure common rail multimode engine provides high horsepower with low fuel consumption; the rubbing thresher effectively separates grains from chaff and straw.</li>
                          <li>Comfortable – the cab equipped with a suspension seat and an electromagnetic control lever gives you smooth and convenient control; color display helps you monitor the operation;</li>
                          <li>Versatile: It can be equipped with multiple implements for a variety of uses, such as, corn and bean harvest.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="clearfix"></div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                        <div>
                          <div className="etw_photo etw_pic2 etw_shadowpic">
                            <ul className="clearfix">
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_02b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_02b.jpg" alt="High-speed rubbing thresher" />
                                </figure>
                                <span>High-speed rubbing thresher</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_03b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_03b.jpg" alt="Enhanced blower" />
                                </figure>
                                <span>Enhanced blower</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_04b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_04b.jpg" alt="Long sieve that reduces grain loss" />
                                </figure>
                                <span>Long sieve that reduces grain loss</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_05b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_05b.jpg" alt="Dual-channel unloader system for wheat and beans" />
                                </figure>
                                <span>Dual-channel unloader system for wheat and beans</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_06b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_06b.jpg" alt="Suspension seat" />
                                </figure>
                                <span>Suspension seat</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-1-grain-harvester_07b.jpg')}>
                                  <img src="/products/6-1-grain-harvester_07b.jpg" alt="Hydraulic clutch for traveling" />
                                </figure>
                                <span>Hydraulic clutch for traveling</span>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="etw_title1">Specifications</div>
                          <div className="table-responsive mb-5">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td>Model</td>
                                  <td>4LZ-9B1</td>
                                </tr>
                                <tr>
                                  <td>Dimensions (L*W*H) (mm)</td>
                                  <td>7160*3200*3420</td>
                                </tr>
                                <tr>
                                  <td>Weight (kg)</td>
                                  <td>5900</td>
                                </tr>
                                <tr>
                                  <td>Engine power (kW)</td>
                                  <td>139.7</td>
                                </tr>
                                <tr>
                                  <td>Minimum ground clearance (mm)</td>
                                  <td>280</td>
                                </tr>
                                <tr>
                                  <td>Cutting width (mm)</td>
                                  <td>2750</td>
                                </tr>
                                <tr>
                                  <td>Feeding rate (kg/s)</td>
                                  <td>9</td>
                                </tr>
                                <tr>
                                  <td>Harvesting speed (km/h)</td>
                                  <td>0.7～9.8</td>
                                </tr>
                                <tr>
                                  <td>Harvesting output (hm2/h)</td>
                                  <td>0.4～1.08</td>
                                </tr>
                                <tr>
                                  <td>Operating device</td>
                                  <td>electromagnetic control lever/multifunction lever</td>
                                </tr>
                                <tr>
                                  <td>Driving mode</td>
                                  <td>Hydrostatic drive/mechanical transmission</td>
                                </tr>
                                <tr>
                                  <td>Grain tank size (m³)</td>
                                  <td>2.5</td>
                                </tr>
                                <tr>
                                  <td>Fuel capacity (L)</td>
                                  <td>320</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/6-1-grain-harvester" className="dq">Grain Harvester</a></li>
                            <li><a href="/6-2-corn-harvester">Corn Harvester</a></li>
                            <li><a href="/6-3-electric-riding-lawn-mower">Electric Riding Lawn Mower</a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                        
                        <ContactForm />
                        
                        <div className="clearfix"></div>
                      </div>
                      
                      <div className="col-12 col-lg-3">
                        <ul className="contact_item">
                          <li><a href="/contact"><img src="/images/email.jpg" alt="Visit and Contact Us" /> <span>Visit and Contact</span></a></li>
                          <li className="video_btn"><a href="/video"><img src="/images/video.jpg" alt="Video" /> <span>Video</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="othertitle"><span>Other Products</span></div>
                  <div className="other_pro">
                    <ul>
                      <li>
                        <ol>
                          <li className="product_img"><a href="/7-agricultural-implements"><img src="/products/7-agricultural-implements_01.jpg" alt="Agricultural Implements" /></a></li>
                          <li className="product_con"><a href="/7-agricultural-implements">Agricultural Implements</a></li>
                          <div className="more"><a href="/7-agricultural-implements">Read More</a></div>
                        </ol>
                      </li>
                      <li>
                        <ol>
                          <li className="product_img"><a href="/4-engine"><img src="/products/4-engine_01.jpg" alt="Diesel Engine & Genset" /></a></li>
                          <li className="product_con"><a href="/4-engine">Diesel Engine & Genset</a></li>
                          <div className="more"><a href="/4-engine">Read More</a></div>
                        </ol>
                      </li>
                      <li>
                        <ol>
                          <li className="product_img"><a href="/4b-diesel-engine-parts"><img src="/products/4b-diesel-engine-parts_01.jpg" alt="OEM Parts" /></a></li>
                          <li className="product_con"><a href="/4b-diesel-engine-parts">OEM Parts</a></li>
                          <div className="more"><a href="/4b-diesel-engine-parts">Read More</a></div>
                        </ol>
                      </li>
                      <li>
                        <ol>
                          <li className="product_img"><a href="/5-tractors"><img src="/products/5-tractors_01.jpg" alt="Tractors" /></a></li>
                          <li className="product_con"><a href="/5-tractors">Tractors</a></li>
                          <div className="more"><a href="/5-tractors">Read More</a></div>
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="Grain Harvester"
      />
      
      <InquiryModal 
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        productName={inquiryProduct}
      />
      
      <Footer />
    </div>
  );
}
