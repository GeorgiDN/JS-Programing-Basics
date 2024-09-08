function clock() {
    for (let hours = 0; hours <= 23; hours++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            console.log(`${hours}:${minutes}`)
        }
    }
}

// clock()



// Format 0 when number is less than 10
function clock2() {
    for (let hours = 0; hours <= 23; hours++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            let formattedHours = String(hours).padStart(2, '0')
            let formattedMinutes = String(minutes).padStart(2, '0')
            console.log(`${formattedHours}:${formattedMinutes}`)
        }
    }
}

// clock2()
