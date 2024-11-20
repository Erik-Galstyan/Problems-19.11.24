function testJSONSerialization(obj) {
  if (typeof obj != "object" || obj == null) {
    throw new Error("bad argument type");
  }

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; ++i) {
    if (obj[keys[i]] === undefined) {
      obj[keys[i]] = null
    } else if (typeof obj[keys[i]] == "object" && obj[keys[i]] != null) {
      testJSONSerialization(obj[keys[i]]);
    }
  }
  return JSON.stringify(obj)
}


let obj = {
  x: undefined,
  y: null,
  z: 2,
  l: 9,
  o: {
    r: 8,
    h: undefined,
  }
}
console.log(testJSONSerialization(obj));







