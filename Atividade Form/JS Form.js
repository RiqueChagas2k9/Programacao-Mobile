function verificarCategoria() {
    // 1. Captura o elemento select e a div de mensagem
    const selectContainer = document.getElementById('categoria');
    const mensagemDiv = document.getElementById('mensagem');
    
    // 2. Lê o valor selecionado
    const valorSelecionado = selectContainer.value;

    // Variáveis para guardar o texto e a cor de fundo da resposta
    let textoMensagem = "";
    let corFundo = "";

    // 3. Estrutura condicional (Switch) para tratar as opções
    switch (valorSelecionado) {
        case "eletronicos":
            textoMensagem = "💻 Eletrônicos: Smartphones, notebooks e gadgets com os melhores preços!";
            corFundo = "#e3f2fd"; // Azul claro
            break;
            
        case "roupas":
            textoMensagem = "👕 Roupas: Moda masculina, feminina e infantil para todas as estações.";
            corFundo = "#fce4ec"; // Rosa claro
            break;
            
        case "alimentos":
            textoMensagem = "🍏 Alimentos: Itens frescos, saudáveis e de alta qualidade para sua mesa.";
            corFundo = "#e8f5e9"; // Verde claro
            break;

        // 4. Tratamento de erro caso esteja em branco ou seja inválido
        default:
            alert("⚠️ Por favor, selecione uma opção válida antes de continuar!");
            textoMensagem = "Erro: Nenhuma categoria selecionada.";
            corFundo = "#ffebee"; // Vermelho claro
            break;
    }

    // 5. Exibe o resultado na tela customizando a div de mensagem
    mensagemDiv.innerText = textoMensagem;
    mensagemDiv.style.backgroundColor = corFundo;
    mensagemDiv.style.display = "block"; // Torna a div visível
}