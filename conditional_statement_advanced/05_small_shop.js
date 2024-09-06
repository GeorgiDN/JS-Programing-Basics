function calculatePrice(input) {
    let product = input[0]
    let town = input[1]
    let quantity = Number(input[2])
    let price = 0
    let totalPrice = 0

    let dictionary =
        {
        "Sofia": {
            "coffee": 0.50,
            "water": 0.80,
            "beer": 1.20,
            "sweets": 1.45,
            "peanuts": 1.60
        },

        "Plovdiv": {
            "coffee": 0.40,
            "water": 0.70,
            "beer": 1.15,
            "sweets": 1.30,
            "peanuts": 1.50
        },

        "Varna": {
            "coffee": 0.45,
            "water": 0.70,
            "beer": 1.10,
            "sweets": 1.35,
            "peanuts": 1.55
        },
    }

    price = dictionary[town][product]
    totalPrice = price * quantity
    console.log(totalPrice)
}

// calculatePrice((["coffee", "Varna", "2"]))
// calculatePrice((["peanuts", "Plovdiv", "1"]))



// function calculatePrice(input) {
//     let product = input[0]
//     let town = input[1]
//     let quantity = Number(input[2])
//     let price = 0
//     let totalPrice = 0
//
//     if (town === "Sofia") {
//         if (product === "coffee") {
//             price = 0.5
//         } else if (product === "water") {
//             price = 0.8
//         } else if (product === "beer") {
//             price = 1.2
//         } else if (product === "sweets") {
//             price = 1.45
//         } else if (product === "peanuts") {
//             price = 1.60
//         }
//
//     } else if (town === "Plovdiv") {
//         if (product === "coffee") {
//             price = 0.4
//         } else if (product === "water") {
//             price = 0.7
//         } else if (product === "beer") {
//             price = 1.15
//         } else if (product === "sweets") {
//             price = 1.30
//         } else if (product === "peanuts") {
//             price = 1.50
//         }
//
//     } else if (town === "Varna") {
//         if (product === "coffee") {
//             price = 0.45
//         } else if (product === "water") {
//             price = 0.7
//         } else if (product === "beer") {
//             price = 1.1
//         } else if (product === "sweets") {
//             price = 1.35
//         } else if (product === "peanuts") {
//             price = 1.55
//         }
//     }
//     totalPrice = quantity * price
//     console.log(totalPrice)
// }
//
//
