// Conta quantas pessoas votaram.
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
export function classificarFilme(media) {
  if (media >= 4) {
    return "Filme recomendado";
  }

  if (media >= 3) {
    return "Filme razoável";
  }

  return "Filme ruim";
}

// Reúne os resultados do filme escolhido.
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
