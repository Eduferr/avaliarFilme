# 🎬 Avaliação de Filmes

Projeto desenvolvido como solução do **Exercício 5 da mentoria em QA**, utilizando JavaScript e Node.js, com testes automatizados em Mocha e validações com `assert`.

## 📋 Desafio

A partir de um vetor contendo filmes e suas avaliações, apresentar para cada filme:

- Quantidade de pessoas que votaram.
- Média das notas.
- Classificação correspondente à média.

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

| Média | Classificação |
|---|---|
| Maior ou igual a 4 | Filme recomendado |
| Entre 3 e 4 | Filme razoável |
| Menor que 3 | Filme ruim |

### Requisitos de entrega

- Criar um projeto Node.js seguindo a estrutura apresentada na aula.
- Separar o código da aplicação dos arquivos de teste.
- Implementar pelo menos três casos de teste.
- Entregar o projeto em um repositório GitHub atualizado.

## 💡 Proposta de solução

A solução utiliza funções com responsabilidades específicas:

| Função | Responsabilidade |
|---|---|
| `contarVotos` | Contar as avaliações usando `.length`. |
| `calcularMedia` | Somar as notas e dividir pela quantidade de avaliações. |
| `classificarFilme` | Determinar a classificação conforme a média. |
| `avaliarFilme` | Retornar nome, votos, média e classificação de um filme. |
| `avaliarFilmes` | Avaliar todos os filmes do vetor usando `.map()`. |

Os dados ficam em uma fixture JSON. Nos testes, cada filme da fixture é enviado individualmente para `avaliarFilme`, e seu resultado completo é comparado com o esperado.

### Resultados esperados

| Filme | Votos | Média | Classificação |
|---|---:|---:|---|
| Minha mãe é uma peça | 5 | 4,4 | Filme recomendado |
| Saneamento Básico | 5 | 3,2 | Filme razoável |
| Se eu fosse você | 3 | 2 | Filme ruim |

### Exemplo de retorno

```json
{
  "nome": "Minha mãe é uma peça",
  "votos": 5,
  "media": 4.4,
  "avaliacao": "Filme recomendado"
}
```

## 🔎 Esclarecimento do requisito

O enunciado define **média >= 4** para filmes recomendados e utiliza a expressão **“entre 3 e 4”** para filmes razoáveis.

Se a segunda faixa incluir o valor 4, haverá sobreposição entre as classificações.

**Pergunta:** a faixa de “Filme razoável” deve considerar `3 <= média < 4`?

A implementação atual segue estas condições:

| Condição                   | Classificação     |
|----------------------------|-------------------|
| `media >= 4`               | Filme recomendado |
| `media >= 3` e `media < 4` | Filme razoável    |
| `media < 3`                | Filme ruim        |

O **CT04 — Classificação com média exatamente 4: pendente de esclarecimento do requisito** está marcado com `it.skip`.

Esse caso registra uma dúvida sobre o requisito, não um defeito confirmado. Após o esclarecimento, será necessário implementar a validação e remover `.skip`.

## 🧪 Testes automatizados

Cada teste ativo verifica o resultado completo de um filme: nome, quantidade de votos, média e classificação.

| Caso | Cenário                          | Resultado esperado         |
|------|----------------------------------|----------------------------|
| CT01 | Minha mãe é uma peça — média 4,4 | Filme recomendado          |
| CT02 | Saneamento Básico — média 3,2    | Filme razoável             |
| CT03 | Se eu fosse você — média 2       | Filme ruim                 |
| CT04 | Média exatamente 4               | Pendente de esclarecimento |

O `assert.deepEqual` compara o objeto retornado com o resultado esperado.

Os comandos `console.log` exibem os resultados no terminal para facilitar a leitura. A validação automática é realizada pelas asserções.

### Limites da cobertura

Esta versão verifica os três filmes do enunciado individualmente.

Não contempla testes separados das funções auxiliares, processamento de vários filmes na mesma chamada, avaliações vazias ou dados inválidos.

O tratamento de filmes sem avaliações, notas não numéricas e limites permitidos para as notas depende de requisitos adicionais.

## 🛠️ Tecnologias

- **JavaScript:** implementação da solução.
- **Node.js:** ambiente de execução.
- **Mocha:** organização e execução dos testes.
- **`node:assert/strict`:** validação dos resultados.
- **Mochawesome:** geração do relatório.
- **JSON:** armazenamento dos dados de teste.

O projeto utiliza ES Modules, configurado com `"type": "module"` no `package.json`.

## 📁 Estrutura do projeto

| Caminho                     | Conteúdo                               |
|-----------------------------|----------------------------------------|
| `src/avaliarFilme.js`       | Funções da aplicação                   |
| `fixtures/filmes.json`      | Dados dos filmes                       |
| `test/avaliarFilme.test.js` | Testes automatizados                   |
| `package.json`              | Scripts e dependências                 |
| `package-lock.json`         | Registro das versões das dependências  |
| `.gitignore`                | Arquivos e pastas ignorados pelo Git   |
| `README.md`                 | Documentação do projeto                |

## ▶️ Como executar

### Pré-requisitos

- Node.js com suporte a ES Modules e importação JSON com `with { type: "json" }`.
- npm.
- Git.

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

**Resultado esperado: 3 testes aprovados e 1 pendente.**

O resultado efetivo deve ser conferido após a execução.

## 📊 Relatório Mochawesome

Para gerar o relatório, utilize:

```bash
npm run test:report
```

Esse comando requer o seguinte script no `package.json`:

```json
"scripts": {
  "test": "mocha",
  "test:report": "mocha --reporter mochawesome"
}
```

Se o script `test` estiver configurado como `"mocha --reporter mochawesome"`, o comando `npm test` também gerará o relatório.

Após a execução, abra no navegador:

```text
mochawesome-report/mochawesome.html
```

O CT04 aparecerá como pendente, pois está marcado com `it.skip`.

Inclua no `.gitignore`:

```gitignore
node_modules/
mochawesome-report/
```

## 👤 Autor
**Edu Ferreira**
