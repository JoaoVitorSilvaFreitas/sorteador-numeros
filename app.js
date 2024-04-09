function sortear(){// Criando a função sortear
    let quantidade = parseInt(document.getElementById('quantidade').value); //recuperando os documentos o valor .value para transformar o campo em string
    let de = parseInt(document.getElementById('de').value);//e também o parseInt para converter a string para um número inteiro.
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {// função para verificar se o valor de "de" é maior que o de "até"
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        limparCampos();
        return;
    }
    if (quantidade > (ate - de + 1)) {// verifica se o número do intervalo se a quantidade é menor que até - de +1 para apresentar o erro de loop infinito
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampos();
        return;
    }

    let sorteados = []; // criando a lista
    let numero;// criando a variavel numero para receber o número aleatório

    for(let i = 0; i < quantidade; i++){ // criando a repetição para preencher a lista e recuperar os numeros. enquanto i for menor que a quantidade digitada, adicionar +1
        numero = obterNumeroAleatorio(de, ate); // variavel que recebe a função que recebe o número aleatorio que vai das variaveis que são o mínimo e máximo.

        while(sorteados.includes(numero)){ 
            numero = obterNumeroAleatorio(de, ate); 
        }
        sorteados.push(numero); // a lista recebe o retorno do preenchimento da lista
    }
    let resultado = document.getElementById('resultado');//resultado recebe o que foi gerado no campo resultado
    alterarStatusBotao();// starta a função reiniciar criada abaixo para alterar o status do botão reinciciar.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
}

function obterNumeroAleatorio(min, max){ // Função para criar o número aleatório pesquisando na internet... google e documentação js
    return Math.floor(Math.random() * (max - min + 1)) + min; // Criando um número randomico para a função.
}

function alterarStatusBotao() {// Função para alterar o numero do botão.
    let botao = document.getElementById('btn-reiniciar');// Recebendo o botão do arquivo html
    if (botao.classList.contains('container__botao-desabilitado')) {// Caso, Botão contenha a string ('container botao desabilitado')
            botao.classList.remove('container__botao-desabilitado');//botao vai remover a desabilitação
            botao.classList.add('container__botao');//botão vai adicionar botão habilitado
    } else {//senao
            botao.classList.remove('container__botao');//botão vai remover botão habilitado
            botao.classList.add('container__botao-desabilitado');// botão vai adicionar botão desabilitado
    }
}

function reiniciar(){//função de limpar os campos
    limparCampos();
    alterarStatusBotao();// alterar o status do botão para começar um novo jogo.
}

function limparCampos(){
    document.getElementById('quantidade').value = '';// limpando os campos
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';// reiniciar o texto inicial do campo de texto
}
