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
                    <a href="/5-tractors">
                      <img src="/images/pro1.jpg" alt="Tractors" />
                    </a>
                  </li>
                  <li className="product_con">
                    <a href="/5-tractors">Tractors</a>
                  </li>
                  <div className="more">
                    <a href="/5-tractors">Read More</a>
                  </div>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <a href="/6-harvesting-equipment">
                      <img src="/images/pro2.jpg" alt="Harvesting Equipment" />
                    </a>
                  </li>
                  <li className="product_con">
                    <a href="/6-harvesting-equipment">Harvesting Equipment</a>
                  </li>
                  <div className="more">
                    <a href="/6-harvesting-equipment">Read More</a>
                  </div>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <a href="/7-agricultural-implements">
                      <img src="/images/pro3.jpg" alt="Agricultural Implements" />
                    </a>
                  </li>
                  <li className="product_con">
                    <a href="/7-agricultural-implements">Agricultural Implements</a>
                  </li>
                  <div className="more">
                    <a href="/7-agricultural-implements">Read More</a>
                  </div>
                </ol>
              </li>
              <li>
                <ol>
                  <li className="product_img">
                    <a href="/4-engine">
                      <img src="/images/pro4.jpg" alt="Diesel Engine & Genset" />
                    </a>
                  </li>
                  <li className="product_con">
                    <a href="/4-engine">Diesel Engine & Genset</a>
                  </li>
                  <div className="more">
                    <a href="/4-engine">Read More</a>
                  </div>
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
