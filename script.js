const container = document.querySelector(".container")
const qrInput = document.querySelector(".container .form input")
const generateBtn = document.querySelector(".container .form button")
const qrImg = document.querySelector(".container .qr-code img")

const corFundo = document.querySelector(".container .corFundo")
const corLinha = document.querySelector(".container .corLinha")

const downloadPNG = document.querySelector(".download .btn-png")
const downloadSVG = document.querySelector(".download .btn-svg")

let preValue;
let size = "150x150";
let bgcolor, color, imgSVG, imgPNG

corFundo.addEventListener("input", () => {
    bgcolor = (corFundo.value).replace('#', '');
});

corLinha.addEventListener("input", () => {
    color = (corLinha.value).replace('#', '');
});

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrImg || qrValue === "") {
        return
    }
    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?format=svg&color=${color}&bgcolor=${bgcolor}&size=${size}&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.style.height = '600px'
        generateBtn.innerText = "Gerar QR Code"
        imgSVG = qrImg.src
        imgPNG = (qrImg.src).replace('svg', 'png')
    })

})

async function downloadImage(imageSrc, imageName) {
    const response = await fetch(imageSrc);
    const blobImage = await response.blob();

    const href = URL.createObjectURL(blobImage);
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = imageName;

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
}

downloadPNG.addEventListener("click", () => {
    downloadImage(imgPNG, 'meu-qrcode.png',);
})

downloadSVG.addEventListener("click", () => {
    downloadImage(imgSVG, 'meu-qrcode.svg',);
})

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        preValue = ""
    }
})

window.onload = () => {
    corFundo.value = "#FFFFFF";
    corLinha.value = "#000000";
};