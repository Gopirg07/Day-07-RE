
//c)Print the following details name, capital, flag using forEach function

var req=new XMLHttpRequest()
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
 var res=JSON.parse(this.response); 
 res.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag)); 
}