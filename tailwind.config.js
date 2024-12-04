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
         'bannerBg':"url('../src/assets/images/bannerAlbum.webp')",
         'bgAough':"url('../src/assets/images/disco/AOGHU.jpg')",
         'bgFor':"url('../src/assets/images/disco/FORTHOSE.jpg')",
         'bgHh':"url('../src/assets/images/disco/HH.jpg')",
         'bgHc':"url('../src/assets/images/disco/HOLLOWCROWN.jpg')",
         'bgLf':"url('../src/assets/images/disco/LFLT.jpg')",
         'bgRuin':"url('../src/assets/images/disco/RUIN.jpg')",
        }
     

    },
  },
  plugins: [],
}
