function analyzeSparseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("wrong argument type");
  }

  let countOfAll = arr.length;
  let countOfNull = 0;
  let countOfUndefined = 0;
  let countOfEmptyElements = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === undefined && i in arr) {
      ++countOfUndefined;
    }

    if (arr[i] === null) {
      ++countOfNull;
    }
    if (!(i in arr)) {
      ++countOfEmptyElements;
      console.log(arr[i]);
      
    }
  }
  console.log(countOfAll, countOfEmptyElements, countOfNull, countOfUndefined);
  

}



