let getCleanNow = promise (function(resolve, reject){

// have a bath

let isClean = true;

if (isClean) {
    resolve('Clean');
}
else {
    reject('Not Clean')
}

});

getCleanNow. then (function(fromResolve){
    console.log('You are' + fromResolve);
})