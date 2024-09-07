function sumNumbers(input) {
    let numStr = input[0]
    let sum = 0

    for (let char of numStr) {
        sum += Number(char)
    }
    console.log(`The sum of the digits is:${sum}`)
}

// sumNumbers(["1234"])
