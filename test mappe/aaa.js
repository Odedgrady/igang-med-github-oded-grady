// var navn = "frank";
// if (navn == "oded"){

//     console.log ("hej oded");
// }
// else {

//     console.log("Skift bruger");
// }

// var bil = "Mercedes";

// if (bil == "Mercedes"){

//  console.log ("Fed bil")   
// }
// else {

//     console.log( "forkert bil")
// }
// var tal = 5;
// if (tal == 5){
// console.log ("rigtig tal")
// }
// else {

// console.log ("forkert tal")
// }

// //var tal = 40;
// console.log(tal);
// if (tal < 5){
// console.log("Lille");
// }
// else {
//     console.log("stor");

// }
// //var work_harder = true;
// var result = tal<5 ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
// console.log(result);


// var drik = "Cola";

// if (drik = "pepsi"){
// console.log("skift drik");
// }
// else{
//     console.log("Ja, tak.");
// }
// var navn = "cola";
// switch (navn){

//     case "cola":
//     console.log ("Til Oded")
//     ;
//     break;

//     case "pepsi":
//     console.log("Til Mark");

//     break;

//     case "pepsi max":
//     console.log ("Til Søren");

//     break;

//     case "Danskvand":
//     console.log("Til Jan");

//     default:
//     console.log("ikke på listen");
//     break;

// }
// var tal = 5;
// var tal1 = 8;


// console.log(tal + tal1);
// console.log(tal - tal1);
// console.log(tal *tal1);
// console.log(tal / tal1);
// console.log(tal % tal1);
// console.log(tal1 % tal);


// tal++;
// tal++;
// tal++;
// tal++;
// tal++;
// tal++;
// console.log(tal);//beholder resultaten til senere brug.


// console.log(++tal);//vise resultaten frem.

// var y = 5;
// var x = 2;

// x += y;
// console.log(x);

// var bord = 5;
// var skab = 7;

// skab += bord;
// console.log(skab);

// var tal = 44;

// if (tal && tal < 5){
//     console.log("Lille");
//     }
//     else {
//         console.log("stor");
    
//     }
//     var gang = 100;
//     while (gang < 10 ){

//         console.log("prøv while igen", gang);
//         gang = gang+1;//gang++(en mere enkelt måde at skrive det på.)
      
//     }
//     var gang =100;
//     do{
//         console.log("prøv do igen", gang);
//         gang++;
//     }
//     while (gang < 10 );






// =======================================================================





//     //A
//     function hello(){
        
//         console.log("hello...");
//     }

//     hello(); //udskriver "hello..." (hoisting funktion) 
// sayHello('Frank');

// function sayHello(who){ 
//     console.log('hello', who);
// }
// sayHello('Oded');

// sayHey('test for hoisting');//hoisting- funktion som var

// var sayHey = function sayHey(who){
// console.log(who)
// }
//===========================================================================
//sayHello('oded');

// lærer pc til at sige hey
//function sayHello(fornavn, efternavn, fødselsdag ){


   // console.log(fornavn, efternavn, fødselsdag )
//}

//udfører
//sayHello("Randi","oded", "21.03.65");

//function sayHello(Dekleration){
 //   console.log(Dekleration)
//}

//sayHello("Ady is FABULOUS")

//=================================================
// function lægSammen (tal1, tal2 ){

// console.log(tal1+ tal2);
// }
// lægSammen(3, 5);

// function lægSammen (tal1, tal2 ){
    
//     console.log(tal1+ tal2);
//     }
//     lægSammen(3, 5);
//     function lægSammen (tal1, tal2 ){
        
//         console.log(tal1+ tal2);
//         }
//         lægSammen(3, 5);
//         function lægSammen (tal1, tal2 ){
            
//             console.log(tal1+ tal2);
//             }
//             lægSammen(3, 5);

// var result = 0;

// function add(tal){
// //result = result+ tal;
// result+= tal;
// }
// function sub(tal){
//     result-=tal;
// }
// add(5);
// add(8);
// sub(4);
// console.log(result);

//==============================================

// var sayHeyAnonym = function (what){
//     console.log(what);
// }
// sayHeyAnonym("da da da " );

//==============================

// var gammelTekst = "Apple, Banana, Kiwi";
// var nyTekst = gammelTekst.substr(15, 6); //15=start punkt, 6= antal karakterer
// console.log(nyTekst);

// var profil = function (data) {
//     return "Fornavn: "+ data[0] + "\nEfternavn: " + data[1] + "\nFødt: " + data[2]; // Returnerer tekst-strengen "Peter Pedal: Født 1941"
// }

// var idol = ["Oded", "Grady", "21.03.1965"];
// console.log(profil(idol));

// var tal = 2017;
// var tal1 = 1965;
// console.log(tal - tal1);


var mig = ["oded", "grady", "21.03.1965"];
console.log (mig[1] );

var profiler = [
    ["oded","grady", "1965"],
    ["junus", "euro", "1989"],
    ["muhammed", "yusuf", "1945"],
    ["jan","markusen","1980"],
]
profiler.forEach(function(profiler){
    console.log(profiler[1]);
});
// Definér funktionen hent_profil()  her
//function 


// Forsøger at hente profilen med index 0 (dvs. Oded's profil)
//var en_profil = hent_profil (profiler, 0);



//console.log();






















































