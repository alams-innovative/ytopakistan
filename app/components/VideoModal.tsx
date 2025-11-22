'use client';

import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title = 'Video' }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay mfp-wrap mfp-ready" onClick={onClose}>
      <div className="video-modal-content mfp-container mfp-inline-holder" onClick={(e) => e.stopPropagation()}>
        <div className="mfp-content">
          <div id="my_video-wrap">
            <button className="mfp-close" onClick={onClose} title="Close (Esc)">
              ×
            </button>
            <div className="inner_video-wrap">
              <video 
                ref={videoRef}
                id="my_video" 
                controls 
                preload="auto"
                poster="/about/company.jpg"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
