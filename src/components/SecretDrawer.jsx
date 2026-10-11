import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Heart, Sparkles, Volume2, Flower2, ScrollText, CheckCircle2 } from 'lucide-react';
import BouquetSVG from './graphics/BouquetSVG';
import confetti from 'canvas-confetti';

export default function SecretDrawer({ isOpen, activeTab, onClose, voiceLetter, bouquetData }) {
  const [currentTab, setCurrentTab] = useState(activeTab || 'letter');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  // Sync tab when prop changes
  React.useEffect(() => {
    if (activeTab) setCurrentTab(activeTab);
  }, [activeTab]);

  const handleCelebrateBouquet = () => {
    // Trigger confetti explosion when viewing bouquet
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C86D7B', '#5C745D', '#C5A059', '#F9D4DC']
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-paper-900/40 backdrop-blur-sm"
        />

        {/* Sliding Side Drawer Panel (Right Side) */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="absolute inset-y-0 right-0 max-w-md w-full glass-card p-6 border-l border-paper-300 flex flex-col justify-between shadow-2xl overflow-y-auto"
        >
          <div>
            {/* Drawer Header with Close & Tabs */}
            <div className="flex items-center justify-between border-b border-paper-300/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('letter')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-bold transition-all ${
                    currentTab === 'letter'
                      ? 'bg-rose-accent text-white shadow-sm'
                      : 'text-paper-800 hover:bg-paper-200'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <ScrollText className="w-3.5 h-3.5" />
                    <span>A Letter For You</span>
                  </span>
                </button>

                <button
                  onClick={() => setCurrentTab('bouquet')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-bold transition-all ${
                    currentTab === 'bouquet'
                      ? 'bg-sage-primary text-white shadow-sm'
                      : 'text-paper-800 hover:bg-paper-200'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Flower2 className="w-3.5 h-3.5" />
                    <span>Your Bouquet</span>
                  </span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-paper-800/60 hover:text-paper-900 hover:bg-paper-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* TAB 1: Voice Letter */}
            {currentTab === 'letter' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-accent/15 text-rose-deep text-xs font-mono mb-2">
                    {voiceLetter.date}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-paper-900">{voiceLetter.title}</h3>
                  <p className="text-xs text-paper-800/70 italic font-serif">{voiceLetter.subtitle}</p>
                </div>

                {/* Simulated Audio Voice Player */}
                <div className="p-4 rounded-2xl bg-white/80 border border-rose-accent/30 shadow-sm flex items-center gap-4">
                  <button
                    onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                    className="w-12 h-12 rounded-full bg-rose-accent text-white flex items-center justify-center shadow-md hover:bg-rose-deep transition-all shrink-0"
                  >
                    {isPlayingVoice ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-mono text-paper-800 mb-1">
                      <span>Audio Recording</span>
                      <span>2:15</span>
                    </div>
                    <div className="w-full h-2 bg-paper-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-accent transition-all duration-300"
                        style={{ width: isPlayingVoice ? '65%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Letter Transcript Body */}
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-paper-200 shadow-inner font-serif text-sm leading-relaxed text-paper-900 space-y-3">
                  <p className="whitespace-pre-line leading-7">
                    {voiceLetter.transcript}
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Bouquet Showcase */}
            {currentTab === 'bouquet' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 text-center"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold text-paper-900">{bouquetData.title}</h3>
                  <p className="text-xs text-sage-dark font-serif italic">{bouquetData.subtitle}</p>
                </div>

                <div className="relative py-2">
                  <BouquetSVG />
                </div>

                <p className="text-sm font-serif italic text-rose-deep p-3 rounded-xl bg-rose-accent/10 border border-rose-accent/20">
                  "{bouquetData.message}"
                </p>

                {/* Flower Meanings list */}
                <div className="text-left space-y-2 pt-2">
                  <h4 className="text-xs font-bold font-mono text-paper-800 uppercase tracking-wider">Ý Nghĩa Các Loài Hoa:</h4>
                  {bouquetData.flowers.map((fl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-paper-900 bg-white/60 p-2 rounded-lg border border-paper-200">
                      <CheckCircle2 className="w-4 h-4 text-sage-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-paper-900">{fl.name}:</strong> <span className="text-paper-800/80">{fl.meaning}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleCelebrateBouquet}
                  className="w-full mt-4 py-2.5 rounded-full bg-rose-accent text-white font-serif text-sm font-medium shadow-md hover:bg-rose-deep transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Bắn hoa chúc mừng 🎉</span>
                </button>
              </motion.div>
            )}
          </div>

          <div className="pt-4 border-t border-paper-200 text-center text-xs font-serif text-paper-800/60">
            Digital Mixtape • Wrapped with love
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
