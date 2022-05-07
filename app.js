setInterval(()=>{
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let day = document.querySelector(".day")
let hour = document.querySelector(".hours")
let min = document.querySelector(".minutes")
let sec = document.querySelector(".secs")

    let y = year.innerHTML= new Date().getFullYear()
    let mo = month.innerHTML = new Date().getMonth()+1
    let d = day.innerHTML = new Date().getDay()+1
    let h = hour.innerHTML = new Date().getHours()
    let mi = min.innerHTML = new Date().getMinutes()
    let s = sec.innerHTML = new Date().getSeconds()

    if(mi < 10){
        min.innerHTML = ("0") + new Date().getMinutes()
    }
    if(s < 10){
        sec.innerHTML = ("0") + new Date().getSeconds()
    }

    switch(mo){
       case 1:
        month.innerHTML = "Janvier";
       break;
       case 2:
        month.innerHTML = "Février";
       break;
       case 3:
        month.innerHTML = "Mars";
       break;
       case 4:
        month.innerHTML = "Avril";
       break;
       case 5:
        month.innerHTML = "Mai";
       break;
       case 6:
        month.innerHTML = "Juin";
       break;
       case 7:
        month.innerHTML = "Juillet";
       break;
       case 8:
        month.innerHTML = "Août";
       break;
       case 9:
        month.innerHTML = "Septembre";
       break;
       case 10:
        month.innerHTML = "Octobre";
       break;
       case 11:
        month.innerHTML = "Novembre";
       break;
       case 12:
        month.innerHTML = "Decembre";
       break;

     };
})


