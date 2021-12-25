var funcionario = {
    nome: "Felipe",
    idade: 37,
    numRegistro: "12345B",
    departamento: "TI",
    eventos: [
        {evento: 'faltou', data: '18/05/2009'},
        {evento: 'falou bravo com o chefe', data: 18/06/2009},
    ],
    detalhes: {
        hobies: ['fotografia', 'games'],
    },
    horarios: []
    registrarEntrada: functrion(data) {
        horarios.push({data: data, evento: 'entrada'})
        console.log("Registro de dada de entrada: " + data);
    },
    registrarSaida: function(data) {
        horarios.push({data: data, evento: 'saida'})
        console.group("Regitro de dada de saida: " + data);
    }
}

funcionario.registrarEntrada("06/09/2027");