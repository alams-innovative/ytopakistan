'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

export default function Manufacturing() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Manufacturing | Agricultural Machinery | YTO';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', "YTO's quality products are backed by the advanced manufacturing technology, production lines and assembly lines. We stand ready to serve you.");
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Utility tractor, compact tractor, harvester, lawn mower');
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
              <li><a href="/capabilities">Capabilities</a></li>
              <li>Manufacturing</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          <div className="bannerin bannerin5">
            <div className="bannerinfo_pro"></div>
          </div>
          
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div itemProp="name">Manufacturing</div>
                </div>
                <p>As an agricultural machinery solution provider, YTO has made a breakthrough in power shifting, CVT and autonomous driving technology to further improve performance of tractors. Now YTO's tractors are widely used to deep tillage, plowing, harrowing, rotary tillage, planting and plant protection on a variety of terrains.</p>
                <p>YTO always pursues higher goals. We will improve the intelligent level of autonomous driving, precision agriculture and agricultural machinery information service platform to shape the future as an agricultural machinery manufacturer, service provider and information exchange platform.</p>
                <p>4 projects of YTO were set as Intelligent Manufacturing Samples by the Ministry of Industry and Information Technology of China</p>
                
                <div className="protitle">New modes of new-type wheeled tractor intelligent manufacturing</div>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_01.jpg'); }}><img src="/about/manufacturing_01.jpg" alt="Tractor production lines" /></a></figure><span>Tractor production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_02.jpg'); }}><img src="/about/manufacturing_02.jpg" alt="Pioneer flexible assembly lines of wheeled tractors" /></a></figure><span>Pioneer flexible assembly lines of wheeled tractors</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_03.jpg'); }}><img src="/about/manufacturing_03.jpg" alt="Harvester production lines" /></a></figure><span>Harvester production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_04.jpg'); }}><img src="/about/manufacturing_04.jpg" alt="Advanced harvester assembly lines" /></a></figure><span>Advanced harvester assembly lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_05.jpg'); }}><img src="/about/manufacturing_05.jpg" alt="Medium and small-sized tractor production lines" /></a></figure><span>Medium and small-sized tractor production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_06.jpg'); }}><img src="/about/manufacturing_06.jpg" alt="Medium and small-sized tractor production lines" /></a></figure><span>Medium and small-sized tractor production lines</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <div className="protitle">Digital factory of smart cabs of modern agricultural equipment</div>

                <div className="etw_photo etw_pic2 etw_shadowpic">
                  <ul>
                    <li><img src="/about/manufacturing_07.jpg" alt="Digital factory of smart cabs of modern agricultural equipment" /><span>Digital factory of smart cabs of modern agricultural equipment</span></li>
                    <li><img src="/about/manufacturing_08.jpg" alt="Smart cab production lines in Fulaige company under the YTO group" /><span>Smart cab production lines in Fulaige company under the YTO group</span></li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <div className="protitle">Smart manufacturing of heavy-duty power shift tractors</div>
                <div className="etw_photo etw_pic4 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_09.jpg'); }}><img src="/about/manufacturing_09.jpg" alt="Heavy-duty tractor production lines" /></a></figure><span>Heavy-duty tractor production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_10.jpg'); }}><img src="/about/manufacturing_10.jpg" alt="Heavy-duty tractor production lines" /></a></figure><span>Heavy-duty tractor production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_11.jpg'); }}><img src="/about/manufacturing_11.jpg" alt="Heavy-duty tractor production lines" /></a></figure><span>Heavy-duty tractor production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_12.jpg'); }}><img src="/about/manufacturing_12.jpg" alt="LZ2604 heavy-duty power shift tractor" /></a></figure><span>LZ2604 heavy-duty power shift tractor</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <div className="protitle">Automatic workshop of diesel engines</div>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_13.jpg'); }}><img src="/about/manufacturing_13.jpg" alt="Automatic workshop of diesel engines" /></a></figure><span>Automatic workshop of diesel engines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_14.jpg'); }}><img src="/about/manufacturing_14.jpg" alt="Diesel engine production lines" /></a></figure><span>Diesel engine production lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_15.jpg'); }}><img src="/about/manufacturing_15.jpg" alt="Automatic production lines of diesel engines" /></a></figure><span>Automatic production lines of diesel engines</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <p><strong>YTO boasts the advanced intelligent manufacturing capacity and the key part manufacturing technology in China's agricultural machinery industry.</strong></p>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_16.jpg'); }}><img src="/about/manufacturing_16.jpg" alt="Manufacturing" /></a></figure>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>YTO has a complete production chain of tractors, from key parts to agricultural vehicles, from production to assembly, and we can produce agricultural machinery based on the international standards or clients' needs to fit various requirements and enter different countries. </p>

                    <ul className="item">
                      <li>Diesel engine manufacturing</li>
                      <li>Vehicle exterior manufacturing</li>
                      <li>Chassis manufacturing</li>
                      <li>Drivetrain axle manufacturing</li>
                      <li>Key part manufacturing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="clearfix"></div>
                <hr />
                
                <div className="row mb-4 align-items-center">
                  <div className="col-md-6">
                    <div>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_17.jpg'); }}><img src="/about/manufacturing_17.jpg" alt="Diesel engine production" /></a></figure>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="protitle">Diesel engine production</div>

                    <ul className="item">
                      <li>Crankshaft production</li>
                      <li>Cylinder block production</li>
                      <li>Cylinder head production</li>
                      <li>Fuel pump production</li>
                    </ul>
                  </div>
                </div>
                
                <div className="clearfix"></div>
                <p className="mb-2"><strong>Chassis manufacturing</strong></p>
                <div className="etw_photo etw_pic4 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_18.jpg'); }}><img src="/about/manufacturing_18.jpg" alt="Gleason's bevel gear process lines" /></a></figure><span>Gleason's bevel gear process lines</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_19.jpg'); }}><img src="/about/manufacturing_19.jpg" alt="Gear grinding production line" /></a></figure><span>Gear grinding production line</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_20.jpg'); }}><img src="/about/manufacturing_20.jpg" alt="Rear axle housing process center" /></a></figure><span>Rear axle housing process center</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_21.jpg'); }}><img src="/about/manufacturing_21.jpg" alt="Torque-controlled technique of chassis assembly" /></a></figure><span>Torque-controlled technique of chassis assembly</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <p className="mb-2"><strong>Rigid connection of chassis assembly</strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_22.jpg'); }}><img src="/about/manufacturing_22.jpg" alt="Rigid connection of chassis assembly" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_23.jpg'); }}><img src="/about/manufacturing_23.jpg" alt="Rigid connection of chassis assembly" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_24.jpg'); }}><img src="/about/manufacturing_24.jpg" alt="Rigid connection of chassis assembly" /></a></figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>

                <p className="mb-2"><strong>Drivetrain axle production</strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_25.jpg'); }}><img src="/about/manufacturing_25.jpg" alt="Drivetrain axle production" /></a></figure><span>Drivetrain axle production</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_26.jpg'); }}><img src="/about/manufacturing_26.jpg" alt="Axle housing process center" /></a></figure><span>Axle housing process center</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_27.jpg'); }}><img src="/about/manufacturing_27.jpg" alt="Axle assembly line" /></a></figure><span>Axle assembly line</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>

                <p className="mb-2"><strong>Forging part manufacturing</strong></p>
                <div className="etw_photo etw_pic4 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_28.jpg'); }}><img src="/about/manufacturing_28.jpg" alt="Transmission housing" /></a></figure><span>Transmission housing</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_29.jpg'); }}><img src="/about/manufacturing_29.jpg" alt="Cylinder block" /></a></figure><span>Cylinder block</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_30.jpg'); }}><img src="/about/manufacturing_30.jpg" alt="Axle housing" /></a></figure><span>Axle housing</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_31.jpg'); }}><img src="/about/manufacturing_31.jpg" alt="crankshaft" /></a></figure><span>crankshaft</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>

                <p className="mb-2"><strong>Advanced sand moulding line</strong></p>
                <div className="etw_photo etw_pic5 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_32.jpg'); }}><img src="/about/manufacturing_32.jpg" alt="Static pressure moudling" /></a></figure><span>Static pressure moudling</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_34.jpg'); }}><img src="/about/manufacturing_34.jpg" alt="Automatic casting" /></a></figure><span>Automatic casting</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_36.jpg'); }}><img src="/about/manufacturing_36.jpg" alt="Material heating" /></a></figure><span>Material heating</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_37.jpg'); }}><img src="/about/manufacturing_37.jpg" alt="Hammering" /></a></figure><span>Hammering</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_38.jpg'); }}><img src="/about/manufacturing_38.jpg" alt="Twisting" /></a></figure><span>Twisting</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>

                <p className="mb-2"><strong>Strong production capacity</strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_41.jpg'); }}><img src="/about/manufacturing_41.jpg" alt="The highest 3D assembly line in Asia" /></a></figure><span>The highest 3D assembly line in Asia</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_42.jpg'); }}><img src="/about/manufacturing_42.jpg" alt="Tractor assembly line" /></a></figure><span>Tractor assembly line</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_43.jpg'); }}><img src="/about/manufacturing_43.jpg" alt="Axle assembly line" /></a></figure><span>Axle assembly line</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_44.jpg'); }}><img src="/about/manufacturing_44.jpg" alt="Smart factory for large-scale machienry" /></a></figure><span>Smart factory for large-scale machienry</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_45.jpg'); }}><img src="/about/manufacturing_45.jpg" alt="Casting line" /></a></figure><span>Casting line</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_46.jpg'); }}><img src="/about/manufacturing_46.jpg" alt="Hot forging line (12,500 tons)" /></a></figure><span>Hot forging line (12,500 tons)</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_47.jpg'); }}><img src="/about/manufacturing_47.jpg" alt="Robotic arm assembly line" /></a></figure><span>Robotic arm assembly line</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_48.jpg'); }}><img src="/about/manufacturing_48.jpg" alt="Chassis break-in test" /></a></figure><span>Chassis break-in test</span>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_49.jpg'); }}><img src="/about/manufacturing_49.jpg" alt="Metrology testing center" /></a></figure><span>Metrology testing center</span>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <div className="protitle">Product display</div>
                <p className="mb-2"><strong>Driverless tractors</strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_57.jpg'); }}><img src="/about/manufacturing_57.jpg" alt="Driverless tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_58.jpg'); }}><img src="/about/manufacturing_58.jpg" alt="Driverless tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_59.jpg'); }}><img src="/about/manufacturing_59.jpg" alt="Driverless tractors" /></a></figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <p className="mb-2"><strong>The first heavy-duty combine harvester independently developed by YTO</strong></p>
                <div><img src="/about/manufacturing_60.jpg" alt="engines" /></div>
                <div className="clearfix"></div>

                <p className="mb-2"><strong>Outdoor operation of YTO's tractors </strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_61.jpg'); }}><img src="/about/manufacturing_61.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_62.jpg'); }}><img src="/about/manufacturing_62.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_63.jpg'); }}><img src="/about/manufacturing_63.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_64.jpg'); }}><img src="/about/manufacturing_64.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_65.jpg'); }}><img src="/about/manufacturing_65.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_66.jpg'); }}><img src="/about/manufacturing_66.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_67.jpg'); }}><img src="/about/manufacturing_67.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_68.jpg'); }}><img src="/about/manufacturing_68.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_69.jpg'); }}><img src="/about/manufacturing_69.jpg" alt="Outdoor operation of YTO's tractors" /></a></figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
                <p className="mb-2"><strong>Product delivery</strong></p>
                <div className="etw_photo etw_pic3 etw_shadowpic">
                  <ul>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_70.jpg'); }}><img src="/about/manufacturing_70.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_71.jpg'); }}><img src="/about/manufacturing_71.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_72.jpg'); }}><img src="/about/manufacturing_72.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_73.jpg'); }}><img src="/about/manufacturing_73.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_74.jpg'); }}><img src="/about/manufacturing_74.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_75.jpg'); }}><img src="/about/manufacturing_75.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_76.jpg'); }}><img src="/about/manufacturing_76.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_77.jpg'); }}><img src="/about/manufacturing_77.jpg" alt="Product delivery" /></a></figure>
                    </li>
                    <li>
                      <figure><a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage('/about/manufacturing_78.jpg'); }}><img src="/about/manufacturing_78.jpg" alt="Product delivery" /></a></figure>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          <div id="etw_sidebar">
            <div className="etw_hometitle">Capabilities</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/r-d">R&D</a></li>
                <li><a href="/manufacturing" className="dq">Manufacturing</a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
      
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="Manufacturing Facility"
      />
    </div>
  );
}
