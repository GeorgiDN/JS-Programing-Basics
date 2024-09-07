function grade(input) {
    const TOTAL_CLASSES = 12;
    const UNPLEASING_GRADE = 4;

    const name = input.shift();

    let currentClass = 1;
    let failedTimes = 0;
    let gradesSum = 0;

    while (input.length > 0) {
        let grade = Number(input.shift());

        if (grade < UNPLEASING_GRADE) {
            failedTimes++;

            if (failedTimes > 1) {
                console.log(`${name} has been excluded at ${currentClass} grade`)
                break;
            }
        } else {
            gradesSum += grade;
            currentClass++;
        }

        if (currentClass > TOTAL_CLASSES) {
            let averageGrade = gradesSum / TOTAL_CLASSES;
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
    }
}

// calculateAverageGrade((["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]))
// grade([
//     "Mimi",
//     "5",
//     "6",
//     "5",
//     "6",
//     "5",
//     "6",
//     "6",
//     "2",
//     "3"
// ])


// function findAverage(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }
//
// function calculateAverageGrade(input) {
//     let name = input.shift()
//     let currentClass = 0
//     let failCounter = 0
//     let myList = []
//
//     while (true) {
//         let grade = Number(input.shift())
//
//         if (grade < 4) {
//             failCounter += 1
//             myList.push(grade)
//             if (failCounter === 2) {
//                 currentClass += 1
//                 console.log(`${name} has been excluded at ${currentClass} grade`)
//                 break
//             }
//         } else {
//             myList.push(grade)
//             currentClass += 1
//             if (currentClass === 12) {
//                 let averageGrade = findAverage(myList)
//                 console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
//                 break
//             }
//         }
//     }
// }


