export default function Footer() {
  return (
    <>
      {/* Bottom Section */}
      <div id="etw_bottom">
        <div className="content">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="bottom_logo">
                <img src="/images/yto-pakistan-logo.png" alt="YTO Pakistan" style={{ maxWidth: '200px', height: 'auto', marginBottom: '1.5rem' }} />
                <div className="contact_info">
                  <p><strong>Address:</strong><br />
                  16 km, Multan Road, Pakka Mile Stop,<br />
                  Shahpur, Lahore Pakistan</p>
                  <p><strong>Email:</strong><br />
                  <a href="mailto:info@ptmc.com">info@ptmc.com</a><br />
                  <a href="mailto:Sales@ptmc.com">Sales@ptmc.com</a></p>
                  <p><strong>Phone:</strong><br />
                  <a href="tel:92-42-37512567-8">92-42-37512567-8</a></p>
                  <p><strong>WhatsApp:</strong><br />
                  <a href="https://wa.me/923026612010" target="_blank" rel="noopener noreferrer">+92 302 6612010</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="etw_hometitle">
                <a href="/about">Quick Links</a>
              </div>
              <ul>
                <li><a href="/about">Company Profile</a></li>
                <li><a href="/certificate">Certificates</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/r-d">R&D</a></li>
                <li><a href="/manufacturing">Manufacturing</a></li>
                <li><a href="/service">Service & Support</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="pro_contact">
                <div className="etw_hometitle">
                  <a href="/products">Products</a>
                </div>
                <ul>
                  <li><a href="/5-tractors">Tractors</a></li>
                  <li><a href="/6-harvesting-equipment">Harvesting Equipment</a></li>
                  <li><a href="/7-agricultural-implements">Agricultural Implements</a></li>
                  <li><a href="/4-engine">Diesel Engine & Genset</a></li>
                  <li><a href="/4b-diesel-engine-parts">OEM Parts</a></li>
                  <li><a href="/products-b">1995-2018 Products</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="etw_hometitle">
                <a href="/capabilities">Capabilities</a>
              </div>
              <div className="etw_hometitle">
                <a href="/video">Videos</a>
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
        </div>
      </div>
    </>
  );
}
