//Troca de imagem ao clicar
let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/bolo-caneca.jpg"){
        myImage.setAttribute("src", "images/html2.jpg");
    }else{
        myImage.setAttribute("src", "images/bolo-caneca.jpg");
    };
};

//Mensagem de boas-vidas personalizada
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Por favor, digite seu nome: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bolo de caneca é muito bom, ${myName}`;   
}

if(!localStorage.getItem("name")) {
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Bolo de caneca é muito bom, ${storedName}.`;
}

myButton.onclick = () => {
    setUserName();
};