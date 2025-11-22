'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function PlanterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Planter | Agricultural Machinery Supplier | YTO';
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
              <li>Planter</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="planter" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="small_h2">Planter</h2>
                    <div className="etw_title1">Pneumatic Precision Planter</div>
                    <p><strong>2610-2800-2900 2B Series</strong></p>
                    
                    <div className="etw_photo etw_pic3 etw_shadowpic mb-3">
                      <ul>
                        <li>
                          <figure onClick={() => setSelectedImage('/products/7-4-planter_01b.jpg')}>
                            <img src="/products/7-4-planter_01b.jpg" alt="2610 Pneumatic Precision Planter" />
                          </figure>
                          <span>2610 Pneumatic Precision Planter</span>
                        </li>
                        <li>
                          <figure onClick={() => setSelectedImage('/products/7-4-planter_02b.jpg')}>
                            <img src="/products/7-4-planter_02b.jpg" alt="2800 Pneumatic Precision Planter" />
                          </figure>
                          <span>2800 Pneumatic Precision Planter</span>
                        </li>
                        <li>
                          <figure onClick={() => setSelectedImage('/products/7-4-planter_03b.jpg')}>
                            <img src="/products/7-4-planter_03b.jpg" alt="2900 Pneumatic Precision Planter" />
                          </figure>
                          <span>2900 Pneumatic Precision Planter</span>
                        </li>
                      </ul>
                    </div>
                    <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Pneumatic Precision Planter'); }}>Inquiry</a></div>
                    <div className="clearfix"></div>
                    
                    <p className="mb-2"><strong>Features</strong><br />
                    The series of pneumatic precision planter can be used for sowing different crops by quickly changing the sowing discs. It is suitable for flat farming and ridge seeding after soil preparation. During the operation, it can do the job of large-scale sowing and fertilization at one time, such as, side deep fertilization, sowing and trenching, single seed planting, soil compression and restoration.</p>

                    <div className="clearfix"></div>
                    <p className="mb-2"><strong>Specifications</strong></p>

                    <div className="table-responsive mb-5">
                      <table className="table table-hover table-striped ke-zeroborder tables">
                        <tbody>
                          <tr className="top">
                            <td>Model</td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('2610')}>2610</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('2800')}>2800</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('2900')}>2900</span></div></td>
                          </tr>
                          <tr>
                            <td>Structure type</td>
                            <td colSpan={3}>Pneumatic; suspension</td>
                          </tr>
                          <tr>
                            <td>Required power (HP)</td>
                            <td>90-120</td>
                            <td colSpan={2}>150-210</td>
                          </tr>
                          <tr>
                            <td>Dimensions (L*H*W) (mm)</td>
                            <td>2040*4700*1900</td>
                            <td>2040*5900*1500</td>
                            <td>2040*4400*1500</td>
                          </tr>
                          <tr>
                            <td>Working speed (m/s)</td>
                            <td colSpan={3}>1.6-2.2</td>
                          </tr>
                          <tr>
                            <td>Efficiency (hm２/h)</td>
                            <td>1.8-3.3</td>
                            <td>2.3-5.1</td>
                            <td>2.3-3.1</td>
                          </tr>
                          <tr>
                            <td>Working width (cm)</td>
                            <td>390 (252-420)</td>
                            <td>520 (336-560)</td>
                            <td>390</td>
                          </tr>
                          <tr>
                            <td>Row space (cm)</td>
                            <td>65 (42-70)</td>
                            <td>65 (42-80)</td>
                            <td>130</td>
                          </tr>
                          <tr>
                            <td>Number of rows</td>
                            <td>6</td>
                            <td>8</td>
                            <td>9</td>
                          </tr>
                          <tr>
                            <td>Weight (kg)</td>
                            <td>1760</td>
                            <td>2380</td>
                            <td>2190</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="clearfix"></div>

                    <div className="etw_title1">Seed Drill</div>
                    <p><strong>2BFY-24/2BFY-36</strong></p>
                    <div className="etw_photo etw_pic2 etw_shadowpic mb-3">
                      <ul>
                        <li>
                          <figure onClick={() => setSelectedImage('/products/7-4-planter_04b.jpg')}>
                            <img src="/products/7-4-planter_04b.jpg" alt="Seed Drill" />
                          </figure>
                        </li>
                        <li>
                          <figure onClick={() => setSelectedImage('/products/7-4-planter_05b.jpg')}>
                            <img src="/products/7-4-planter_05b.jpg" alt="Seed Drill" />
                          </figure>
                        </li>
                      </ul>
                    </div>
                    <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Seed Drill'); }}>Inquiry</a></div>
                    <div className="clearfix"></div>
                    
                    <p className="mb-2"><strong>Features</strong><br />
                    The seed drill can complete fertilization, sowing, mulching and soil compression at the same time. It is mainly used for wheat and cereal strip sowing as well as sorghum and soybean sowing.</p>

                    <div className="clearfix"></div>
                    <p className="mb-2"><strong>Specifications</strong></p>

                    <div className="table-responsive mb-5">
                      <table className="table table-hover table-striped ke-zeroborder tables">
                        <tbody>
                          <tr className="top">
                            <td>Model</td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('2BFY-24')}>2BFY-24</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('2BFY-36')}>2BFY-36</span></div></td>
                          </tr>
                          <tr>
                            <td>Dimensions (mm)</td>
                            <td>3660*7360*1660</td>
                            <td>4120*6900*2500</td>
                          </tr>
                          <tr>
                            <td>Weight (kg)</td>
                            <td>1850</td>
                            <td>2800</td>
                          </tr>
                          <tr>
                            <td>Working width (cm)</td>
                            <td>360</td>
                            <td>540</td>
                          </tr>
                          <tr>
                            <td>Working depth (mm)</td>
                            <td colSpan={2}>30～80</td>
                          </tr>
                          <tr>
                            <td>Total number of rows</td>
                            <td>24</td>
                            <td>36</td>
                          </tr>
                          <tr>
                            <td>Required power (HP)</td>
                            <td>50～120</td>
                            <td>75～180</td>
                          </tr>
                          <tr>
                            <td>Seed box volume</td>
                            <td>615</td>
                            <td>920</td>
                          </tr>
                          <tr>
                            <td>Fertilizer tank volume (L)</td>
                            <td>570</td>
                            <td>850</td>
                          </tr>
                          <tr>
                            <td>Drive type</td>
                            <td colSpan={2}>Chain</td>
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
                            <li><a href="/7-3-rotary-tiller">Rotary Tiller</a></li>
                            <li><a href="/7-4-planter" className="dq">Planter</a></li>
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
        alt="Planter"
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
