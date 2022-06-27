const dotenv = require('dotenv');
const path = require('path');
if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV = "development"
}
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

;
process.isDevelopment = !(process.isProduction = (process.env.NODE_ENV === "production"));

module.exports = {
    // NODE_ENV : process.env.NODE_ENV || 'development',
    // HOST : process.env.HOST || 'localhost',
    // PORT : process.env.PORT || 3000
}