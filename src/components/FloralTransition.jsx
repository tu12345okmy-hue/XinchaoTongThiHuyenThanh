import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FlowerLayer1, FlowerLayer2, FlowerLayer3, FlowerLayer4 } from './graphics/WatercolorFlowers';
import { Sparkles, Heart } from 'lucide-react';

export default function FloralTransition({ onComplete }) {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial scale & opacity states for 3D bloom effect
      gsap.set(layer1Ref.current, { scale: 0.1, opacity: 0, rotation: -45 });
      gsap.set(layer2Ref.current, { scale: 0.2, opacity: 0, rotation: 30 });
      gsap.set(layer3Ref.current, { scale: 0.3, opacity: 0, rotation: -15 });
      gsap.set(layer4Ref.current, { scale: 0.4, opacity: 0, rotation: 10 });
      gsap.set(buttonRef.current, { y: 30, opacity: 0 });

      // Master Timeline for Floral Blooming
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to(layer1Ref.current, { scale: 1, opacity: 0.8, rotation: 0, duration: 1.8 })
        .to(layer2Ref.current, { scale: 1, opacity: 0.9, rotation: 0, duration: 1.6 }, '-=1.4')
        .to(layer3Ref.current, { scale: 1, opacity: 1, rotation: 0, duration: 1.5 }, '-=1.2')
        .to(layer4Ref.current, { scale: 1, opacity: 0.95, rotation: 0, duration: 1.4 }, '-=1.0')
        .to(buttonRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleReveal = () => {
    // Dissolve / Cross-fade GSAP animation to reveal Dashboard
    const ctx = gsap.context(() => {
      const exitTl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      exitTl
        .to(buttonRef.current, { opacity: 0, y: -20, duration: 0.3 })
        .to([layer4Ref.current, layer3Ref.current, layer2Ref.current, layer1Ref.current], {
          scale: 2.2,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: 'power3.inOut'
        })
        .to(containerRef.current, { opacity: 0, duration: 0.4 }, '-=0.4');
    }, containerRef);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper-100/90 backdrop-blur-md overflow-hidden pointer-events-auto"
    >
      {/* 4 Multi-layered Watercolor Flower SVG Layers */}
      <FlowerLayer1 ref={layer1Ref} />
      <FlowerLayer2 ref={layer2Ref} />
      <FlowerLayer3 ref={layer3Ref} />
      <FlowerLayer4 ref={layer4Ref} />

      {/* Central "Tap to reveal" Action Button */}
      <div ref={buttonRef} className="relative z-50 text-center px-4">
        <div className="p-8 rounded-3xl glass-card border border-rose-accent/40 max-w-md shadow-2xl backdrop-blur-xl">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-rose-accent/20 flex items-center justify-center text-rose-deep">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 mb-2">
            Bó Hoa Tulip Màu Hồng Đang Nở 🌷
          </h2>
          <p className="text-sm text-paper-800/80 font-sans mb-6">
            Giao diện Mixtape riêng cho ní đã sẵn sàng. Hãy bấm nút dưới đây để mở cánh cửa thế giới âm nhạc!
          </p>

          <button
            onClick={handleReveal}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-sage-primary text-white font-serif font-medium text-base shadow-xl shadow-sage-primary/30 hover:bg-sage-dark transition-all duration-300 transform active:scale-95 group cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current text-rose-light group-hover:scale-125 transition-transform" />
            <span>Tap to reveal (Khám phá ngay)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
