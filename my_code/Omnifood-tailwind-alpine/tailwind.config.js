module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "max-2xl": { max: "1536px" },
      "max-xl": { max: "1280px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "640px" },
    },
    extend: {
      colors: {
        primary: {
          50: "#fef7ec",
          100: "#faeacb",
          200: "#f5d192",
          300: "#f0b559",
          400: "#ec9c33",
          500: "#e67e22",
          600: "#cb5914",
          700: "#a83e15",
          800: "#893017",
          900: "#712916",
          950: "#411207",
        },
        ctaText: "#45260a",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      spacing: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
