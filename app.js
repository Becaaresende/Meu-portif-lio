function validarFormularioContato() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    var emailRegex = /\S+@\S+\.\S+/; if
    (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }

    return true;
}

function rolarSuavementeParaAncora() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Obtém o ID do alvo do link
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo
            if (targetElement) {
                // Verifica se o elemento alvo existe
                window.scrollTo({
                    top: targetElement.offsetTop, // Define a posição de rolagem para o topo do elemento alvo
                    behavior: 'smooth' // Adiciona um comportamento suave de rolagem
                });
            }
        });
    });
}
