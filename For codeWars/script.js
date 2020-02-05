function order(words) {
  let arr = words.split(" ");
  let res = [];

  arr.map(function(item, id) {
    res[item.match(/\d/)[0] - 1] = item;
  });

  return res.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
