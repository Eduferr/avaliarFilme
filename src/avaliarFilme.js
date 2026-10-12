// Conta a quantidade de votos.
export function contarVotos(avaliacoes) {
  return avaliacoes.length;
}

// Calcula a média das notas.
export function calcularMedia(avaliacoes) {
  let soma = 0;

  for (let i = 0; i < avaliacoes.length; i++) {
    soma = soma + avaliacoes[i];
  }

  return soma / avaliacoes.length;
}

// Classifica o filme conforme a média.
// Média exatamente 4: esclarecer se a faixa
// "entre 3 e 4" inclui o limite superior.
// A implementação atual considera 4 como recomendado.
export function classificarFilme(media) {
  if (media >= 4) {
    return "Filme recomendado";
  }

  if (media >= 3) {
    return "Filme razoável";
  }

  return "Filme ruim";
}

// Avalia um único filme.
export function avaliarFilme(filme) {
  const votos = contarVotos(filme.avaliacoes);
  const media = calcularMedia(filme.avaliacoes);
  const avaliacao = classificarFilme(media);

  return {
    nome: filme.nome,
    votos: votos,
    media: media,
    avaliacao: avaliacao,
  };
}

// Avalia todos os filmes do vetor.
export function avaliarFilmes(filmes) {
  return filmes.map(avaliarFilme);
}
