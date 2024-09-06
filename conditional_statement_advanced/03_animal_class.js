function animalClass(input) {
    let animal = input[0]
    let species = {
        "dog": "mammal",
        "crocodile": "reptile",
        "tortoise": "reptile",
        "snake": "reptile",
    }
    if (animal in species) {
        console.log(species[animal])
    } else {
        console.log("unknown")
    }
}

// animalClass(["dog"])
// animalClass(["snake"])
// animalClass(["cat"])
