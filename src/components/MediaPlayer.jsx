import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Video, X, Heart, Maximize2 } from 'lucide-react';

export default function MediaPlayer({
  activeTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  showYoutubeModal,
  onCloseYoutubeModal,
  onOpenYoutubeModal,
}) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);

  const audioRef = useRef(null);

  // Synchronize HTML5 Audio element
  useEffect(() => {
    setHasAudioError(false);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log('HTML5 Audio play note:', err);
        setHasAudioError(true);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, activeTrack]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const newProgress = parseFloat(e.target.value);
    const newTime = (newProgress / 100) * (audioRef.current.duration || 1);
    audioRef.current.currentTime = newTime;
    setProgress(newProgress);
  };

  return (
    <>
      {/* HTML5 Audio Element for Local MP3 files or Stream URLs */}
      <audio
        ref={audioRef}
        src={activeTrack?.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNextTrack}
        onError={() => setHasAudioError(true)}
      />

      {/* Background YouTube Audio/Video Stream Player (Invisible Stream fallback when local MP3 not present) */}
      {isPlaying && !showYoutubeModal && activeTrack?.youtubeId && hasAudioError && (
        <div className="fixed -top-full -left-full w-1 h-1 opacity-0 pointer-events-none overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?autoplay=1&enablejsapi=1&playsinline=1`}
            title="Background Audio Stream"
            allow="autoplay; encrypted-media"
            className="w-1 h-1"
          />
        </div>
      )}

      {/* Mini Audio Player Bar (Bottom-Left Fixed) */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-4 left-4 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-80 glass-card p-3 rounded-2xl border border-rose-accent/30 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          {/* Animated Disk / Cover Icon */}
          <div
            onClick={onTogglePlay}
            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${
              activeTrack?.coverBg || 'from-rose-100 to-rose-200'
            } flex items-center justify-center text-rose-deep shrink-0 shadow-md cursor-pointer group relative overflow-hidden`}
          >
            <div className={`w-6 h-6 rounded-full bg-rose-deep/20 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 rounded-full bg-rose-deep" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </div>
          </div>

          {/* Track Info */}
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-bold text-paper-900 truncate">{activeTrack?.title}</h4>
            <p className="text-[11px] text-paper-800/70 truncate">{activeTrack?.artist}</p>

            {/* Timeline Progress Bar */}
            <div className="mt-1 flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-paper-300 rounded-lg appearance-none cursor-pointer accent-rose-accent"
              />
              <span className="text-[10px] font-mono text-paper-800/60 shrink-0">{currentTime}</span>
            </div>
          </div>

          {/* Player Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-1.5 rounded-full transition-colors ${
                isLiked ? 'text-rose-deep fill-rose-deep' : 'text-paper-800/60 hover:text-rose-deep'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>

            {activeTrack?.youtubeId && (
              <button
                onClick={onOpenYoutubeModal}
                className="p-1.5 rounded-full text-red-600 hover:bg-red-50 transition-colors"
                title="Xem Video YouTube"
              >
                <Video className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onTogglePlay}
              className="p-2 rounded-full bg-rose-accent text-white hover:bg-rose-deep transition-colors shadow-sm"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* YouTube Video Modal Popup (Module 4) */}
      <AnimatePresence>
        {showYoutubeModal && activeTrack?.youtubeId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseYoutubeModal}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-3xl glass-card-dark rounded-3xl overflow-hidden border border-gold-vintage/30 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 px-6 flex items-center justify-between border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">{activeTrack.title}</h3>
                    <p className="text-xs text-gray-300 font-sans">{activeTrack.artist} • Official Video</p>
                  </div>
                </div>

                <button
                  onClick={onCloseYoutubeModal}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube IFrame Embed Container */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?autoplay=1&enablejsapi=1`}
                  title={activeTrack.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer Note */}
              <div className="p-4 px-6 bg-black/40 text-center text-xs text-gray-400 font-sans">
                💡 Đang phát video trực tiếp từ YouTube. Đóng cửa sổ để quay lại giao diện Cassette Mixtape.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
