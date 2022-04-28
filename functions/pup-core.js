const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core')
const querystring = require("querystring");


exports.handler = async (event, context) => {

    const params = querystring.parse(event.body);
    const name = `${params.url_x} _ ${params.url_y} _ ${params.email}` || "World";

    return {
        statusCode: 200,
        body: `Hello, ${name}`,
    };
};