
let person=prompt("Adınızı ve Soyadınızı Giriniz:");
let name=person.toUpperCase().toString();
let myName=document.querySelector("#myName")
myName.innerHTML=`${person}`


function date(){
    let date=new Date().toLocaleTimeString();
    let myClock=document.querySelector("#myClock")
    myClock.innerHTML=`${date}`
}

setInterval(date,1000); //10000ms yani 1sn demek 1sn de bir bu fonksiyon çalışır.