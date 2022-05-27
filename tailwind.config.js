module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: '1440px',
    },
    extend: {
      height: {
        '15': '3.38rem',
        'not-full': '97vh'
      },
      fontFamily: {
        avenir: ["Avenir"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#2BB3C0",
          "primary-focus": "#1A909B",
          "primary-content": "#ffffff",
          secondary: "#FABC74",
          "secondary-focus": "#DE9A4A",
          neutral:"#1B1B1B",
          "base-100": "#ffffff",
          "base-200": "#787979",
          "base-content": "#303030",
          "info":"#3ABFF8",
          "info-content":"#FAF7F2",
          "success": "#49B0AA",
          "warning": "#FBBD23",
          "error": "#FA8B8B",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
