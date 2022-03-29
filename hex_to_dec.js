const p = (a) => {
  console.log(a);
};

const hexStrToDec = (str) => {
  str = str.toUpperCase();
  var total = 0;

  for (let i = 0; i < str.length; i++) {
    total +=
      Math.pow(16, i) *
      (str[str.length - 1 - i].charCodeAt(0) -
        (str[str.length - 1 - i].charCodeAt(0) < 64 ? 48 : 55));
  }

  return total;
};

var str1 = "1d2";
p(hexStrToDec(str1));
p("____")
p("____")
p("____")

const decToHexStr = (val) => {
  // p(val)
  // var remainder = 0;
  // const nArr = [];
  // var i = 0;

  // while (val != 0){
  //   remainder = val % 16;
  //   nArr[i] = Math.floor(val / 16);
  //   val = remainder;

  //   p("____")

  //   p("rem")
  //   p(remainder)
  //   p("val")
  //   p(val)
  //   p(nArr)


  //   i++;
  // }

  return 0;
};

var dec1 = 1000;
p(decToHexStr(dec1));
