const path = require("path");

const config = {
    app: {
        name: "my-treats-app",
        slug: "my-treats-app"
    },
    alias: {
        "@page": path.resolve(__dirname, "./src/page"),
        "@redux": path.resolve(__dirname, "./src/_redux")
    }
};

module.exports = config;
