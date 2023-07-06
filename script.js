const container = document.querySelector(".container")
const qrInput = document.querySelector(".container .form input")
const generateBtn = document.querySelector(".container .form button")
const qrImg = document.querySelector(".container .qr-code img")

const corFundo = document.querySelector(".container .corFundo")
const corLinha = document.querySelector(".container .corLinha")

let preValue;
let size = "150x150";
let bgcolor, color

corFundo.addEventListener("input", () => {
	bgcolor = (corFundo.value).replace('#', '');
});

corLinha.addEventListener("input", () => {
	color = (corLinha.value).replace('#', '');
});

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrImg || preValue === qrValue) {
        return
    }
    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?format=svg&color=${color}&bgcolor=${bgcolor}&size=${size}&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.style.height = '600px'
        generateBtn.innerText = "Gerar QR Code"
    })
})

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        preValue = ""
    }
})

window.onload = () => {
	corFundo.value  = "#FFFFFF";
	corLinha.value  = "#000000";
};