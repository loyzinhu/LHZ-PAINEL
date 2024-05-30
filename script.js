function consultar(tipo) {
    let url;
    let userInput;
    switch (tipo) {
        case 'ip':
            url = 'http://ipwhois.app/json/';
            userInput = document.getElementById('ipInput').value;
            break;
        case 'cep':
            url = 'https://viacep.com.br/ws/';
            userInput = document.getElementById('cepInput').value.replace(/\D/g, '');
            break;
        case 'ddd':
            url = 'https://brasilapi.com.br/api/ddd/v1/';
            userInput = document.getElementById('dddInput').value.replace(/\D/g, '');
            break;
        default:
            console.log('Tipo de consulta inválido');
            return;
    }

    if (!userInput) {
        alert('Por favor, insira os dados para consulta.');
        return;
    }

    fetch(url + userInput)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('resultado').innerHTML = 'Erro ao consultar. Por favor, tente novamente.';
        });
}
