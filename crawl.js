
function normalizeURL(url){
    mod = new URL(url)
    if (mod.pathname.slice(-1) === '/'){
        return mod.host + mod.pathname.slice(0, -1)
    }
    return mod.host + mod.pathname
}

function getURLsFromHTML(htmlBody, baseURL){

    const urls = []
    const { JSDOM } = require('jsdom')
    const dom = new JSDOM(htmlBody)
    const hyperlinks = dom.window.document.querySelectorAll('a')
    for (const hyperlink of hyperlinks){
        if (hyperlink.href.slice(0, 1) === '/'){
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

async function crawlPage(baseURL, currentURL, pages) {
    const base = new URL(baseURL)
    const current = new URL(currentURL)
    if (current.hostname !== base.hostname){
        return pages
    }    
    const url = normalizeURL(currentURL)
    if (pages[url] > 0){
        pages[url]++
        return pages
    } else if (currentURL === baseURL) {
        pages[url] = 0
    } else {
        pages[url] = 1
    }
    console.log(`fetching: ${url}`)
    let html = ""
    try {
        const response = await fetch(currentURL)
        if (response.status >= 400){
            console.log(`Unable to reach ${url} status: ${response.status}`)
            return pages
        } 
        if (response.headers.get('content-type').includes('text/html') === false){
            console.log(`Received content-type that is not HTML: ${response.headers.get('content-type')}`)
            return pages
        }

        html = await response.text()
        
    } catch (error) {
        console.log(error.message)
        return
    }
    const links = getURLsFromHTML(html, baseURL)
    for (const link of links){
        pages = await crawlPage(baseURL, link, pages)
    }
    
    return pages
    
}




module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}