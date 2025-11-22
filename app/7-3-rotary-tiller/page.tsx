'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function RotaryTillerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Rotary Tiller | Agricultural Equipment Supplier | YTO';
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
              <li><a href="/7-agricultural-implements">Agricultural Implements</a></li>
              <li>Rotary Tiller</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="rotary-tiller" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2">Rotary Tiller</h2>
                    <h4 className="d-block d-md-none">1GQN Series</h4>
                    
                    <div className="row mb-4">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/7-3-rotary-tiller_01b.jpg')}>
                              <img src="/products/7-3-rotary-tiller_01b.jpg" alt="Rotary Tiller" />
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Rotary Tiller'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Rotary Tiller</h2>
                          <h4 className="d-none d-md-block">1GQN Series</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Features</div>
                        <ul className="item">
                          <li>The integral frame with enhanced side plates is highly resistant to deformation;</li>
                          <li>The separated rotary shaft is easy to replace and thus economic to use.</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    
                    <div className="etw_title1">Specifications</div>
                    <div className="table-responsive mb-5">
                      <table className="table table-hover table-striped ke-zeroborder tables">
                        <tbody>
                          <tr className="top">
                            <td>Model</td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-125D')}>1GQN-125D</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-150D')}>1GQN-150D</span></div></td>
                            <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-160D')}>1GQN-160D</span></div></td>
                            <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-200Z')}>1GQN-200Z</span></div></td>
                            <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-230Z')}>1GQN-230Z</span></div></td>
                            <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-230G')}>1GQN-230G</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1GQN-250G')}>1GQN-250G</span></div></td>
                          </tr>
                          <tr>
                            <td>Power (HP)</td>
                            <td>20-35</td>
                            <td>30-50</td>
                            <td colSpan={2}>40-60</td>
                            <td colSpan={2}>70-80</td>
                            <td colSpan={2}>80-90</td>
                            <td colSpan={2}>80-95</td>
                            <td>90-105</td>
                          </tr>
                          <tr>
                            <td>Weight (kg)</td>
                            <td>275</td>
                            <td>300</td>
                            <td colSpan={2}>315</td>
                            <td colSpan={2}>452</td>
                            <td colSpan={2}>483</td>
                            <td colSpan={2}>523</td>
                            <td>537</td>
                          </tr>
                          <tr>
                            <td>Working width (cm)</td>
                            <td>125</td>
                            <td>150</td>
                            <td colSpan={2}>160</td>
                            <td colSpan={2}>200</td>
                            <td colSpan={2}>230</td>
                            <td colSpan={2}>230</td>
                            <td>250</td>
                          </tr>
                          <tr>
                            <td>Working depth (cm)</td>
                            <td colSpan={11}>12-16</td>
                          </tr>
                          <tr>
                            <td>PTO speed (rpm)</td>
                            <td colSpan={11}>540/720</td>
                          </tr>
                          <tr>
                            <td>Working speed (km/h)</td>
                            <td colSpan={11}>2-5</td>
                          </tr>
                          <tr>
                            <td>Efficiency (hm²/h)</td>
                            <td>0.17-0.44</td>
                            <td colSpan={2}>0.21-0.52</td>
                            <td colSpan={2}>0.22-0.56</td>
                            <td colSpan={2}>0.28-0.7</td>
                            <td colSpan={2}>0.32-0.8</td>
                            <td>0.32-0.8</td>
                            <td>0.35-0.88</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  
                  <div className="clearfix"></div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/7-1-front-loader-backhoe">Front Loader & Backhoe</a></li>
                            <li><a href="/7-2-disc-plough-disc-harrow">Disc Plough & Disc Harrow</a></li>
                            <li><a href="/7-3-rotary-tiller" className="dq">Rotary Tiller</a></li>
                            <li><a href="/7-4-planter">Planter</a></li>
                            <li><a href="/7-5-dump-trailer">Dump Trailer</a></li>
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
                      <li>
                        <ol>
                          <li className="product_img"><a href="/6-harvesting-equipment"><img src="/products/6-harvesting-equipment_01.jpg" alt="Harvesting Equipment" /></a></li>
                          <li className="product_con"><a href="/6-harvesting-equipment">Harvesting Equipment</a></li>
                          <div className="more"><a href="/6-harvesting-equipment">Read More</a></div>
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
        alt="Rotary Tiller"
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
