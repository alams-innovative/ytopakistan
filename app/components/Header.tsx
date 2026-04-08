'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <div id="header">
      <div id="headerin" className="clearfix">
        {/* Logo */}
        <div id="etw_logo">
          <a href="/">
            <img 
              src="/images/yto-ptmc-logo.png" 
              alt="YTO Pakistan - Pak Tractor Manufacturing Company" 
              className="header-logo"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
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

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <div className="mobile-nav-header" onClick={() => toggleMobileSubmenu('yto')}>
                <span>About YTO</span>
                <svg className={`chevron ${mobileSubmenu === 'yto' ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <ul className={`mobile-submenu ${mobileSubmenu === 'yto' ? 'active' : ''}`}>
                <li><a href="/about-yto" onClick={() => setMobileMenuOpen(false)}>Company Profile</a></li>
                <li><a href="/history" onClick={() => setMobileMenuOpen(false)}>History</a></li>
                <li><a href="/capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</a></li>
              </ul>
            </li>
            
            <li className="mobile-nav-item">
              <div className="mobile-nav-header" onClick={() => toggleMobileSubmenu('ptmc')}>
                <span>About PTMC</span>
                <svg className={`chevron ${mobileSubmenu === 'ptmc' ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <ul className={`mobile-submenu ${mobileSubmenu === 'ptmc' ? 'active' : ''}`}>
                <li><a href="/about" onClick={() => setMobileMenuOpen(false)}>Company Profile</a></li>
                <li><a href="/certificate" onClick={() => setMobileMenuOpen(false)}>Certificates</a></li>
                <li><a href="/partners" onClick={() => setMobileMenuOpen(false)}>Our Partners</a></li>
              </ul>
            </li>
            
            <li className="mobile-nav-item">
              <div className="mobile-nav-header" onClick={() => toggleMobileSubmenu('products')}>
                <span>Products</span>
                <svg className={`chevron ${mobileSubmenu === 'products' ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <ul className={`mobile-submenu ${mobileSubmenu === 'products' ? 'active' : ''}`}>
                <li><a href="/products" onClick={() => setMobileMenuOpen(false)}>All Products</a></li>
                <li><a href="/yto-esk550" onClick={() => setMobileMenuOpen(false)}>YTO-ESK550 (55HP)</a></li>
                <li><a href="/yto-ef804" onClick={() => setMobileMenuOpen(false)}>YTO-EF804 (80HP)</a></li>
                <li><a href="/yto-ex1054-cabin" onClick={() => setMobileMenuOpen(false)}>YTO-EX1054 (105HP)</a></li>
                <li><a href="/yto-x1204-cabin" onClick={() => setMobileMenuOpen(false)}>YTO-X1204 (120HP)</a></li>
                <li><a href="/yto-ex1254-cabin" onClick={() => setMobileMenuOpen(false)}>YTO-EX1254 (125HP)</a></li>
                <li><a href="/yto-ex1404-cabin" onClick={() => setMobileMenuOpen(false)}>YTO-EX1404 (140HP)</a></li>
                <li><a href="/yto-nlx1604-cabin" onClick={() => setMobileMenuOpen(false)}>YTO-NLX1604 (160HP)</a></li>
                <li><a href="/yto-e2004" onClick={() => setMobileMenuOpen(false)}>YTO-E2004 (200HP)</a></li>
                <li><a href="/yto-elx2404" onClick={() => setMobileMenuOpen(false)}>YTO-ELX2404 (240HP)</a></li>
              </ul>
            </li>
            
            <li className="mobile-nav-item">
              <a href="/service" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Service & Support</a>
            </li>
            
            <li className="mobile-nav-item">
              <a href="/video" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Videos</a>
            </li>
            
            <li className="mobile-nav-item">
              <a href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </li>
          </ul>
          
          {/* Mobile Contact Info */}
          <div className="mobile-contact-info">
            <a href="tel:+92-42-37512567" className="mobile-contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              92-42-37512567-8
            </a>
            <a href="https://wa.me/923115997569" target="_blank" rel="noopener noreferrer" className="mobile-contact-link whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
