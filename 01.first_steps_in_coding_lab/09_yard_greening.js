function calculatePrice(input) {
    let squareMeters = Number(input[0])
    let pricePerMeeter = 7.61;
    let totalSum = pricePerMeeter * squareMeters;
    let discount = totalSum * 0.18
    let finalSum = totalSum - discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

// calculatePrice(["550"])
