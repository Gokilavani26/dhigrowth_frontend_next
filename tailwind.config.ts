import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2164F2',
                secondary: '#3F51B5',
                accent: '#7899D4',
                black: '#000000',
                gray: '#66656F',
                white: '#FFFFFF',
                'btn-bg': '#2164F2',
                'btn-hover': '#1976D2',
                'btn-outline': '#3F51B5',
            },
            animation: {
                scroll:
                    'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
                },
            },
            fontFamily: {
                headers: ['Bebas Neue', 'sans-serif'],
                numeric: ['Zen Dots', 'sans-serif'],
                body: ['Product Sans', 'sans-serif'],
                sub: ['Inter', 'sans-serif'],
            },
            gridTemplateColumns: {
                custom: 'repeat(12, minmax(0, 1fr))',
            },
            margin: {
                grid: '48px',
            },
            gap: {
                gutter: '20px',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents }) {
            addBase({
                '.main-heading': {
                    '@apply font-headers font-normal text-black text-center text-2xl md:text-3xl leading-tight':
                        {},
                    fontSize: '2.5rem',
                    lineHeight: '3.25rem',
                    '@screen md': {
                        '@apply text-4xl': {},
                        fontSize: '2.75rem',
                        lineHeight: '3.75rem',
                    },
                    '@screen lg': {
                        '@apply text-5xl': {},
                        fontSize: '3.25rem',
                        lineHeight: '4.0625rem',
                    },
                    '@screen xl': {
                        fontSize: '3.75rem',
                        lineHeight: '4.1rem',
                    },
                },

                '.sub-heading': {
                    '@apply font-headers font-normal text-secondary text-center': {},
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                    '@screen md': { fontSize: '2.25rem', lineHeight: '2.75rem' },
                    '@screen lg': { fontSize: '2.5rem', lineHeight: '3rem' },
                },

                '.section-title': {
                    '@apply font-headers font-medium text-primary': {},
                    fontSize: '1.75rem',
                    lineHeight: '2.25rem',
                },

                '.body-text': {
                    '@apply font-body text-gray text-lg leading-relaxed': {},
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                },

                '.sub-text': {
                    '@apply font-sub text-gray text-sm leading-snug': {},
                },
            });

            addComponents({
                '.btn': {
                    '@apply px-6 py-3 text-white font-bold rounded-md transition-all duration-300':
                        {},
                },
                '.btn-primary': {
                    '@apply bg-btn-bg hover:bg-btn-hover': {},
                },
                '.btn-outline': {
                    '@apply border border-btn-outline text-btn-outline hover:bg-btn-outline hover:text-white':
                        {},
                },
                '.flex-center': {
                    '@apply flex items-center justify-center': {},
                },
                '.container': {
                    '@apply max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8': {},
                },
            });
        }),
    ],
};

export default config;