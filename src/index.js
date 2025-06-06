
export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
     const contagem = paragrafos.filter((paragrafo) => paragrafo).map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo)
    })
    return contagem
}



function extraiParagrafos(texto){
   return texto.toLowerCase().split('\n')
}

function limpaPalavras (palavra) {
    return palavra.replace(/[.,\/#!$%^&*;:{}=()~]/g, '')
}

function verificaPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
        const palavraLimpa = limpaPalavras(palavra)
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1}
    });
    return resultado
}



