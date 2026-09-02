const formulario = document.getElementById("formulario");


// Página do formulário
if (formulario) {

    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const nota3 = document.getElementById("nota3");
    const nota4 = document.getElementById("nota4");
    const media = document.getElementById("media");


    function calcularMedia() {

        const n1 = Number(nota1.value) || 0;
        const n2 = Number(nota2.value) || 0;
        const n3 = Number(nota3.value) || 0;
        const n4 = Number(nota4.value) || 0;

        const resultado = (n1 + n2 + n3 + n4) / 4;

        media.textContent = resultado.toFixed(1);
    }


    nota1.addEventListener("input", calcularMedia);
    nota2.addEventListener("input", calcularMedia);
    nota3.addEventListener("input", calcularMedia);
    nota4.addEventListener("input", calcularMedia);


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        const n1 = Number(nota1.value) || 0;
        const n2 = Number(nota2.value) || 0;
        const n3 = Number(nota3.value) || 0;
        const n4 = Number(nota4.value) || 0;

        const resultado = (n1 + n2 + n3 + n4) / 4;

        localStorage.setItem("nome", nome);
        localStorage.setItem("media", resultado);

        window.location.href = "resultado.html";
    });
}


// Página de resultado
const telaResultado = document.getElementById("telaResultado");

if (telaResultado) {

    const nome = localStorage.getItem("nome");
    const media = Number(localStorage.getItem("media"));

    const nomeResultado = document.getElementById("nome");
    const mediaResultado = document.getElementById("media");
    const situacao = document.getElementById("situacao");


    nomeResultado.textContent = nome;
    mediaResultado.textContent = media.toFixed(1);


    if (media >= 7) {

        situacao.textContent = "APROVADO";
        telaResultado.classList.add("bg-success");

    } else if (media >= 5) {

        situacao.textContent = "EXAME";
        telaResultado.classList.add("bg-warning");

    } else {

        situacao.textContent = "REPROVADO";
        telaResultado.classList.add("bg-danger");
    }
}