function sum(...a){
    let total=0.0;
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}
//parameter berupa array dengan dua elemen
console.log('sum(10,20):'+sum(10,20));
//paramter berupa array dengan tiga elemen
console.log('sum(10,20,30):'+sum(10,20,30));