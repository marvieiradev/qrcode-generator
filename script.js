const container = document.querySelector(".container")
const qrInput = document.querySelector(".container .form input")
const generateBtn = document.querySelector(".container .form button")
const qrImg = document.querySelector(".container .qr-code img")

let preValue;
let size = "150x150";
let color = "000000";
let bgcolor = "FFFFFF";

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value.trim();
    if(!qrImg || preValue === qrValue) {
        return
    }
    preValue = qrValue;
    generateBtn.innerText ="Gerando QR Code...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?format=svg&color=${color}&bgcolor=${bgcolor}&size=${size}&data=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        container.style.height = '530px'
        generateBtn.innerText="Gerar QR Code"
    })
})

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value.trim()) {
        preValue = ""
    }
})