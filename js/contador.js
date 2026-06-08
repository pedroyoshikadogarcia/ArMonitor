let tempoInatividade;

function resetarParaInicio() {
    window.location.href = "/";
}

function reiniciarTemporizador() {
    clearTimeout(tempoInatividade);
    tempoInatividade = setTimeout(resetarParaInicio, 5000);
}

window.addEventListener('load', reiniciarTemporizador);
window.addEventListener('mousemove', reiniciarTemporizador);
window.addEventListener('keypress', reiniciarTemporizador);
window.addEventListener('scroll', reiniciarTemporizador);
window.addEventListener('click', reiniciarTemporizador);
window.addEventListener('wheel', reiniciarTemporizador);
window.addEventListener('touchstart', reiniciarTemporizador);
window.addEventListener('touchmove', reiniciarTemporizador);