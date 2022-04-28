const axios = require("axios");


exports.handler = async function (event) {

    const url_x = 'https://login-absolute.netlify.app/'
    const url_y = 'https://login-output-responsive.netlify.app/'
    const email = 'jayampathi.bac@gmail.com'

    const API_ENDPOINT = `https://vue-test-22.netlify.app/.netlify/functions/pup-core?url_x=${url_x}&url_y=${url_y}&email=${email}`;

    const scrappedDataResponse = await axios.get(API_ENDPOINT);

    console.log('scrappedDataResponse', scrappedDataResponse)
};