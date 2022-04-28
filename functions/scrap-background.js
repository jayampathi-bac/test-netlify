const axios = require("axios");


exports.handler = async function (event) {

    const API_ENDPOINT = `https://vue-test-22.netlify.app/.netlify/functions/pup-core`;

    const scrappedDataResponse = await axios.get(API_ENDPOINT, {
        url_x : 'https://login-absolute.netlify.app/',
        url_y : 'https://login-output-responsive.netlify.app/',
        email : 'jayampathi.bac@gmail.com'
    });

    // console.log('scrappedDataResponse', scrappedDataResponse)
};