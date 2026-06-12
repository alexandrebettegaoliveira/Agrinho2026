function calcularSafra() {
    // Captura os valores inseridos pelo usuário
    const hectares = document.getElementById('hectares').value;
    const cultura = document.getElementById('cultura').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples para evitar campos vazios ou negativos
    if (hectares === "" || hectares <= 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.style.backgroundColor = "#ffcccc";
        resultadoDiv.style.color = "#cc0000";
        resultadoDiv.innerHTML = "Por favor, digite uma quantidade de hectares válida.";
        return;
    }

    let rendimentoMedioSacas = 0;

    // Define a média aproximada de sacas por hectare para cada cultura
    if (cultura === 'soja') {
        rendimentoMedioSacas = 60; // Média estimada de 60 sacas por hectare
    } else if (cultura === 'milho') {
        rendimentoMedioSacas = 90; // Média estimada de 90 sacas por hectare
    }

    // Processamento do cálculo total
    const totalEstimado = hectares * rendimentoMedioSacas;

    // Exibe o resultado estilizado na tela
    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = "#d4edda";
    resultadoDiv.style.color = "#155724";
    resultadoDiv.innerHTML = `Estimativa de produção para sua área de ${hectares}ha: <br><strong>${totalEstimado.toLocaleString('pt-BR')} sacas de ${cultura.toUpperCase()}</strong>.`;
}
