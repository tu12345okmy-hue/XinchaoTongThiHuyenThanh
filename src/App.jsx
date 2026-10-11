import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroEnvelope from './components/IntroEnvelope';
import FloralTransition from './components/FloralTransition';
import MixtapeDashboard from './components/MixtapeDashboard';
import MediaPlayer from './components/MediaPlayer';
import SecretDrawer from './components/SecretDrawer';
import HelpModal from './components/HelpModal';
import { INITIAL_TRACKS, VOICE_LETTER, BOUQUET_DATA } from './data/playlist';

export default function App() {
  // Stage flow state: 'intro' | 'floral' | 'dashboard'
  const [stage, setStage] = useState('intro');

  // Playlist & Player State
  const [tracks] = useState(INITIAL_TRACKS);
  const [activeTrack, setActiveTrack] = useState(INITIAL_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);

  // Drawers & Modals State
  const [drawerConfig, setDrawerConfig] = useState({ isOpen: false, activeTab: 'letter' });
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Transitions
  const handleOpenEnvelope = () => {
    setStage('floral');
  };

  const handleCompleteFloral = () => {
    setStage('dashboard');
    // Autoplay music when reaching dashboard
    setIsPlaying(true);
  };

  // Track selection
  const handleSelectTrack = (track) => {
    setActiveTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.id === activeTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setActiveTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.id === activeTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setActiveTrack(tracks[prevIndex]);
    setIsPlaying(true);
  };

  const handleOpenDrawer = (tab = 'letter') => {
    setDrawerConfig({ isOpen: true, activeTab: tab });
  };

  const handleCloseDrawer = () => {
    setDrawerConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen bg-paper-100 text-paper-900 font-sans overflow-x-hidden selection:bg-rose-accent/20 selection:text-rose-deep">
      <AnimatePresence mode="wait">
        {/* Module 1: Intro & Envelope */}
        {stage === 'intro' && (
          <IntroEnvelope
            key="intro"
            onOpen={handleOpenEnvelope}
            onOpenHelp={() => setShowHelpModal(true)}
            onOpenDrawer={handleOpenDrawer}
          />
        )}

        {/* Module 2: Floral Transition */}
        {stage === 'floral' && (
          <FloralTransition
            key="floral"
            onComplete={handleCompleteFloral}
          />
        )}

        {/* Module 3: Mixtape Dashboard */}
        {stage === 'dashboard' && (
          <MixtapeDashboard
            key="dashboard"
            tracks={tracks}
            activeTrack={activeTrack}
            isPlaying={isPlaying}
            onSelectTrack={handleSelectTrack}
            onTogglePlay={handleTogglePlay}
            onOpenDrawer={handleOpenDrawer}
            onOpenHelp={() => setShowHelpModal(true)}
          />
        )}
      </AnimatePresence>

      {/* Module 4: Media Player (Bar + YouTube Popup) - visible once in Dashboard */}
      {stage === 'dashboard' && (
        <MediaPlayer
          activeTrack={activeTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onNextTrack={handleNextTrack}
          onPrevTrack={handlePrevTrack}
          showYoutubeModal={showYoutubeModal}
          onOpenYoutubeModal={() => setShowYoutubeModal(true)}
          onCloseYoutubeModal={() => setShowYoutubeModal(false)}
        />
      )}

      {/* Side Drawer: "A letter for you" & "Your bouquet" */}
      <SecretDrawer
        isOpen={drawerConfig.isOpen}
        activeTab={drawerConfig.activeTab}
        onClose={handleCloseDrawer}
        voiceLetter={VOICE_LETTER}
        bouquetData={BOUQUET_DATA}
      />

      {/* Help Guidance Modal */}
      <HelpModal
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
    </div>
  );
}
