'use client';

interface RelatedProductsProps {
  currentProduct?: string;
}

const products = [
  { name: 'YTO-ESK550', href: '/yto-esk550', hp: '55HP' },
  { name: 'YTO-EF804', href: '/yto-ef804', hp: '80HP' },
  { name: 'YTO-EX1054', href: '/yto-ex1054', hp: '105HP' },
  { name: 'YTO-X1204', href: '/yto-x1204', hp: '120HP' },
  { name: 'YTO-EX1254', href: '/yto-ex1254', hp: '125HP' },
  { name: 'YTO-EX1404', href: '/yto-ex1404', hp: '140HP' },
  { name: 'YTO-NLX1604', href: '/yto-nlx1604', hp: '160HP' },
  { name: 'YTO-E2004', href: '/yto-e2004', hp: '200HP' },
  { name: 'YTO-ELX2404', href: '/yto-elx2404', hp: '240HP' },
];

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  return (
    <div className="related-products-section">
      <div className="related-products-header">
        <div className="header-line"></div>
        <h3>Related Products</h3>
      </div>
      <div className="related-products-grid">
        {products.map((product) => (
          <a 
            key={product.name}
            href={product.href}
            className={`related-product-item ${currentProduct === product.name ? 'active' : ''}`}
          >
            <span className="product-name">{product.name}</span>
            <span className="product-hp">{product.hp}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
