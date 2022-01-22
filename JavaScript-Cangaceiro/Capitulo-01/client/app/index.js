var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

//verifica o conteúdo do array
console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    //cancelando a submissão do formulário
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        //cria uma td sem informações
        var td = document.createElement('td');

        //atribui o valor do campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });
    //nova td  que armazenará o volume da negociação
    var tdVolume = document.createElement('td');

    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //adicionando o td que faltava a tr
    tbody.appendChild(tr);


    //limpa o campo da data
    campos[0].value = '';
    //limpa o campo quantidade
    campos[1].value = '';
    //limpa o campo valor
    campos[2].value = '';
    //foca no campo da data
    campos[0].focus();
});