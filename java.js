// Eltolás mértékét adó rejtvény
function checkRiddle() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    if (answer === 'labda' || answer === 'golyó') {
        document.getElementById('caesarCipherSection').style.display = 'block';
        document.getElementById('result').innerHTML = 'Helyes válasz! Az eltolás mértéke: 10.';
    } else {
        document.getElementById('result').innerHTML = 'Rossz válasz. Próbáld újra!';
        document.getElementById('caesarCipherSection').style.display = 'none';
    }
}

// Caesar-kód megfejtése
function caesarShift(str, amount) {
    if (amount < 0) return caesarShift(str, amount + 26);
    
    let output = '';
    
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    
    return output;
}

function checkCipher() {
    const decodedAnswer = document.getElementById('cipherAnswer').value.toLowerCase();
    const decodedMessage = caesarShift('Dro aesmu lbyg', -10).toLowerCase(); // "The quick brown"
    
    if (decodedAnswer === decodedMessage) {
        document.getElementById('result').innerHTML = 'Gratulálok! Helyes a megfejtés!';
    } else {
        document.getElementById('result').innerHTML = 'Rossz válasz. Próbáld újra!';
    }
}
