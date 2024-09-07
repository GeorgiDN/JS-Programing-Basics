function VowelSum(input) {
    let word = input[0]
    let totalSum = 0
    let vowelsDictionary = {
        "a": 1, "e": 2, "i": 3, "o": 4, "u": 5
    }
    for (const letter of word) {
        if (letter in vowelsDictionary) {
            totalSum += vowelsDictionary[letter]
        }
    }
    console.log(totalSum)
}

// VowelSum(["hello"])
// VowelSum(["bamboo"])
