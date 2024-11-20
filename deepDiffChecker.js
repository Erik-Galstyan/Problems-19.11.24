function deepDiffChecker(obj1, obj2, path = "") {
  const differences = [];

  const keys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

  for (const key of keys) {
      const newPath = path ? `${path}.${key}` : key;
      const value1 = obj1?.[key];
      const value2 = obj2?.[key];

      if (!(key in obj1)) {
          differences.push(`missing in obj1 : ${newPath}`)
      } else if (!(key in obj2)) {
          differences.push(`missing in obj2 : ${newPath}`)
      } else if (value1 === null && value2 === undefined || value1 === undefined && value2 === null) {
          differences.push(`null vs undefined ${newPath}`)
      } else if (value1 && value2 && typeof value1 === 'object' && typeof value2 === 'object') {
          differences.push(...deepDiffChecker(value1, value2, newPath));
      } else if ( value1 !== value2) {
          differences.push(`Mismatch at ${newPath} : obj1:${value1}  obj2:${value2}`)
      }
  }

  return differences;
}




const obj1 = {
  a: null,
  b: 2,
  c: { d: 4, e: null },
  f: 6,
};

const obj2 = {
  a: undefined,
  b: 2,
  c: { d: 5, e: undefined },
  g: 7,
};

console.log(deepDiffChecker(obj1, obj2));