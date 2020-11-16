// console.log(5**2);


//materi perhitungan

console.log("Hari Pertama" + "<br>" + "<br>);
let p= 40;
let l= 23;

const luas= p * l;
const keliling= 2 * (p + l);

document.write("Persegi Panjang" + "<br>");
document.write("Luas= " + luas + "<br>" + "Keliling= " + keliling + "<br>");

document.write("<br>")


//materi penentuan bilangan menggunakan mod dengan if else

console.log("Hari Kedua" + "<br>" + "<br>);
let b= 897659;

if(b % 2 == 0) {
    document.write( b + " adalah bilangan genap");
} else {
    document.write(b + " adalah bilangan ganjil");
}

document.write("<br>");

let c= 50;

if(c % 5 == 0) {
    document.write(c + " adalah kelipatan 5" + "<br>");
} else {
    document.write(c + " bukan kelipatan 5" + "<br>");
}

document.write("<br>");

//menentukan grade

let nilai= 78;


if(nilai >= 80 && nilai <= 100) {
    document.write("nilai anda A");
}else if(nilai >= 74 && nilai <= 79) {
    document.write("nilai anda B+");
}else if(nilai >= 69 && nilai <= 73) {
    document.write("nilai anda B");
}else if(nilai >= 64 && nilai <= 68) {
    document.write("nilai anda C+");
}else if(nilai >= 59 && nilai <= 63) {
    document.write("nilai anda C");
}else if(nilai >= 55 && nilai <= 58) {
    document.write("nilai anda D");
}else if(nilai >= 0 && nilai <= 54) {
    document.write("nilai anda E");
} else {
    document.write("nilai salah");
}

//PR 


console.log("jawaban pr(credit to mas Mirza yang njawabnya super simpel)" + "<br>");            
let anak = 89;
let kapasitas = 8;

let jumlah = anak % kapasitas;

if(jumlah == 0) {
    document.write(jumlah + " bus" + "<br>");
} else if(jumlah > 0) {
    document.write(Math.ceil(anak / kapasitas) + " bus" + "<br>");
} else if(anak == 0) {
    document.write("tidak memerlukan bus karena tidak ada penumpang");
} else {
    document.write("penumpang tidak bisa minus");
}

/*
Kamus tanda baca:
* : kali
/ : bagi
+ : tambah
- : kurang

= : sama dengan
== : sama
!= : tidak sama dengan
< : kurang dari
<= : kurang dari sama dengan
> : lebih dari
>= : lebih dari sama dengan

|| : atau
&& : dan
*/
