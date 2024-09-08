function sumTwoNumbers(input) {
    let startNumber = Number(input[0])
    let endNumber = Number(input[1])
    let magicNumber = Number(input[2])
    let combinations = 0

    for (let num1 = startNumber; num1 <= endNumber; num1++) {
        for (let num2 = startNumber; num2 <= endNumber; num2++) {
            combinations += 1
            if (num1 + num2 === magicNumber) {
                console.log(
                    `Combination N:${combinations} (${num1} + ${num2} = ${magicNumber})`
                );
                return
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNumber}`)

}

// sumTwoNumbers(["1",
// "10",
// "5"])

// sumTwoNumbers(["88",
// "888",
// "1000"])

// sumTwoNumbers(["23",
// "24",
// "20"])

