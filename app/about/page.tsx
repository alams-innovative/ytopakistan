import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container" className="etw_container">
        {/* Breadcrumb */}
        <div id="etw_producttitle" className="pt-2">
          <div className="content">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About PTMC</a></li>
              <li>Company Profile</li>
            </ul>
          </div>
        </div>
        
        <div className="clearfix"></div>
        
        <div className="content content_white">
          {/* Banner */}
          <div className="bannerin bannerin7">
            <div className="bannerinfo_pro d-none"></div>
          </div>
          
          {/* Main Content */}
          <div id="etw_right">
            <div className="js-gallery-wrap">
              <div>
                <div className="etw_hometitle">
                  <div>Company Profile</div>
                </div>
                
                <div className="img_left">
                  <img src="/about/company.jpg" alt="About PTMC" />
                </div>
                
                <p>PTMC (Pak Tractor Machinery Company) is a dynamic and forward-thinking organization dedicated to delivering high-quality agricultural machinery and engineering solutions across Pakistan. With a strong commitment to innovation, reliability, and customer satisfaction, PTMC plays a vital role in supporting the country&apos;s agricultural and industrial development.</p>
                
                <p>Established with a vision to modernize farming practices, PTMC specializes in the distribution, support, and servicing of advanced machinery, including tractors, implements, and related equipment. The company works closely with globally recognized manufacturers to ensure that customers receive durable, efficient, and cost-effective solutions tailored to local needs.</p>
                
                <p>At PTMC, quality and performance are at the core of every operation. The company emphasizes strict standards in product selection, technical support, and after-sales service. Its team of skilled professionals ensures that clients receive expert guidance, timely maintenance, and reliable spare parts availability.</p>
                
                <p>Driven by integrity and long-term partnerships, PTMC continues to expand its footprint by building trust with farmers, contractors, and businesses nationwide. The company&apos;s mission is to empower its customers with modern technology, enhance productivity, and contribute to the sustainable growth of Pakistan&apos;s agricultural sector.</p>
                
                {/* Vision & Mission Section */}
                <div className="etw_hometitle mt-4">
                  <div>Our Vision</div>
                </div>
                <p>To become a leading provider of agricultural and industrial machinery solutions in Pakistan, recognized for excellence, innovation, and customer trust.</p>
                
                <div className="etw_hometitle mt-4">
                  <div>Our Mission</div>
                </div>
                <p>To deliver high-quality machinery, reliable services, and innovative solutions that enhance productivity and support sustainable development.</p>
                
                <ul className="text_item mb-4">
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon01.jpg" alt="Quality" /></li>
                      <li className="pro_txt">
                        <span>Quality</span>
                        PTMC emphasizes strict standards in product selection, technical support, and after-sales service for all agricultural machinery.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon02.jpg" alt="Innovation" /></li>
                      <li className="pro_txt">
                        <span>Innovation</span>
                        Committed to modernizing farming practices across Pakistan with advanced machinery and engineering solutions.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon03.jpg" alt="Nationwide" /></li>
                      <li className="pro_txt">
                        <span>Nationwide</span>
                        Building trust with farmers, contractors, and businesses across Pakistan through reliable service and support.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img"><img src="/images/icon04.jpg" alt="Partnership" /></li>
                      <li className="pro_txt">
                        <span>Partnership</span>
                        Working closely with globally recognized manufacturers including YTO to deliver durable, efficient, and cost-effective solutions.
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
              
              {/* Service Section */}
              <div className="etw_service etw_service_pro">
                <ul>
                  <li>
                    <ol>
                      <li className="pro_img">
                        <a href="/capabilities">
                          <img src="/images/service01.jpg" alt="Capabilities" />
                        </a>
                      </li>
                      <li className="pro_txt">
                        <a href="/capabilities">Capabilities</a>
                        {/* <span>
                          YTO has maintained the long-term partnership with world-class R&D institutions in America, U.K. and Austria, keeping in line with the state-of-the-art technology in the world.
                        </span> */}
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol>
                      <li className="pro_img">
                        <a href="/service">
                          <img src="/images/service02.jpg" alt="Service & Support" />
                        </a>
                      </li>
                      <li className="pro_txt">
                        <a href="/service">Service & Support</a>
                        {/* <span>
                          Winning trust of clients from more than 100 countries and regions, we have built manufacturing and R&D bases in France, Belarus, Cuba and South Africa.
                        </span> */}
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div id="etw_sidebar">
            <div className="etw_hometitle">About PTMC</div>
            <div id="etw_productlist">
              <ul>
                <li><a href="/about" className="dq">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
                <li><a href="/partners">Our Partners</a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />
    </div>
  );
}
