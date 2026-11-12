import { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { MUSIC_SRC } from '@/data/content';

const START_OFFSET_SECONDS = 15;

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = false;
    audio.volume = 0.35;
    audio.preload = 'auto';

    const seekToStart = () => {
      if (audio.duration <= START_OFFSET_SECONDS) {
        audio.pause();
        setUnavailable(true);
        return false;
      }
      audio.currentTime = START_OFFSET_SECONDS;
      return true;
    };

    const handleLoadedMetadata = () => {
      seekToStart();
    };
    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleError = () => {
      setUnavailable(true);
      setPlaying(false);
    };
    const handleEnded = () => {
      if (!seekToStart()) return;
      void audio.play().catch(handlePlaybackError);
    };
    function handlePlaybackError(error: unknown) {
      if (
        error instanceof DOMException &&
        (error.name === 'NotAllowedError' || error.name === 'AbortError')
      ) {
        return;
      }
      setUnavailable(true);
      setPlaying(false);
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    audioRef.current = audio;
    audio.load();
    void audio.play().catch(handlePlaybackError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    if (unavailable) return;
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      return;
    }
    if (audio.readyState >= HTMLMediaElement.HAVE_METADATA && audio.paused) {
      if (audio.currentTime < START_OFFSET_SECONDS && audio.duration > START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS;
      }
    }
    try {
      await audio.play();
    } catch (error) {
      if (
        error instanceof DOMException &&
        (error.name === 'NotAllowedError' || error.name === 'AbortError')
      ) {
        return;
      }
      setUnavailable(true);
      setPlaying(false);
    }
  };

  const label = unavailable
    ? 'الموسيقى غير متاحة حاليًا'
    : playing
      ? 'إيقاف الموسيقى'
      : 'تشغيل الموسيقى';

  const Icon = unavailable ? Music : playing ? Volume2 : VolumeX;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={unavailable}
      aria-label={label}
      title={label}
      className="glass group fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full text-champagne transition duration-300 hover:scale-110 hover:text-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne disabled:cursor-not-allowed disabled:opacity-40 md:bottom-8 md:left-8"
    >
      <Icon className="h-5 w-5" strokeWidth={1.6} />
      {playing && (
        <span aria-hidden="true" className="absolute inset-0 -z-10 animate-glow rounded-full bg-champagne/20 blur-md" />
      )}
    </button>
  );
}
