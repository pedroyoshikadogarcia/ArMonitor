const subscribeForm = document.querySelector('.subscribe-form');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert(`Obrigado! O e-mail ${emailInput.value} foi mockado com sucesso para fins de apresentação.`);
            emailInput.value = '';
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

function rolarParaCards() {
    const secaoCards = document.getElementById('conteudo');
    if (secaoCards) {
        secaoCards.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}