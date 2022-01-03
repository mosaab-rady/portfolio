module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 2s ease-in-out',
        rotate: 'rotate 15s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        rotate: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },
      },
    },
  },
  plugins: [],
};
