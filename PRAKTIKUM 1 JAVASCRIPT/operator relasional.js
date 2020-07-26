var a=10, b=20;
console.log(`a \t: ${a}`);
console.log(`a \t: ${b}`);
console.log(`a==b \t: ${(a==b)}`);
console.log(`a!=b \t: ${(a!=b)}`);
console.log(`a<b \t: ${(a<b)}`);
console.log(`a>b \t: ${(a>b)}`);
console.log(`a<=b \t: ${(a<=b)}`);
console.log(`a>=b \t: ${(a>=b)}`);

//operator relasional dalam blok pemiliham
if(a<b){
    console.log("a lebih kecil dari b");
}

//operator relasional dalam blok pengulangan
var i=a;
while(i<=b){
    console.log(`${i}`); //menampilkan data pada layar tanpa disertai karakter baris baru
    i +=2;
}