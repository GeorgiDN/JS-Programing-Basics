function dayOfWeek(input) {
    let num = Number(input[0]);
    switch (num) {
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturday")
            break
        case 7:
            console.log("Sunday")
            break
        default:
            console.log("Error")
    }
}

// dayOfWeek((["7"]))




// function dayOfWeek(input) {
//     let num = Number(input[0])
//
//     let days = {
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday",
//         7: "Sunday"
//     };
//
//
//     if (num in days) {
//         console.log(days[num])
//     } else {
//         console.log("Error")
//     }
// }
//
// // dayOfWeek((["7"]))
