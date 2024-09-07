function numbersDivisibleToNine(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let sum = 0
    let numbers = ""

    for (let num = start; num <= end; num++) {
        if (num % 9 === 0) {
            sum += num
            numbers += num.toString() + "\n"
        }
    }

    console.log(`The sum: ${sum}`)
    console.log(numbers)

}

// numbersDivisibleToNine(["100", "200"])





// Runtime JUDGE
// function sum(arr) {
//     return arr.reduce((acc, num) => acc + num, 0)
// }
//
// function numbersDivisibleToNine(input) {
//     let start = Number(input[0])
//     let end = Number(input[1])
//     let myList = []
//
//     for (let num = start; num <= end; num++) {
//         if (num % 9 === 0) {
//             myList.push(num)
//         }
//     }
//
//     let totalSum = sum(myList)
//     console.log(`The sum: ${totalSum}`)
//
//     for (let num of myList) {
//         console.log(num)
//     }
// }
//
// // numbersDivisibleToNine(["100", "200"])

