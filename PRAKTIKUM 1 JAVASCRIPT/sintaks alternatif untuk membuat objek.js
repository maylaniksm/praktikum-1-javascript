//membuat objek segitiga
let obj={
    alas:4,
    tinggi:5,
    luas:function(){
        return this.alas*this.tinggi/2;
    }
};

console.log("Sebelum Nilai Properti Diubah");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);

//mengubah nilai properti alas dan tinggi
obj.alas=10;
obj.tinggi=12;

console.log("Setelah Nilai Properti Diubah");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);
