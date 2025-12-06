'use client';

import { useEffect, useState } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function InquiryModal({ isOpen, onClose, productName }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      company: formData.get('company') as string || '',
      phone: formData.get('phone') as string || '',
      whatsapp: formData.get('whatsapp') as string || '',
      message: formData.get('message') as string,
      product_name: productName || formData.get('product') as string || '',
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Thank you for your inquiry. We will contact you soon!' });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          onClose();
          setSubmitMessage(null);
        }, 2000);
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit inquiry. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to submit inquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
            {submitMessage && (
              <div className={`submit-message ${submitMessage.type}`}>
                {submitMessage.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>E-mail*</label>
                <input type="email" name="email" className="form-control" required />
                <span className="input-icon">✉</span>
              </div>
              
              <div className="form-group">
                <label>Name*</label>
                <input type="text" name="name" className="form-control" required />
                <span className="input-icon">👤</span>
              </div>
              
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" className="form-control" />
              </div>
              
              <div className="form-row">
                <div className="form-group form-col">
                  <label>Phone</label>
                  <input type="tel" name="phone" className="form-control" />
                  <span className="input-icon">📱</span>
                </div>
                <div className="form-group form-col">
                  <label>WhatsApp</label>
                  <input type="tel" name="whatsapp" className="form-control" />
                  <span className="input-icon">💬</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Message*</label>
                <textarea name="message" className="form-control" rows={3} required></textarea>
              </div>
              
              {productName && (
                <input type="hidden" name="product" value={productName} />
              )}
              
              <button type="submit" className="inquiry-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
