// DUBMIT
function submit(){
    document.querySelector('.caixa-box-principal').classList.remove('visivel')
    document.querySelector('.caixa-box-secundaria').classList.add('visivel')
    document.querySelector('.rating span').innerHTML = document.querySelectorAll('.selecionado').length 
}
// BOTOES
const numeros = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5')]
function botaoUm(){
    if( numeros[0].className == 'selecionado'){
        numeros[0].classList.remove('selecionado')
    }
    else {
        numeros[0].classList.add('selecionado')
    }
}
function botaoDois(){
    if(  numeros[1].className == 'selecionado'){
         numeros[1].classList.remove('selecionado')
    }
    else {
         numeros[1].classList.add('selecionado')
    }
}
function botaoTres(){
    if(  numeros[2].className == 'selecionado'){
         numeros[2].classList.remove('selecionado')
    }
    else {
         numeros[2].classList.add('selecionado')
    }
}
function botaoQuatro(){
    if(  numeros[3].className == 'selecionado'){
         numeros[3].classList.remove('selecionado')
    }
    else {
         numeros[3].classList.add('selecionado')
    }
}
function botaoCinco(){
    if(  numeros[4].className == 'selecionado'){
         numeros[4].classList.remove('selecionado')
    }
    else {
         numeros[4].classList.add('selecionado')
    }
}
