let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false

const runnerAge = 18
//console.log(runnerAge)

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000
  console.log(raceNumber)
}

if (registeredEarly && runnerAge >= 18) {
  console.log(`Runers with number ${raceNumber} will race at 9:30`)
} else if (!registeredEarly && runnerAge >= 18) {
  console.log(`Runers with number ${raceNumber} will race at 11:00`)
} else {
  console.log(`Runers with number ${raceNumber} will race at 12:30`)
}