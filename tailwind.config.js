/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
    theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
      },
      
      fontFamily: {
        worksans: "Work Sans",
        plusjakartasans: "Plus Jakarta Sans"
      },

    extend: {
      colors: {
        mainBlue: "#3479F1",
        purple: "#251F68",
        grey: "#818181",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(223, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}
