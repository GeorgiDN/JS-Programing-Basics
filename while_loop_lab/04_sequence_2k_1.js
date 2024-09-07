function readNumbers(input) {
    let maxNumber = Number(input[0])
    let counter = 1

    while (true) {
        if (counter > maxNumber) {
            break
        }
        console.log(counter)
        counter = (counter * 2) + 1
    }
}

// readNumbers(["17"])
