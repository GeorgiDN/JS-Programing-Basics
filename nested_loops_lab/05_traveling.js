function traveling(input) {
    let destination = input.shift()
    let budget = Number(input.shift())
    let sumMoney = 0

    while (destination !== "End") {
        while (sumMoney < budget) {
            let money = Number(input.shift())
            sumMoney += money
        }
        console.log(`Going to ${destination}!`)

        destination = input.shift()
        budget = Number(input.shift())
        sumMoney = 0
    }
}

// traveling(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])
//
