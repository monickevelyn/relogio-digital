// data

const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

function DataHoje(){
    let data = new Date();
    let returnAno = data.getFullYear();

    let returnMes = data.getMonth()
    let Mes = returnMes +=1

    let returnDia = data.getDate();  

    dia.textContent = returnDia +"/";
    mes.textContent = Mes +"/";
    ano.textContent = returnAno;
}

DataHoje()

// relogio

const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos");

const relogio = setInterval(function Time(){
    let horario = new Date();

    let h = horario.getHours();
    let min = horario.getMinutes();
    let seg = horario.getSeconds();

    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = seg;
})