var navn = "frank";
if (navn == "oded"){

    console.log ("hej oded");
}
else {

    console.log("Skift bruger");
}

var bil = "Mercedes";

if (bil == "Mercedes"){

 console.log ("Fed bil")   
}
else {

    console.log( "forkert bil")
}
var tal = 5;
if (tal == 5){
console.log ("rigtig tal")
}
else {

console.log ("forkert tal")
}

//var tal = 40;
console.log(tal);
if (tal < 5){
console.log("Lille");
}
else {
    console.log("stor");

}
//var work_harder = true;
var result = tal<5 ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
console.log(result);


var drik = "Cola";

if (drik = "pepsi"){
console.log("skift drik");
}
else{
    console.log("Ja, tak.");
}
var navn = "cola";
switch (navn){

    case "cola":
    console.log ("Til Oded")
    ;
    break;

    case "pepsi":
    console.log("Til Mark");

    break;

    case "pepsi max":
    console.log ("Til Søren");

    break;

    case "Danskvand":
    console.log("Til Jan");

    default:
    console.log("ikke på listen");
    break;

}
var tal = 5;
var tal1 = 8;


console.log(tal + tal1);
console.log(tal - tal1);
console.log(tal *tal1);
console.log(tal / tal1);
console.log(tal % tal1);
console.log(tal1 % tal);


tal++;
tal++;
tal++;
tal++;
tal++;
tal++;
console.log(tal);//beholder resultaten til senere brug.


console.log(++tal);//vise resultaten frem.

var y = 5;
var x = 2;

x += y;
console.log(x);

var bord = 5;
var skab = 7;

skab += bord;
console.log(skab);

var tal = 44;

if (tal && tal < 5){
    console.log("Lille");
    }
    else {
        console.log("stor");
    
    }
    var gang = 100;
    while (gang < 10 ){

        console.log("prøv while igen", gang);
        gang = gang+1;//gang++(en mere enkelt måde at skrive det på.)
      
    }
    var gang =100;
    do{
        console.log("prøv do igen", gang);
        gang++;
    }
    while (gang < 10 );

    A
    function hello(){
        
        console.log("hello...");
    }

    hello(); //udskriver "hello..." (hoisting funktion) 
sayHello('Frank');

function sayHello(who){ 
    console.log('hello', who);
}
sayHello('Oded');

sayHey('test for hoisting');//hoisting- funktion som var

var sayHey = function sayHey(who);
console.log(oded);














































