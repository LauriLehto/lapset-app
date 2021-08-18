const fetch =  require("node-fetch")
const xml2js = require('xml2js-es6-promise')

exports.handler = async () => {
  const url = "https://ruokalistat.ravitsemispalvelut.fi/AromieMenus/FI/Default/HYVINKAA/HysaPkoti/Rss.aspx?Id=0c0b071b-9f45-495d-8231-1b3a87ab5f0b&DateMode=1"

    const response = await fetch(url)
    const xml = await response.text()
    const data = await xml2js(xml)
    return  {
      statusCode: 200,
      body: JSON.stringify(data.rss.channel[0].item)
    }
}