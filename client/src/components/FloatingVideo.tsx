/**
 * FLOATING VIDEO COMPONENT
 * - Positioned in bottom right corner
 * - Muted by default with unmute button
 * - Close button to dismiss
 * - Similar to shauntucker.com.au implementation
 * - Responsive sizing
 */

import { useState, useRef } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

export default function FloatingVideo() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40"
      style={{
        width: "clamp(200px, 25vw, 320px)",
        aspectRatio: "9/16",
      }}
    >
      {/* Video Container */}
      <div
        className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl"
        style={{
          background: "oklch(0.12 0.04 155)",
          border: "2px solid oklch(0.72 0.12 75 / 0.4)",
        }}
      >
        {/* YouTube Embed */}
        <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/Ph8bmA0rWHY?si=N0rA4Gz0imvVMEIe"
          title="Kyal Neil Currant - Watch his story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-50 p-1.5 rounded-full transition hover:scale-110"
          style={{
            background: "oklch(0.18 0.05 155 / 0.9)",
            color: "oklch(0.96 0.015 75)",
          }}
          aria-label="Close video"
        >
          <X size={18} />
        </button>

        {/* Unmute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-2 right-2 z-50 p-2 rounded-full transition hover:scale-110"
          style={{
            background: "oklch(0.72 0.12 75 / 0.9)",
            color: "oklch(0.18 0.05 155)",
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Muted Badge */}
        {isMuted && (
          <div
            className="absolute bottom-14 right-2 z-50 px-2 py-1 rounded text-xs font-semibold"
            style={{
              background: "oklch(0.18 0.05 155 / 0.9)",
              color: "oklch(0.96 0.015 75)",
            }}
          >
            Muted
          </div>
        )}
      </div>

      {/* Caption */}
      <p
        className="text-xs text-center mt-2 font-medium"
        style={{ color: "oklch(0.35 0.04 75)" }}
      >
        Watch Kyal's story
      </p>
    </div>
  );
}
