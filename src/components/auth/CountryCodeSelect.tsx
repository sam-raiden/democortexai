import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Country, countryCodes, flagUrl } from '../../data/countryCodes';

export interface CountryCodeSelectProps {
  value: Country;
  onChange: (country: Country) => void;
}

export function CountryCodeSelect({ value, onChange }: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  // Click-away and Escape both close the panel — it only listens while open,
  // so there's nothing to tear down on the common case of never opening it.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? countryCodes.filter(
        (country) =>
          country.name.toLowerCase().includes(q) ||
          country.dialCode.includes(q) ||
          country.iso2.toLowerCase().includes(q)
      )
    : countryCodes;

  return (
    <div className="country-select" ref={rootRef}>
      <button
        type="button"
        className={`country-select-trigger${open ? ' is-open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${value.name} ${value.dialCode}`}
      >
        <img className="country-flag" src={flagUrl(value.iso2)} alt="" aria-hidden="true" />
        <span className="country-dial">{value.dialCode}</span>
        <ChevronDown size={13} className="country-chevron" />
      </button>

      {open && (
        <div className="country-dropdown">
          <input
            type="text"
            className="country-search"
            placeholder="Search country or code..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
          />
          <div className="country-options" role="listbox">
            {filtered.length === 0 ? (
              <p className="country-empty">No matching countries</p>
            ) : (
              filtered.map((country) => (
                <button
                  type="button"
                  key={country.iso2}
                  role="option"
                  aria-selected={country.iso2 === value.iso2}
                  className={`country-option${
                    country.iso2 === value.iso2 ? ' is-selected' : ''
                  }`}
                  onClick={() => {
                    onChange(country);
                    setOpen(false);
                  }}
                >
                  <img
                    className="country-flag"
                    src={flagUrl(country.iso2)}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="country-name">{country.name}</span>
                  <span className="country-dial">{country.dialCode}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
