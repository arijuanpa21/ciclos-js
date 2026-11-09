console.log("Ejemplo 1: ");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Ejemplo 2: ")
for(let i=1; i<=10; i++){
    console.log(`3 * ${1} = ${i*3}`);
}

console.log("Ejercicio 1: ")
for(let i=2; i<=20; i+=2){
    console.log(i);
    
}

console.log("Ejercicio 1: ")
for(let i=1; i<=20; i++){

    if(i % 2 ===0 )
    console.log(i);
    
}


console.log("Ejercicio 2: ")
let acumulador =0;

for(let i=1; i<=10; i++){
    acumulador +=i;
}
console.log(`Total: ${acumulador}`);
