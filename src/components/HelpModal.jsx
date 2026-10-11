import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Heart, Music, Play, Video, Gift, BookOpen } from 'lucide-react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-paper-900/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-lg glass-card p-6 sm:p-8 rounded-3xl border border-sage-primary/40 shadow-2xl space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-paper-300 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sage-primary/20 text-sage-dark flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-paper-900">Hướng Dẫn Sử Dụng 💡</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-paper-800 hover:bg-paper-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Guide Steps */}
          <div className="space-y-4 font-sans text-sm text-paper-900">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-paper-200">
              <div className="w-7 h-7 rounded-full bg-rose-accent/20 text-rose-deep flex items-center justify-center shrink-0 font-bold font-serif text-xs">1</div>
              <div>
                <h4 className="font-bold flex items-center gap-1">Mở Bì Thư & Hoa Nở <Heart className="w-3.5 h-3.5 text-rose-accent fill-rose-accent inline" /></h4>
                <p className="text-xs text-paper-800/80 mt-0.5">Nhấp vào bì thư để mở nắp, sau đó chạm nút "Tap to reveal" để trải nghiệm hiệu ứng hoa nở chuyển cảnh lãng mạn.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-paper-200">
              <div className="w-7 h-7 rounded-full bg-rose-accent/20 text-rose-deep flex items-center justify-center shrink-0 font-bold font-serif text-xs">2</div>
              <div>
                <h4 className="font-bold flex items-center gap-1">Nghe Nhạc Cassette & Video YouTube <Play className="w-3.5 h-3.5 text-sage-primary inline" /></h4>
                <p className="text-xs text-paper-800/80 mt-0.5">Chọn bài hát ở cột Tracklist bên trái. Bấm icon Video màu đỏ để bật cửa sổ xem YouTube Music Video sắc nét.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-paper-200">
              <div className="w-7 h-7 rounded-full bg-rose-accent/20 text-rose-deep flex items-center justify-center shrink-0 font-bold font-serif text-xs">3</div>
              <div>
                <h4 className="font-bold flex items-center gap-1">Đọc Liner Note & Mở Drawer Ẩn <BookOpen className="w-3.5 h-3.5 text-gold-vintage inline" /></h4>
                <p className="text-xs text-paper-800/80 mt-0.5">Cột Liner Note tự động gõ chữ lời nhắn riêng cho từng bài hát. Bấm "A letter for you" hoặc "Your bouquet" ở góc trên để mở menu phụ bí mật.</p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-sage-primary text-white font-serif font-medium text-sm shadow-md hover:bg-sage-dark transition-all"
          >
            Đã Hiểu, Bắt Đầu Trải Nghiệm ✨
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
