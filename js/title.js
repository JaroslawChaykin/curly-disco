let el = document.getElementById('title');
function go(scenario) {
    let dd = 0;
    let i = 0,
        timer = setInterval(
            function() {
                if (i < scenario.length) {
                    console.log(i);
                    el.innerHTML = scenario[i];
                    i++;
                }
                else{
                    clearInterval(timer);
                }
            },
            2000
        );
}

let sentence = [
    'Ваш мозг работает быстро?',
    'Но может все таки не достаточно?',
    'Думаю у нас есть кое-что',
    'Мы знаем как заставить ваш мозг',
    'работать усерднее',
    'Наш препарат ускорит ваш мозг',
    'УСКОРЬТЕСЬ',
    ' ',
    ' ',
    ' ',
    'В левом верхнем кнопка',
        // `${addButton()}`
];

go(sentence);

// function addButton() {
//     let button1 = '<button id="button1">Увеличить скорость</button>';
//     let button2 = '<button id="button1">Увеличить скорость</button>';
//     let button3 = '<button id="button1">Увеличить скорость</button>';
//     let button4 = '<button id="button1">Увеличить скорость</button>';
//
//     return [button1, button2, button3, button4]
//
// }