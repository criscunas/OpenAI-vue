module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm-tablet': '640px',
        'tablet': '768px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}
