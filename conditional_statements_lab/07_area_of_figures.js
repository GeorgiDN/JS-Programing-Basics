function calculateArea(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = 0;
    let area = 0;

    if (figure === "square") {
        area = a ** 2;
    } else if (figure === "rectangle") {
        b = Number(input[2]);
        area = a * b;
    } else if (figure === "circle") {
        area = (a ** 2) * Math.PI;
    } else if (figure === "triangle") {
        b = Number(input[2]);
        area = a * (b / 2);
    }
    console.log(area.toFixed(3));
}


// calculateArea(["square", "5"])
// calculateArea(["rectangle", "7", "2.5"])
// calculateArea(["circle", "6"])
// calculateArea(["triangle", "4.5", "20"])



// function calculateArea(input) {
//     let figure = input[0];
//     let num1 = Number(input[1]);
//     let area = 0;
//
//     if (figure === "square") {
//         let sideLength = num1;
//         area = sideLength ** 2;
//     } else if (figure === "rectangle") {
//         let sideLength1 = num1;
//         let sideLength2 = Number(input[2]);
//         area = sideLength1 * sideLength2;
//     } else if (figure === "circle") {
//         let radius = num1;
//         area = (radius ** 2) * Math.PI;
//     } else if (figure === "triangle") {
//         let length = num1;
//         let height = Number(input[2]);
//         area = length * (height / 2);
//     }
//     console.log(area.toFixed(3));
// }
//
