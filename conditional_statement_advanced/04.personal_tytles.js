function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    let dictionary = {
        "m": [
            {"min": 16, "title": "Mr."},
            {"min": 0, "title": "Master"}
        ],
        "f": [
            {"min": 16, "title": "Ms."},
            {"min": 0, "title": "Miss"}
        ]
    }

    for (let curren_age of dictionary[gender]) {
        if (age >= curren_age["min"]) {
            return console.log(curren_age["title"])
        }
    }
}

// personalTitles((["12", "f"]))
// personalTitles((["17", "f"]))
// personalTitles((["12", "m"]))
// personalTitles((["17.2", "m"]))




// function personalTitles(input) {
//     let age = Number(input[0])
//     let gender = input[1]
//     if (gender === "m") {
//         if (age >= 16) {
//             console.log("Mr.")
//         } else {
//             console.log("Master")
//         }
//     } else if (gender === "f") {
//         if (age >= 16) {
//             console.log("Ms.")
//         } else {
//             console.log("Miss")
//         }
//     }
// }





// function personalTitles(input) {
//     let age = Number(input[0])
//     let gender = input[1]
//
//     let dictionary = {
//         "m": [
//             {min: 16, title: "Mr."},
//             {min: 0, title: "Master"}
//         ],
//         "f": [
//             {min: 16, title: "Ms."},
//             {min: 0, title: "Miss"}
//         ]
//     }
//
//     for (let currentAge of dictionary[gender]) {
//         if (age >= currentAge.min) {
//             return console.log(currentAge.title)
//         }
//     }
// }



