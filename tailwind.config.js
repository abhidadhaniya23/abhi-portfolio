module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bodyText: ["textFont"],
                codeText: ["codeFont"],
                // poppins: ["body, sans-serif"],
            },
            colors: {
                darkBluePrimary: "#071124",
                darkLightBluePrimary: "#0B182F",
                lightBluePrimary: "#CDD6F7",
                lightBlueSecondary: "#8892B0",
                cyanPrimary: "#65FEDA",
            },
            backgroundImage: {
                //   factoryImg: "url(/src/Assets/factory.png)",
            },
        },
    },
    plugins: [],
};
