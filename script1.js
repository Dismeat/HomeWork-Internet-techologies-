document.write("<h1>1. Массивы</h1>")


//Задание 1
document.write("<h2>Задание 1.1:</h2>")
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = A.concat(B);

document.write("Mas A:<br>")
for(let i = 0; i < A.length; i++){
    document.write(A[i] + " ");
}

document.write("<br><br>Mas B:<br>")
for(let i = 0; i < B.length; i++){
    document.write(B[i] + " ");
}

document.write("<br><br>Mas C:<br>")
for(let i = 0; i < C.length; i++){
    document.write(C[i] + " ");
}



//Задание 2
document.write("<h2>Задание 1.2:</h2>-")


//Задание 3
document.write("<h2>Задание 1.3:</h2>")
let Mas = [12, 4, 3, 10, 1, 20];
let max = 0;
let max_id = 0;
let min = 100;
let min_id = 0;

document.write("Mas: ")
for(let i = 0; i < Mas.length; i++){
    document.write(Mas[i] + " ");
    if(Mas[i] > max){
        max = Mas[i];
        max_id = i;
    }
    
    if(Mas[i]<min){
        min = Mas[i];
        min_id = i;
    }
}
document.write("<br>Max = " + max + "<br>Min = " + min + "<br>New Mas: ");

Mas.splice (max_id, 1);
Mas.splice (min_id, 1);
for(let i = 0; i < Mas.length; i++){
    document.write(Mas[i] + " ");
}

//Задание 4
document.write("<h2>Задание 1.4:</h2>-")
//let ticket = [0, 0, 0, 0, 0, 0];
//let sum = 0;
//
//for(let i = 0; i < 1000000; i++) {
//    for(let k = i, j = 0; j < 6; j++, k = Math.floor(k / 10)) {
//        ticket[j] = Math.floor(k % 10);
//    }
//    if (ticket[0] + ticket[1] + ticket[2] == ticket[3]+ticket[4]+ticket[5]) {
//        sum++;
//    }
//}