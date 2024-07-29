document.addEventListener('DOMContentLoaded', function () {
    const gerarBtn = document.getElementById('gerar');
    const tabuadaContainer = document.getElementById('tabuada');

    gerarBtn.addEventListener('click', function () {
        const numero = parseInt(document.getElementById('numero').value);
        tabuadaContainer.innerHTML = ''; // Limpa a tabuada anterior

        if (!isNaN(numero) && numero > 0) {
            for (let i = 1; i <= 10; i++) {
                const resultado = numero * i;
                const item = document.createElement('div');
                item.className = 'tabuada-item';
                item.innerHTML = `<h2>${numero} x ${i} = ${resultado}</h2>`;
                tabuadaContainer.appendChild(item);
            }
        } else {
            tabuadaContainer.innerHTML = '<p>Por favor, insira um número válido.</p>';
        }
    });
});
