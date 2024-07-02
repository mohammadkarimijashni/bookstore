/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./*.html"],
      theme: {
            screens: {
                  sm: "480px",
                  md: "768px",
                  lg: "976px",
                  xl: "1440px",
            },
            colors: {
                  green: "#58c27d",
                  orange: "#FA8F54",
                  white: "#FCFCFD",
                  gray: "#8A8A8A",
            },
            extend: {
                  fontFamily: {
                        sans: ["DM Sans", "sans-serif"],
                        popins: ["Poppins "],
                        roboto: ["Roboto"],
                  },
            },
      },
      plugins: [],
};
