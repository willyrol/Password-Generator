  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  
  const passOne = document.getElementById("one");
  const passTwo = document.getElementById("two");
  const button = document.getElementById("button");
  let passwordLength = 15;
  

function firstPass() {
    let randomPassOne = Math.floor(Math.random() * characters.length);
    return characters[randomPassOne]
}

function secondPass() {
    let randomPassTwo = Math.floor(Math.random() * characters.length);
    return characters[randomPassTwo]
}

function generatePassword() {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    
    for ( let i = 0; i < passwordLength; i++) {
        randomPasswordOne += firstPass()
    }
    for ( let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += secondPass()
    }
    passOne.textContent = randomPasswordOne
    passTwo.textContent = randomPasswordTwo
}
function resetPassword() {
    passOne.textContent = ""
    passTwo.textContent = ""
}
