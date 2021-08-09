module.exports = async (input = "") => {
    let res = await (await require('node-fetch')("http://rhymethai.com/rhymefinder.php?inputword=" + encodeURIComponent(input))).text();

    const $ = require("cheerio").load(res);
    let words = []
    $("body > div.container-fluid > div > div > div > div > a[target=\"_blank\"]").each((index, element) => {
        let word = $(element).html();
        words.push({
            word,
            mean: res.split(`${word}</a>`)[1].split("<br>")[0].split("|")[2].trim()
        })
    })
    if(!res.split(`${input}</a>`)[1]) throw TypeError ("ไม่พบคำศัพท์นี้ในพจนานุกรม");
    return {
        input: {
            word: input,
            mean: res.split(`${input}</a>`)[1].split("<br>")[0].split("|")[2].trim()
        },
        wordsCount: words.length,
        words
    }
}