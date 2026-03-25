let historico = [];

function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let res = 0;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    if (operacao === '+') {
        res = n1 + n2;
    } else if (operacao === '-') {
        res = n1 - n2;
    } else if (operacao === '*') {
        res = n1 * n2;
    } else if (operacao === '/') {
        if (n2 === 0) {
            alert("Erro: Não é possível dividir por zero!");
            return;
        }
        res = n1 / n2;
    }

    document.getElementById('resultado').innerText = res;

    adicionarAoHistorico(n1, operacao, n2, res);
}

function adicionarAoHistorico(n1, op, n2, resultado) {
    const listaUl = document.getElementById('listaHistorico');
    const novaConta = `${n1} ${op} ${n2} = ${resultado}`;

    historico.unshift(novaConta);

    if (historico.length > 10) {
        historico.pop();
    }

    listaUl.innerHTML = "";
    historico.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        listaUl.appendChild(li);
    });
}