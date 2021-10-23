document.write("<h1>4. Копирование значений и передача по ссылке. Область видимости, управление памятью и замыкание. Контекст вызова.Рекурсия и передача функции в качестве аргумента</h1>");


//Задание 1
document.write("<h2>Задание 4.1:</h2>Вывод происходит в консоль");

function foo (par1, par2, par3){
    
    for(let i = 0; i < par3; i++)
        par1.count = i;       
    
    return par1;
}

let obj = [];
for(let i = 0; i < 10; i++){
    obj[i] = {
        name: "static",
        count: i
    }
}

console.log(foo(obj, "count", 10));


//Задание 2
document.write("<h2>Задание 4.2:</h2>");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function bruteforce(){
    let N = 100;
    let cnt = 0;
    let arr = [N];
    
    function selection(){
        let flag1 = true;
        let flag2 = false;
        while(flag1){
            let num = getRandomInt(100) + 1;
            for(let i = 0; i < N; i++){
                if(arr[i] == num){
                    flag2 = false;
                    break;
                }
                else
                    flag2 = true;
            }
            if(flag2 == true){
                arr[cnt] = num;
                //console.log("Count"cnt + " = " + arr[cnt]);
                flag1 = false;
                cnt++;
            }
        }
    }
    for(let i = 0; i < N; i++){
        selection();
        document.write(arr[cnt - 1] + " ");
    }
}

bruteforce();


//Задание 3
document.write("<h2>Задание 4.3:</h2>");

let stud = {
    Name: "Дима",
    Family: "Слованкин",
    Age: 29,
    Inetersing: ["Спорт", "Кулинария", "Военная техника"],
    Learn: "ГУАП"
}

stud.output = function(){
    document.write("Биографическая справка:<br>" + stud.Name + ". " + stud.Family + ". " + stud.Age + ". Интересы: " + stud.Inetersing + ". Учится в " + stud.Learn);
}

stud.output();

//Задание 4
document.write("<h2>Задание 4.4:</h2>");

function factorial(itog, n){
    itog = itog * n;
    n--;
    if(n > 0){
        itog = factorial(itog, n);
    }
    return itog;
}
let fact = 9;
let itog = factorial(1, fact);

document.write(fact + "! = " + itog);

//Задание 5
document.write("<h2>Задание 4.5:</h2>Вывод происходит в консоль");

function sort(mas, par){
    for(let i = 1; i < mas.length; i++){
        for(let j = 0; j < mas.length - i; j++){
            if(par == "top"){
                if(mas[j].price > mas[j+1].price){
                    let sym = mas[j+1].price;
                    mas[j+1].price = mas[j].price;
                    mas[j].price = sym;
                }
            }
            else if(par == "down"){
                if(mas[j].price < mas[j+1].price){
                    let sym = mas[j+1].price;
                    mas[j+1].price = mas[j].price;
                    mas[j].price = sym;
                }
            }
        }
    }
}

let Arr = [ 
    { 
        price : 10,
        count : 2 
    }, 
    { 
        price : 5,
        count : 5
    },
    { 
        price : 8,
        count : 5 
    }, 
    { 
        price : 12,
        count : 4 
    }, 
    { 
        price :8,
        count : 4
    }
];

let par = "down";    //top or down
sort(Arr, par);
console.log(Arr);