 
 //e)Print the country which uses US Dollars as currency
            
 var req=new XMLHttpRequest(); 

 req.open("GET","https://restcountries.com/v2/all")
 
 req.send();
 
 req.onload=function(){
     var res=JSON.parse(req.response);
     var hasCurrency = (country,code) => country.currencies && country.currencies.filter(currency => currency.code === code).length > 0; 
     var pop=res.filter(elem => hasCurrency(elem,'USD'));
     console.log(pop);                 
 }