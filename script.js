let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

const formatNum = num => num < 10 ?  `0${num}` : num;

let countdown = setInterval(() => {
    let date = new Date();
    let a = new Date(2024, 3, 10);
    let difference = a.getTime() - date.getTime();

    if (difference <= 0) {
        clearInterval(countdown); // Останавливаем таймер
        document.getElementById('wrapper-title').textContent = 'С праздником Ид аль-Фитр!';
        return;
    }

    day.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24 ));
    hour.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60 ) % 24));
    minute.textContent = formatNum(Math.floor((difference / 1000 / 60 ) % 60));
    second.textContent = formatNum(Math.floor((difference / 1000 ) % 60));
}, 1000);


// console.log(date.getUTCHours(e));
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());















