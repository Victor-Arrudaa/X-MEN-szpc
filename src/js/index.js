// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    removerSelecaoDoPersonagem()

    //passo 2
    personagem.classList.add('selecionado')

    // OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem, o nome, e a descrição do personagem grande

    alterarImagemPersonagemSelecionado(personagem)
    alterarNomePersonagemSelecionado(personagem)
    alterarDescricaoPersonagem(personagem)
  })
})

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem')
  descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem')
  nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande')

  //passo 2 - alterar a imagem do personagem grande
  const idPersonagem = personagem.attributes.id.value
  imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado')
  personagemSelecionado.classList.remove('selecionado')
}
