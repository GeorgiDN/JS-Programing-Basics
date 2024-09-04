function calculateHours(input) {
    let pages = Number(input[0]);
    let pagesPerOur = Number(input[1]);
    let daysNumber = Number(input[2]);
    let totalTime = pages / pagesPerOur
    let neededHours = totalTime / daysNumber;
    console.log(neededHours)
}

// calculateHours(["212 ", "20 ", "2 "])
