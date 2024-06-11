module.exports = {
    proxy: "localhost:3000",
    files: ["routes/**/*.js", "views/**/*.html", "public/**/*.css", "public/**/*.js"],
    port: 3001, // Change to a different port than your Node.js server
    open: false,
    notify: false,
    ui: false
};
