const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core')


exports.handler = async (event, context) => {

    const {email, url_x, url_y} = JSON.parse(event.body);
    const name = `${email} _ ${url_x} _ ${url_y}` || "World";

    return {
        statusCode: 200,
        body: `Hello, ${name}`,
    };
};