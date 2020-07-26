class Segitiga{
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2;
    }  
cetakPropert(){
    console.log(`alas\t:${this.alas}`);
    console.log(`tinggi\t:${this.tinggi}`);
}}
class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);
        this.warna=w;
    }
cetakPropert(){
    super.cetakPropert();
    console.log(`warna\t:${this.warna}`);
}}
let a=3;
console.log("Nilai Alas:"+a);
let t=4;
console.log("Nilai Tinggi:"+t);
let obj=new SegitigaWarna(a,t, 'merah');
obj.cetakPropert;
//memanggil luas
console.log(`luas\t${obj.luas()}`);