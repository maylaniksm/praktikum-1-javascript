var a=10;
var b= 4;

console.log("Masukkan Nilai A: " + a);
console.log("Masukkan Nilai B : "+b);
function PB(a,b){
    var c=a/b;
    return (c>=0)? Math.floor(c): Math.ceil(c);
}
console.log(`${a}/${b}=${PB(a,b)}`);