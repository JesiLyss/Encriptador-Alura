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
    document.getElementById("inputText").value = ""; // Limpiar el área de entrada de texto
    document.getElementById("outputText").value = ""; // Limpiar el área de salida de texto
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
