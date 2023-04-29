module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // bodyText: ["textFont"],
        // bodyText: ["Plus Jakarta Sans", "sans-serif"],
        bodyText: ["skiff", "sans-serif"],
        codeText: ["codeFont"],
        inter: ["inter"],
      },
      colors: {
        darkBluePrimary: "#071124",
        darkLightBluePrimary: "#0B182F",
        lightBluePrimary: "#CDD6F7",
        lightBlueSecondary: "#8892B0",
        cyanPrimary: "#65FEDA",
        lowOpacity: "#ffffff1a",
      },
      backgroundImage: {
        //   factoryImg: "url(/src/Assets/factory.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
