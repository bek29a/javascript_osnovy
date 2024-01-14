/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


/*
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? (прошу введите число)', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done'); 
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 11 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 31) {
        console.log("Вы киноман");
    } else {
        console.log("Произошло ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
// Код возьмите из предыдущего домашнего задания

*/

/*

"use strict"

function first() {
    // Do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    callback();
    console.log(`Я учу: ${lang}`);
    
}

function done(){
    console.log('Я прошел этот урок!');
}

learnJS('Javascript', done); 

*/

'use strict'

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);
// console.log(options["colors"]["border"]);
// // delete options.name;
// // console.log(options);

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object' ) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

