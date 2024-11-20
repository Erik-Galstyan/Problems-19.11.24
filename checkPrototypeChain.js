function checkPrototypeChain(obj) {
  if (typeof obj != "object" || obj == null) {
    throw new Error("wrong argument type");
  }

  let count = 0;
  let proto = Object.getPrototypeOf(obj);

  while (proto) {
    ++count;
    proto = Object.getPrototypeOf(proto);
  }
  return count;
}






