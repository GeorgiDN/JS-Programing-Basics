function evenPowersOfTwo(input, power = 0) {
    let n = Number(input[0])

    if (power > n) {
        return
    } else {
        console.log(2 ** power)
        evenPowersOfTwo([n], power + 2)
    }
}

// evenPowersOfTwo(["5"])



// function evenPowersOfTwo(input) {
//     let n = Number(input[0])
//     for (let num = 0; num <= n; num += 1) {
//         if (num % 2 === 0) {
//             console.log(2 ** num)
//         }
//     }
// }
//
// // evenPowersOfTwo(["5"])
