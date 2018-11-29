var words = ["ground", "control", "to", "major", "tom"];

function map(inputArr, inputCallback){
var storageArray = []

for (i of inputArr){
  storageArray.push(inputCallback(i))
}
return storageArray
}


console.log(map(words, function(word) {
  return word.length;
}))

console.log(map(words, function(word) {
  return word.toUpperCase();
}))

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}))
