// encriptador.js

// Función para encriptar el texto
function encriptarTexto() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    for (var i = 0; i < textoOriginal.length; i++) {
        var charCode = textoOriginal.charCodeAt(i);

        // Aplicar el cifrado César con un desplazamiento de 3 para encriptar
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            charCode = (charCode >= 65 && charCode <= 90) ? ((charCode - 65 + 3) % 26) + 65 : ((charCode - 97 + 3) % 26) + 97;
        }

        textoEncriptado += String.fromCharCode(charCode);
    }

    document.getElementById("resultado").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    var textoEncriptado = document.getElementById("resultado").value;
    var textoDesencriptado = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        var charCode = textoEncriptado.charCodeAt(i);

        // Aplicar el cifrado César con un desplazamiento de -3 para desencriptar
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            charCode = (charCode >= 65 && charCode <= 90) ? ((charCode - 65 - 3 + 26) % 26) + 65 : ((charCode - 97 - 3 + 26) % 26) + 97;
        }

        textoDesencriptado += String.fromCharCode(charCode);
    }

    document.getElementById("resultado").value = textoDesencriptado;
}

// Función para limpiar el texto
function limpiarTexto() {
    document.getElementById("textoOriginal").value = "";
    document.getElementById("resultado").value = "";
}
