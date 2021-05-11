
let name = prompt("İsminizi Yazınız");
document.getElementById("myName").innerHTML = name;

let clock = document.getElementById("myClock");
clock.onload = setInterval(showTime, 1000); 


function showTime(){

    
    let date = new Date();
    let secim = date.getDay();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gun;

    switch(secim){
        case 0:
            gun = "Pazar";
            break;
        case 1:
            gun = "Pazartesi";
            break;
        case 2:
            gun = "Salı";
            break;
        case 3:
            gun = "Çarşamba";
            break;
        case 4:      
            gun = "Perşembe";
            break;  
        case 5:
            gun = "Cuma";
            break;
        case 6:
            gun = "Cumartesi";
            break;
    };

    if(saat<10){
        saat = `0${saat}` 
    }
    if(dakika<10){
        dakika = `0${dakika}` 
    }
    if(saniye<10){
        saniye = `0${saniye}` 
    }
  
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`;

}

