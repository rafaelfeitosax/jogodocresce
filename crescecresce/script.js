let tamanho = 100;
const crescimento = 5;
const reducao = 4;
const tamanhoMaximo = 500;
const tamanhoMinimo = 50;
let vencido = false;
let podeClicar = true;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && podeClicar && !vencido) {
        podeClicar = false; // Impede segurar o espaço
        tamanho += crescimento;
        if (tamanho >= tamanhoMaximo) {
            document.getElementById("status").textContent = "Você venceu!";
            vencido = true;
        } else {
            atualizarImagem();
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === "Space") {
        podeClicar = true; // Libera para novo clique
    }
});

function reduzir() {
    if (!vencido) {
        tamanho -= reducao;
        if (tamanho <= tamanhoMinimo) {
            document.getElementById("status").textContent = "Você perdeu!";
            vencido = true;
        } else {
            atualizarImagem();
        }
    }
}

function atualizarImagem() {
    document.getElementById("image").style.width = tamanho + "px";
    document.getElementById("image").style.height = tamanho + "px";
    document.getElementById("status").textContent = "Tamanho: " + tamanho + "px";
}

setInterval(reduzir, 200);
