function submit(){
    document.querySelector('.caixa-box-principal').classList.remove('visivel')
    document.querySelector('.caixa-box-secundaria').classList.add('visivel')
}

const documento = document.querySelector('.botoes-numeros li') 
function botaoUm(){
    console.log('eita')
    document.querySelector('.selecionado').classList.remove('selecionado')
    document.getElementById('1').classList.add('selecionado')
}
function botaoDois(){
    console.log('eita')
    document.querySelector('.selecionado').classList.remove('selecionado')
    document.getElementById('2').classList.add('selecionado')
}
function botaoTres(){
    console.log('eita')
    document.querySelector('.selecionado').classList.remove('selecionado')
    document.getElementById('3').classList.add('selecionado')
}
function botaoQuatro(){
    console.log('eita')
    document.querySelector('.selecionado').classList.remove('selecionado')
    document.getElementById('4').classList.add('selecionado')
}
function botaoCinco(){
    console.log('eita')
    document.querySelector('.selecionado').classList.remove('selecionado')
    document.getElementById('5').classList.add('selecionado')
}
