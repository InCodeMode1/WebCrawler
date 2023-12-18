const {crawlPage} = require('./crawl.js')
const {printReport} = require('./sorter.js')


async function main(){
    const { argv } = require('node:process')
    try {
        if (argv.length < 3){
            throw new Error("Missing Base URL")

        } else if (argv.length > 3){
            throw new Error(`Expecting 1 argument received ${argv.length - 2}`)
        } 
    } catch (error) {
        console.log(error.message)
        return
    }
    const baseURL = argv[2]
    console.log(`Analyzing ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {})
    printReport(pages)
}


main()