## 📄 Projeto de Contagem de Palavras Duplicadas em Parágrafos / Counting Duplicated Words in Paragraphs

Este projeto em Node.js é uma ferramenta de linha de comando que lê um arquivo de texto e identifica palavras repetidas em cada parágrafo.  
> 🇺🇸 *This Node.js project is a command-line tool that reads a text file and identifies repeated words in each paragraph.*

Ele mostra de forma clara as palavras duplicadas por parágrafo e salva o resultado em um arquivo `.txt`.  
> 🇺🇸 *It clearly shows the duplicated words per paragraph and saves the result in a `.txt` file.*

---

### ✨ Funcionalidades / Features:
- 📥 Lê arquivos de texto (.txt).  
  > *Reads text files (`.txt`).*
- 📊 Conta as palavras repetidas em cada parágrafo.  
  > *Counts repeated words in each paragraph.*
- 📝 Gera um arquivo de saída com as duplicatas encontradas.  
  > *Generates an output file with the duplicated words found.*
- 🖍️ Utiliza cores no terminal para melhor visualização dos logs.  
  > *Uses colored terminal output for better log visualization.*

---

### 🛠 Tecnologias Utilizadas / Technologies Used:
- [Node.js](https://nodejs.org/)
- [Commander](https://www.npmjs.com/package/commander) – CLI
- [Chalk](https://www.npmjs.com/package/chalk) – Cores no terminal / Terminal colors

---

### ▶️ Como usar / How to use:
```bash
node src/cli.js -t caminho/do/texto.txt -d ./resultados
# or / ou
node src/cli.js -t path/to/text.txt -d ./results
