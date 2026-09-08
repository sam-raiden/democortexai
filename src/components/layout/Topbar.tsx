import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AuthModal, AuthMode } from '../auth/AuthModal';

export type Screen = 'landing' | 'intelligence' | 'competitors';

export interface TopbarProps {
  screen: Screen;
  onHome: () => void;
  onNew: () => void;
}

export function Topbar({ screen, onHome, onNew }: TopbarProps) {
  // Past a short scroll the bar collapses into a floating white pill that
  // stays pinned for the rest of the page.
  const [docked, setDocked] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Below 900px the inline nav links and Log in / Sign up pills disable
  // themselves (there isn't room), leaving only the hamburger — which did
  // nothing. This is what it now opens.
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    // A single 90px threshold means a scroll position hovering right around
    // it (a slow scroll, a trackpad's inertial settling) can flip `docked`
    // back and forth on consecutive scroll events, restarting the ~0.5s
    // dock/undock transition each time — it reads as the bar catching or
    // getting stuck right at the top of the page. Two thresholds with a gap
    // between them mean scroll position has to clearly cross into the other
    // zone before the state changes, so it can't flicker at the boundary.
    const onScroll = () => {
      setDocked((prev) => (prev ? window.scrollY > 60 : window.scrollY > 90));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-nav${docked ? ' is-docked' : ''}`}>
      <div className="top-nav-inner">
        {/* Both marks share one slot and cross-fade, so the swap happens
            inside the same collapsing motion rather than popping. */}
        <div className="nav-brand">
          <button className="wordmark" onClick={onHome} aria-label="Go to 7thSense home">
            <span className="wm-seven">
              7<sup>th</sup>
            </span>
            <span className="wm-sense">sense</span>
          </button>

          <button className="wm-tile" onClick={onHome} aria-label="Go to 7thSense home" tabIndex={-1}>
            <span className="wm-tile-text">7<sup>th</sup></span>
          </button>
        </div>

        {screen === 'landing' ? (
          <nav className="nav-links">
            <button onClick={onHome}>History</button>
            <button onClick={onNew}>New analysis</button>
          </nav>
        ) : (
          <div className="nav-context">
            <span className="nav-dot" /> Private research workspace
          </div>
        )}

        <div className="nav-actions">
          <button className="nav-pill nav-pill-ghost" onClick={() => setAuthMode('login')}>
            Log in
          </button>
          <button className="nav-pill nav-pill-lime" onClick={() => setAuthMode('signup')}>
            Sign up
          </button>
          <button
            className="menu-button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={17} strokeWidth={1.8} /> : <Menu size={17} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          />
          <div className="mobile-menu">
            {screen === 'landing' && (
              <>
                <button
                  onClick={() => {
                    onHome();
                    closeMobileMenu();
                  }}
                >
                  History
                </button>
                <button
                  onClick={() => {
                    onNew();
                    closeMobileMenu();
                  }}
                >
                  New analysis
                </button>
                <div className="mobile-menu-divider" />
              </>
            )}
            <button
              className="nav-pill nav-pill-ghost"
              onClick={() => {
                setAuthMode('login');
                closeMobileMenu();
              }}
            >
              Log in
            </button>
            <button
              className="nav-pill nav-pill-lime"
              onClick={() => {
                setAuthMode('signup');
                closeMobileMenu();
              }}
            >
              Sign up
            </button>
          </div>
        </>
      )}

      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitchMode={setAuthMode} />
    </header>
  );
}
