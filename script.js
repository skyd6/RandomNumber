
const userNumber = document.querySelector("#resultUser")
const botNumber = document.querySelector("#resultBot")
const buttonUser = document.querySelector("#userBtn")
const result = document.querySelector("#finalResult")

const random = () => {
    return Math.floor(Math.random() * 100)
}

let randomNbr =  document.querySelector("#resultUser");
let randomBot = document.querySelector("#resultBot");

const userWrite = (userNumber) => {
    userNumber.innerHTML = randomNbr
}

const botWrite = (botNumber) => {
    botNumber.innerHTML = randomBot
}

buttonUser.addEventListener("click", function () {

    randomNbr.innerHTML = random();
    randomBot.innerHTML = random();
    
    let contentA = randomNbr.innerHTML;
    let contentB = randomBot.innerHTML;


    if (contentA > contentB) {
        result.innerHTML = "GAGNÉ";
        result.style.color = "green";
      } else if (contentA < contentB) {
        result.innerHTML = "PERDU"
        result.style.color = "red"
      } else {
        result.innerHTML = "ÉGALITÉ"
        result.style.color = "orange"
      }

})

let scoreUser = document.querySelector("#userScore")
let scoreBot = document.querySelector("#botScore")



   

