const hacker = new XMLHttpRequest();
hacker.open("GET","https://restcountries.com/v3.1/all");
hacker.send();
hacker.responseType= "json";
hacker.onload = function displayResult(){
    const countries = hacker.response;
   console.log(countries);
    console.log("No.of countires :",countries.length);
for (const key in countries){
    console.log( [countries[key]["flags"]["png"]]);
};
};
