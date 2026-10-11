import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CassetteTapeSVG from './graphics/CassetteTapeSVG';
import { Play, Pause, Disc3, Heart, Video, Volume2, Sparkles, BookOpen, Gift, ChevronRight, Menu } from 'lucide-react';

export default function MixtapeDashboard({
  tracks,
  activeTrack,
  isPlaying,
  onSelectTrack,
  onTogglePlay,
  onOpenDrawer,
  onOpenHelp,
}) {
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  // Typewriter effect for Liner Note whenever activeTrack changes
  useEffect(() => {
    setTypedText('');
    setTypingIndex(0);

    const fullNote = activeTrack.linerNote || '';
    if (!fullNote) return;

    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullNote.length) {
        setTypedText(fullNote.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [activeTrack]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen w-full p-4 sm:p-6 lg:p-8 paper-texture flex flex-col justify-between"
    >
      {/* Background Floral Overlay with Low Opacity */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-accent/30 via-sage-light/20 to-paper-100" />

      {/* Top Header Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between py-2 border-b border-paper-300/60 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-accent/15 flex items-center justify-center text-rose-deep shadow-sm">
            <Disc3 className={`w-6 h-6 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 tracking-tight flex items-center gap-2">
              <span>Romantic Mixtape</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-accent/20 text-rose-deep font-sans font-medium">Vol. 1</span>
            </h1>
            <p className="text-xs text-paper-800/70 font-mono">Custom Edition • For Someone Special</p>
          </div>
        </div>

        {/* Quick Drawer Action Triggers */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onOpenDrawer('letter')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card border border-rose-accent/30 text-xs sm:text-sm font-medium text-rose-deep hover:bg-rose-accent hover:text-white transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">A letter for you</span>
          </button>

          <button
            onClick={() => onOpenDrawer('bouquet')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card border border-sage-primary/30 text-xs sm:text-sm font-medium text-sage-dark hover:bg-sage-primary hover:text-white transition-all shadow-sm"
          >
            <Gift className="w-4 h-4" />
            <span className="hidden sm:inline">Your bouquet</span>
          </button>
        </div>
      </header>

      {/* Main Content Layout Grid */}
      <main className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-auto">
        
        {/* Left Column: Tracklist (4 Columns on Desktop) */}
        <div className="lg:col-span-4 order-2 lg:order-1 glass-card p-5 rounded-3xl border border-paper-300/80 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-paper-200">
            <h2 className="text-lg font-serif font-bold text-paper-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-vintage" />
              <span>Tracklist (Danh Sách Phát)</span>
            </h2>
            <span className="text-xs font-mono text-paper-800/60">{tracks.length} Tracks</span>
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {tracks.map((track, idx) => {
              const isSelected = activeTrack.id === track.id;
              return (
                <motion.div
                  key={track.id}
                  whileHover={{ x: 4 }}
                  onClick={() => onSelectTrack(track)}
                  className={`group p-3 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-rose-accent/15 border border-rose-accent/40 shadow-sm'
                      : 'hover:bg-paper-200/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-rose-accent text-white shadow-md'
                          : 'bg-paper-200 text-paper-800 group-hover:bg-rose-accent/20 group-hover:text-rose-deep'
                      }`}
                    >
                      {isSelected && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-medium truncate ${
                          isSelected ? 'text-rose-deep font-bold' : 'text-paper-900'
                        }`}
                      >
                        {idx + 1}. {track.title}
                      </h3>
                      <p className="text-xs text-paper-800/70 truncate">{track.artist}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {track.youtubeId && (
                      <span className="p-1 rounded-md bg-red-100 text-red-600 text-xs flex items-center gap-1" title="Has YouTube Video">
                        <Video className="w-3 h-3" />
                      </span>
                    )}
                    <span className="text-xs font-mono text-paper-800/60">{track.duration}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Center Section: Vintage Cassette Tape (4 Columns on Desktop) */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
          <div className="w-full relative">
            <CassetteTapeSVG
              isPlaying={isPlaying}
              currentTrackTitle={activeTrack.title}
              currentArtist={activeTrack.artist}
            />
          </div>

          {/* Quick Play/Pause Control below cassette */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={onTogglePlay}
              className="px-6 py-2.5 rounded-full bg-sage-primary text-white font-serif font-medium text-sm shadow-md hover:bg-sage-dark transition-all duration-300 flex items-center gap-2"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Mixtape</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play Mixtape</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Liner Note (4 Columns on Desktop) */}
        <div className="lg:col-span-4 order-3 lg:order-3 glass-card p-5 rounded-3xl border border-paper-300/80 shadow-lg min-h-[340px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-paper-200">
              <h2 className="text-lg font-serif font-bold text-paper-900 flex items-center gap-2">
                <Heart className="w-4 h-4 fill-rose-accent text-rose-accent" />
                <span>Liner Note (Lời Nhắn)</span>
              </h2>
              <span className="text-xs font-serif italic text-rose-deep">Handwritten Note</span>
            </div>

            {/* Track Info Badge */}
            <div className="mb-3 px-3 py-1.5 rounded-xl bg-paper-200/70 text-xs font-mono text-paper-900 flex items-center justify-between">
              <span>Now Playing: <strong>{activeTrack.title}</strong></span>
              <span className="text-rose-deep">{activeTrack.tag}</span>
            </div>

            {/* Typewriter Text Box */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-paper-200 min-h-[180px] font-serif text-sm leading-relaxed text-paper-900 relative shadow-inner">
              <p className="whitespace-pre-line">
                {typedText}
                <span className="inline-block w-1.5 h-4 bg-rose-accent ml-0.5 animate-pulse" />
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-paper-200/60 flex items-center justify-between text-xs text-paper-800/70 font-mono">
            <span>Tape Vol 1 • Side A</span>
            <span>Recorded with ❤️</span>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full text-center pt-6 text-xs text-paper-800/60 font-sans">
        Interactive Digital Greeting Card • Crafted with React, Framer Motion & GSAP
      </footer>
    </motion.div>
  );
}
