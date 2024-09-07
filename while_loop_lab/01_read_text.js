function readText(input) {
    while (true) {
        let word = input.shift()
        if (word === "Stop") {
            break
        }
        console.log(word)
    }
}

// readText(["Nakov",
// "SoftUni",
// "Sofia",
// "Bulgaria",
// "SomeText",
// "Stop",
// "AfterStop",
// "Europe",
// "HelloWorld"])
