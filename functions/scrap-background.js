const axios = require("axios");

async function saveScrappedData(url_x, url_y) {

    console.log("saveScrappedData - REQ RECEIVED: ", url_x, url_y)

    const viewPortDataList_X = await axios.post(`https://vue-test-22.netlify.app/.netlify/functions/pup-core`, {targetURL: url_x});
    const viewPortDataList_Y = await axios.post(`https://vue-test-22.netlify.app/.netlify/functions/pup-core`, {targetURL: url_y});

    const styleData = [];

    Object.keys(XY_MAP).forEach(key => {
        viewPortDataList_X[XY_MAP[key]]['xvar'].forEach((element_x) => {

            viewPortDataList_Y[XY_MAP[key]]['yvar'].forEach((element_y) => {

                if (element_x['Breakpoint-xvar'] && element_x['CSS Class-xvar'] && element_x['Breakpoint-xvar'] === element_y['Breakpoint-yvar'] && element_x['CSS Class-xvar'] === element_y['CSS Class-yvar']) {
                    // console.log("key_x",element_x['Breakpoint-xvar'] , element_x['CSS Class-xvar'], " - key_y",element_y['Breakpoint-yvar'] , element_y['CSS Class-yvar'])
                    styleData.push({...element_x, ...element_y});
                }
            })

        })
    })


    console.log("matched the css classes of x and y variables..!")
    return styleData;
}


exports.handler = async function (event) {
    const {email, url_x, url_y} = JSON.parse(event.body);

    const style_data = await saveScrappedData(url_x, url_y);
    console.log('-----------------------style data-----------------------------')
    console.log(style_data)

    // const scrappedDataResponse = await axios.post(`http://localhost:9664/.netlify/functions/pup-core`, {
    // const scrappedDataResponse = await axios.post(`https://vue-test-22.netlify.app/.netlify/functions/pup-core`, {url : url});

    // console.log('scrappedDataResponse', scrappedDataResponse.data)
};