function persegiPanjang(p, l) {
    let luas = p * l;
    let kel = 2 * (p + l);
    return `luas persegi panjang adalah ${luas} <br>` + 
    `keliling persegi panjang adalah ${kel} <br>`;
}

document.write(persegiPanjang(10, 5));

document.write("<br>");

function persegi(s) {
    let luas = s * s;
    let kel = 4 * s;
    return `luas persegi adalah ${luas} <br>` + 
    `keliling persegi adalah ${kel} <br>`;
}

document.write(persegi(10));

document.write("<br>");

let array = [45, 47, 49, 50, 52, 54];
function oddEven(array) {
    let genap = [];
    let ganjil = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            genap.push(array[i]);
        } else {
            ganjil.push(array[i]);
        }
    }
    document.write(`Ganjil: ${ganjil} <br>`);
    document.write(`Genap: ${genap}`);
}

document.write(oddEven(array));
// saya tidak tahu kenapa muncul undefined
document.write("<br>");
document.write("<br>");


function pattern(a) {
    for(let i = a; i > 0; i--) {
        for(let j = a; j > 0; j--) {
            if(i == j || j == a-i+1) {
                document.write(j);
            } else {
                document.write("*");
            }
        }
        document.write("<br>");
    }
}

pattern(9);