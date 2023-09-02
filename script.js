function getProverb(sentence, callback) {
  callback("The proverb of the day is: " + sentence)
}

getProverb("Wer dich vemisst, wird anrufen.", function (proverb) {
  console.log(proverb)
})

getProverb("Wer nicht hören will, muss fühlen", (proverb) =>
  console.log(proverb)
)

let proverbOfTheDay = (a, b) => {
  return a + b
}

console.log(
  proverbOfTheDay(
    "The proverb of the day is: ",
    "Wer nicht hören will, muss fühlen."
  )
)

let printName = (name) => {
  console.log(name)
}

printName("Guest")

let printHi = (name) => "Hi " + name + "!"

console.log(printHi("Guest"))

let proverbArray = [
  {
    id: 1,
    sentence: "Es ist noch kein Meister vom Himmel gefallen.",
    points: 1,
  },
  {
    id: 2,
    sentence:
      "Wer dich vermisst, wird anrufen. Wer dich will, sagt es. Wer Interesse hat, zeigt es.",
    points: 1,
  },
  {
    id: 3,
    sentence:
      "Die Lüge hat zwar kurze Beine, rennt aber schneller als die Wahrheit.",
    points: 1,
  },
  {
    id: 4,
    sentence: "Für Geld und gute Worte kann man alles haben.",
    points: 1,
  },
  {
    id: 5,
    sentence: "Wer nicht hören will, muss fühlen.",
    points: 1,
  },
  {
    id: 6,
    sentence: "Reibung erzeugt Wärme.",
    points: 1,
  },
]

let proverbCount = proverbArray.reduce((sum, item) => {
  return sum + item.points
}, 0)

console.log("Total proverbs count: " + proverbCount)
