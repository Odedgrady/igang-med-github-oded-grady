
var profiler = ["første", "anden", "tredje"];


// console.log (profiler[2]);

// Foreach-løkker løber altid ALLE elementer igennem.

// en_profil (eller bamse_profil) kan du kalde lige hvad du har lyst.
// Det gælder også kylling_index.
// Ovennævnte variabler eksisterer KUN inden i foreach løkken

console.log ("Nu går vi i gang med foreach løkken");
profiler.forEach(function(bamse_profil, kylling_index){

    
    console.log ("Indexet er " + kylling_index + " Indholdet er " + bamse_profil)
    // console.log(en_profil);
});
console.log ("Vi er nåede forbi foreach løkken");

// Vi forventer at denne linjer viser en fejl, da vi jo ikke har adgang til bamse_profil uden for løkken
console.log (bamse_profil);

