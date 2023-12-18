
function printReport(pages){
    for (const page of pages){
        console.log(`Found ${pages[page]} internal links to ${page}`)
    }
}

function sorter(){}



module.exports = {
    printReport,
    sorter
}