'use client';

import { useEffect } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function InquiryModal({ isOpen, onClose, productName }: InquiryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to database later
    console.log('Form submitted');
    alert('Thank you for your inquiry. We will contact you soon!');
    onClose();
  };

  return (
    <div className="inquiry-modal-overlay" onClick={handleBackdropClick}>
      <div className="inquiry-modal-container">
        <div className="inquiry-modal-content">
          <div className="inquiry-modal-header">
            <span className="inquiry-modal-icon">💬</span>
            <span className="inquiry-modal-title">INQUIRY</span>
            <button className="inquiry-modal-close" onClick={onClose}>
              ✕
            </button>
          </div>
          
          <div className="inquiry-modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>E-mail*</label>
                <input type="email" className="form-control" required />
                <span className="input-icon">✉</span>
              </div>
              
              <div className="form-group">
                <label>Name*</label>
                <input type="text" className="form-control" required />
                <span className="input-icon">👤</span>
              </div>
              
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" />
              </div>
              
              <div className="form-row">
                <div className="form-group form-col">
                  <label>Phone</label>
                  <input type="tel" className="form-control" />
                  <span className="input-icon">📱</span>
                </div>
                <div className="form-group form-col">
                  <label>WhatsApp</label>
                  <input type="tel" className="form-control" />
                  <span className="input-icon">💬</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Message*</label>
                <textarea className="form-control" rows={3} required></textarea>
              </div>
              
              {productName && (
                <input type="hidden" name="product" value={productName} />
              )}
              
              <button type="submit" className="inquiry-submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
