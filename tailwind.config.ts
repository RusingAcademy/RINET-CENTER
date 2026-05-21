import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        brand: {
          navy: '#0B2545',
          blue: '#13315C',
          accent: '#1E5AA8',
          red: '#C8102E',
          gold: '#E0A800',
          ink: '#0A0F1C',
          muted: '#475569',
          surface: '#F6F8FB',
          line: '#E5E9F0',
          green: '#1F7A5C',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(11, 37, 69, 0.18)',
        ring: '0 0 0 4px rgba(30, 90, 168, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
