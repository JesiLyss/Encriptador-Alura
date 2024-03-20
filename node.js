document.getElementById("encryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = encryptText(inputText);
    document.getElementById("outputText").value = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = decryptText(inputText);
    document.getElementById("outputText").value = decryptedText;
});

document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("outputText").value = ""; // Limpia el contenido de la salida de texto encriptado
});


function encryptText(text) {
    
    
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        result += String.fromCharCode(charCode + 1);
    }
    return result;
}

function decryptText(text) {
    
    
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        result += String.fromCharCode(charCode - 1);
    }
    return result;
}
