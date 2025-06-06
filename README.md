## 📄 Projeto de Contagem de Palavras Duplicadas em Parágrafos

Este projeto em Node.js é uma ferramenta de linha de comando que lê um arquivo de texto e identifica palavras repetidas em cada parágrafo. Ele mostra de forma clara as palavras duplicadas por parágrafo e salva o resultado em um arquivo `.txt`.

### Funcionalidades:
- 📥 Lê arquivos de texto (.txt).
- 📊 Conta as palavras repetidas em cada parágrafo.
- 📝 Gera um arquivo de saída com as duplicatas encontradas.
- 🖍️ Utiliza cores no terminal para melhor visualização dos logs.

### Tecnologias Utilizadas:
- [Node.js](https://nodejs.org/)
- [Commander](https://www.npmjs.com/package/commander) para criar a CLI.
- [Chalk](https://www.npmjs.com/package/chalk) para destacar mensagens coloridas no terminal.

### Como usar:
```bash
node src/cli.js -t caminho/do/texto.txt -d ./resultados
