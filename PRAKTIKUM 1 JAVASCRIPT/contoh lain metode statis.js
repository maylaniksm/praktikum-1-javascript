class Aritmetika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a=3;
let b=4;
console.log("Masukkan Nilai A : " + a);
console.log("Masukkan Nilai B : " + b);
//memanggil metode statis
console.log(`${a}+${b}=${Aritmetika.tambah(a,b)}`);