// function guy() {
//     let result = ''
//     for (i = 0;i < arguments.length;i++) {
//         result += arguments[i] + "-" ;

//     }

// }
// console.log(guy("string1","string2","string3"))
function myFunction() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " - ";
    }
    console.log( result );
};

myFunction( "My first string", "My second string", "my third string" );