function calculatePrice(input) {
    let numberDogsPackages = Number(input[0]);
    let numberCatPackages = Number(input[1]);
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let totalSum = (numberDogsPackages * dogFoodPrice) + (numberCatPackages * catFoodPrice)
    console.log(`${totalSum} lv.`)
}

// calculatePrice(["5 ", "4 "])
