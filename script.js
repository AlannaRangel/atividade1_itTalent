// Função para calcular o IMC
function calcularIMC(peso, altura) {
    
    if (altura > 3) {
        altura = altura / 100;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Classificação do IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Retornando o IMC e a classificação
    return { imc: imc.toFixed(2), classificacao: classificacao };
}

// Função para lidar com a submissão do formulário
function handleFormSubmit(event) {
    event.preventDefault();

    // Obtendo os valores de peso e altura do formulário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Calculando o IMC
    const resultado = calcularIMC(peso, altura);

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `IMC: ${resultado.imc} - Classificação: ${resultado.classificacao}`;
}

// Adicionando o evento ao formulário
document.getElementById('imcForm').addEventListener('submit', handleFormSubmit);

// Testes da função
console.log(calcularIMC(70, 1.75)); // Peso normal
console.log(calcularIMC(50, 1.60)); // Abaixo do peso
console.log(calcularIMC(90, 1.80)); // Sobrepeso
console.log(calcularIMC(120, 1.70)); // Obesidade
