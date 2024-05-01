let images = document.getElementById("images");
let text = document.getElementById("text");
let btnBox = document.getElementById("btnBox");
let input = document.getElementById("input");

let name = "Ваше имя";

input.onkeypress = function(event) {

    if (event.key == "Enter" || event.keyCode == 13) {
        name = input.value;
        console.log(name);
        input.parentNode.removeChild(input);

        moveNextStep(scenario.two);
    }
}

let changeText = function(words) {
    console.log(words)
    text.innerHTML = words.replace("Ваше имя", name);
}

let changeImage = function(img) {
    images.style.backgroundImage = "url("+ img +")";
}

let changeButtons = function(buttonList) {
    console.log(buttonList)
    btnBox.innerHTML = "";

    for (let i = 0; i < buttonList.length; i++) {
        btnBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button";
    }
}


let moveNextStep = function(s) {
    console.log(s, 's')
    changeText(s.text);
    changeImage(s.image);
    changeButtons(s.buttons);
};

let box = document.querySelector(".box");
let app =document.querySelector(".app");
let body = document.querySelector("body");

// let startGame = function() {
//     box.parentNode.removeChild(box);
//     app.classList.add("activeApp");
//     body.classList.add("activeBody");
// }




let scenario = {
    one: {
        image: "images/просто.jpg",
        text: "Предлагаю вам сыграть в математическую игру, Ваше имя."
    },

    two: {
        image: "images/книга.jpg",
        text: "Ваше имя, для начала предлагаю простой пример. <br/> 2 * 2 + 2 = ? ",
        buttons: [["6", "moveNextStep(scenario.three)"], ["8", "moveNextStep(scenario.ten)"], ["10", "moveNextStep(scenario.ten)"]]
    },

    three: {
        image: "images/цифры.jpg",
        text: "Молодец! Теперь пример посложнее. <br/> 17 + (-5) = ?",
        buttons: [["22", "moveNextStep(scenario.ten)"], ["12", "moveNextStep(scenario.four)"], ["11", "moveNextStep(scenario.ten)"]]
    },

    four: {
        image: "images/три.jpg",
        text: "Молодец! Попробуй решить пример с переменной. <br/> 10x - 7 = 6x + 13",
        buttons: [["5", "moveNextStep(scenario.five)"], ["6", "moveNextStep(scenario.ten)"], ["-5", "moveNextStep(scenario.ten)" ]]
    },

    five: {
        image: "images/четыре.png",
        text: "Круто! Вот следующий пример. <br/> -2 + x = 4,3",
        buttons: [["5,3", "moveNextStep(scenario.ten)"], ["2,3", "moveNextStep(scenario.ten)"], ["6,3", "moveNextStep(scenario.six)"]]
    },

    six: {
        image: "images/пять.jpg",
        text: "Ура! Держи следующий пример. <br/> (5/12 + 3/8) * 12/19 = ?. ",
        buttons: [["1/2", "moveNextStep(scenario.seven)"], ["27/115", "moveNextStep(scenario.ten)"], ["5/24", "moveNextStep(scenario.ten)"]]
    },

    seven: {
        image: "images/шесть.jpg",
        text: "Умница! Реши это. <br/> 3/4 * x - 2/3 * x + 1 = 1/2 * x + 1/6",
        buttons: [["0,25", "moveNextStep(scenario.ten)"], ["2", "moveNextStep(scenario.eight)"], ["1,3", "moveNextStep(scenario.ten)"]]
    },

    eight: {
        image: "images/семь.jpg",
        text: "Остался последний пример. Попробуй решить его. <br/> (x + 3)/4 + (2x - 1)/6 = 7/3",
        buttons: [["-(2/21)", "moveNextStep(scenario.ten)"], ["7", "moveNextStep(scenario.ten)"], ["3", "moveNextStep(scenario.nine)"]]
    },

    nine: {
        image: "images/восемь.jpg",
        text: "Ура! У тебя всё получилось!",
    },

    ten: {
        image: "images/неправильно.jpg",
        text: "Неправильно. Попробуй начать сначала.",
        buttons: [["Сначала", "moveNextStep(scenario.two)"]]
    }

    // eleven: {
    //     image: "images/девять.jpg",
    //     text: "Спасибо за прохождение математической игры.",
    //     buttons: [["Вернуться к началу", "moveNextStep(scenario.one)"]]
    // }
}

// // Tic-Tac game

// let items = document.getElementsByClassName("app__block");
// let movePlayer = true;
// let game = true;

// // Ход (нажатие на ячейку)

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function() {

//         if (!this.classList.contains("active")) {
//             if (movePlayer) {
//                 if (this.innerHTML == "") {
//                     this.classList.add("active");
//                     this.classList.add("active_x");
//                     this.innerHTML = "x";
//                 }

//                 let result = checkMap();

//                 if (result.val) {
//                     game = false;
//                     setTimeout(function() {
//                         exit(result)
//                     }, 1);
//                 }

//                 movePlayer = !movePlayer;
//             }

//             if (game) {
//                 setTimeout(function() {
//                     botMove();
//                 }, 200)
//             }
//         }
//     });
// }

// function getRandomInt(value) {
//     return Math.floor(Math.random()  * Math.floor(value)); // from 1 to 9
// }

// function botMove() {
//     let items = document.querySelectorAll(".app__block:not(.active)");
//     let step = getRandomInt(items.length);

//     items[step].innerHTML = "o";
//     items[step].classList.add("active");
//     items[step].classList.add("active_o");

//     let result = checkMap();

//     if (result.val) {
//         game = false;
//         setTimeout(function() {
//             exit(result)
//         }, 1);
//     }

//     movePlayer = !movePlayer
// }

// function checkMap() {
//     let block = document.querySelectorAll(".app__block");
//     let items = [];

//     for (let i = 0; i < block.length; i++) 
//         items.push(block[i].innerHTML);

//     console.log(items);
    

//     if (items[0] == "x" && items[1] == "x" && items[2] == "x" ||
//        items[3] == "x" && items[4] == "x" && items[5] == "x" ||
//        items[6] == "x" && items[7] == "x" && items[8] == "x" ||
//        items[0] == "x" && items[3] == "x" && items[6] == "x" ||
//        items[1] == "x" && items[4] == "x" && items[7] == "x" ||
//        items[2] == "x" && items[5] == "x" && items[8] == "x" ||
//        items[0] == "x" && items[4] == "x" && items[8] == "x" ||
//        items[6] == "x" && items[4] == "x" && items[2] == "x")
//         return {val: true, win: "Игрок"}
//     else if (items[0] == "o" && items[1] == "o" && items[2] == "o" ||
//             items[3] == "o" && items[4] == "o" && items[5] == "o" ||
//             items[6] == "o" && items[7] == "o" && items[8] == "o" ||
//             items[0] == "o" && items[3] == "o" && items[6] == "o" ||
//             items[1] == "o" && items[4] == "o" && items[7] == "o" ||
//             items[2] == "o" && items[5] == "o" && items[8] == "o" ||
//             items[0] == "o" && items[4] == "o" && items[8] == "o" ||
//             items[7] == "o" && items[4] == "o" && items[2] == "o")
//         return {val: true, win: "Бот"}
//     else if (items.includes("") == 0)
//         return {val: true, win: "Ничья"}

//     return {val: false}

// }

// function exit(obj) {
//     alert("Game Over! Winner of the game is: " + obj.win);
//     localation.reload();
// }

moveNextStep(scenario.one);