import assert from "node:assert/strict";

import {
  contarVotos,
  calcularMedia,
  classificarFilme,
  avaliarFilmes,
} from "../src/avaliarFilme.js";

import filmes from "../fixtures/filmes.json" with { type: "json" };

describe("Regras de avaliação de filmes", () => {
  describe("Contagem de votos", () => {
    it("CT01 - Deve contar cada avaliação, mesmo quando as notas se repetem", () => {
      const notas = [4, 4, 4, 4];

      const quantidade = contarVotos(notas);

      assert.equal(quantidade, 4);
    });

    it("CT02 - Deve retornar zero quando não houver votos", () => {
      const quantidade = contarVotos([]);

      assert.equal(quantidade, 0);
    });
  });

  describe("Média das notas", () => {
    it("CT03 - Deve calcular uma média decimal sem arredondar para inteiro", () => {
      const notas = [2, 3, 3, 5];

      const media = calcularMedia(notas);

      assert.equal(media, 3.25);
    });

    it("CT04 - Deve manter a nota como média quando houver apenas um voto", () => {
      const media = calcularMedia([5]);

      assert.equal(media, 5);
    });
  });

  describe("Limites da classificação", () => {
    it("CT05 - Deve classificar como ruim uma média abaixo de 3", () => {
      const avaliacao = classificarFilme(2.9);

      assert.equal(avaliacao, "Filme ruim");
    });

    it("CT06 - Deve classificar como razoável uma média exatamente 3", () => {
      const avaliacao = classificarFilme(3);

      assert.equal(avaliacao, "Filme razoável");
    });

    it("CT07 - Deve classificar como razoável uma média próxima de 4, mas inferior", () => {
      const avaliacao = classificarFilme(3.9);

      assert.equal(avaliacao, "Filme razoável");
    });

    it("CT08 - Deve recomendar um filme com média acima de 4", () => {
      const avaliacao = classificarFilme(4.1);

      assert.equal(avaliacao, "Filme recomendado");
    });

    /*
     * Dúvida no requisito:
     *
     * - Média >= 4: "Filme recomendado".
     * - Média entre 3 e 4: "Filme razoável".
     *
     * Se "entre 3 e 4" incluir o 4, haverá
     * sobreposição das classificações.
     *
     * Pergunta: o limite superior da faixa
     * razoável é exclusivo?
     *
     * Após esclarecimento:
     * definir o resultado esperado, adicionar
     * a asserção e remover .skip.
     */
    it.skip("CT09 - Classificação com média exatamente 4: pendente de esclarecimento do requisito", () => {
      // Entrada prevista: classificarFilme(4).
      // Resultado esperado pendente de esclarecimento.
    });
  });

  describe("Processamento do vetor de filmes", () => {
    it("CT10 - Deve avaliar todos os filmes da fixture e manter a ordem de entrada", () => {
      const resultados = avaliarFilmes(filmes);

      assert.deepEqual(resultados, [
        {
          nome: "Minha mãe é uma peça",
          votos: 5,
          media: 4.4,
          avaliacao: "Filme recomendado",
        },
        {
          nome: "Saneamento Básico",
          votos: 5,
          media: 3.2,
          avaliacao: "Filme razoável",
        },
        {
          nome: "Se eu fosse você",
          votos: 3,
          media: 2,
          avaliacao: "Filme ruim",
        },
      ]);
    });

  });
});
