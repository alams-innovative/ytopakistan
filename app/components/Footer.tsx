export default function Footer() {
  return (
    <>
      {/* Bottom Section */}
      <div id="etw_bottom">
        <div className="content">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="bottom_logo">
                <div className="footer-logo-top">
                  <img src="/logo2.png" alt="YTO" className="footer-logo-yto" />
                </div>
                <div className="contact_info">
                  <p><strong>Address:</strong><br />
                  16 km, Multan Road, Pakka Mile Stop,<br />
                  Shahpur, Lahore Pakistan</p>
                  <p><strong>Email:</strong><br />
                  <a href="mailto:info@ptmc.com.pk">info@ptmc.com.pk</a><br />
                  <a href="mailto:Sales@ptmc.com.pk">Sales@ptmc.com.pk</a></p>
                  <p><strong>Phone:</strong><br />
                  <a href="tel:92-42-37512567-8">92-42-37512567-8</a></p>
                  <p><strong>WhatsApp:</strong><br />
                  <a href="https://wa.me/923115997569" target="_blank" rel="noopener noreferrer">0311-5997569</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="etw_hometitle">
                <a href="/about">Quick Links</a>
              </div>
              <ul>
                <li><a href="/about">Company Profile</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/service">Service & Support</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="pro_contact">
                <div className="footer-products-heading-row">
                  <div className="footer-products-text-block">
                    <div className="etw_hometitle">
                      <a href="/products">Products</a>
                    </div>
                    <ul>
                      <li><a href="/5-tractors">Tractors</a></li>
                    </ul>
                  </div>
                  <img
                    src="/images/ptmc-logo-transparent.png"
                    alt="Pak Tractor Manufacturing Company"
                    className="footer-products-ptmc-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      {/* Footer */}
      <div id="footer">
        <div id="etw_homefooter">
          <div className="content">
            <a href="/about">About YTO</a>
            <a href="/products">Products</a>
            <a href="/capabilities">Capabilities</a>
            <a href="/service">Service & Support</a>
            <a href="/video">Videos</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="content" style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #e0e0e0', marginTop: '1rem' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
              Digital growth by <a href="https://alamsinnovate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0075c2', textDecoration: 'none' }}>Alams Innovate</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
