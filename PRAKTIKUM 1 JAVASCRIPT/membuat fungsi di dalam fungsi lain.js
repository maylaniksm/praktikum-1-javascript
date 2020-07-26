let alas = 3;
let tinggi = 4;

function hipotenusa(a,b){
    //funsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+kuadrat(b));
}
console.log("Menghitung Sisi Miring Segitiga Siku-Siku");
console.log("Masukkan Nilai Alas: "+alas);
console.log("Masukkan Nilai Tinggi: "+tinggi);

var c=hipotenusa(alas,tinggi);

console.log(`Sisi Miring = ${c}`);