//Pertemuan ke 3

console.log('Hari ke 3');

let a = ['hanya', 'dapat', 'berisi', 'satu', 'data'];
a.push('type');
console.log(a);

//urutan array dimulai dengan index 0

console.log(a[0]); //digunakan untuk memunculkan data dengan urutan yang kita inginkan
console.log(a.length); //digunakan untuk memunculkan panjang array yang ingin kita ketahui

let number = [2, 4, 6, 3, 5];
console.log(number); //sebelum ditambahkan
console.log(number.length); 

number.push(7); //digunakan untuk menambahkan data ke array yang kita inginkan
console.log(number); //setelah ditambahkan
console.log(number.length); //length juga akan berubah

number.pop(); //digunakan untuk melepas data terakhir dari array yang kita inginkan
console.log(number)

//Pertemuan ke 4

console.log('Hari ke 4');

let bb = [2, 35, 76, 90, 32, 21];
let genap = [];
let ganjil = [];

for(let i = 0; i < bb.length; i++) {
    if(bb[i] % 2 == 0) {
        genap.push(bb[i]);
    } else {
        ganjil.push(bb[i]);
    }
}

console.log("bilangan genap : " + genap);
console.log("bilangan ganjil : " + ganjil);

let soal_2 = ["aa", "bbb", "cccc", "ddddd"];

for(let i = 0; i < soal_2.length; i++) {
    if(soal_2[i].length > 3) {
        console.log(soal_2[i]);
    }
}

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        if(i % 2 == 0) {
            document.write("*");
        } else {
            document.write("_");
        }
    }
    document.write("<br>")
}

// * menempati angka genap dari deklarasi i
// _ menempati angka genap dari deklarasi i
