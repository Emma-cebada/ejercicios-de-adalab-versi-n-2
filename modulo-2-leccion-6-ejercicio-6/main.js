const pearBasket = {
  numMax: 10,
  numMin: 0,
  currentNum: 8,
  initialNum: 0,
  add: function () {
    this.currentNum = this.currentNum + 1;
    if (this.currentNum > this.numMax) {
      return "No se pueden meter más peras.";
    } else {
      return this.currentNum;
    }
  },
  remove: function () {
    return this.currentNum - 1;
  },
  equal: function () {
    return (this.currentNum = this.initialNum);
  },
};
console.log(pearBasket.add());
console.log(pearBasket.add());
console.log(pearBasket.add());
// console.log(pearBasket.remove());
// console.log(pearBasket.equal());
