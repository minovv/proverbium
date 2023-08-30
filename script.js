function getProverb(sentence, callback) {
  callback("Today's proverb is: " + sentence)
}

getProverb("Wer dich vemisst, wird anrufen.", function (proverb) {
  console.log(proverb)
})
