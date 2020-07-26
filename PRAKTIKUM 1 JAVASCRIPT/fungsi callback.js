let a = 3;
let b = 4;

function tambah(a,b){
    return a+b;
}
function kurang(a,b){
    return a-b;
}
function kali(a,b){
    return a*b;
}
function bagi(a,b){
    return a/b;
}
function hitung(a,b,callback){
    return callback(a,b);
}
console.log("Masukkan Nilai A: "+a);
console.log("Masukkan Nilai B: "+b);

console.log(`${a}+${b}= ${hitung(a,b,tambah)}`);
console.log(`${a}-${b}= ${hitung(a,b,kurang)}`);
console.log(`${a}*${b}= ${hitung(a,b,kali)}`);
console.log(`${a}/${b}= ${hitung(a,b,bagi)}`);