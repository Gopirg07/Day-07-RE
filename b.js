
//b)Get all the countries with a population of less than 2 lakhs using Filter function

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all")

req.send();
req.onload=function(){
 var res=JSON.parse(this.response); 
 var pop=res.filter((ele)=>ele.population<200000);
 console.log(pop)
}