var x = [6];
var y = [8];
var z;

console.log("Masukkan nilai x: "+x);
console.log("Masukkan nilai y: "+y);

if (y===0){
    console.log("Kesalahan: Nilai y tidak boleh nol");
    process.exit(1);
}
z=x/y;
console.log(`${x}/${y}=${z}`);