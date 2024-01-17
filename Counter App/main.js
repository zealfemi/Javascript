let count = 0
let countHtml = document.getElementById('countEl')
let oldCounts = document.getElementById('oldCountsEl')

function increment() {
    count += 1
    countHtml.textContent = count
}

function save() {
    oldCounts.textContent += countHtml.textContent + " - "
    count = 0
    countHtml.textContent = 0
}

function reset() {
    count = 0
    countHtml.textContent = 0
    oldCounts.textContent = ""
}
