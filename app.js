const textArea = document.querySelector(".texto-digita");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function btencriptar() {
    const textoCriptado = encriptar(textArea.value);
    mensagem.value = textoCriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let listaCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < listaCodigo.length; i++) {
        if(stringEncriptada.includes(listaCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(listaCodigo[i][0], listaCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btdesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let listaCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < listaCodigo.length; i++) {
        if(stringDesencriptada.includes(listaCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(listaCodigo[i][1], listaCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btcopiartexto(){
    const mensagem = document.querySelector(".mensagem");

    if (mensagem.value.trim() === "") {
        alert("Não existe mensagem para ser copiada.");
    } else {
        mensagem.select();
        document.execCommand("copy");
        alert("Texto copiado: " + mensagem.value);
    }
}
