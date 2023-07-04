const container = document.querySelector(".container")
const qrInput = container.querySelector(".form input")
const generateBtn = container.querySelector(".form button")
const qrImg = container.querySelector(".qr-code img")

let preValue;

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value.trim();
    if(!qrImg || preValue === qrValue) {
        return
    }
    preValue = qrValue;
    generateBtn.innerText ="Gerando QR Code...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        container.classList.add("active")
        generateBtn.innerText="Gerar QR Code"
    })
})

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value.trim()) {
        container.classList.remove("active")
        preValue = ""
    }
})