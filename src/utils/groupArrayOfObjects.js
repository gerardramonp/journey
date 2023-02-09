const groupArrayOfObjects = (array, key) => {
  let ObjMap = {};
  array.forEach((item) => {
    var makeKey = item[key];
    if (!ObjMap[makeKey]) {
      ObjMap[makeKey] = [];
    }

    ObjMap[makeKey].push(item);
  });
  return ObjMap;
};

export default groupArrayOfObjects;
