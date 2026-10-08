// Conta quantas pessoas votaram no filme (tamanho do vetor de avaliações)
export function contarVotos(avaliacoes) {
  return avaliacoes.length;
}

// Calcula a média das notas: soma todas as notas e divide pela quantidade de votos
export function calcularMedia(avaliacoes) {
  let soma = 0;

  // Percorre o vetor somando cada nota
  for (let i = 0; i < avaliacoes.length; i++) {
    soma = soma + avaliacoes[i];
  }

  return soma / avaliacoes.length;
}

// Classifica o filme de acordo com a média: >= 4 recomendado | entre 3 e 4 razoável | < 3 ruim
export function classificarFilme(media) {
  if (media >= 4) {
    return "Filme recomendado";
  }
  if (media >= 3) {
    return "Filme razoável";
  }
  return "Filme ruim";
}

// Recebe um filme ({ nome, avaliacoes }) e junta as funções anteriores,
// retornando um objeto com nome, quantidade de votos, média e classificação
export function avaliarFilme(filme) {
  let votos = contarVotos(filme.avaliacoes);
  let media = calcularMedia(filme.avaliacoes);
  let avaliacao = classificarFilme(media);

  return {
    nome: filme.nome,
    votos: votos,
    media: media,
    avaliacao: avaliacao,
  };
}

// Recebe o vetor de filmes e retorna a avaliação de cada um
export function avaliarFilmes(filmes) {
  let resultados = [];

  for (let i = 0; i < filmes.length; i++) {
    resultados.push(avaliarFilme(filmes[i]));
  }

  return resultados;
}
