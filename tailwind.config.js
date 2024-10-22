/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'architectsHero': "url('../src/assets/images/bannerGroup.webp')",
        'bannerBg':"url('../src/assets/images/bannerAlbum.webp')"
  
      }
    },
  },
  plugins: [],
}
