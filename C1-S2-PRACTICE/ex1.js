function transformToObjects(listOfNumbers) {
  result = [];
  result = listOfNumbers.map( x => ({val: x}));
  return result;
}
console.log(JSON.stringify(transformToObjects([1, 2, 3])));