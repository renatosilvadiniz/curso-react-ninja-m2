const map = (arr = [], func = (item) => item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr.push(func(arr[index], index, arr));
  }
  return newArr;
};

export default map;
