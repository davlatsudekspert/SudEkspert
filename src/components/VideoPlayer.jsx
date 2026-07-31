import { useRef, useState, useEffect } from "react";

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(controlsTimer.current);
  }, []);

  const hideControls = () => {
    clearTimeout(controlsTimer.current);
    if (!playing) return;
    controlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  const showControlsTmp = () => {
    setShowControls(true);
    hideControls();
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const seek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const pct = Number(e.target.value);
    v.currentTime = (pct / 100) * duration;
    setCurrent(v.currentTime);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const wrap = videoRef.current?.parentElement;
    if (!wrap) return;
    if (!document.fullscreenElement) {
      wrap.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const onFsChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#0b1c3f] group mb-6 ${className}`}
      onMouseMove={showControlsTmp}
      onMouseLeave={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        className="w-full aspect-video object-contain bg-black"
      />

      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition"
          aria-label="Play"
        >
          <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 text-[#13285A] flex items-center justify-center shadow-xl transition hover:scale-105 active:scale-95">
            <i className="fa-solid fa-play ml-1.5 text-2xl md:text-3xl"></i>
          </span>
        </button>
      )}

      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-10 pb-3 transition-opacity duration-300 ${
          showControls || !playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="flex items-center gap-3 text-white">
          <button onClick={togglePlay} className="w-9 h-9 flex items-center justify-center hover:text-sky-300 transition" aria-label={playing ? "Pause" : "Play"}>
            <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"} text-lg`}></i>
          </button>

          <span className="text-xs font-semibold tabular-nums w-20 text-right">
            {formatTime(current)} / {formatTime(duration)}
          </span>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={pct}
            onChange={seek}
            className="flex-1 h-1.5 cursor-pointer accent-[#38bdf8]"
            aria-label="Timeline"
          />

          <button onClick={toggleMute} className="w-9 h-9 flex items-center justify-center hover:text-sky-300 transition" aria-label="Volume">
            <i className={`fa-solid ${muted || current === 0 && duration === 0 ? "fa-volume-xmark" : "fa-volume-high"} text-lg`}></i>
          </button>

          <button onClick={toggleFullscreen} className="w-9 h-9 flex items-center justify-center hover:text-sky-300 transition" aria-label="Fullscreen">
            <i className={`fa-solid ${fullscreen ? "fa-compress" : "fa-expand"} text-lg`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
