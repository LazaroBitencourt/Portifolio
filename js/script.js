document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('entrar-em-contato').addEventListener('click', function() {
        const parte1 = "\u0035\u0035\u0033\u0038";
        const parte2 = "\u0039\u0039\u0038\u0032\u0036\u0039\u0032\u0031\u0035";
        const numeroCompleto = parte1 + parte2;
        window.open('https://wa.me/' + numeroCompleto + '?text=Olá%20Lázaro,%20gostaria%20de%20mais%20informações!', '_blank');
    });
});