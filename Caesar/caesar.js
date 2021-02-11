function caesarCypher(str, num) {
    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ' || currentLetter === ',' || currentLetter === '.'|| currentLetter === '!'|| currentLetter === ':'|| currentLetter ==='\'' || currentLetter === '?' || currentLetter === '-') {
            newStr += currentLetter;
            continue; 
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
        }
    return document.getElementById("output").textContent=newStr;
    }


    document.getElementById("shift").addEventListener("change", ()=> {
        var num = document.getElementById("shift").value * 1;
        var str = document.getElementById("input").value;
        caesarCypher(str, num);
   })
   
    document.getElementById("input").addEventListener("change", ()=> {
         var num = document.getElementById("shift").value * 1;
         var str = document.getElementById("input").value;
         caesarCypher(str, num);
    })

