document.write("<h1>2. Регулярные выражения</h1>")
//Задание 1
document.write("<h2>Задание 2.1:</h2>")
let per = "13";
let a = Number(per[0]) + Number(per[1]);

document.write(per[0] + " + " + per[1] + " = " + a);


//Задание 2
document.write("<h2>Задание 2.2:</h2>");
let str = "Hello World!!!";
let ch = 'l';
let regexp = new RegExp(ch, "g");

document.write("Исходная строка: " + str + "<br>Символ: " + ch + "<br>Измененная строка: ");

str = str.replace(regexp, ch + ch);

document.write(str);


//Задание 3
document.write("<h2>Задание 2.3:</h2>");
let pass = "Qwertyasdfgh222#";

document.write("Пароль: " + pass + "<br>");

if(pass.length > 9){
    document.write("Длина пароля удовлетворяет условию<br>");
    
                   
    if(/[A-Z]/.test(pass) && /[a-z]/.test(pass)){
        document.write("В пароле имеются как верхний, так и нижний регистр букв<br>");
        
        let cnt = 0;
        for(let i = 0; i < pass.length; i++){
            if(/[0-9]/.test(pass[i])){
                cnt++;
            }
        }
        
        
        if(cnt > 2){
            document.write("В пароле имеется более 2 цифр, кол-во = " + cnt + "<br>");
            
            if(/[!-/]/.test(pass) || /[:-?]/.test(pass))
                document.write("В пароле имеется неалфавитный символ<br>");
            else
                document.write("В пароле отсутствует неалфавитный символ<br>");
        }
        else
            document.write("В пароле менее 2 цифр, кол-во = " + cnt + "<br>");
    }
        
    else if(/[A-Z]/.test(pass))
        document.write("В пароле отстутсвует нижний регистр букв<br>");
    
    else
        document.write("В пароле отстутсвует верхний регистр букв<br>");
}

else{
    document.write("Длина пароля меньше 9<br>");
}

document.write("<h2>Задание 2.4:</h2>-")
