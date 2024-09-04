function speedInfo(input) {
    let num = Number(input[0]);
    if (num <= 10) {
        console.log("slow");
    } else if (10 <= num&&num <= 50) {
        console.log("average");
    } else if (50 <= num&&num <= 150) {
        console.log("fast");
    }
    else if (150 <= num&&num <= 1000) {
        console.log("ultra fast");
    }
    else {
        console.log("extremely fast")
    }
}

// // speedInfo(["8"])
// // speedInfo(["49.5"])
// // speedInfo(["126"])
// // speedInfo(["160"])
// // speedInfo(["3500"])
// // speedInfo(["10"])




// function speedInfo(input) {
//     let num = Number(input[0]);
//     let dictionary = [
//         {min : -Infinity, max: 10, value: "slow"},
//         {min: 10, max: 50, value: "average"},
//         {min: 50, max: 150, value: "fast"},
//         {min: 150, max: 1000, value: "ultra fast"},
//         {min: 1000, max:Infinity, value: "extremely fast"},
//     ];
//     for (let range of dictionary) {
//         if (num >=range.min && num <=range.max)
//             return console.log(range.value);
//     }
// }

// speedInfo(["8"])
// speedInfo(["49.5"])
// speedInfo(["126"])
// speedInfo(["160"])
// speedInfo(["3500"])
// speedInfo(["10"])
// speedInfo(["1000.5"])
// speedInfo(["1000"])



