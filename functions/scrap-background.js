const axios = require("axios");


exports.handler = async function (event) {
    const {email, url_x, url_y} = JSON.parse(event.body);

    // const scrappedDataResponse = await axios.post(`https://vue-test-22.netlify.app/.netlify/functions/pup-core`, {
    const scrappedDataResponse = await axios.post(`http://localhost:9664/.netlify/functions/pup-core`, {
        url_x : url_x,
        url_y : url_y,
        email : email
    });


    console.log('scrappedDataResponse', scrappedDataResponse.data)
};