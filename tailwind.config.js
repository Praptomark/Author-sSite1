/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        dancingscript: 'Dancing Script',
        intr: 'Inter',
        poppins: 'Poppins',
        robotoflex: 'Roboto Flex',
        satisfy: 'Satisfy',
        msmadi: 'Ms Madi',
      },
    }
  },
  plugins: []
};