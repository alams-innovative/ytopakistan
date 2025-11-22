'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function DieselEnginePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Diesel Engine,Construction Machinery,Farm Machinery,China Engine Manufacturer';
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
              <li>Diesel Engine</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar activeCategory="diesel-engine" activeProduct="diesel-engine" />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2">Diesel Engine</h2>

                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_01b.jpg')}>
                              <img src="/products/4a-diesel-engine_01b.jpg" alt="Diesel Engine" />
                            </figure>
                          </div>
                          <div className="related_pic">
                            <ul>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_01b.jpg')}>
                                  <img src="/products/4a-diesel-engine_01b.jpg" alt="Diesel Engine" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_02b.jpg')}>
                                  <img src="/products/4a-diesel-engine_02b.jpg" alt="Diesel Engine" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_03b.jpg')}>
                                  <img src="/products/4a-diesel-engine_03b.jpg" alt="Diesel Engine" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_04b.jpg')}>
                                  <img src="/products/4a-diesel-engine_04b.jpg" alt="Diesel Engine" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_05b.jpg')}>
                                  <img src="/products/4a-diesel-engine_05b.jpg" alt="Diesel Engine" />
                                </figure>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Diesel Engine'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Diesel Engine</h2>
                        </div>
                        <div className="clearfix"></div>

                        <p>If you are looking for high quality diesel engine, we are your good choice.<br />
                          YTO is a professional ISO9001:2008 diesel engine manufacturer in China. Our diesel engines are available in more then 60 types. They are specially designed for tractor and construction machinery.</p>
                        <div className="etw_title1">Diesel Engine for Tractor</div>
                        <ul className="item">
                          <li>We can provide more than 30 kinds of diesels for tractor.</li>
                          <li>These diesel engines are applicable to large or medium wheeled tractor, crawler tractor and harvesting machines whose power is 30ps~220ps.</li>
                          <li>The air intake mode includes naturally aspirated, supercharged and supercharged inter-cooling.</li>
                          <li>Our diesel for tractor usually uses mechanical control mode or electric control mode.</li>
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
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_06b.jpg')}>
                                  <img src="/products/4a-diesel-engine_06b.jpg" alt="Diesel engine production line" />
                                </figure>
                                <span>Diesel engine production line</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/4a-diesel-engine_07b.jpg')}>
                                  <img src="/products/4a-diesel-engine_07b.jpg" alt="Diesel engine automatic production line" />
                                </figure>
                                <span>Diesel engine automatic production line</span>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                          
                          <div className="etw_title1">Diesel Engine for Construction Machinery</div>
                          <ul className="item">
                            <li>Our diesels for construction machinery are available in more than 30 basic types.</li>
                            <li>They can be used in excavating machinery, loader, bulldozer, road roller, fork truck, paver, motor grader, and crane, etc.</li>
                            <li>Their air intake mode can be normally aspirated or supercharged.</li>
                            <li>Their displacement varies from 2.2L to 7.97L.</li>
                          </ul>

                          <p className="mb-4">We have more than 50 years of experience in producing diesel engine, construction machinery and agricultural machinery, etc. Our diesel, combine harvester, road roller, dump truck, earthmover, forklift truck and other products are now successfully sold to many countries in America, Asia, Australia, Africa and more.<br />
                            If you are interested in any of our products, please do not hesitate to contact us.</p>
                          <div className="clearfix"></div>
                          
                          <div className="etw_title1">YTO Engine for Generator Set</div>
                          <div className="mb-5">
                            <table className="table table-hover table-striped ke-zeroborder tables">
                              <tbody>
                                <tr className="top">
                                  <td rowSpan={2}>Engine</td>
                                  <td rowSpan={2}>Model</td>
                                  <td rowSpan={2}>Style</td>
                                  <td>Cylinder diameter×engine stroke</td>
                                  <td>Total displacement</td>
                                  <td>Power</td>
                                  <td>Speed</td>
                                  <td>Minimum fuel consumption</td>
                                  <td rowSpan={2}>Engine air intake system</td>
                                </tr>
                                <tr className="top">
                                  <td>mm×mm</td>
                                  <td>L</td>
                                  <td>kW</td>
                                  <td>rpm</td>
                                  <td>g/(kW·h)</td>
                                </tr>
                                <tr>
                                  <td rowSpan={6}>LR Series</td>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR4B5-D')}>LR4B5-D</span></div></td>
                                  <td rowSpan={6}>Four cylinder, inline, water-cooled, four stroke, direct injection, electronic governor</td>
                                  <td>108×135</td>
                                  <td>4.95</td>
                                  <td>53</td>
                                  <td>1800</td>
                                  <td>235</td>
                                  <td>Naturally Aspirated</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR4B3Z-D')}>LR4B3Z-D</span></div></td>
                                  <td>108×125</td>
                                  <td>4.58</td>
                                  <td>71</td>
                                  <td>1800</td>
                                  <td>230</td>
                                  <td>Turbocharged</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR4M3L-D')}>LR4M3L-D</span></div></td>
                                  <td>110×125</td>
                                  <td>4.75</td>
                                  <td>93</td>
                                  <td>1800</td>
                                  <td>230</td>
                                  <td rowSpan={4}>Turbocharged and Intercooled</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR6A3L-D')}>LR6A3L-D</span></div></td>
                                  <td>105×125</td>
                                  <td>6.49</td>
                                  <td>120</td>
                                  <td>1800</td>
                                  <td>230</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR6A3L-DA')}>LR6A3L-DA</span></div></td>
                                  <td>105×125</td>
                                  <td>6.49</td>
                                  <td>127</td>
                                  <td>1800</td>
                                  <td>230</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LR6M3L-DA')}>LR6M3L-DA</span></div></td>
                                  <td>110×125</td>
                                  <td>7.13</td>
                                  <td>152</td>
                                  <td>1800</td>
                                  <td>230</td>
                                </tr>
                                <tr>
                                  <td rowSpan={5}>YM Series</td>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('YM6H4LF-D')}>YM6H4LF-D</span></div></td>
                                  <td rowSpan={5}>Six cylinder, inline, water-cooled, four stroke, direct injection, electronic governor</td>
                                  <td>120×130</td>
                                  <td>8.82</td>
                                  <td>235</td>
                                  <td>1800</td>
                                  <td>225</td>
                                  <td rowSpan={5}>Turbocharged and Intercooled</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('YM6S4LF-D')}>YM6S4LF-D</span></div></td>
                                  <td>126×130</td>
                                  <td>9.726</td>
                                  <td>300</td>
                                  <td>1800</td>
                                  <td>220</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('YM6S9L-D')}>YM6S9L-D</span></div></td>
                                  <td>126×155</td>
                                  <td>11.6</td>
                                  <td>360</td>
                                  <td>1800</td>
                                  <td>215</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('YM6S9LF-D')}>YM6S9LF-D</span></div></td>
                                  <td>126×155</td>
                                  <td>11.6</td>
                                  <td>400</td>
                                  <td>1800</td>
                                  <td>230</td>
                                </tr>
                                <tr>
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('YM6S9LF-DA')}>YM6S9LF-DA</span></div></td>
                                  <td>126×155</td>
                                  <td>11.6</td>
                                  <td>430</td>
                                  <td>1800</td>
                                  <td>230</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/4a-diesel-engine" className="dq">Diesel Engine</a></li>
                            <li><a href="/4-2-generator-set">Generator Set</a></li>
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
        alt="Diesel Engine"
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
