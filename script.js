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
  {
    id: 7,
    sentence: "Wer zuerst kommt, mahlt zuerst.",
    points: 1,
  },
  {
    id: 8,
    sentence: "Wer nicht wagt, der nicht gewinnt.",
    points: 1,
  },
]

let proverbCount = proverbArray.reduce((sum, item) => {
  return sum + item.points
}, 0)

console.log("Total proverbs count: " + proverbCount)

let proverbFilter = proverbArray.filter((string) => {
  return string.id > 0
})

console.log(proverbFilter)

let proverbFind = proverbArray.find((string) => {
  return string.id > 5
})

console.log(proverbFind)

let proverbSome = proverbArray.some((string) => {
  return (string.id = 3)
})

console.log(proverbSome)

class Proverb {
  constructor(sentence, language) {
    this.sentence = sentence
    this.language = language
  }

  printProverb() {
    console.log(this.sentence)
  }
}

let proverb = new Proverb(
  "Wer zu spät kommt, den bestraft das Leben.",
  "German"
)

let proverb7 = new Proverb("Wer nicht wagt, der nicht gewinnt.", "German")

proverb7.printProverb()

console.log(document.documentElement)

const h1 = document.getElementById("h1")

h1.style.color = "black"

const divProverb = document.getElementsByClassName("proverb")

const divProverbWithArray = Array.from(divProverb)

divProverbWithArray.forEach((div) => {
  div.style.color = "grey"
})
