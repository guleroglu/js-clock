let name = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = name;

function tarihSaat() {
    let date = new Date().toLocaleString("tr-TR");
document.getElementById("myClock").innerHTML = date;
}

setInterval(tarihSaat, 1000);


