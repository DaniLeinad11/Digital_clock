hour = document.querySelector("#hour");
minute = document.querySelector("#minute");
second = document.querySelector("#second");

hour.innerHTML = window.Date()[16] + window.Date()[17];
minute.innerHTML = window.Date()[19] + window.Date()[20];
second.innerHTML = window.Date()[22] + window.Date()[23];

var secondInterval = setInterval(() => {
    second.innerHTML ++;
    if(second.innerHTML != '00' && second.innerHTML < 10){
        second.innerHTML = '0' + second.innerHTML;
    };
    if(second.innerHTML >= '60'){
        second.innerHTML = '00';
    }
    if(second.innerHTML == '00'){
        minute.innerHTML ++;
    }
}, 1000);

    if(minute.innerHTML != '00' && minute.innerHTML < 10){
        minute.innerHTML = '0' + minute.innerHTML;
    };



var hourInterval = setInterval(() => {
    hour.innerHTML ++;
    minute.innerHTML = '00';
    if(hour.innerHTML != '00' && hour.innerHTML < 10){
        hour.innerHTML = '0' + hour.innerHTML;
    };
}, 3600000);

console.log(window.Date())
console.log(window.Date()[16], window.Date()[17])