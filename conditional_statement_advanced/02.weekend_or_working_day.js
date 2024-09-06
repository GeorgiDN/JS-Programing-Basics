// function dayOfWeek(input) {
//     let day = input[0]
//     switch (day) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             console.log("Working day")
//             break
//         case "Saturday":
//         case "Sunday":
//             console.log("Weekend")
//             break
//         default:
//             console.log("Error")
//     }
// }
//
// dayOfWeek(["Monday"])



function dayOfWeek(input) {
    let day = input[0]
    let dayTypes = {
        "Monday": "Working day",
        "Tuesday": "Working day",
        "Wednesday": "Working day",
        "Thursday": "Working day",
        "Friday": "Working day",
        "Saturday": "Weekend",
        "Sunday": "Weekend"
    }

    if (day in dayTypes) {
        console.log(dayTypes[day])
    } else {
        console.log("Error");
    }
}

// dayOfWeek((["Sunday"]))
