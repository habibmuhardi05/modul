const readline = require('readline-sync');
console.info('Program penambahan angka');
const numberl = readline.question('Masukkan angka pertama:');
const number2 = readline.question('Masukkan angka kedua:');




function add(a, b){
	return a - b;
}
const hasil = add(parseInt(numberl), parseInt(number2));
console.log(hasil);
	