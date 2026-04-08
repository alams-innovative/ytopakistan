'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="gridContainer clearfix">
      {/* Header Component */}
      <Header />

      <div className="clearfix"></div>

      {/* Main Container */}
      <div id="container" className="etw_container">
        {/* Banner */}
        <div id="etw_banner">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={800}
            autoplay={{ delay: 15000 }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/banner01.jpg" className="d-none d-md-block" alt="YTO International, Ltd." />
              <img src="/images/mobile_banner1.jpg" className="d-block d-md-none" alt="YTO International, Ltd." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner02.jpg" className="d-none d-md-block" alt="YTO International, Ltd." />
              <img src="/images/mobile_banner2.jpg" className="d-block d-md-none" alt="YTO International, Ltd." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner03.jpg" className="d-none d-md-block" alt="YTO International, Ltd." />
              <img src="/images/mobile_banner3.jpg" className="d-block d-md-none" alt="YTO International, Ltd." />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="clearfix"></div>

        {/* Main Products */}
        <div className="etw_mainproducts" id="products">
          <div className="content">
            <div className="etw_hometitle">
              Global Leading Agricultural and Construction Machinery Since 1955
            </div>
            <ul>
              <li>
                <ol>
                  <li className="product_img">
                    <img src="/images/pro1.jpg" alt="Tractors" />
                  </li>
                  <li className="product_con">
                    Tractors
                  </li>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <img src="/images/pro2.jpg" alt="Harvesting Equipment" />
                  </li>
                  <li className="product_con">
                    Harvesting Equipment
                  </li>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <img src="/images/pro3.jpg" alt="Agricultural Implements" />
                  </li>
                  <li className="product_con">
                    Agricultural Implements
                  </li>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <img src="/images/pro4.jpg" alt="Diesel Engine & Genset" />
                  </li>
                  <li className="product_con">
                    Diesel Engine & Genset
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        <div className="clearfix"></div>

        {/* Service Section */}
        <div className="etw_service" id="capabilities">
          <div className="content">
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
                      YTO has maintained the long-term partnership with world-class R&D institutions 
                      in America, U.K. and Austria, keeping in line with the state-of-the-art technology 
                      in the world.
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
                      Winning trust of clients from more than 100 countries and regions, we have built 
                      manufacturing and R&D bases in France, Belarus, Cuba and South Africa.
                    </span> */}
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        <div className="clearfix"></div>

        {/* Product Scroller Section */}
        <div className="etw_product_scroller">
          <div className="content">
            <div className="etw_hometitle">Tractor Range for Pakistan</div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              speed={600}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="product-swiper"
            >
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-esk550">
                    <div className="product-card-img">
                      <img src="/tractors/yto-esk550/YTO-ESK550.jpg" alt="YTO-ESK550" />
                    </div>
                    <div className="product-card-title">YTO-ESK550</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ef804">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ef804/YTO-EF804.jpg" alt="YTO-EF804" />
                    </div>
                    <div className="product-card-title">YTO-EF804</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1054-cabin">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1054-cabin/YTO-EX1054-Cabin.jpg" alt="YTO-EX1054 Cabin" />
                    </div>
                    <div className="product-card-title">YTO-EX1054 Cabin</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1054-canopy">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1054-canopy/YTO-EX1054-Canopy.jpg" alt="YTO-EX1054 Canopy" />
                    </div>
                    <div className="product-card-title">YTO-EX1054 Canopy</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-x1204-cabin">
                    <div className="product-card-img">
                      <img src="/tractors/yto-x1204-cabin/YTO-X1204-Cabin.jpg" alt="YTO-X1204 Cabin" />
                    </div>
                    <div className="product-card-title">YTO-X1204 Cabin</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-x1204-canopy">
                    <div className="product-card-img">
                      <img src="/tractors/yto-x1204-canopy/YTO-X1204-Canopy.jpg" alt="YTO-X1204 Canopy" />
                    </div>
                    <div className="product-card-title">YTO-X1204 Canopy</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1254-cabin">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1254-cabin/YTO-EX1254-Cabin.jpg" alt="YTO-EX1254 Cabin" />
                    </div>
                    <div className="product-card-title">YTO-EX1254 Cabin</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1254-canopy">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1254-canopy/YTO-EX1254-Canopy.jpg" alt="YTO-EX1254 Canopy" />
                    </div>
                    <div className="product-card-title">YTO-EX1254 Canopy</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1404-cabin">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1404-cabin/YTO-EX1404-Cabin.jpg" alt="YTO-EX1404 Cabin" />
                    </div>
                    <div className="product-card-title">YTO-EX1404 Cabin</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-ex1404-canopy">
                    <div className="product-card-img">
                      <img src="/tractors/yto-ex1404-canopy/YTO-EX1404-Canopy.jpg" alt="YTO-EX1404 Canopy" />
                    </div>
                    <div className="product-card-title">YTO-EX1404 Canopy</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-e2004">
                    <div className="product-card-img">
                      <img src="/tractors/yto-e2004/YTO-E2004.jpg" alt="YTO-E2004" />
                    </div>
                    <div className="product-card-title">YTO-E2004</div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card">
                  <a href="/yto-nlx1604-cabin">
                    <div className="product-card-img">
                      <img src="/tractors/yto-nlx1604-cabin/YTO-NLX1604-Cabin.jpg" alt="YTO-NLX1604 Cabin" />
                    </div>
                    <div className="product-card-title">YTO-NLX1604 Cabin</div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="clearfix"></div>

        {/* Main Body - YTO Group */}
        <div className="etw_mainbody" id="about">
          <div className="content">
            <div className="etw_hometitle">
              <a href="/about">YTO Group</a>
            </div>
            <ul>
              <li>
                <ol>
                  <li className="pro_img">
                    <a href="/about">
                      <img src="/images/company.jpg" alt="About YTO" />
                    </a>
                  </li>
                  <li className="pro_txt">
                    <a href="/about">About YTO</a>
                    <span>
                      YTO Group Corporation (hereinafter referred to as YTO) is a comprehensive enterprise 
                      group mainly engaged in machinery manufacturing under China National Machinery Industry 
                      Corporation Ltd (Sinomach) which is Top 500 enterprises in the world.
                    </span>
                  </li>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="pro_img">
                    <a href="/manufacturing">
                      <img src="/images/group01.jpg" alt="Manufacturing Capabilities" />
                    </a>
                  </li>
                  <li className="pro_txt">
                    <a href="/manufacturing">Manufacturing Capabilities</a>
                    <span>
                      YTO Owns the annual production capacity of 120,000 units of tractors. YTO Owns the 
                      annual production capacity of 230,000 units of diesel engines.
                    </span>
                  </li>
                </ol>
                <ol>
                  <li className="pro_img">
                    <a href="/r-d">
                      <img src="/images/group02.jpg" alt="R&D Power" />
                    </a>
                  </li>
                  <li className="pro_txt">
                    <a href="/r-d">R&D Power</a>
                    <span>
                      YTO owns National-level R & D Center, National-level Tractor Quality Supervision and 
                      Evaluation Center, power system lab and National-level test base.
                    </span>
                  </li>
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
            <ul className="contact_item">
              <li>
                <a href="/video">
                  <img src="/images/group03.jpg" alt="YTO Machinery in the World" />
                  <span>YTO Machinery in the World</span>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <img src="/images/email.jpg" alt="Visit and Contact Us" />
                  <span>Visit and Contact Us</span>
                </a>
              </li>
              <li>
                <a href="/video">
                  <img src="/images/video.jpg" alt="Video Show" />
                  <span>Video Show</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>

      <div className="clearfix"></div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
