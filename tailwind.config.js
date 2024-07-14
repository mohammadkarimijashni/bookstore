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
                  notwhite: "#F4F5F6",
            },
            extend: {
                  fontFamily: {
                        sans: ["DM Sans", "sans-serif"],
                        popins: ["Poppins "],
                        roboto: ["Roboto"],
                  },
                  zIndex: {
                        "-1": "-1",
                  },
            },
      },
      plugins: [],
};
