'use client';

import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt?: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, alt = 'Image' }: ImageModalProps) {
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
    <div className="mfp-wrap mfp-ready mfp-image-popup" onClick={onClose}>
      <div className="mfp-container mfp-inline-holder" onClick={(e) => e.stopPropagation()}>
        <div className="mfp-content">
          <div className="mfp-figure">
            <button className="mfp-close" onClick={onClose} title="Close (Esc)">
              ×
            </button>
            <figure>
              <img src={imageUrl} alt={alt} className="mfp-img" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
