function calculateRate(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let yearRate = Number(input[2]);
    let decimalRate = yearRate / 100;
    let result = depositSum + months * ((depositSum * decimalRate) / 12)
    console.log(result)
}

// calculateRate(["200 ", "3 ", "5.7 "])
