'use client';

import { useEffect } from 'react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title = 'PDF Document' }: PDFModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mfp-wrap mfp-ready mfp-pdf-popup" onClick={onClose}>
      <div className="mfp-container mfp-inline-holder" onClick={(e) => e.stopPropagation()}>
        <div className="mfp-content">
          <div className="mfp-figure">
            <button className="mfp-close" onClick={onClose} title="Close (Esc)">
              ×
            </button>
            <div className="pdf-viewer-container">
              <iframe
                src={pdfUrl}
                title={title}
                className="pdf-viewer"
                style={{
                  width: '100%',
                  height: '90vh',
                  border: 'none',
                  maxWidth: '1200px',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <div className="pdf-download-link" style={{ textAlign: 'center', marginTop: '10px' }}>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0075c2', textDecoration: 'underline' }}>
                  Open in new tab / Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

