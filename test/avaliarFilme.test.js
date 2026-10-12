import assert from "node:assert/strict";
import { avaliarFilme } from "../src/avaliarFilme.js";
import filmes from "../fixtures/filmes.json" with { type: "json" };

describe("Avaliação de filmes", () => {
  it('CT01 - Deve recomendar "Minha mãe é uma peça"', () => {
    const resultado = avaliarFilme(filmes[0]);

    console.log("CT01 - Resultado:", resultado);

    assert.deepEqual(resultado, {
      nome: "Minha mãe é uma peça",
      votos: 5,
      media: 4.4,
      avaliacao: "Filme recomendado",
    });
  });

  it('CT02 - Deve classificar "Saneamento Básico" como razoável', () => {
    const resultado = avaliarFilme(filmes[1]);

    console.log("CT02 - Resultado:", resultado);

    assert.deepEqual(resultado, {
      nome: "Saneamento Básico",
      votos: 5,
      media: 3.2,
      avaliacao: "Filme razoável",
    });
  });

  it('CT03 - Deve classificar "Se eu fosse você" como ruim', () => {
    const resultado = avaliarFilme(filmes[2]);

    console.log("CT03 - Resultado:", resultado);

    assert.deepEqual(resultado, {
      nome: "Se eu fosse você",
      votos: 3,
      media: 2,
      avaliacao: "Filme ruim",
    });
  });

  // Esclarecer se "entre 3 e 4" inclui o 4,
  // pois a regra de recomendado também inclui esse valor.
  it.skip("CT04 - Classificação com média exatamente 4: pendente de esclarecimento do requisito", () => {
    // Após esclarecimento, implementar a validação
    // e remover .skip.
  });
});
