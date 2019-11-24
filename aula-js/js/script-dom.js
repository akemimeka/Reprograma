// // Crie um HTML com a seguintes sentenças:
// Título: Venda de apartamentos
// Apartamento de 2 dormitórios, clique [aqui] e veja o preço
// Ao clicar, mostre a seguinte mensagem: Preço do imóvel: R$ 500.000,00
// Apartamento de 3 dormitórios, clique [aqui] e veja o preço
// Ao clicar, mostre a seguinte mensagem: Preço do imóvel: R$ 600.000,00

function mostraPrecoAptoDoisDorm() {
let getAptoDoisDorm = document.getElementById('aptoDoisDorm');

getAptoDoisDorm.addEventListener('click', function() {
  let valorAptoDoisDorm = document.getElementById('valorAptoDoisDorm');
  valorAptoDoisDorm.innerHTML = '<p>Preço do imóvel: R$ 500.000,00</p>'
})
};

function mostraPrecoAptoTresDorm() {
let getAptoTresDorm = document.getElementById('aptoTresDorm');

getAptoTresDorm.addEventListener('click', function() {
  let valorAptoTresDorm = document.getElementById('valorAptoTresDorm');
  valorAptoTresDorm.innerHTML = '<p>Preço do imóvel: R$ 600.000,00</p>'
})
}; 

// mostraPrecoAptoDoisDorm();
// mostraPrecoAptoTresDorm();


// Quando o usuário trocar de opção(change), mostre as seguintes frases no HTML:

// Dança
// Segundas e quartas, 19h
// Ioga
// Todos os dias, 8h
// Natação
// Terças e quintas, 20h
// Boxe
// Sextas, 21h

function mostrarHorarioDasAtividades() {
let getSelecionarAtividade = document.getElementById('selecionarAtividade');

selecionarAtividade.addEventListener('change', function() {
  let getOpcaoAtividade = getSelecionarAtividade.value;
  let getMostrarHorario = document.getElementById('mostrarHorario');
  
  switch(getOpcaoAtividade) {
    case 'danca':
      getMostrarHorario.innerText = 'Segundas e quartas, 19h.';
      break;
    case 'ioga':
      getMostrarHorario.innerText = 'Todos os dias, 8h';
      break;
    case 'natacao':
      getMostrarHorario.innerText = 'Terças e quintas, 20h';
      break;
    case 'boxe':
      getMostrarHorario.innerText = 'Sextas, 21h';
      break;
    case 'default':
      getMostrarHorario.innerText = 'Selecione uma opção para ver o horário.';
  }
})
}

// mostrarHorarioDasAtividades();



// EXERCÍCIO 4 - Receba um número, verifique se ele é positivo, negativo ou zero e mostre o resultado na tela. Se o valor não for numérico OU o usuário não digitar nenhum valor, mostre um alerta na tela solicitando que o usuário digite um número.

function avaliarNumero() {
  let numero = Number(prompt('Digite um número:'));

  let zero = Number(numero === 0);
  let positivo = Number(numero > 0);
  let negativo = Number(numero < 0);
  let naoENumero = numero === NaN | null;

  switch(numero) {
    case zero:
      alert(`O número ${numero} é zero.`);
      break;
    case positivo:
      alert(`O número ${numero} é positivo.`);
      break;
    case negativo:
      alert(`O número ${numero} é negativo.`);
      break;
    case naoENumero:
      alert(`Por favor, digite um número.`);
  }
}

// avaliarNumero()

// EXERCÍCIO 5 - Peça para o usuário digitar 3 números e mostre na tela qual deles é o maior. Primeiro verifique se os valores são números. Senão forem, mostre um alerta avisando que não são números.

// EXERCÍCIO 6 - Crie uma função para verificar se um banco está aberto ou não

// EXERCÍCIO 7 - O horário de atendimento do banco é de segunda a sexta, das 10h até às 16h.
// Utilizar a função Date() para pegar o dia/hora atual