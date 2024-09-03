function projectCreation(input) {
    let name = input[0];
    let projectsNumber = Number(input[1]);
    let hoursNeeded = projectsNumber * 3
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projectsNumber} project/s.`)
}

// projectCreation(["George ", "4 "])
