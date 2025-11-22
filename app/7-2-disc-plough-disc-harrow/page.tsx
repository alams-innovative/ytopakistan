'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import ImageModal from '../components/ImageModal';
import InquiryModal from '../components/InquiryModal';
import ContactForm from '../components/ContactForm';

export default function DiscPloughHarrowPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>('');

  useEffect(() => {
    document.title = 'Disc Plough and Disc Harrow | Agricultural Implements | YTO';
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
              <li>Disc Plough & Disc Harrow</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white d-md-flex">
          <ProductSidebar 
            activeCategory="agricultural-implements" 
            activeProduct="disc-plough-disc-harrow" 
          />
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div>
                  <h2 className="small_h2">Disc Plough & Disc Harrow</h2>

                  <div className="row mb-3">
                    <div className="col-md-5">
                      <div className="left_pic">
                        <div className="left_pics">
                          <figure onClick={() => setSelectedImage('/products/7-2-disc-plough-disc-harrow_01b.jpg')}>
                            <img src="/products/7-2-disc-plough-disc-harrow_01b.jpg" alt="Disc Plough" />
                          </figure>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-md-7">
                      <div className="etw_title1 mb-3">Disc Plough</div>
                      <p className="mb-2"><strong>Features</strong></p>
                      
                      <ul className="item">
                        <li>The independent plough frame is easy to replace;</li>
                        <li>The whole structure is made of high-strength materials and thus is stable and durable;</li>
                        <li>Thanks to its structure, the disc plough performs well in efficient plowing with less resistance and it is less likely to be intertwined with grass</li>
                      </ul>
                      <div className="clearfix"></div>
                      <div className="feedback text-left mx-0"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Disc Plough'); }}>Inquiry</a></div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  
                  <p className="mb-2"><strong>Specifications</strong></p>
                  <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped ke-zeroborder tables">
                      <tbody>
                        <tr className="top">
                          <td>Model</td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1LYT—225')}>1LYT—225</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1LYT—325')}>1LYT—325</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1LYT—425')}>1LYT—425</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1LYT—525')}>1LYT—525</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1LYT—625')}>1LYT—625</span></div></td>
                        </tr>
                        <tr>
                          <td>Power (HP)</td>
                          <td>35-50</td>
                          <td>60-80</td>
                          <td>80-100</td>
                          <td>90-120</td>
                          <td>120-160</td>
                        </tr>
                        <tr>
                          <td>Plowing width (cm)</td>
                          <td>50</td>
                          <td>75</td>
                          <td>100</td>
                          <td>125</td>
                          <td>150</td>
                        </tr>
                        <tr>
                          <td>Working depth (cm)</td>
                          <td colSpan={5}>25-30</td>
                        </tr>
                        <tr>
                          <td>Disc diameter (mm)</td>
                          <td>660</td>
                          <td>660/710</td>
                          <td>660/710</td>
                          <td>660/710</td>
                          <td>660/710</td>
                        </tr>
                        <tr>
                          <td>Linkage type</td>
                          <td colSpan={5}>3-point linkage</td>
                        </tr>
                        <tr>
                          <td>Weight (kg)</td>
                          <td colSpan={5}>350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="clearfix"></div>

                  <div className="row mb-3">
                    <div className="col-md-5">
                      <div className="left_pic">
                        <div className="left_pics">
                          <figure onClick={() => setSelectedImage('/products/7-2-disc-plough-disc-harrow_02b.jpg')}>
                            <img src="/products/7-2-disc-plough-disc-harrow_02b.jpg" alt="Disc Harrow" />
                          </figure>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-md-7">
                      <div className="etw_title1 mb-3">Disc Harrow</div>
                      <p className="mb-2"><strong>Features</strong></p>
                      
                      <ul className="item">
                        <li>The disc harrow has the advantage of easily tilling soil, breaking up clumps of soil and adapting to clayey soil, wasteland and weedy lands;</li>
                        <li>The integral frame is simple and strong, and hydraulic transport wheels with small turning radius enables convenient movement.</li>
                      </ul>
                      <div className="clearfix"></div>
                      <div className="feedback text-left mx-0"><a href="#" onClick={(e) => { e.preventDefault(); handleInquiry('Disc Harrow'); }}>Inquiry</a></div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  
                  <p className="mb-2"><strong>Specifications</strong></p>
                  <div className="table-responsive mb-5">
                    <table className="table table-hover table-striped ke-zeroborder tables">
                      <tbody>
                        <tr className="top">
                          <td>Model</td>
                          <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1BZ-2.2')}>1BZ-2.2</span></div></td>
                          <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1BZ-2.5')}>1BZ-2.5</span></div></td>
                          <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1BZ-3.0')}>1BZ-3.0</span></div></td>
                          <td><div className="sendinquiry2"><span onClick={() => handleInquiry('1BZ-3.4')}>1BZ-3.4</span></div></td>
                          <td colSpan={2}><div className="sendinquiry2"><span onClick={() => handleInquiry('1BZ-4.0')}>1BZ-4.0</span></div></td>
                        </tr>
                        <tr>
                          <td>Matched power (HP)</td>
                          <td colSpan={2}>90-100</td>
                          <td colSpan={2}>90-100</td>
                          <td colSpan={2}>100-120</td>
                          <td>120-140</td>
                          <td colSpan={2}>140-160</td>
                        </tr>
                        <tr>
                          <td>Working width (cm)</td>
                          <td colSpan={2}>220</td>
                          <td colSpan={2}>250</td>
                          <td colSpan={2}>300</td>
                          <td>340</td>
                          <td colSpan={2}>400</td>
                        </tr>
                        <tr>
                          <td>Working depth (cm)</td>
                          <td colSpan={9}>20</td>
                        </tr>
                        <tr>
                          <td>Linkage type</td>
                          <td colSpan={9}>Tow</td>
                        </tr>
                        <tr>
                          <td>Disc diameter (mm)</td>
                          <td colSpan={9}>660</td>
                        </tr>
                        <tr>
                          <td>No. of disc</td>
                          <td>20</td>
                          <td colSpan={2}>24</td>
                          <td colSpan={2}>28</td>
                          <td colSpan={3}>32</td>
                          <td>36</td>
                        </tr>
                        <tr>
                          <td>Weight (kg)</td>
                          <td>1350</td>
                          <td colSpan={2}>1450</td>
                          <td colSpan={2}>1550</td>
                          <td colSpan={3}>1750</td>
                          <td>1950</td>
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
                            <li><a href="/7-1-front-loader-backhoe">Front Loader & Backhoe</a></li>
                            <li><a href="/7-2-disc-plough-disc-harrow" className="dq">Disc Plough & Disc Harrow</a></li>
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
        alt="Disc Plough & Disc Harrow"
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
