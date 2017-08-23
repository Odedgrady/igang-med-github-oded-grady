# Opgave 3 (Fetch-Than-Catch)

I denne opgave visses hvordan de funktioner fungerer.<br>

# Fetch

Denne funktion sender en request til en server og derefter henter en source der skal bearbejdes.<br>

## Then-

Denne funktion vil sende resultet fra *fetch* videre i funktionen. I tilfælde af *reject* vil det bliver sent til *catch*.



## Catch-<br>

Denne funktion modtager beskeden om error fra *fetch* og meddeler om det i consolen.






```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
  <div id= content> 

    <h1>Henter data...</h1>
</div>
```

</body>
<script>

// fetch('https://swapi.co/api/people/') //
//    .then((response) => {
//       return response.json();
//    })
//    .then((json) => {

//       var content = document.getElementById('content');

//       json.results.forEach(function (person){

//         content.innerHTML += '<h1>' + person.name + '</h1>';
//       content.innerHTML += '<h2>' + person.height + '</h2>';
//       content.innerHTML += '<h3>' + person.eye_color + '</h3>';
//       })
fetch('https://swapi.co/api/people/')
   .then((response) => {
      // if (response.status == 200){
        return response.json();
    
      // }
      // else {
          // console.log("fejl: "+ response.status);
       //}
     

   })
   .then((json) => {
//console.log(json);
console.log(json.results[0].name)

      //var content = document.getElementById('content');

      //json.results.forEach(function (person){

        //content.innerHTML = '<h1>' + json.results[0].name + ' </h1>';

    })
    .catch((fejl_besked) => {
        console.log("fejl fejl");
    })
</script>
</html>