// to check for a number use typeof AND isNaN()

// example

function isThisActuallyANumberDontLie( data ){
    return ( typeof data === "number" && !isNaN(data) );
}