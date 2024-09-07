function minNumber(input) {
    let myList = []
    while (true) {
        let data = input.shift()
        if (data === "Stop") {
            console.log(Math.min(...myList))
            break
        }
        let number = Number(data)
        myList.push(number)
    }
}

// minNumber((["100",
// "99",
// "80",
// "70",
// "Stop"])
// )
