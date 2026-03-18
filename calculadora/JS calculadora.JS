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
}