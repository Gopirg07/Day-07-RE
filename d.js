
//d)Print the total population of countries using reduce function 
var req=new XMLHttpRequest(); 

req.open("GET","https://restcountries.com/v2/all")

req.send();

req.onload=function(){
    var res=JSON.parse(this.response); 
    var T=res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(T)
}