import { FormEvent, useState } from 'react';
import { Modal } from '../common/Modal';
import { CountryCodeSelect } from './CountryCodeSelect';
import { countryCodes } from '../../data/countryCodes';

export type AuthMode = 'login' | 'signup' | null;

export interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onSwitchMode: (mode: AuthMode) => void;
}

const defaultCountry = countryCodes.find((c) => c.iso2 === 'IN') ?? countryCodes[0];

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [agreed, setAgreed] = useState(false);
  const [country, setCountry] = useState(defaultCountry);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal
      isOpen={mode !== null}
      onClose={onClose}
      title={mode === 'login' ? 'Welcome back' : 'Create your account'}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-name">Full name</label>
            <input id="auth-name" name="name" type="text" placeholder="Jane Cooper" autoComplete="name" required />
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>

        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-mobile">Mobile number</label>
            <div className="phone-input">
              <CountryCodeSelect value={country} onChange={setCountry} />
              <input
                id="auth-mobile"
                name="mobileNumber"
                type="tel"
                placeholder="555 000 0000"
                autoComplete="tel-national"
                required
              />
            </div>
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            minLength={8}
            required
          />
        </div>

        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-confirm-password">Confirm password</label>
            <input
              id="auth-confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
        )}

        {mode === 'login' && (
          <button type="button" className="auth-forgot">
            Forgot password?
          </button>
        )}

        {mode === 'signup' && (
          <label className="auth-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              required
            />
            <span className="auth-checkbox-box" aria-hidden="true" />
            <span>
              I agree to the{' '}
              <a href="/terms.html">Terms of Service</a> and{' '}
              <a href="/privacy.html">Privacy Policy</a>
            </span>
          </label>
        )}

        <button type="submit" className="auth-submit">
          {mode === 'login' ? 'Log in' : 'Create account'}
        </button>

        <p className="auth-switch">
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button type="button" onClick={() => onSwitchMode('signup')}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" onClick={() => onSwitchMode('login')}>
                Log in
              </button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
}
