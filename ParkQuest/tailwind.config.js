// tailwind.config.js

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        primary: "#FF6347",
        secondary: "#1E90FF",
      },
      fontFamily: {
        // Extend font family
        sans: ["Inter", "Arial", "sans-serif"],
      },
      fontSize: {
        // Extend font sizes
        "7xl": "5rem",
      },
    },
  },
  plugins: [
    // Include additional plugins if needed
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
