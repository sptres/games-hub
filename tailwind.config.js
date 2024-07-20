/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "url('https://static.vecteezy.com/system/resources/thumbnails/003/220/114/original/gaming-abstract-background-video.jpg')",
      },
    },
  },
  plugins: [],
};
