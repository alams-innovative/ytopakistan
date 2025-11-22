'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function FrontLoaderBackhoePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Front Loader and Backhoe | Agricultural Equipment Supplier | YTO';
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
              <li>Front Loader & Backhoe</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="front-loader-backhoe" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <h2 className="small_h2">Front Loader & Backhoe</h2>
                  
                  <div className="etw_title1">Front Loader</div>
                  <div className="etw_photo etw_pic2">
                    <ul>
                      <li>
                        <figure onClick={() => setSelectedImage('/products/7-1-front-loader-backhoe_01b.jpg')}>
                          <img src="/products/7-1-front-loader-backhoe_01b.jpg" alt="Front Loader" />
                        </figure>
                      </li>
                      <li>
                        <figure onClick={() => setSelectedImage('/products/7-1-front-loader-backhoe_02b.jpg')}>
                          <img src="/products/7-1-front-loader-backhoe_02b.jpg" alt="Front Loader" />
                        </figure>
                      </li>
                    </ul>
                  </div>

                  <div className="feedback mb-3"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Front Loader'); }}>Inquiry</a></div>
                  <div className="clearfix"></div>
                  
                  <p className="mb-2"><strong>Specifications</strong></p>
                  <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped ke-zeroborder tables">
                      <tbody>
                        <tr className="top">
                          <td>Model</td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ02D')}>TZ02D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ03D')}>TZ03D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ04D')}>TZ04D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ06D')}>TZ06D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ08D')}>TZ08D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ10D')}>TZ10D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ12D')}>TZ12D</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('TZ16D')}>TZ16D</span></div></td>
                        </tr>
                        <tr>
                          <td>Power (HP)</td>
                          <td>15～25</td>
                          <td>20～40</td>
                          <td>30～55</td>
                          <td>45～60</td>
                          <td>55～75</td>
                          <td>70～100</td>
                          <td>90～140</td>
                          <td>140～180</td>
                        </tr>
                        <tr>
                          <td>Max. Lift height H (mm)</td>
                          <td>2350</td>
                          <td>2550</td>
                          <td>2740</td>
                          <td>3010</td>
                          <td>3400</td>
                          <td>3710</td>
                          <td>3970</td>
                          <td>4260</td>
                        </tr>
                        <tr>
                          <td>Unloading height A (mm)</td>
                          <td>1730</td>
                          <td>1840</td>
                          <td>2100</td>
                          <td>2370</td>
                          <td>2480</td>
                          <td>2720</td>
                          <td>3000</td>
                          <td>3200</td>
                        </tr>
                        <tr>
                          <td>Loading height L (mm)</td>
                          <td>2170</td>
                          <td>2370</td>
                          <td>2560</td>
                          <td>2830</td>
                          <td>3220</td>
                          <td>3490</td>
                          <td>3770</td>
                          <td>4000</td>
                        </tr>
                        <tr>
                          <td>Bucket width (mm)</td>
                          <td>1250</td>
                          <td>1250</td>
                          <td>1400</td>
                          <td>1500</td>
                          <td>1600</td>
                          <td>1700</td>
                          <td>2000</td>
                          <td>2400</td>
                        </tr>
                        <tr>
                          <td>Bucket capacity (m³)</td>
                          <td>0.16</td>
                          <td>0.18</td>
                          <td>0.21</td>
                          <td>0.35</td>
                          <td>0.4</td>
                          <td>0.44</td>
                          <td>0.7</td>
                          <td>1.6</td>
                        </tr>
                        <tr>
                          <td>Load capacity (kg)</td>
                          <td>200</td>
                          <td>300</td>
                          <td>400</td>
                          <td>600</td>
                          <td>800</td>
                          <td>1000</td>
                          <td>1200</td>
                          <td>1600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="clearfix"></div>
                  
                  <div className="etw_title1">Backhoe</div>
                  <div className="etw_photo etw_pic2">
                    <ul>
                      <li>
                        <figure onClick={() => setSelectedImage('/products/7-1-front-loader-backhoe_03b.jpg')}>
                          <img src="/products/7-1-front-loader-backhoe_03b.jpg" alt="Backhoe" />
                        </figure>
                      </li>
                      <li>
                        <figure onClick={() => setSelectedImage('/products/7-1-front-loader-backhoe_04b.jpg')}>
                          <img src="/products/7-1-front-loader-backhoe_04b.jpg" alt="Backhoe" />
                        </figure>
                      </li>
                    </ul>
                  </div>

                  <div className="feedback mb-3"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Backhoe'); }}>Inquiry</a></div>
                  <div className="clearfix"></div>
                  
                  <p className="mb-2"><strong>Specifications</strong></p>
                  <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped ke-zeroborder tables">
                      <tbody>
                        <tr className="top">
                          <td>Model</td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW5')}>LW5</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW6')}>LW6</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW6E')}>LW6E</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW7')}>LW7</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW7E')}>LW7E</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW8')}>LW8</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW8E')}>LW8E</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW10')}>LW10</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW10E')}>LW10E</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('LW12')}>LW12</span></div></td>
                        </tr>
                        <tr>
                          <td>Power (HP)</td>
                          <td>15～25</td>
                          <td colSpan={2}>20～35</td>
                          <td colSpan={2}>30～55</td>
                          <td colSpan={2}>50～90</td>
                          <td colSpan={2}>70～120</td>
                          <td>100～180</td>
                        </tr>
                        <tr>
                          <td>Digging depth A (mm)</td>
                          <td>1650</td>
                          <td colSpan={2}>2000</td>
                          <td colSpan={2}>2400</td>
                          <td colSpan={2}>2800</td>
                          <td colSpan={2}>3200</td>
                          <td>3655</td>
                        </tr>
                        <tr>
                          <td>Unloading height B (mm)</td>
                          <td>1530</td>
                          <td colSpan={2}>1860</td>
                          <td colSpan={2}>2050</td>
                          <td colSpan={2}>2380</td>
                          <td colSpan={2}>2650</td>
                          <td>3627</td>
                        </tr>
                        <tr>
                          <td>Max. Height of bucket C (mm)</td>
                          <td>2600</td>
                          <td colSpan={2}>2970</td>
                          <td colSpan={2}>3210</td>
                          <td colSpan={2}>3460</td>
                          <td colSpan={2}>3770</td>
                          <td>5040</td>
                        </tr>
                        <tr>
                          <td>Swing radius D (mm)</td>
                          <td>2300</td>
                          <td colSpan={2}>2700</td>
                          <td colSpan={2}>3140</td>
                          <td colSpan={2}>3600</td>
                          <td colSpan={2}>3920</td>
                          <td>4510</td>
                        </tr>
                        <tr>
                          <td>Side shift distance F (mm)</td>
                          <td>0</td>
                          <td>0</td>
                          <td>770</td>
                          <td>0</td>
                          <td>770</td>
                          <td>0</td>
                          <td>1000</td>
                          <td>0</td>
                          <td>1200</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Max. support width H (mm)</td>
                          <td>2100</td>
                          <td>2200</td>
                          <td>1470</td>
                          <td>2200</td>
                          <td>1470</td>
                          <td>2200</td>
                          <td>1700</td>
                          <td>2300</td>
                          <td>2000</td>
                          <td>2550</td>
                        </tr>
                        <tr>
                          <td>Bucket width (inch)</td>
                          <td>14</td>
                          <td colSpan={2}>14</td>
                          <td colSpan={2}>16</td>
                          <td colSpan={2}>18</td>
                          <td colSpan={2}>20</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          <td>Bucket capacity (m³)</td>
                          <td>0.03</td>
                          <td colSpan={2}>0.04</td>
                          <td colSpan={2}>0.05</td>
                          <td colSpan={2}>0.06</td>
                          <td colSpan={2}>0.07</td>
                          <td>0.13</td>
                        </tr>
                        <tr>
                          <td>Weight (kg)</td>
                          <td>360</td>
                          <td>550</td>
                          <td>600</td>
                          <td>560</td>
                          <td>620</td>
                          <td>630</td>
                          <td>700</td>
                          <td>800</td>
                          <td>1000</td>
                          <td>1500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="clearfix"></div>
                  
                  <div className="content_txt1">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                        <div className="etw_title1">Related Products</div>
                        <div className="etw_related mb-4">
                          <ul>
                            <li><a href="/7-1-front-loader-backhoe" className="dq">Front Loader & Backhoe</a></li>
                            <li><a href="/7-2-disc-plough-disc-harrow">Disc Plough & Disc Harrow</a></li>
                            <li><a href="/7-3-rotary-tiller">Rotary Tiller</a></li>
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
        alt="Front Loader & Backhoe"
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
