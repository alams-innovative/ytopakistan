'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function DumpTrailerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Dump Trailer | Agricultural Machinery | YTO';
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
              <li>Dump Trailer</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="dump-trailer" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <div>
                    <h2 className="d-block d-md-none small_h2" data-title="Dump Trailer">Dump Trailer / Agricultural Trailer</h2>
                    <h4 className="d-block d-md-none">7CX-1/7CX-2/7CX-3.5/7CX-5/7CX-8</h4>
                    
                    <div className="row mb-3">
                      <div className="col-md-5">
                        <div className="left_pic">
                          <div className="left_pics">
                            <figure onClick={() => setSelectedImage('/products/7-5-dump-trailer_01b.jpg')}>
                              <img src="/products/7-5-dump-trailer_01b.jpg" alt="Dump Trailer / Agricultural Trailer" />
                            </figure>
                          </div>
                          <div className="related_pic">
                            <ul>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/7-5-dump-trailer_01b.jpg')}>
                                  <img src="/products/7-5-dump-trailer_01b.jpg" alt="Dump Trailer / Agricultural Trailer" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/7-5-dump-trailer_02b.jpg')}>
                                  <img src="/products/7-5-dump-trailer_02b.jpg" alt="Dump Trailer / Agricultural Trailer" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/7-5-dump-trailer_03b.jpg')}>
                                  <img src="/products/7-5-dump-trailer_03b.jpg" alt="Dump Trailer / Agricultural Trailer" />
                                </figure>
                              </li>
                              <li>
                                <figure onClick={() => setSelectedImage('/products/7-5-dump-trailer_04b.jpg')}>
                                  <img src="/products/7-5-dump-trailer_04b.jpg" alt="Dump Trailer / Agricultural Trailer" />
                                </figure>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="feedback"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Dump Trailer'); }}>Inquiry</a></div>
                      </div>
                      <div className="col-md-7">
                        <div>
                          <h2 className="d-none d-md-block small_h2">Dump Trailer / Agricultural Trailer</h2>
                          <h4 className="d-none d-md-block">7CX-1/7CX-2/7CX-3.5/7CX-5/7CX-8</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="etw_title1">Features</div>

                        <p>The dump trailer with high load capacity is easy to use and maintain. It is particularly designed for heavy-duty transportation work.</p>
                        <div className="clearfix"></div>
                      </div>
                    </div>

                    <div className="etw_title1">Specifications</div>
                    <div className="table-responsive mb-5">
                      <table className="table table-hover table-striped ke-zeroborder tables">
                        <tbody>
                          <tr className="top">
                            <td>Model</td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('7CX-1')}>7CX-1</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('7CX-2')}>7CX-2</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('7CX-3.5')}>7CX-3.5</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('7CX-5')}>7CX-5</span></div></td>
                            <td><div className="sendinquiry2"><span onClick={() => handleInquiry('7CX-8')}>7CX-8</span></div></td>
                          </tr>
                          <tr>
                            <td>Load weight (kg)</td>
                            <td>1000</td>
                            <td>2000</td>
                            <td>3500</td>
                            <td>5000</td>
                            <td>8000</td>
                          </tr>
                          <tr>
                            <td>Load capacity (m³)</td>
                            <td>0.66</td>
                            <td>1.73</td>
                            <td>2.7</td>
                            <td>8.6</td>
                            <td>8.8</td>
                          </tr>
                          <tr>
                            <td>Dimensions (L*W*H) (mm)</td>
                            <td>2900*1050*970</td>
                            <td>3700*1660*1400</td>
                            <td>4800*1790*1810</td>
                            <td>5020*1990*1855</td>
                            <td>5830*2200*2260</td>
                          </tr>
                          <tr>
                            <td>Cargo dimensions (L*W*H) (mm)</td>
                            <td>2000*1000*330</td>
                            <td>2500*1500*460</td>
                            <td>3400*1700*460</td>
                            <td>3610*1810*（460+460）</td>
                            <td>4010*2060*（550+550）</td>
                          </tr>
                          <tr>
                            <td>Brake type</td>
                            <td>Air brake</td>
                            <td colSpan={4}>Air brake + Parking brake</td>
                          </tr>
                          <tr>
                            <td>Linkage</td>
                            <td colSpan={5}>Fixed</td>
                          </tr>
                          <tr>
                            <td>Dumping form</td>
                            <td colSpan={3}>Rear dump</td>
                            <td>3-side dump</td>
                            <td>2- or 3-side dump</td>
                          </tr>
                          <tr>
                            <td>Number of telescopic cylinders</td>
                            <td colSpan={4}>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>Dumping angle (˚)</td>
                            <td colSpan={5}>45</td>
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
                            <li><a href="/7-4-planter">Planter</a></li>
                            <li><a href="/7-5-dump-trailer" className="dq">Dump Trailer</a></li>
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
        alt="Dump Trailer"
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
