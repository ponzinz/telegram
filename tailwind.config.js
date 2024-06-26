/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chatWallpaper': "url('./assets/img/wallpaper.jpg')"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        '.no-scrollbar': {
          "ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

