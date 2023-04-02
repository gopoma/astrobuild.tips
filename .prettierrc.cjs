module.exports = {
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    useTabs: true,
    plugins: [
        require("prettier-plugin-astro")        
    ],
    overrides: [
        {
            files: "./src/**/*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
};
