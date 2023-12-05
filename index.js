const { parse } = require("csv-parse")
const fs = require("fs")

// Initiating data array
const habitablePlanets = []

const isHabitable = (planet) => {
// Checking the planet is confirmed & the amount of solar energy it receives is & the radius
    return planet["koi_disposition"] === "CONFIRMED" && planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11 && planet["koi_prad"] < 1.6
}

// Creating a readstream which reads data from the data.csv file while its still being streamed
fs.createReadStream("data.csv")
// Using pipe() to to connect the data read stream to a parse write stream 
    .pipe(parse({
        comment : "#",
        columns : true
    }))
    .on("data", (chunk) => {
        if(isHabitable(chunk)){
            habitablePlanets.push(chunk)
        }
    })
    .on("error", (error) => {
        console.log("An error occured during the file reading.")
    })
    .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found !`)
    })