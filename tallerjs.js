// Comparacion entre 2 numeros cual es el mayor o si son iguales
let a;
let b;

a=5 
b = 1

console.log('Que numero es mayor:');
console.log('numero a= ' + a);
console.log('numero b= ' + b);

if(a == b){
    console.log(a + '' + b + ' Son iguales');
}
else if(a > b){
    console.log(a + ' es mayor que ' + b);
}
else{console.log(b + ' es mayor que ' + a)};

console.log('---------------------------');

// Comparacion entre 3 numeros cual es el mayor
let f;
let j;
let k;

f=111;
j = 28;
k = 16;

console.log('Que numero es mayor:');
console.log('numero f= ' + f);
console.log('numero j= ' + j);
console.log('numero k= ' + k);

if(f>j && f>k){
    console.log('El numero mayor es: ' + f);
} 
else if(j>f && j>k){
    console.log('El numero mayor es: ' + j);
}
else if(k>f && k>j){
    console.log('El numero mayor es: ' + k);
};

console.log('------------------------------------------------------');