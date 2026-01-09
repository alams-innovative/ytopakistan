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
                    href="/yto-esk550"
                    className={activeProduct === 'yto-esk550' ? 'dq' : ''}
                  >
                    YTO-ESK550
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ef804"
                    className={activeProduct === 'yto-ef804' ? 'dq' : ''}
                  >
                    YTO-EF804
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1054-cabin"
                    className={activeProduct === 'yto-ex1054-cabin' ? 'dq' : ''}
                  >
                    YTO-EX1054 Cabin
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1054-canopy"
                    className={activeProduct === 'yto-ex1054-canopy' ? 'dq' : ''}
                  >
                    YTO-EX1054 Canopy
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-x1204-cabin"
                    className={activeProduct === 'yto-x1204-cabin' ? 'dq' : ''}
                  >
                    YTO-X1204 Cabin
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-x1204-canopy"
                    className={activeProduct === 'yto-x1204-canopy' ? 'dq' : ''}
                  >
                    YTO-X1204 Canopy
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1254-cabin"
                    className={activeProduct === 'yto-ex1254-cabin' ? 'dq' : ''}
                  >
                    YTO-EX1254 Cabin
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1254-canopy"
                    className={activeProduct === 'yto-ex1254-canopy' ? 'dq' : ''}
                  >
                    YTO-EX1254 Canopy
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1404-cabin"
                    className={activeProduct === 'yto-ex1404-cabin' ? 'dq' : ''}
                  >
                    YTO-EX1404 Cabin
                  </a>
                </li>
                <li>
                  <a 
                    href="/yto-ex1404-canopy"
                    className={activeProduct === 'yto-ex1404-canopy' ? 'dq' : ''}
                  >
                    YTO-EX1404 Canopy
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
                    href="/yto-nlx1604-cabin"
                    className={activeProduct === 'yto-nlx1604-cabin' ? 'dq' : ''}
                  >
                    YTO-NLX1604 Cabin
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
