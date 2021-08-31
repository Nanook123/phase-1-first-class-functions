function receivesAFunction (spy) {
    console.log(spy());
}

receivesAFunction(function () { return "What game should I play today ?"});



function returnsANamedFunction(){

let game = "GG";

function whatToPlay(){`${game}`}

return whatToPlay

}

function returnsAnAnonymousFunction(){

    let game = "GG";

    return function (){$[game]}
}
