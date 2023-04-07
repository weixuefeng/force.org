module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/bg_hero.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
