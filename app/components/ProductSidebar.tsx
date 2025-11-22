'use client';

import { useState } from 'react';

interface ProductSidebarProps {
  activeCategory?: string;
  activeProduct?: string;
}

export default function ProductSidebar({ activeCategory, activeProduct }: ProductSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'tractors'
  ]);

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div id="etw_sidebar">
      <div className="etw_hometitle">Products</div>
      <div id="etw_productlist">
        <ul>
          {/* Tractors */}
          <li>
            <a 
              href="/5-tractors" 
              className={activeCategory === 'tractors' ? 'dq' : ''}
            >
              Tractors
            </a>
            {expandedCategories.includes('tractors') && (
              <ol>
                <li>
                  <a 
                    href="/yto-ex1054"
                    className={activeProduct === 'yto-ex1054' ? 'dq' : ''}
                  >
                    YTO-EX1054
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1404"
                    className={activeProduct === 'yto-ex1404' ? 'dq' : ''}
                  >
                    YTO-EX1404
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-nlx1604"
                    className={activeProduct === 'yto-nlx1604' ? 'dq' : ''}
                  >
                    YTO-NLX1604
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-e2004" 
                    className={activeProduct === 'yto-e2004' ? 'dq' : ''}
                  >
                    YTO-E2004
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-elx2404"
                    className={activeProduct === 'yto-elx2404' ? 'dq' : ''}
                  >
                    YTO-ELX2404
                  </a>
                </li>
              </ol>
            )}
          </li>
        </ul>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
