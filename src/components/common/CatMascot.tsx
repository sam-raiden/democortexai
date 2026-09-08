import { useEffect, useRef, useState } from 'react';

/**
 * A small interactive cat mascot for the homepage hero.
 * Idle: sits and bobs gently, tail swaying.
 * On click/tap: pulls out a magnifying glass and "analyzes" a little
 * document on its lap for a few seconds before settling back down.
 */
export function CatMascot() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleActivate() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIsAnalyzing(true);
    timeoutRef.current = window.setTimeout(() => setIsAnalyzing(false), 3200);
  }

  return (
    <button
      type="button"
      className={`cat-mascot${isAnalyzing ? ' is-analyzing' : ''}`}
      onClick={handleActivate}
      aria-label="Cortex the cat — click to watch it analyze a company"
    >
      {isAnalyzing && <div className="cat-speech-bubble">Analyzing…</div>}

      <svg viewBox="0 0 120 120" className="cat-mascot-svg" aria-hidden="true">
        {/* tail */}
        <path
          className="cat-tail"
          d="M96 100 Q118 95 112 65 Q108 45 90 50"
          stroke="#e8342a"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.92"
        />

        {/* body */}
        <ellipse cx="60" cy="92" rx="38" ry="30" fill="#f0813c" />
        {/* belly */}
        <ellipse cx="60" cy="102" rx="17" ry="20" fill="#fff3e6" />
        {/* paws */}
        <ellipse cx="42" cy="118" rx="11" ry="8" fill="#fff3e6" />
        <ellipse cx="78" cy="118" rx="11" ry="8" fill="#fff3e6" />

        {/* head */}
        <ellipse cx="60" cy="48" rx="32" ry="28" fill="#f0813c" />

        {/* ears */}
        <polygon points="28,34 20,8 44,28" fill="#f0813c" />
        <polygon points="92,34 100,8 76,28" fill="#f0813c" />
        <polygon points="29,29 25,15 39,27" fill="#ffb4a0" />
        <polygon points="91,29 95,15 81,27" fill="#ffb4a0" />

        {/* muzzle */}
        <ellipse cx="60" cy="58" rx="15" ry="11" fill="#fff3e6" />

        {/* collar */}
        <path d="M32 70 Q60 84 88 70" stroke="#e8342a" strokeWidth="7" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="79" r="3.5" fill="#fff3e6" />

        {/* whiskers */}
        <g stroke="#3a2418" strokeWidth="1.4" opacity="0.55" strokeLinecap="round">
          <line x1="30" y1="55" x2="14" y2="51" />
          <line x1="30" y1="59" x2="13" y2="59" />
          <line x1="30" y1="63" x2="14" y2="66" />
          <line x1="90" y1="55" x2="106" y2="51" />
          <line x1="90" y1="59" x2="107" y2="59" />
          <line x1="90" y1="63" x2="106" y2="66" />
        </g>

        {/* eyes — idle (round) */}
        <g className="cat-eyes-idle">
          <circle cx="48" cy="47" r="4" fill="#1a1210" />
          <circle cx="72" cy="47" r="4" fill="#1a1210" />
        </g>
        {/* eyes — squint (analyzing) */}
        <g className="cat-eyes-squint">
          <path d="M43 47 Q48 43 53 47" stroke="#1a1210" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M67 47 Q72 43 77 47" stroke="#1a1210" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* nose + mouth */}
        <polygon points="57,57 63,57 60,61" fill="#ffb4a0" />
        <path d="M54 63 Q60 68 66 63" stroke="#1a1210" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* little report card on its lap */}
        <g className="cat-lap-card">
          <rect x="47" y="97" width="26" height="17" rx="2.5" fill="#fff3e6" stroke="#e8342a" strokeWidth="1.5" />
          <line x1="51" y1="102" x2="69" y2="102" stroke="#c85a1f" strokeWidth="1.5" opacity="0.7" />
          <line x1="51" y1="107" x2="65" y2="107" stroke="#c85a1f" strokeWidth="1.5" opacity="0.7" />
          <line x1="51" y1="111" x2="67" y2="111" stroke="#c85a1f" strokeWidth="1.5" opacity="0.7" />
        </g>

        {/* magnifying glass */}
        <g className="cat-magnifier" transform="translate(86,86) rotate(-25)">
          <circle r="13" fill="rgba(255,255,255,0.08)" stroke="#e8342a" strokeWidth="4" />
          <line x1="9" y1="9" x2="24" y2="24" stroke="#e8342a" strokeWidth="5" strokeLinecap="round" />
          <line x1="-5" y1="-6" x2="-1" y2="-9" stroke="#fff3e6" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
        </g>

        {/* sparkles */}
        <g className="cat-sparkle cat-sparkle-1" fill="#e8342a">
          <path d="M100 68 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 z" />
        </g>
        <g className="cat-sparkle cat-sparkle-2" fill="#ff6b5c">
          <path d="M108 82 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2 z" />
        </g>
      </svg>
    </button>
  );
}
