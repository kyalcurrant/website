/**
 * FLOATING VIDEO WIDGET — Kyal's Story
 * - 9:16 vertical rounded-rectangle preview bubble, bottom-right corner
 * - Click to expand into full 9:16 modal with sound
 * - 3 CTA buttons: Premier Event · The Retreat · Apply Now
 * - Brand: Sacred Earth Premium (Dark Forest Green, Warm Cream, Gold)
 * - Uses Framer Motion for smooth animations
 * - Self-hosted MP4 video for reliability
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

const VIDEO_URL = "/manus-storage/KyalNCurrantHerovideo_859303ec.mp4";

// Bubble dimensions — strict 9:16 ratio
const BUBBLE_W = 120;
const BUBBLE_H = Math.round(BUBBLE_W * (16 / 9)); // 213px

export default function FloatingVideoWidget() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bubbleVideoRef = useRef<HTMLVideoElement>(null);

  // Delay bubble appearance by 2 seconds after page load
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Handle mute/unmute toggle for expanded modal
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle mute/unmute toggle for bubble
  const toggleBubbleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bubbleVideoRef.current) {
      bubbleVideoRef.current.muted = !bubbleVideoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  if (dismissed) return null;

  return (
    <>
      {/* ── Floating bubble ── */}
      <AnimatePresence>
        {showBubble && !expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
            style={{ filter: "drop-shadow(0 8px 32px rgba(201, 168, 76, 0.25))" }}
          >
            {/* Tooltip label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold tracking-wide cursor-pointer select-none leading-snug"
              style={{
                background: "oklch(0.18 0.05 155 / 0.95)",
                border: "1px solid oklch(0.72 0.12 75 / 0.4)",
                color: "oklch(0.96 0.015 75)",
                fontFamily: "'DM Sans', sans-serif",
                backdropFilter: "blur(12px)",
                maxWidth: "200px",
                textAlign: "center",
              }}
              onClick={() => setExpanded(true)}
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] flex-shrink-0 animate-pulse" />
              Watch Kyal's story
            </motion.div>

            {/* Video bubble — strict 9:16 */}
            <div className="relative self-end">
              {/* Dismiss button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDismissed(true);
                }}
                className="absolute -top-2 -left-2 z-10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "oklch(0.18 0.05 155 / 0.95)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  color: "oklch(0.96 0.015 75)",
                }}
                aria-label="Dismiss video"
              >
                ✕
              </button>

              {/* 9:16 vertical video preview */}
              <div
                className="relative cursor-pointer overflow-hidden"
                style={{
                  width: BUBBLE_W,
                  height: BUBBLE_H,
                  borderRadius: "16px",
                  border: "3px solid oklch(0.72 0.12 75)",
                  boxShadow: "0 0 0 4px oklch(0.72 0.12 75 / 0.15), 0 8px 32px rgba(0,0,0,0.6)",
                }}
                onClick={() => setExpanded(true)}
                role="button"
                aria-label="Watch Kyal's story"
              >
                {/* Self-hosted video preview */}
                <video
                  ref={bubbleVideoRef}
                  src={VIDEO_URL}
                  muted={true}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "13px", display: "block" }}
                />

                {/* Play overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.28)", borderRadius: "13px" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.12 75 / 0.9)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path d="M3 2L11 7L3 12V2Z" fill="oklch(0.18 0.05 155)" />
                    </svg>
                  </div>
                </div>

                {/* Mute/Unmute button */}
                <button
                  onClick={toggleBubbleMute}
                  className="absolute bottom-2 right-2 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: "oklch(0.72 0.12 75 / 0.9)",
                    color: "oklch(0.18 0.05 155)",
                  }}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Expanded modal ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setExpanded(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                maxWidth: "500px",
                width: "100%",
                maxHeight: "700px",
                background: "oklch(0.18 0.05 155)",
                border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px oklch(0.72 0.12 75 / 0.08)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                style={{
                  background: "oklch(0.12 0.04 155 / 0.9)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.15)",
                  color: "oklch(0.72 0.12 75)",
                }}
                aria-label="Close video"
              >
                ✕
              </button>

              {/* Video player — 9:16 self-hosted video */}
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "9/16",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <video
                  ref={videoRef}
                  src={VIDEO_URL}
                  title="Kyal Neil Currant - Watch his story"
                  controls
                  autoPlay
                  muted={isMuted}
                  className="w-full h-full"
                  style={{ objectFit: "cover", borderRadius: "12px 12px 0 0", display: "block" }}
                />
              </div>

              {/* Mute/Unmute button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
                style={{
                  background: "oklch(0.72 0.12 75)",
                  color: "oklch(0.18 0.05 155)",
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              {/* Copy + CTA section */}
              <div className="p-4" style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Brand tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold tracking-[0.25em] uppercase"
                    style={{
                      color: "oklch(0.72 0.12 75)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    ✦ Sacred Earth
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                    lineHeight: 1.3,
                    color: "oklch(0.96 0.015 75)",
                  }}
                >
                  Your Body Has Been Trying to Tell You Something
                </h3>

                {/* Description */}
                <p
                  className="mb-7"
                  style={{
                    color: "oklch(0.75 0.01 75)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: "1.6",
                  }}
                >
                  You've built the business. You've hit the targets. And yet your body is breaking down, your relationships are crumbling, and you have no idea why. The doctors have no answers. The strategies aren't working. Because the problem isn't your performance. It's what's stored inside you.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col gap-2">
                  {/* Primary: Premier Event */}
                  <a
                    href="/premier-event"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.72 0.12 75), oklch(0.65 0.10 75))",
                      color: "oklch(0.18 0.05 155)",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: "0 4px 20px oklch(0.72 0.12 75 / 0.3)",
                    }}
                  >
                    Premier Speaker Event
                  </a>

                  {/* Secondary: The Retreat */}
                  <a
                    href="/#retreat"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.28 0.06 155), oklch(0.22 0.055 155))",
                      color: "oklch(0.96 0.015 75)",
                      fontFamily: "'DM Sans', sans-serif",
                      border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    }}
                  >
                    The Retreat
                  </a>

                  {/* Tertiary: Apply Now */}
                  <a
                    href="/"
                    onClick={() => setExpanded(false)}
                    className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "transparent",
                      color: "oklch(0.72 0.12 75)",
                      fontFamily: "'DM Sans', sans-serif",
                      border: "1px solid oklch(0.72 0.12 75 / 0.4)",
                    }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
