 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beach-pattern': "url('./src/images/beach-bg.png')",
        'coins-pattern': "url('./src/images/coins-bg.png')",
    },
    backgroundSize: {
      '50%': '50%',
    },
     colors: {
        'my-btn': '#00295D',
      },
  },
  plugins: [],
}
}