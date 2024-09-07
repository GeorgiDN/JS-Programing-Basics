function maxNumber(input) {
    let myList = []
    while (true) {
        let data = input.shift()
        if (data === "Stop") {
            console.log(Math.max(...myList))
            break
        }
        let number = Number(data)
        myList.push(number)
    }
}

// maxNumber((["100",
// "99",
// "80",
// "70",
// "Stop"])
// )
