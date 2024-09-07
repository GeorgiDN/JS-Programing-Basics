function readPass(input) {
    let username = input.shift()
    let password = input.shift()

    while (true) {
        let string = input.shift()
        if (string === password) {
            console.log(`Welcome ${username}!`)
            break
        }
    }
}

// readPass(["Nakov",
// "1234",
// "Pass",
// "1324",
// "1234"])
