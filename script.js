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
