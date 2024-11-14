let estado = 'introducao';
var color = document.getElementById('background');

function color(){
    var color = document.getElementById('background');

    let color_i = 'roxo'
    if(color_i == 'roxo'){
    color.style.filter = 'grayscale(0%) brightness(1.9)hue-rotate(240deg);';

    }    
}

function PassarDireita() {
    let div = document.getElementsByClassName('modos')[0];
    let h1 = document.getElementById('h1');
    let nivelLink = document.getElementById('nivelLink');
    div.classList.add('animacao');

    setTimeout(() => {
        if (estado === 'introducao') {
            div.style.background = 'linear-gradient(to right, #04a1a6, #068387, #006064)';
            h1.innerText = `Microondas`;
            estado = 'Microondas';
        } else if (estado === 'Microondas') {
            div.style.background = 'linear-gradient(to right,#b55464,#a14958,#4C1C24)'
            h1.innerText = `Ondas Baixas`;
            estado = 'baixa';
        } else if (estado === 'baixa') {
            div.style.background = 'linear-gradient(to right,#e45252,#d12e2e,#990000)';
            h1.innerText = `Infravermelho`;
            estado = 'Infravermelho';
        } else if (estado === 'Infravermelho') {
            div.style.background = 'linear-gradient(to right, #FF0000, #FFA500, #FFFF00, #00FF00, #0000FF, #4B0082, #8A2BE2)';
            h1.innerText = `Luz visivel`;
            estado = 'Luz visivel';
        }else if(estado == 'Luz visivel'){
            div.style.background = 'linear-gradient(to right,#67466d,#642e6d,#60116e)';
            h1.innerText = `ultravioleta`;
            estado = 'ultravioleta';
        } else {
            h1.innerText = `Ondas de radio`;
            div.style.background = 'linear-gradient(to right,#6b0e7c,#6c117c,#3F0549)';
            estado = 'introducao';
        }

        div.classList.remove('animacao');
        div.classList.add('fade-in');

        setTimeout(() => {
            div.classList.remove('fade-in');
        }, 500);
    }, 500);
}

function VoltarEsquerda() {
    let div = document.getElementsByClassName('modos')[0];
    let h1 = document.getElementById('h1');

    div.classList.add('animacaoEsquerda');

    setTimeout(() => {
        if (estado === 'Infravermelho') {
            div.style.background = 'linear-gradient(to right, #B0E0E6, #E6E6FA, #D3D3D3)';
            h1.innerText = `Nivel Médio`;
            estado = 'baixa';
        } else if (estado === 'baixa') {
            div.style.background = 'linear-gradient(to right, #E4E6E9, #EDEEF1, #D8DBE0)';
            h1.innerText = `Nivel Facil`;
            estado = 'facil';
        } else if (estado === 'facil') {
            div.style.background = 'linear-gradient(to right, #C0C0C0, #A9A9A9, #808080)';
            h1.innerText = `Modos de Jogo`;
            estado = 'introducao';
        } else {
            h1.innerText = `Modos de Jogo`;
            div.style.background = 'linear-gradient(to right, #C0C0C0, #A9A9A9, #808080)';
            estado = 'introducao';
        }

        div.classList.remove('animacaoEsquerda');
        div.classList.add('fade-in'); 

        setTimeout(() => {
            div.classList.remove('fade-in');
        }, 500);
    }, 500);
}
function open_dialog(){
    let modos = document.getElementsByClassName('modos')[0];
    let all = document.getElementsByClassName('all')[0];
    let dialog = document.getElementById('abc');
    let flag = 'flex';
    dialog.showModal();
    if(flag == 'flex'){
        modos.style.display = 'none'
        all.style.display = 'none';
        flag = 'none'
    }
    if(estado == 'Microondas'){
        abc.style.backgroundColor = '#006064d3'
    }else if(estado == 'Ondas Baixas'){
        abc.style.backgroundColor = '#4C1C24d3'
    }else if(estado == 'Infravermelho'){
        abc.style.backgroundColor = '#990000d3'
    }else if(estado == 'Luz visivel'){
        abc.style.background =  'linear-gradient(to right, #0000FFd3, #4B0082d3, #8A2BE2d3)'
    }else if(estado == 'introducao'){
        abc.style.background =  ' #dd64b9c7'
    }
}
function close_dialog(){
    let modos = document.getElementsByClassName('modos')[0];
    let all = document.getElementsByClassName('all')[0];
    let dialog = document.getElementById('abc');
    dialog.close();
    modos.style.display = 'flex'
    all.style.display = 'flex';
}