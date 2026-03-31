const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;


const fundoDia = "bg.png";
const fundoNoite = "bgN.png";
let horas = 0;           
let intervaloFundo = null; 

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
    intervalo = setInterval(() => {
        contador++;

        console.log("tempo:",contador);
            
        if (contador == 30){
            cria.src = estados.puto;
        }

        if(contador == 60){
            cria.src = estados.morto;
        }
    }, 1000);
}


function alimentar() {

   
    if (contador >= 60) {
        console.log("Tá morto, já era kkkkk");
        return;
    }

    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}


function atualizarFundo() {
    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {
        horas++;

        console.log("horas:", horas);

        if (horas >= 12) {
            document.body.style.bg = `url('${fundoNoite}')`;
        } else {
            document.body.style.bgN = `url('${fundoDia}')`;
        }

        if (horas >= 24) horas = 0;

    }, 1000);
}

controlador();
atualizarFundo();
