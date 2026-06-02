// ==========================================
// AGRINHO 2026
// Agro Forte, Futuro Sustentável
// ==========================================

// MODO ESCURO

const botaoTema = document.getElementById("tema-btn");

if(botaoTema){

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("tema","escuro");
        }else{
            localStorage.setItem("tema","claro");
        }

    });

}

// Salvar tema

window.addEventListener("load", () => {

    const temaSalvo = localStorage.getItem("tema");

    if(temaSalvo === "escuro"){
        document.body.classList.add("dark");
    }

});


// ==========================================
// AUMENTAR E DIMINUIR FONTE
// ==========================================

let tamanhoFonte = 100;

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

if(aumentar){

    aumentar.addEventListener("click", () => {

        tamanhoFonte += 10;

        document.body.style.fontSize = tamanhoFonte + "%";

    });

}

if(diminuir){

    diminuir.addEventListener("click", () => {

        tamanhoFonte -= 10;

        if(tamanhoFonte < 80){
            tamanhoFonte = 80;
        }

        document.body.style.fontSize = tamanhoFonte + "%";

    });

}


// ==========================================
// LEITOR DE TEXTO
// ==========================================

const ouvirTexto = document.getElementById("ouvir");

if(ouvirTexto){

    ouvirTexto.addEventListener("click", () => {

        const texto = document.body.innerText;

        const fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;

        speechSynthesis.speak(fala);

    });

}


// ==========================================
// BARRA DE PROGRESSO
// ==========================================

window.addEventListener("scroll", () => {

    const alturaPagina =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progresso =
    (window.scrollY / alturaPagina) * 100;

    const barra =
    document.getElementById("barra-progresso");

    if(barra){
        barra.style.width = progresso + "%";
    }

});


// ==========================================
// QUIZ AGRINHO
// ==========================================

function verificarResposta(){

    const resposta =
    document.querySelector(
    'input[name="quiz"]:checked');

    const resultado =
    document.getElementById("resultadoQuiz");

    if(!resposta){

        resultado.innerHTML =
        "⚠️ Escolha uma alternativa.";

        return;
    }

    if(resposta.value === "correta"){

        resultado.innerHTML =
        "🌱 Parabéns! Você acertou. A sustentabilidade busca produzir alimentos preservando os recursos naturais.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta. A sustentabilidade significa equilibrar produção agrícola e preservação ambiental.";

        resultado.style.color = "red";

    }

}


// ==========================================
// CONTADOR DE VISITAS
// ==========================================

let visitas =
localStorage.getItem("visitas");

if(visitas === null){

    visitas = 1;

}else{

    visitas++;

}

localStorage.setItem("visitas", visitas);

window.addEventListener("load", () => {

    const contador =
    document.getElementById("contador");

    if(contador){

        contador.innerHTML =
        `👨‍🌾 Você é o visitante número ${visitas}`;

    }

});


// ==========================================
// ANIMAÇÃO AO ROLAR
// ==========================================

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});

document.querySelectorAll(".animar").forEach((item) => {

    observador.observe(item);

});


// ==========================================
// RELÓGIO
// ==========================================

function atualizarRelogio(){

    const agora = new Date();

    const hora =
    agora.toLocaleTimeString("pt-BR");

    const relogio =
    document.getElementById("relogio");

    if(relogio){

        relogio.innerHTML =
        "🕒 " + hora;

    }

}

setInterval(atualizarRelogio,1000);


// ==========================================
// FRASES MOTIVACIONAIS
// ==========================================

const frases = [

"🌱 Produzir com responsabilidade garante o futuro das próximas gerações.",

"🚜 O agro sustentável une tecnologia e preservação.",

"🌎 Cuidar do planeta é colher um amanhã melhor.",

"💧 Água preservada é vida para o campo e para a cidade.",

"🌳 Agricultura e meio ambiente podem crescer juntos."

];

function novaFrase(){

    const indice =
    Math.floor(Math.random() * frases.length);

    const elemento =
    document.getElementById("frase");

    if(elemento){

        elemento.innerHTML =
        frases[indice];

    }

}

setInterval(novaFrase,5000);


// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const topoBtn =
document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topoBtn.style.display = "block";

    }else{

        topoBtn.style.display = "none";

    }

});

if(topoBtn){

    topoBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ==========================================
// MENSAGEM DE BOAS-VINDAS
// ==========================================

window.onload = () => {

    setTimeout(() => {

        alert(
            "🌱 Bem-vindo ao Projeto Agrinho 2026!\n\nAgro Forte, Futuro Sustentável: equilíbrio entre produção e meio ambiente."
        );

    },1000);

};
