
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { X } from 'lucide-react';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

const CHUNK_SIZE = 7;
const rows = [];
for (let i = 0; i < galleryImages.length; i += CHUNK_SIZE) {
    rows.push(galleryImages.slice(i, i + CHUNK_SIZE));
}

export default function GalleryPage() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);

  const openModal = (src: string) => {
    setModalSrc(src);
    setIsModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalActive(false);
    // A delay to allow the flip-out animation to complete
    setTimeout(() => {
      setModalSrc(null);
      document.body.style.overflow = '';
    }, 800);
  };

  return (
    <>
      <style jsx>{`
        @keyframes floatLeft {
            0%, 100% { transform: translateX(-50px); }
            50% { transform: translateX(50px); }
        }
        @keyframes floatRight {
            0%, 100% { transform: translateX(50px); }
            50% { transform: translateX(-50px); }
        }
        .row-1 { animation: floatRight 18s ease-in-out infinite; }
        .row-2 { animation: floatLeft 16s ease-in-out infinite; }
        .row-3 { animation: floatRight 17s ease-in-out infinite; }
        .row-4 { animation: floatLeft 19s ease-in-out infinite; }
        .row-5 { animation: floatRight 20s ease-in-out infinite; }
        .noise-overlay {
            background-image: 
                radial-gradient(circle, transparent 1px, rgba(255,255,255,0.05) 1px);
            background-size: 10px 10px;
        }
        .grid-item {
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        .grid-item:hover {
            transform: scale(1.05) !important;
        }
        .perspective {
            perspective: 1200px;
            perspective-origin: 50% 30%;
        }
        .perspective-inner {
            transform: rotateX(32deg) rotateZ(-15deg);
            will-change: transform;
            transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        
        /* Flip Card Styles */
        .flip-card-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.9);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        
        .flip-card-container.active {
            opacity: 1;
            visibility: visible;
        }
        
        .flip-card {
            width: 80vw;
            height: 80vh;
            perspective: 1000px;
        }
        
        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-style: preserve-3d;
        }
        
        .flip-card-container.active .flip-card-inner {
            transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 20px;
            overflow: hidden;
        }
        
        .flip-card-front {
            background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            font-weight: 300;
        }
        
        .flip-card-back {
            transform: rotateY(180deg);
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
        }
        
        .close-btn:hover {
            background: rgba(0, 0, 0, 0.9);
            transform: scale(1.1);
        }
        
        .fullsize-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    `}</style>

      {/* Flip Card Modal */}
      <div id="flipCardModal" className={`flip-card-container ${isModalActive ? 'active' : ''}`} onClick={closeModal}>
        <div className="flip-card" onClick={(e) => e.stopPropagation()}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>Click to reveal image</div>
            </div>
            <div className="flip-card-back">
              <button className="close-btn" onClick={closeModal}><X /></button>
              {modalSrc && <Image id="modalImage" className="fullsize-image" src={modalSrc} alt="Full size image" width={1600} height={900} />}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-28 h-screen w-full overflow-hidden bg-black">
        <section className="w-full h-screen overflow-hidden relative flex items-center justify-center bg-gradient-radial from-black to-transparent">
          {/* Noise overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 noise-overlay"></div>
          <div className="perspective w-full h-full flex items-center justify-center">
            <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-5 grid-cols-1 perspective-inner z-20">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid gap-4 grid-cols-7 row-${rowIndex + 1}`}>
                  {row.map((image, imgIndex) => (
                    <div key={`${rowIndex}-${imgIndex}`} className="grid-item relative w-full h-full overflow-hidden rounded-lg" onClick={() => openModal(image.imageUrl)}>
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="w-full h-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
