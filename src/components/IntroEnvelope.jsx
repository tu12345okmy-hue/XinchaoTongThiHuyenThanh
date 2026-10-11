import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnvelopeSVG from './graphics/EnvelopeSVG';
import { Sparkles, HelpCircle, Heart, Music, MessageCircleHeart } from 'lucide-react';

export default function IntroEnvelope({ onOpen, onOpenHelp, onOpenDrawer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    // After flap animation finishes, notify parent to trigger Floral Transition
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden paper-texture"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-accent/15 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sage-primary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating Header Badge */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 text-center z-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-rose-accent/30 text-rose-deep text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-gold-vintage animate-spin" style={{ animationDuration: '6s' }} />
          A Digital Mixtape & Greeting Card
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-serif font-bold text-paper-900 tracking-tight">
          Gửi ní , Lời Nhắn Từ Tui 
        </h1>
        <p className="mt-2 text-sm sm:text-base text-paper-800/80 font-sans italic max-w-md mx-auto">
          "Có những giai điệu thay lời muốn nói, có những lá thư viết cho ní ..."
        </p>
      </motion.div>

      {/* Center Interactive Envelope Container */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="relative z-20 my-4"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <EnvelopeSVG isOpen={isOpen} isHovered={isHovered} />

        {/* Pulsing "Tap to open" Banner below envelope */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6 text-center cursor-pointer"
        >
          <button
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-accent text-white font-serif font-medium text-sm sm:text-base shadow-lg shadow-rose-accent/30 hover:bg-rose-deep transition-all duration-300 transform active:scale-95"
          >
            <Heart className="w-4 h-4 fill-current animate-ping" style={{ animationDuration: '2s' }} />
            <span>Tap to open (Nhấp để mở)</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Action Buttons (FABs) */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex flex-col sm:flex-row items-end sm:items-center gap-3 z-30">
        {/* FAB 1: "There's more here" */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenDrawer('letter')}
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-paper-900 border border-rose-accent/40 shadow-lg text-xs sm:text-sm font-medium hover:border-rose-accent hover:bg-white transition-all duration-300"
        >
          <MessageCircleHeart className="w-4 h-4 text-rose-accent group-hover:scale-110 transition-transform" />
          <span>There's more here</span>
        </motion.button>

        {/* FAB 2: "Help" */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenHelp}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-paper-900 border border-sage-primary/40 shadow-lg text-xs sm:text-sm font-medium hover:border-sage-primary hover:bg-white transition-all duration-300"
        >
          <HelpCircle className="w-4 h-4 text-sage-primary" />
          <span>Help</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
