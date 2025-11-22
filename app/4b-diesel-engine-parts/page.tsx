'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ContactForm from '../components/ContactForm';
import ImageModal from '../components/ImageModal';

export default function OEMPartsPage() {
  const [activeTab, setActiveTab] = useState('a1');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'OEM Parts,Farm Machinery,Construction Machinery,China Engine Manufacturer';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO is China tractor OEM parts manufacturer. Our OEM parts, such as cylinder block, cylinder head, manifold, and crankshaft, are used in tractor, heavy duty truck, bus, diesel engine, engineering vehicle. We also offer OEM parts of agricultural machinery, construction machinery, mining dump truck, pickup truck, trailer. We have widespread service network and spare parts center, quality farm equipment and construction machinery are provided at lower cost, welcome.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'OEM parts, diesel engine, tractor, farm machinery, wheeled tractor, construction machinery, road roller, wheel loader, motor grader, excavator, bulldozer, forklift truck, drilling rig, dump truck, farm equipment manufacturer, China farm tractor');
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
              <li>OEM Parts</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="oem-parts" 
            activeProduct="" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div itemScope itemType="http://data-vocabulary.org/Product">
                <div itemProp="description">
                  <div>
                    <h2 itemProp="name" className="small_h2">OEM Parts</h2>
                    <p>As a professional Chinese manufacturer of OEM parts, we strive to provide high quality products to our customers. So we use CAD, CAE, CAM technology and high quality production equipment and inspection equipment in the production. Our advanced machines include static pressure moulding line from German KW Company, automatic moulding line from Swiss GF Company, direct reading spectrometer, three-coordinate measuring machine, X-radiographic inspection machine, etc. With these advanced machines, we can produce 100,000 tons of iron castings every year. The weight of grey iron castings and nodular iron castings ranges from 2KG to 400KG.</p>

                    <p>Today, our OEM parts, such as cylinder block, cylinder head, manifold, and crankshaft, are popular with our customers in many countries. They are widely used in tractor, heavy duty truck, bus, diesel engine, engineering vehicle and more.</p>
                    
                    <ul className="nav nav-tabs-list" role="tablist">
                      <li role="presentation">
                        <a 
                          href="#a1" 
                          className={activeTab === 'a1' ? 'active' : ''} 
                          onClick={(e) => { e.preventDefault(); setActiveTab('a1'); }}
                        >
                          Cylinder Block
                        </a>
                      </li>
                      <li role="presentation">
                        <a 
                          href="#a2" 
                          className={activeTab === 'a2' ? 'active' : ''} 
                          onClick={(e) => { e.preventDefault(); setActiveTab('a2'); }}
                        >
                          Cylinder Head
                        </a>
                      </li>
                      <li role="presentation">
                        <a 
                          href="#a3" 
                          className={activeTab === 'a3' ? 'active' : ''} 
                          onClick={(e) => { e.preventDefault(); setActiveTab('a3'); }}
                        >
                          Front Drive Axle
                        </a>
                      </li>
                      <li role="presentation">
                        <a 
                          href="#a4" 
                          className={activeTab === 'a4' ? 'active' : ''} 
                          onClick={(e) => { e.preventDefault(); setActiveTab('a4'); }}
                        >
                          Manifold
                        </a>
                      </li>
                      <li role="presentation">
                        <a 
                          href="#a5" 
                          className={activeTab === 'a5' ? 'active' : ''} 
                          onClick={(e) => { e.preventDefault(); setActiveTab('a5'); }}
                        >
                          Crankshaft
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      {/* Cylinder Block Tab */}
                      <div className={`tab-pane ${activeTab === 'a1' ? 'active' : ''}`} id="a1">
                        <div className="row mb-3">
                          <div className="col-sm-4">
                            <div className="left_pic">
                              <div className="left_pics">
                                <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_01b.jpg')}>
                                  <img itemProp="image" src="/products/4b-diesel-engine-parts_01b.jpg" alt="Cylinder Block" />
                                </figure>
                              </div>
                              <div className="related_pic">
                                <ul>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_01b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_01b.jpg" alt="Cylinder Block" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_02b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_02b.jpg" alt="Cylinder Block" />
                                    </figure>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-sm-8">
                            <div className="clearfix"></div>
                            <div className="etw_title1">Cylinder Block</div>
                            <p>Relying on our special machine tool production base, casting production center and CNC machine center, we can produce high quality cylinder block and other OEM parts for our customers. <br />
                              Our cylinder block sells well in Europe, America, Japan, and many other countries.</p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      {/* Cylinder Head Tab */}
                      <div className={`tab-pane ${activeTab === 'a2' ? 'active' : ''}`} id="a2">
                        <div className="row mb-3">
                          <div className="col-sm-4">
                            <div className="left_pic">
                              <div className="left_pics">
                                <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_03b.jpg')}>
                                  <img itemProp="image" src="/products/4b-diesel-engine-parts_03b.jpg" alt="Cylinder Head" />
                                </figure>
                              </div>
                              <div className="related_pic">
                                <ul>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_03b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_03b.jpg" alt="Cylinder Head" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_04b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_04b.jpg" alt="Cylinder Head" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_05b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_05b.jpg" alt="Cylinder Head" />
                                    </figure>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-sm-8">
                            <div className="clearfix"></div>
                            <div className="etw_title1">Cylinder Head</div>
                            <p>Our cylinder head is well received in Weichai, Shangchai, Xichai, Sinotruk in China, and many tractor factories and diesel companies in Europe, South Africa, etc.</p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      {/* Front Drive Axle Tab */}
                      <div className={`tab-pane ${activeTab === 'a3' ? 'active' : ''}`} id="a3">
                        <div className="row mb-3">
                          <div className="col-sm-4">
                            <div className="left_pic">
                              <div className="left_pics">
                                <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_06b.jpg')}>
                                  <img itemProp="image" src="/products/4b-diesel-engine-parts_06b.jpg" alt="Front Drive Axle" />
                                </figure>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-sm-8">
                            <div className="clearfix"></div>
                            <div className="etw_title1">Front Drive Axle</div>
                            <p>We are experts in producing front drive axle for non-road machinery. Furthermore, we also produce front drive axle for 18-200 horse power tractor, construction machinery, harvesting machine, etc.</p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      {/* Manifold Tab */}
                      <div className={`tab-pane ${activeTab === 'a4' ? 'active' : ''}`} id="a4">
                        <div className="row mb-3">
                          <div className="col-sm-4">
                            <div className="left_pic">
                              <div className="left_pics">
                                <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_07b.jpg')}>
                                  <img itemProp="image" src="/products/4b-diesel-engine-parts_07b.jpg" alt="Manifold" />
                                </figure>
                              </div>
                              <div className="related_pic">
                                <ul>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_07b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_07b.jpg" alt="Manifold" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_08b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_08b.jpg" alt="Manifold" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_09b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_09b.jpg" alt="Manifold" />
                                    </figure>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-sm-8">
                            <div className="clearfix"></div>
                            <div className="etw_title1">Manifold</div>
                            <p>Our cylinder head is well received in Weichai, Shangchai, Xichai, Sinotruk in China, and many tractor factories and diesel companies in Europe, South Africa, etc.</p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      {/* Crankshaft Tab */}
                      <div className={`tab-pane ${activeTab === 'a5' ? 'active' : ''}`} id="a5">
                        <div className="row mb-3">
                          <div className="col-sm-4">
                            <div className="left_pic">
                              <div className="left_pics">
                                <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_10b.jpg')}>
                                  <img itemProp="image" src="/products/4b-diesel-engine-parts_10b.jpg" alt="Crankshaft" />
                                </figure>
                              </div>
                              <div className="related_pic">
                                <ul>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_10b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_10b.jpg" alt="Crankshaft" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_11b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_11b.jpg" alt="Crankshaft" />
                                    </figure>
                                  </li>
                                  <li>
                                    <figure onClick={() => setSelectedImage('/products/4b-diesel-engine-parts_12b.jpg')}>
                                      <img src="/products/4b-diesel-engine-parts_12b.jpg" alt="Crankshaft" />
                                    </figure>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-sm-8">
                            <div className="clearfix"></div>
                            <div className="etw_title1">Crankshaft</div>
                            <p>Using our internationally advanced suspension type heat treatment quenching and tempering line, crankshaft mass centering machine and other advanced machines, we can produce high quality crankshaft for use in agricultural machinery, construction machinery, power machinery, and other devices. <br />
                              Our crankshaft is highly recognized by our customers in America and Southeast Asia.</p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="clear"></div>
                    </div>
                  </div>
                  
                  <div className="clearfix"></div>
                  
                  <div className="content_txt1">
                    <div>
                      <p>In addition, we also offer OEM parts of agricultural machinery, construction machinery, mining dump truck, pickup truck, trailer, and so on. Our products are all manufactured in accordance with ISO9001:2008 and ISO14001 international standards, so you can feel at ease in purchasing and using them.</p>
                      <p>Please feel free to contact us if you are in need of OEM parts or our other products. We believe that you will be satisfied with our products and services.</p>
                      <div className="clearfix"></div>
                    </div>
                    
                    <ContactForm productName="OEM Parts" showTitle={true} />
                    <div className="clearfix"></div>
                    
                    <div className="othertitle"><span>Other Products</span></div>
                    <div className="other_pro">
                      <ul>
                        <li>
                          <ol>
                            <li className="product_img"><a href="/5-tractors"><img src="/products/5-tractors_01.jpg" alt="Tractors" /></a></li>
                            <li className="product_con"><a href="/5-tractors">Tractors</a></li>
                            <li className="more"><a href="/5-tractors">READ MORE</a></li>
                          </ol>
                        </li>
                        <li>
                          <ol>
                            <li className="product_img"><a href="/6-harvesting-equipment"><img src="/products/6-harvesting-equipment_01.jpg" alt="Harvesting Equipment" /></a></li>
                            <li className="product_con"><a href="/6-harvesting-equipment">Harvesting Equipment</a></li>
                            <li className="more"><a href="/6-harvesting-equipment">READ MORE</a></li>
                          </ol>
                        </li>
                        <li>
                          <ol>
                            <li className="product_img"><a href="/7-agricultural-implements"><img src="/products/7-agricultural-implements_01.jpg" alt="Agricultural Implements" /></a></li>
                            <li className="product_con"><a href="/7-agricultural-implements">Agricultural Implements</a></li>
                            <li className="more"><a href="/7-agricultural-implements">READ MORE</a></li>
                          </ol>
                        </li>
                        <li>
                          <ol>
                            <li className="product_img"><a href="/4-engine"><img src="/products/4-engine_01.jpg" alt="Diesel Engine & Genset" /></a></li>
                            <li className="product_con"><a href="/4-engine">Diesel Engine & Genset</a></li>
                            <li className="more"><a href="/4-engine">READ MORE</a></li>
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
        alt="OEM Parts"
      />
      
      <Footer />
    </div>
  );
}
