document.write("<h1>3. Функции. Объекты, как ассоциативные массивы</h1>");
//Задание 1
document.write("<h2>Задание 3.1:</h2>");

function comp(q, w){
    let flag = true;
    if(q.length == w.length){
        for(let i = 0; i < q.length;i++){
            if (q[i] != w[i]){
                flag = false;
                break;
            }
        }
    }
    return flag;
}

let mas1 = [0, 0, 0, 0, 0, 1];
let mas2 = [0, 0, 0, 0, 0, 1];
document.write("Массив 1: " + mas1 + "<br>Массив 2: " + mas2 + "<br>");

if(comp(mas1, mas2))
    document.write("Массивы равны<br>");
else
    document.write("Массивы не равны<br>");


//Задание 2
document.write("<h2>Задание 3.2:</h2>");


function range(input, output, step = 1){
        let p = 0;
        let mas = [];
        for(let i = input, k = 0; i+p <= output; k++){
            mas[k] = i+p;
            p=p+step;
        }
        return mas;
}

let new_arr = range(2, 10, 3);
document.write("<br>Новый массив: " + new_arr + "<br>");


//Задание 3
document.write("<h2>Задание 3.3:</h2>");

function show(stud){
    
    document.write("Вывод объекта на экран:<br>1. Имя: " + stud.name + "<br>2. Фамилия: " + stud.family +
                   "<br>3. Возраст: "+ stud.age + "<br>4. Интересы: " + stud.interesting + "<br>5. Место обучения: " + stud.university);
}

let student = {
    name: "Антошка",
    family: "Маятник",
    age: 22,
    interesting: ["Игры", "Фильмы", "Сериалы", "Ролеплей"],
    university: "SUAI"
}

show(student);

//Задание 4
document.write("<h2>Задание 3.4:</h2>-");
