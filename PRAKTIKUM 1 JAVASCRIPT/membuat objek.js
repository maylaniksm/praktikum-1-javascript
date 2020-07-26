class Segitiga{
    //konstruktor
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }
    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }
}
//menampilkan data
let alas = 3;
let tinggi = 4;
console.log("Masukkan Nilai Alas: "+alas);
console.log("Masukkan Nilai Tinggi: "+tinggi);

//membuat objek dari kelas segitiga
let obj=new Segitiga(alas,tinggi);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);
