'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function CornHarvesterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Corn Harvester | Agricultural Machinery | YTO';
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
              <li>Corn Harvester</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="harvesting-equipment" 
            activeProduct="corn-harvester" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2" data-title="Corn Harvester">Corn Harvester (Combine Harvester with Corn Header)</h2>
                    <h4 className="d-block d-md-none">YTO-4LZ-3D2/4D3</h4>
                    
                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_01b.jpg')}>
                              <img src="/products/6-2-corn-harvester_01b.jpg" alt="Corn Harvester (Combine Harvester with Corn Header)" />
                            </figure>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Corn Harvester'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Corn Harvester (Combine Harvester with Corn Header)</h2>
                          <h4 className="d-none d-md-block">YTO-4LZ-3D2/4D3</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Features</div>
                        <div className="clearfix"></div>
                        <ul className="item">
                          <li>Fuel injectors made by Bosch and the high-pressure common rail multimode engine ensure high efficiency while consuming less fuel;</li>
                          <li>The corn header with the unique design has the advantage of quick corn cutting and collecting and it is adjustable for various row spaces;</li>
                          <li>A cutter at the front end and a chopper in the middle part are used to completely cut straw and stubble and reuse them as fertilizer</li>
                          <li></li>
                          <li>Blowers to remove debris, remaining chaff and straw deliver excellent cleaning performance;</li>
                          <li>A backup camera and a corn tank camera helps you better monitor the situation for safety and efficiency;</li>
                          <li>The hydrostatic drive system consisting of "one hydraulic pump and one motor" is dependable and trustworthy.</li>
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
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_02b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_02b.jpg" alt="Strong engine developed by YTO" />
                                </figure>
                                <span>Strong engine developed by YTO</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_03b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_03b.jpg" alt="16Mn rectangular steel tube" />
                                </figure>
                                <span>16Mn rectangular steel tube</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_04b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_04b.jpg" alt="Corn header" />
                                </figure>
                                <span>Corn header</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_05b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_05b.jpg" alt="Enclosed cab with a suspension seat that prevents dust" />
                                </figure>
                                <span>Enclosed cab with a suspension seat that prevents dust</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_06b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_06b.jpg" alt="Smart chain lubrication" />
                                </figure>
                                <span>Smart chain lubrication</span>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/6-2-corn-harvester_07b.jpg')}>
                                  <img src="/products/6-2-corn-harvester_07b.jpg" alt="Concentrated lubrication for key shaft" />
                                </figure>
                                <span>Concentrated lubrication for key shaft</span>
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
                                  <td><div className="sendinquiry2"><span onClick={() => handleInquiry('4YZ-3D2')}>4YZ-3D2</span></div></td>
                                  <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('4YZ-4D3')}>4YZ-4D3</span></div></td>
                                </tr>
                                <tr>
                                  <td>Dimensions (L*W*H) (mm)</td>
                                  <td>6700*2360*3455</td>
                                  <td colSpan={2}>6830*2745*3460</td>
                                </tr>
                                <tr>
                                  <td>Weight (kg)</td>
                                  <td>6400</td>
                                  <td colSpan={2}>7500</td>
                                </tr>
                                <tr>
                                  <td>Engine rate (kW)</td>
                                  <td>132.3</td>
                                  <td colSpan={2}>161.7</td>
                                </tr>
                                <tr>
                                  <td>Minimum ground clearance (mm)</td>
                                  <td colSpan={3}>280</td>
                                </tr>
                                <tr>
                                  <td>Corn rows</td>
                                  <td>3</td>
                                  <td colSpan={2}>4</td>
                                </tr>
                                <tr>
                                  <td>Row space range (mm)</td>
                                  <td colSpan={3}>550-580</td>
                                </tr>
                                <tr>
                                  <td>Harvesting speed (km/h)</td>
                                  <td colSpan={3}>1.55～7</td>
                                </tr>
                                <tr>
                                  <td>Harvesting output (hm2/h)</td>
                                  <td colSpan={3}>0.2-0.5</td>
                                </tr>
                                <tr>
                                  <td>Drive mode</td>
                                  <td>Mechanical</td>
                                  <td colSpan={2}>Mechanical/hydraulic</td>
                                </tr>
                                <tr>
                                  <td>Corn tank size (m³)</td>
                                  <td colSpan={2}>2.2</td>
                                  <td>2.7</td>
                                </tr>
                                <tr>
                                  <td>Unloading height (mm)</td>
                                  <td colSpan={3}>2900</td>
                                </tr>
                                <tr>
                                  <td>Fuel tank size (L)</td>
                                  <td colSpan={2}>260</td>
                                  <td>300</td>
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
                            <li><a href="/6-2-corn-harvester" className="dq">Corn Harvester</a></li>
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
        alt="Corn Harvester"
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
