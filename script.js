function newestProverb(proverb) {
  console.log(proverb)
}

function getProverb(sentence, callback) {
  callback("Today's proverb is: " + sentence)
}

getProverb("Wer dich vemisst, wird anrufen.", newestProverb)
