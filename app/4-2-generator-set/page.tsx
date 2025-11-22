'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function GeneratorSetPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Diesel Engine and Generator Set | Agricultural Machinery | YTO';
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
              <li><a href="/4-engine">Diesel Engine & Genset</a></li>
              <li>Generator Set</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar activeCategory="diesel-engine" activeProduct="generator-set" />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2">Generator Set</h2>

                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/4-2-generator-set_01b.jpg')}>
                              <img src="/products/4-2-generator-set_01b.jpg" alt="Generator Set" />
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Generator Set'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Generator Set</h2>
                        </div>
                        <div className="clearfix"></div>

                        <p>YTO has developed YTR/LR/S/H series diesel generator sets (genset) made up of the diesel engines independently manufactured by YTO (Luoyang) Engine Machinery Company. Adopting the advanced technology imported from Europe and America, they can provide power ranging from 12 kW to 200 kW and they are equipped with the patented electronic control system. With the optimized and modular integral design improved by the 3D finite element analysis, the gensets enjoy the advantage of producing high horsepower, low consumption of fuel, low speed high torque and quick acceleration. They can be widely used in various fields like commercial buildings, industrial facilities and the shipping industry. They are eco-friendly since they meet the Euro 5 emission standard and E-mark authentication standard. Thanks to the independently developed gensets, YTO (Dongfanghong) has become a well-known trademark in China. Being high-quality, reliable and long-lasting, YTO's gensets have obtained good reputation around the world.</p>
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
                                <figure onClick={() => setSelectedImage('/products/4-2-generator-set_02b.jpg')}>
                                  <img src="/products/4-2-generator-set_02b.jpg" alt="Generator Set" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4-2-generator-set_03b.jpg')}>
                                  <img src="/products/4-2-generator-set_03b.jpg" alt="Generator Set" />
                                </figure>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="etw_title1">Specifications</div>
                          <div className="mb-5">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td> </td>
                                  <td>Model of Genset</td>
                                  <td>Prime power</td>
                                  <td>Standby power</td>
                                  <td>Engine model</td>
                                  <td>Dimensions of genset (mm)</td>
                                </tr>
                                <tr>
                                  <td rowSpan={6}>GENSET</td>
                                  <td>GDYD15</td>
                                  <td>12KW/15KVA</td>
                                  <td>13KW/16KVA</td>
                                  <td>YND485D</td>
                                  <td>2000*900*1150</td>
                                </tr>
                                <tr>
                                  <td>GDYD20</td>
                                  <td>16KW/20KVA</td>
                                  <td>18KW/23KVA</td>
                                  <td>YSD490D</td>
                                  <td>2000*900*1150</td>
                                </tr>
                                <tr>
                                  <td>GDYD30</td>
                                  <td>24KW/30KVA</td>
                                  <td>26KW/33KVA</td>
                                  <td>Y4102D</td>
                                  <td>2000*900*1150</td>
                                </tr>
                                <tr>
                                  <td>GDYTO45</td>
                                  <td>36KW/45KVA</td>
                                  <td>40KW/50KVA</td>
                                  <td>LR4B5-D</td>
                                  <td>2450*1000*1400</td>
                                </tr>
                                <tr>
                                  <td>GDYTO63</td>
                                  <td>50KW/63KVA</td>
                                  <td>55KW/69KVA</td>
                                  <td>LR4B3Z-D</td>
                                  <td>2450*1000*1400</td>
                                </tr>
                                <tr>
                                  <td>GDYTO100</td>
                                  <td>80KW/100KVA</td>
                                  <td>88KW/110KVA</td>
                                  <td>LR4M3L-D</td>
                                  <td>2800*1130*1650</td>
                                </tr>
                                <tr>
                                  <td> </td>
                                  <td colSpan={5}>Notes: 1. Fittings include base+soundproof system+fuel tank+battary+intelligent control module+air switch.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/4a-diesel-engine">Diesel Engine</a></li>
                            <li><a href="/4-2-generator-set" className="dq">Generator Set</a></li>
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
                    
                    <div className="othertitle"><span>Other Products</span></div>
                    <div className="other_pro">
                      <ul>
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
                        <li>
                          <ol>
                            <li className="product_img"><a href="/7-agricultural-implements"><img src="/products/7-agricultural-implements_01.jpg" alt="Agricultural Implements" /></a></li>
                            <li className="product_con"><a href="/7-agricultural-implements">Agricultural Implements</a></li>
                            <div className="more"><a href="/7-agricultural-implements">Read More</a></div>
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
      </div>
      
      <div className="clearfix"></div>
      
      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="Generator Set"
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
