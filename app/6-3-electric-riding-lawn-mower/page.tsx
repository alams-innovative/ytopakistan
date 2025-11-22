'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function LawnMowerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Lawn Mower | Agricultural Machinery Supplier | YTO';
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
              <li>Electric Riding Lawn Mower</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="harvesting-equipment" 
            activeProduct="electric-riding-lawn-mower" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2">Electric Riding Lawn Mower</h2>
                    <h4 className="d-block d-md-none">YTO-ZT42A</h4>
                    
                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/6-3-electric-riding-lawn-mower_01b.jpg')}>
                              <img src="/products/6-3-electric-riding-lawn-mower_01b.jpg" alt="Electric Riding Lawn Mower" />
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Electric Riding Lawn Mower'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Electric Riding Lawn Mower</h2>
                          <h4 className="d-none d-md-block">YTO-ZT42A</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Features</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li>The lawn mower is particularly designed to mow lawns in yards, park, golf courses and airports;</li>
                          <li>It is driven by the lithium iron phosphate battery which is clean, environmentally friendly and long-endurance;</li>
                          <li>360 degree zero-turn radius steering design enable strong adaptability to different terrains and smooth steering;</li>
                          <li>Small control handles are maneuverable and give your easy-to-control feel;</li>
                          <li>The lawn mower is equipped with rated speed direct-driven blades and side dischargers</li>
                          <li>The cut height can be adjusted to 12 levels to suit different scenarios;</li>
                          <li>The compact design with the integrated frame and the wheel decelerator is safe, reliable and efficient.</li>
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
                                <figure onClick={() => setSelectedImage('/products/6-3-electric-riding-lawn-mower_02b.jpg')}>
                                  <img src="/products/6-3-electric-riding-lawn-mower_02b.jpg" alt="Long endurance" />
                                </figure>
                                <span>Long endurance</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-3-electric-riding-lawn-mower_03b.jpg')}>
                                  <img src="/products/6-3-electric-riding-lawn-mower_03b.jpg" alt="Small control handle" />
                                </figure>
                                <span>Small control handle</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-3-electric-riding-lawn-mower_04b.jpg')}>
                                  <img src="/products/6-3-electric-riding-lawn-mower_04b.jpg" alt="360° zero-turn radius steering" />
                                </figure>
                                <span>360° zero-turn radius steering</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-3-electric-riding-lawn-mower_05b.jpg')}>
                                  <img src="/products/6-3-electric-riding-lawn-mower_05b.jpg" alt="Integrated wheel decelerator" />
                                </figure>
                                <span>Integrated wheel decelerator</span>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="etw_title1">Specifications</div>
                          <div className="table-responsive mb-5">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td width="45%">Model</td>
                                  <td>ZT42A</td>
                                </tr>
                                <tr>
                                  <td>Dimensions (L*W*H) (mm)</td>
                                  <td>1670*1350*1100</td>
                                </tr>
                                <tr>
                                  <td>Max. wheel base (mm)</td>
                                  <td>1300</td>
                                </tr>
                                <tr>
                                  <td>Wheel track (F/R) (mm)</td>
                                  <td>810/850</td>
                                </tr>
                                <tr>
                                  <td>Tyre (F/R)</td>
                                  <td>13*5-6/18*8.5-8</td>
                                </tr>
                                <tr>
                                  <td>Speed range (F/R) (km/h)</td>
                                  <td>0-11.3/0-5</td>
                                </tr>
                                <tr>
                                  <td>Single mowing area</td>
                                  <td>≤14000</td>
                                </tr>
                                <tr>
                                  <td>Cutting speed (rpm)</td>
                                  <td>3000/3200</td>
                                </tr>
                                <tr>
                                  <td>Blade disc size (inch)</td>
                                  <td>42</td>
                                </tr>
                                <tr>
                                  <td>Lithium battery</td>
                                  <td>48V、100Ah</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/6-1-grain-harvester">Grain Harvester</a></li>
                            <li><a href="/6-2-corn-harvester">Corn Harvester</a></li>
                            <li><a href="/6-3-electric-riding-lawn-mower" className="dq">Electric Riding Lawn Mower</a></li>
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
        alt="Electric Riding Lawn Mower"
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
