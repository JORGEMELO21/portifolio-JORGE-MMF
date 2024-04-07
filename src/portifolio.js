/*
objetivo 1:
quando o usuario clicar no botao o usuario deve abrir os projetos

passo 1:
pegar o botao e mostrar mais no JS para poder identificar quando o usuario clicar em cima da tela

passo 2:
identificar o clique no botao

passo 3:
adicionar a classe 'ativo' nos projetos escondidos



*/

const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)")


botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    esconderBotao();
})
function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}

