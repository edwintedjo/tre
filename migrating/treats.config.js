const path = require("path");

const config = {
    app: {
        name: "migrating",
        slug: "migrating"
    },
    alias: {
        "@page": path.resolve(__dirname, "./src/page")
    }
};

module.exports = config;
