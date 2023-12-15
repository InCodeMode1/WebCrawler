



function normalizeURL(url){
    mod = new URL(url)
    return mod.host + mod.pathname
}

function getURLsFromHTML(htmlBody, baseURL){

    const { JSDOM } = require('jsdom')
    dom = new JSDOM(htmlBody)
    dom.window.document.querySelectorAll('a')
    for (tag of dom.window.document.querySelectorAll('a')){
        console.log(String(tag))
    }

    return dom.window.document.querySelectorAll('a')

}













module.exports = {
    normalizeURL,
    getURLsFromHTML
}