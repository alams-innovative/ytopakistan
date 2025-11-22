'use client';

import { useState } from 'react';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div id="header">
      <div id="headerin" className="clearfix">
        <div id="etw_logo">
          <a href="/">
            <img src="/images/yto-pakistan-logo.png" alt="YTO Pakistan" style={{ maxHeight: '60px', width: 'auto' }} />
          </a>
        </div>
        <div className="top-nav">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="/about" className="nav-link dropdown-toggle">About YTO</a>
                <ul className="dropdown-menu">
                  <li><a href="/about" className="dropdown-item">Company Profile</a></li>
                  <li><a href="/certificate" className="dropdown-item">Certificates</a></li>
                  <li><a href="/history" className="dropdown-item">History</a></li>
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
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1054"><img src="/tractors/yto-ex1054/YTO-EX1054.jpg" alt="YTO-EX1054" /></a></li>
                              <li className="product_con"><a href="/yto-ex1054">YTO-EX1054</a></li>
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
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="nav-item dropdown">
                <a href="/capabilities" className="nav-link dropdown-toggle">Capabilities</a>
                <ul className="dropdown-menu">
                  <li><a href="/r-d" className="dropdown-item">R&D</a></li>
                  <li><a href="/manufacturing" className="dropdown-item">Manufacturing</a></li>
                </ul>
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
