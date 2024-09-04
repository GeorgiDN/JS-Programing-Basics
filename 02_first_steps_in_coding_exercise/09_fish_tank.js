function calculateLiters(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let aquariumVolume = length * width * height;
    let aquariumVolumeLiters = aquariumVolume / 1000;
    let spaceTaken = percent / 100;
    let neededLiters = aquariumVolumeLiters * (1 - spaceTaken);
    console.log(neededLiters)
}

// calculateLiters(["85 ", "75 ", "47 ", "17 "])
