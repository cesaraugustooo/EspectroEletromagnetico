let estado = 'introducao';
var color = document.getElementById('background');

function color(){
    var color = document.getElementById('background');

    let color_i = 'roxo'
    if(color_i == 'roxo'){
    color.style.filter = 'grayscale(0%) brightness(1.9)hue-rotate(240deg);';

    }    
}
// Inicialize a variável estado globalmente para começar no estado inicial

// Inicialize a variável estado globalmente para começar no estado inicial

function PassarDireita() {
    let div = document.getElementsByClassName('modos')[0];
    let h1 = document.getElementById('h1');
    div.classList.add('animacao');

    setTimeout(() => {
        // Alteração do estado com base no valor atual
        switch (estado) {
            case 'introducao':
                div.style.background = 'linear-gradient(to right, #04a1a6, #068387, #006064)';
                h1.innerText = `Microondas`;
                estado = 'Microondas';
                break;
            case 'Microondas':
                div.style.background = 'linear-gradient(to right,#b55464,#a14958,#4C1C24)';
                h1.innerText = `Ondas Baixas`;
                estado = 'baixa';
                break;
            case 'baixa':
                div.style.background = 'linear-gradient(to right,#e45252,#d12e2e,#990000)';
                h1.innerText = `Infravermelho`;
                estado = 'Infravermelho';
                break;
            case 'Infravermelho':
                div.style.background = 'linear-gradient(to right, #FF0000, #FFA500, #FFFF00, #00FF00, #0000FF, #4B0082, #8A2BE2)';
                h1.innerText = `Luz visível`;
                estado = 'Luz visível';
                break;
            case 'Luz visível':
                div.style.background = 'linear-gradient(to right,#67466d,#642e6d,#60116e)';
                h1.innerText = `Ultravioleta`;
                estado = 'ultravioleta';
                break;
            case 'ultravioleta':
                div.style.background = 'linear-gradient(to right, rgb(69, 68, 68), rgb(46, 46, 46), rgb(42, 42, 42))';
                h1.innerText = `Raio-X`;
                estado = 'raiox';
                break;
            case 'raiox':
                div.style.background = 'linear-gradient(to right, #00FF00, #32CD32, #228B22)'; 
                h1.innerText = `Raios Gama`;
                estado = 'raiogama';
                break;
            case 'raiogama':
                div.style.background = 'linear-gradient(to right,#6b0e7c,#6c117c,#3F0549)';
                h1.innerText = `Ondas de rádio`;
                estado = 'introducao';
                break;
            default:
                h1.innerText = `Ondas de rádio`;
                div.style.background = 'linear-gradient(to right,#6b0e7c,#6c117c,#3F0549)';
                estado = 'introducao';
        }

        div.classList.remove('animacao');
        div.classList.add('fade-in');

        // Remove a classe de animação após o término
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
        if (estado === 'introducao') { 
            div.style.background = 'linear-gradient(to right, rgb(69, 68, 68), rgb(46, 46, 46), rgb(42, 42, 42))';
            h1.innerText = `Raio-X`;
            estado = 'raiox';
        }
        else if(estado === 'raiox') {
            div.style.background = 'linear-gradient(to right,#67466d,#642e6d,#60116e)';
            h1.innerText = `Ultravioleta`;
            estado = 'ultravioleta';
        } else if (estado === 'ultravioleta') {
            div.style.background = 'linear-gradient(to right, #FF0000, #FFA500, #FFFF00, #00FF00, #0000FF, #4B0082, #8A2BE2)';
            h1.innerText = `Luz visível`;
            estado = 'Luz visível';
        } else if (estado === 'Luz-visivel') {
            div.style.background = 'linear-gradient(to right,#e45252,#d12e2e,#990000)';
            h1.innerText = `Infravermelho`;
            estado = 'Infravermelho';
        } else if (estado === 'Infravermelho') {
            div.style.background = 'linear-gradient(to right,#b55464,#a14958,#4C1C24)';
            h1.innerText = `Ondas Baixas`;
            estado = 'baixa';
        } else if (estado === 'baixa') {
            div.style.background = 'linear-gradient(to right, #04a1a6, #068387, #006064)';
            h1.innerText = `Microondas`;
            estado = 'Microondas';
        } else if (estado === 'Microondas') {
            div.style.background = 'linear-gradient(to right,#6b0e7c,#6c117c,#3F0549)';
            h1.innerText = `Ondas de rádio`;
            estado = 'introducao';
        } else {
            h1.innerText = `Ondas de rádio`;
            div.style.background = 'linear-gradient(to right,#6b0e7c,#6c117c,#3F0549)';
            estado = 'introducao';
        }

        div.classList.remove('animacaoEsquerda');
        div.classList.add('fade-in');

        setTimeout(() => {
            div.classList.remove('fade-in');
        }, 500);
    }, 500);
}


function open_dialog(estado = 'introducao') {
    const modos = document.getElementsByClassName('modos')[0];
    const all = document.getElementsByClassName('all')[0];
    
    modos.style.display = 'none';
    all.style.display = 'none';
    
    const dialog = document.getElementById(estado); 
    
    if (!dialog) {
        console.error(`Dialog com o ID "${estado}" não encontrado.`);
        return;
    }

    if (estado === 'Microondas') {
        dialog.style.backgroundColor = '#006064d3';
    } else if (estado === 'Ondas Baixas') {
        dialog.style.backgroundColor = '#4C1C24d3';
    } else if (estado === 'Infravermelho') {
        dialog.style.backgroundColor = '#990000d3';
    } else if (estado === 'Luz-visivel') {
        dialog.style.background = 'linear-gradient(to right, #0000FFd3, #4B0082d3, #8A2BE2d3)';
    } else if (estado === 'introducao') {
        dialog.style.backgroundColor = '#dd64b9c7';
    } else if(estado === 'ultravioleta'){
        dialog.style.background = 'linear-gradient(to right,#67466d,#642e6d,#60116e)'
    }

    dialog.showModal();
}

function close_dialog() {
    const modos = document.getElementsByClassName('modos')[0];
    const all = document.getElementsByClassName('all')[0];
    const dialog = document.getElementById('abc');

    dialog.close();

    modos.style.display = 'flex';
    all.style.display = 'flex';
}
function close_dialog() {
    const modos = document.getElementsByClassName('modos')[0];
    const all = document.getElementsByClassName('all')[0];

    const dialog = document.querySelector('dialog[open]');
    if (dialog) {
        dialog.close();
    }

    modos.style.display = 'flex';
    all.style.display = 'flex';
}
