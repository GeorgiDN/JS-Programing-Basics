function accountBalance(input) {
    let totalSum = 0

    while (true) {
        let data = input.shift()
        if (data === "NoMoreMoney") {
            console.log(`Total: ${totalSum.toFixed(2)}`)
            break
        }
        let money = Number(data)
        if (money < 0) {
            console.log("Invalid operation!")
            console.log(`Total: ${totalSum.toFixed(2)}`)
            break
        } else {
            console.log(`Increase: ${money.toFixed(2)}`)
            totalSum += money
        }
    }
}


// accountBalance(["120",
// "45.55",
// "-150",
// ])

