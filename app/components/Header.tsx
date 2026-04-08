'use client';

import { useState } from 'react';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div id="header">
      <div id="headerin" className="clearfix">
        <div id="etw_logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* YTO Logo with label */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/logo1.png" alt="YTO" style={{ height: '110px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#c8102e', letterSpacing: '0.5px', marginTop: '4px' }}>YTO GROUP</span>
            </div>
            
            {/* Separator */}
            <div style={{ width: '2px', height: '80px', background: 'linear-gradient(to bottom, transparent, #c8102e, transparent)' }}></div>
            
            {/* PTMC Logo with label */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/logo2.png" alt="PTMC" style={{ height: '110px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#c8102e', letterSpacing: '0.5px', marginTop: '4px' }}>PAK TRACTOR MACHINERY</span>
            </div>
          </a>
        </div>
        <div className="top-nav">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="/about" className="nav-link dropdown-toggle">About YTO</a>
                <ul className="dropdown-menu">
                  <li><a href="/about" className="dropdown-item">Company Profile</a></li>
                  <li><a href="/history" className="dropdown-item">History</a></li>
                  <li><a href="/capabilities" className="dropdown-item">Capabilities</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a href="/about" className="nav-link dropdown-toggle">About PTMC</a>
                <ul className="dropdown-menu">
                  <li><a href="/about" className="dropdown-item">Company Profile</a></li>
                  <li><a href="/certificate" className="dropdown-item">Certificates</a></li>
                  <li><a href="/partners" className="dropdown-item">Our Partners</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown dropdown-products">
                <a href="/products" className="nav-link dropdown-toggle">Products</a>
                <div className="dropdown-menu dropdown-menu1">
                  <div className="nav_content">
                    <div className="navproinfo">
                      <div className="navleft">
                        <ul>
                          <li>
                            <a 
                              href="/5-tractors" 
                              className={activeCategory === 0 ? "lidq" : ""}
                              onMouseEnter={() => setActiveCategory(0)}
                            >
                              Tractors
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="navright">
                        {/* Tractors */}
                        <ul className={activeCategory === 0 ? "shownavpro" : ""}>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-esk550"><img src="/tractors/yto-esk550/YTO-ESK550.jpg" alt="YTO-ESK550" /></a></li>
                              <li className="product_con"><a href="/yto-esk550">YTO-ESK550</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ef804"><img src="/tractors/yto-ef804/YTO-EF804.jpg" alt="YTO-EF804" /></a></li>
                              <li className="product_con"><a href="/yto-ef804">YTO-EF804</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1054"><img src="/tractors/yto-ex1054/YTO-EX1054.jpg" alt="YTO-EX1054" /></a></li>
                              <li className="product_con"><a href="/yto-ex1054">YTO-EX1054</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-x1204"><img src="/tractors/yto-x1204/YTO-X1204.jpg" alt="YTO-X1204" /></a></li>
                              <li className="product_con"><a href="/yto-x1204">YTO-X1204</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1254"><img src="/tractors/yto-ex1254/YTO-EX1254.jpg" alt="YTO-EX1254" /></a></li>
                              <li className="product_con"><a href="/yto-ex1254">YTO-EX1254</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1404"><img src="/tractors/yto-ex1404/YTO-EX1404.jpg" alt="YTO-EX1404" /></a></li>
                              <li className="product_con"><a href="/yto-ex1404">YTO-EX1404</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-nlx1604"><img src="/tractors/yto-nlx1604/YTO-NLX1604.jpg" alt="YTO-NLX1604" /></a></li>
                              <li className="product_con"><a href="/yto-nlx1604">YTO-NLX1604</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-e2004"><img src="/tractors/yto-e2004/YTO-E2004.jpg" alt="YTO-E2004" /></a></li>
                              <li className="product_con"><a href="/yto-e2004">YTO-E2004</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-elx2404"><img src="/tractors/yto-elx2404/YTO-ELX2404.jpg" alt="YTO-ELX2404" /></a></li>
                              <li className="product_con"><a href="/yto-elx2404">YTO-ELX2404</a></li>
                            </ol>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="nav-item">
                <a href="/service" className="nav-link">Service & Support</a>
              </li>
              <li className="nav-item">
                <a href="/video" className="nav-link">Videos</a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
