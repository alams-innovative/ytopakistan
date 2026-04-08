'use client';

import { useState } from 'react';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div id="header">
      <div id="headerin" className="clearfix">
        <div id="etw_logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
           <img src="/logo2.png" alt="PTMC" style={{ maxHeight: '90px', width: 'auto' }} />
           <img src="/logo1.png" alt="YTO" style={{ maxHeight: '90px', width: 'auto' }} />
             
          </a>
        </div>
        <div className="top-nav">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="/about-yto" className="nav-link dropdown-toggle">About YTO</a>
                <ul className="dropdown-menu">
                  <li><a href="/about-yto" className="dropdown-item">Company Profile</a></li>
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
                        {/* Tractors - 12 Products with transparent images */}
                        <ul className={activeCategory === 0 ? "shownavpro" : ""}>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-esk550"><img src="/tractors-dropdown/YTO-ESK550.png" alt="YTO-ESK550" /></a></li>
                              <li className="product_con"><a href="/yto-esk550">YTO-ESK550</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ef804"><img src="/tractors-dropdown/YTO-EF804.png" alt="YTO-EF804" /></a></li>
                              <li className="product_con"><a href="/yto-ef804">YTO-EF804</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1054-cabin"><img src="/tractors-dropdown/YTO-EX1054-Cabin.png" alt="YTO-EX1054 Cabin" /></a></li>
                              <li className="product_con"><a href="/yto-ex1054-cabin">YTO-EX1054 Cabin</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1054-canopy"><img src="/tractors-dropdown/YTO-EX1054-Canopy.png" alt="YTO-EX1054 Canopy" /></a></li>
                              <li className="product_con"><a href="/yto-ex1054-canopy">YTO-EX1054 Canopy</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-x1204-cabin"><img src="/tractors-dropdown/YTO-X1204-Cabin.png" alt="YTO-X1204 Cabin" /></a></li>
                              <li className="product_con"><a href="/yto-x1204-cabin">YTO-X1204 Cabin</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-x1204-canopy"><img src="/tractors-dropdown/YTO-X1204-Canopy.png" alt="YTO-X1204 Canopy" /></a></li>
                              <li className="product_con"><a href="/yto-x1204-canopy">YTO-X1204 Canopy</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1254-cabin"><img src="/tractors-dropdown/YTO-EX1254-Cabin.png" alt="YTO-EX1254 Cabin" /></a></li>
                              <li className="product_con"><a href="/yto-ex1254-cabin">YTO-EX1254 Cabin</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1254-canopy"><img src="/tractors-dropdown/YTO-EX1254-Canopy.png" alt="YTO-EX1254 Canopy" /></a></li>
                              <li className="product_con"><a href="/yto-ex1254-canopy">YTO-EX1254 Canopy</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1404-cabin"><img src="/tractors-dropdown/YTO-EX1404-Cabin.png" alt="YTO-EX1404 Cabin" /></a></li>
                              <li className="product_con"><a href="/yto-ex1404-cabin">YTO-EX1404 Cabin</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-ex1404-canopy"><img src="/tractors-dropdown/YTO-EX1404-Canopy.png" alt="YTO-EX1404 Canopy" /></a></li>
                              <li className="product_con"><a href="/yto-ex1404-canopy">YTO-EX1404 Canopy</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-nlx1604-cabin"><img src="/tractors-dropdown/YTO-NLX1604-Cabin.png" alt="YTO-NLX1604 Cabin" /></a></li>
                              <li className="product_con"><a href="/yto-nlx1604-cabin">YTO-NLX1604 Cabin</a></li>
                            </ol>
                          </li>
                          <li>
                            <ol>
                              <li className="product_img"><a href="/yto-e2004"><img src="/tractors-dropdown/YTO-E2004.png" alt="YTO-E2004" /></a></li>
                              <li className="product_con"><a href="/yto-e2004">YTO-E2004</a></li>
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
