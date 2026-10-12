# 🎬 Avaliação de Filmes

Projeto desenvolvido como solução do **Exercício 5 da mentoria em QA**, utilizando JavaScript e Node.js, com testes automatizados em Mocha e validações com `assert`.

## 📋 Desafio

A partir de um vetor contendo os nomes dos filmes e as notas atribuídas pelos usuários, apresentar para cada filme:

- Quantas pessoas votaram.
- A média das notas.
- A classificação correspondente à média.

Cada nota representa o voto de uma pessoa.

### Entrada fornecida

```json
[
  {
    "nome": "Minha mãe é uma peça",
    "avaliacoes": [5, 4, 4, 4, 5]
  },
  {
    "nome": "Saneamento Básico",
    "avaliacoes": [3, 4, 2, 3, 4]
  },
  {
    "nome": "Se eu fosse você",
    "avaliacoes": [1, 2, 3]
  }
]
```

### Regras do enunciado

| Média              | Classificação     |
|--------------------|-------------------|
| Maior ou igual a 4 | Filme recomendado |
| Entre 3 e 4        | Filme razoável    |
| Menor que 3        | Filme ruim        |

### Requisitos de entrega

- Criar um projeto Node.js seguindo a estrutura apresentada na aula.
- Separar o código da aplicação dos arquivos de teste.
- Implementar pelo menos três casos de teste.
- Entregar o projeto em um repositório GitHub atualizado.

## 💡 Proposta de solução

A solução separa o processamento em funções com responsabilidades específicas:

| Função             | Responsabilidade                                                          |
|--------------------|---------------------------------------------------------------------------|
| `contarVotos`      | Retornar a quantidade de avaliações usando `.length`.                     |
| `calcularMedia`    | Somar as notas e dividir pela quantidade de avaliações.                   |
| `classificarFilme` | Determinar a classificação conforme a média.                              |
| `avaliarFilme`     | Reunir nome, quantidade de votos, média e classificação de um filme.      |
| `avaliarFilmes`    | Percorrer o vetor com `.map()` e retornar o resultado de todos os filmes. |

Os dados dos filmes ficam em uma fixture JSON, separada do código da aplicação e dos testes.

### Resultado esperado para a entrada fornecida

```json
[
  {
    "nome": "Minha mãe é uma peça",
    "votos": 5,
    "media": 4.4,
    "avaliacao": "Filme recomendado"
  },
  {
    "nome": "Saneamento Básico",
    "votos": 5,
    "media": 3.2,
    "avaliacao": "Filme razoável"
  },
  {
    "nome": "Se eu fosse você",
    "votos": 3,
    "media": 2,
    "avaliacao": "Filme ruim"
  }
]
```

## 🔎 Ponto de esclarecimento do requisito

O enunciado apresenta a regra **média >= 4** para filmes recomendados e a expressão **“entre 3 e 4”** para filmes razoáveis.

Se a segunda faixa incluir o valor 4, haverá uma sobreposição: a mesma média poderá atender às duas classificações.

**Pergunta para esclarecimento:** a faixa de “Filme razoável” deve incluir médias maiores ou iguais a 3 e menores que 4?

A implementação atual segue a regra explícita `>= 4`:

| Condição implementada      | Classificação     |
|----------------------------|-------------------|
| `media >= 4`               | Filme recomendado |
| `media >= 3` e `media < 4` | Filme razoável    |
| `media < 3`                | Filme ruim        |

O caso **CT09 — Classificação com média exatamente 4: pendente de esclarecimento do requisito** está marcado com `it.skip`.

Esse registro representa uma dúvida sobre a redação do requisito, não um defeito confirmado na implementação. Após o esclarecimento, será necessário definir a asserção e ativar o teste.

## 🧪 Estratégia de testes

Os testes verificam as funções individualmente e o resultado do processamento do vetor completo.

A análise de valores-limite contempla médias abaixo, exatamente no limite e acima dos pontos de transição entre as classificações.

| Caso | Cenário                                 | Resultado esperado                       |
|------|-----------------------------------------|------------------------------------------|
| CT01 | Contar quatro notas repetidas           | 4 votos                                  |
| CT02 | Contar avaliações em um array vazio     | 0 votos                                  |
| CT03 | Calcular a média de `[2, 3, 3, 5]`      | 3,25                                     |
| CT04 | Calcular a média de uma única nota `[5]`| 5                                        |
| CT05 | Classificar média 2,9                   | Filme ruim                               |
| CT06 | Classificar média exatamente 3          | Filme razoável                           |
| CT07 | Classificar média 3,9                   | Filme razoável                           |
| CT08 | Classificar média 4,1                   | Filme recomendado                        |
| CT09 | Classificar média exatamente 4          | Pendente de esclarecimento               |
| CT10 | Avaliar os três filmes da fixture       | Resultados completos na ordem de entrada |
| CT11 | Verificar os dados após o processamento | Entrada preservada                       |

O `assert.equal` valida valores individuais, enquanto o `assert.deepEqual` compara estruturas completas.

### Limites do escopo

A contagem de um array vazio está coberta. Entretanto, o enunciado não define como calcular a média ou classificar um filme sem avaliações.

Também não foram estabelecidas regras para notas inválidas, valores não numéricos ou limites permitidos para as notas. Esses comportamentos dependem de requisitos adicionais.

## 🛠️ Tecnologias

- **JavaScript:** implementação das funções.
- **Node.js:** ambiente de execução.
- **Mocha:** organização e execução dos testes.
- **`node:assert/strict`:** validação dos resultados.
- **Mochawesome:** geração do relatório de testes.
- **JSON:** armazenamento dos dados da fixture.

O projeto utiliza ES Modules, configurado com `"type": "module"` no `package.json`.

## 📁 Estrutura do projeto

| Caminho | Conteúdo |
|---|---|
| `src/avaliarFilme.js` | Código da aplicação |
| `fixtures/filmes.json` | Dados dos filmes |
| `test/avaliarFilme.test.js` | Casos de teste |
| `package.json` | Configuração, scripts e dependências |
| `package-lock.json` | Registro das versões das dependências |
| `.gitignore` | Arquivos e pastas ignorados pelo Git |
| `README.md` | Documentação do projeto |

## ▶️ Como executar

### Pré-requisitos

- Node.js com suporte a ES Modules e importação JSON com `with { type: "json" }`.
- npm.
- Git, para clonar o repositório.

### 1. Clonar o repositório

```bash
git clone https://github.com/Eduferr/avaliarFilme.git
```

### 2. Acessar a pasta

```bash
cd avaliarFilme
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os testes

```bash
npm test
```

Com a implementação proposta, o resultado esperado é **10 testes aprovados e 1 pendente**. O resultado efetivo deve ser conferido após a execução.

## 📊 Relatório de testes

Para executar os testes com o relatório Mochawesome:

```bash
npm run test:report
```

Após a execução, abra o arquivo:

```text
mochawesome-report/mochawesome.html
```

As pastas `node_modules` e `mochawesome-report` são ignoradas pelo Git. As dependências podem ser reinstaladas e o relatório pode ser gerado novamente pelos comandos documentados.

## 👤 Autor
**Edu Ferreira**

