
//a)Get all the countries from the Asia continent /region using the Filter function

//S1
var req = new XMLHttpRequest();
//S2
req.open("GET", "https://restcountries.com/v2/all");
//s3
req.send();
//S4
req.onload = function () { 
  var res = JSON.parse(this.response); 
  var con = res.filter((ele) => ele.region == "Asia");
  console.log(con);
};
