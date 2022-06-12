var contador = 0

function adicionar(){
    atualizarTela(++contador)
}


function resetar(){
    contador = 0;
    atualizarTela(contador)
}

function subtrair(){
    if(contador<=0){
        
    }else{
        atualizarTela(--contador)
    }
}

function atualizarTela(auxiliar){
    document.getElementById("contador").innerHTML = auxiliar
}