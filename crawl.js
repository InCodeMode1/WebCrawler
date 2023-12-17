
function normalizeURL(url){
    mod = new URL(url)
    return mod.host + mod.pathname
}

function getURLsFromHTML(htmlBody, baseURL){

    const urls = []
    const { JSDOM } = require('jsdom')
    const dom = new JSDOM(htmlBody)
    const hyperlinks = dom.window.document.querySelectorAll('a')
    for (const hyperlink of hyperlinks){
        if (hyperlink.href){
            try {
                urls.push(new URL(hyperlink.href, baseURL).href)
            } catch (error) {
                console.log(`${error.message}: ${aElement.href}`)
            }
        } else {
            try {
                urls.push(new URL(hyperlink.href).href)
            } catch (error) {
                console.log(`${error.message}: ${hyperlink.href}`)
            }
        }
    }

    return urls

}













module.exports = {
    normalizeURL,
    getURLsFromHTML
}