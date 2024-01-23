function spinWords(string) {
  //TODO Have fun :)
  const words = string.split(" ");
  const result = [];
  words.forEach(el => {
    if (el.length >= 5)
      result.push(el.split("").reverse().join(""));
    else
      result.push(el);
  });
  return result.join(" ");
}