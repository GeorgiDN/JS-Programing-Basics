function readNumbers(input) {
    let maxNumber = Number(input.shift())
    let totalSum = 0

    while (true) {
        let number = Number(input.shift())
        totalSum += number
        if (maxNumber <= totalSum) {
            console.log(totalSum)
            break
        }
    }
}

// readNumbers(["100",
// "10",
// "20",
// "30",
// "40"])
//
// readNumbers(["20",
// "1",
// "2",
// "3",
// "4",
// "5",
// "6"])



