function guesPassword(input) {
    let passwordEntered = input[0];
    let password = "s3cr3t!P@ssw0rd";
    if (password === passwordEntered) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

// guesPassword(["s3cr3t!P@ssw0rd"])
