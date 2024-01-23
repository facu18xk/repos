function spinWords(string) {
  //TODO Have fun :)
  const words = string.split(" ");
  words.forEach(el => {
    if (el.length >= 5) {
      el = el.split("").reverse().join("");
    }
  });
  return words.join(" ");
}
console.log(spinWords("Hello worldero"));