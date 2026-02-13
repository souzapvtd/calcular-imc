const calcular = document.getElementById('calcular');

function calcularNota() {
    const nome = document.getElementById('nome').value;
    const nota = Number(document.getElementById('nota').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && nota !== '') {

        let classificacao = '';

        if (nota >= 60) {
            classificacao = 'Aprovado';
        } else if (nota >= 40) {
            classificacao = 'Recuperação';
        } else { (nota >= 30);
            classificacao = 'Reprovado';
        }
resultado.textContent = `${nome} sua nota é ${nota} e você está ${classificacao}`;
     
    } else {
       resultado.textContent = 'preencha todos os campos'
    }
}

calcular.addEventListener('click', calcularNota);
