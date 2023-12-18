
function printReport(pages){

    console.log("============================Generating crawl Report============================")
    sortedPages = sorter(pages)
    for (const page of sortedPages){
        console.log(`Found ${page[1]} internal links to ${page[0]}\n`)
    }
}

function sorter(pages){
    sortArr = Object.keys(pages).map((key) => [key, pages[key]])

    sortArr.sort(function(a, b) {
        if (a[1] > b[1]) {return -1}
        else if (a[1] < b[1]){return 1}
        else {return 0}
    })

    return sortArr
}



module.exports = {
    printReport,
    sorter
}