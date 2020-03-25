let el = document.getElementById('title');
let sentence = [
    'Ваш мозг работает быстро?',
    'Но задача так и не решается?',
    'Думаю у нас есть кое-что',
    'Мы знаем как заставить ваш мозг',
    'работать усерднее',
    'Наш препарат ускорит ваш мозг',
    'УСКОРЬТЕСЬ',
    ' ',
    ' ',
    ' ',
    'В левом верхнем кнопка',
    ' ',
];

el.innerHTML = sentence[0];
function go(scenario) {
    let dd = 0;
    let i = 1,
        timer = setInterval(
            function() {
                if (i < scenario.length) {
                    el.className = `first`;
                    el.innerHTML = scenario[i];
                    i++;
                }
                else{
                    clearInterval(timer);
                }

            },
            4000
        );
}



go(sentence);