const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const ponto = document.querySelectorAll('.ponto')
const numerosIndicadores = document.getElementById('numeros')
const lista = document.getElementById('lista-carrocel')

let ativo = 0;
const total = itens.length
let timer;

function atualizar(direção) {
    document.querySelector('.item.ativo').classList.remove('ativo')
    document.querySelector('.ponto.ativo').classList.remove('ativo')

    if(direção > 0) {
        ativo = ativo + 1

        if(ativo === total) {
            ativo = 0
        }
    }
    else if(direção < 0) {
        ativo = ativo -1

        if(ativo < 0) {
            ativo = total -1
        }
    }
    
    itens[ativo].classList.add('ativo')
    ponto[ativo].classList.add('ativo')

    numerosIndicadores.innerHTML = String(ativo + 1).padStart(2,'0')
}

prevButton.addEventListener('click', function() {
    atualizar(-1)
})
nextButton.addEventListener('click', function() {
    atualizar(1)
})


timer = setInterval(() => {
    atualizar(1)
}, 5000);
