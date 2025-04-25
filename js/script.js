// Função para exibir as vagas cadastradas
function listarVagas() {
  const listaVagas = document.getElementById("vaga-lista");
  listaVagas.innerHTML = "";

  const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

  if (vagas.length === 0) {
    listaVagas.innerHTML = "<p>Nenhuma vaga cadastrada.</p>";
  } else {
    vagas.forEach((vaga, index) => {
      const vagaElemento = document.createElement("div");
      vagaElemento.classList.add("vaga");
      vagaElemento.innerHTML = `
        <p><strong>Placa:</strong> ${vaga.placa}</p>
        <p><strong>Proprietário:</strong> ${vaga.nome}</p>
        <p><strong>Apartamento:</strong> ${vaga.apartamento} Bloco ${vaga.bloco}</p>
        <p><strong>Modelo:</strong> ${vaga.modelo}</p>
        <p><strong>Cor:</strong> ${vaga.cor}</p>
        <p><strong>Vaga:</strong> ${vaga.vaga}</p>
        <button class="remover-vaga" data-index="${index}">Remover</button>
      `;
      listaVagas.appendChild(vagaElemento);
    });

    // Adicionar evento para o botão de remover
    const buttonsRemover = document.querySelectorAll(".remover-vaga");
    buttonsRemover.forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        removerVaga(index);
      });
    });
  }
}

// Função para remover uma vaga
function removerVaga(index) {
  const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

  const confirmar = confirm("Você tem certeza que deseja remover esta vaga?");
  if (confirmar) {
    vagas.splice(index, 1);
    localStorage.setItem("vagas", JSON.stringify(vagas));
    listarVagas();
    alert("Vaga removida com sucesso!");
  }
}

// Chama a função quando a página de listagem for carregada
if (document.getElementById("vaga-lista")) {
  listarVagas();
}

// Função para adicionar vaga ao localStorage
function adicionarVaga(event) {
  event.preventDefault();

  const placa = document.getElementById("placa").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const apartamento = document.getElementById("apartamento").value.trim();
  const bloco = document.getElementById("bloco").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const cor = document.getElementById("cor").value.trim();
  const vaga = document.getElementById("vaga").value.trim();

  // Validação da placa
  if (placa.length !== 7) {
    alert("A placa deve ter exatamente 7 caracteres.");
    return;
  }

  // Verificação de placa e número de vaga repetidos
  const vagas = JSON.parse(localStorage.getItem("vagas")) || [];
  const placaExistente = vagas.some(vaga => vaga.placa === placa);
  const numeroVagaExistente = vagas.some(v => v.vaga === vaga);

  if (placaExistente) {
    alert("Essa placa já foi cadastrada.");
    return;
  }
  if (numeroVagaExistente) {
    alert("O número dessa vaga já foi cadastrado.");
    return;
  }

  const novaVaga = {
    placa,
    nome,
    apartamento,
    bloco,
    modelo,
    cor,
    vaga
  };

  // Adicionando a nova vaga no localStorage
  vagas.push(novaVaga);
  localStorage.setItem("vagas", JSON.stringify(vagas));

  console.log("Vaga cadastrada:", novaVaga);
  alert("Cadastro realizado com sucesso!");

  // Limpar campos do formulário
  document.getElementById("formCadastro").reset();
}

// Verifica se estamos na página de cadastro ou listagem
if (document.getElementById("formCadastro")) {
  document.getElementById("formCadastro").addEventListener("submit", adicionarVaga);
} else if (document.getElementById("vaga-lista")) {
  listarVagas();
}

function mostrarUltimasVagas() {
  const vagas = JSON.parse(localStorage.getItem("vagas")) || [];
  const listaVagas = document.getElementById("lista-ultimas-vagas");

  listaVagas.innerHTML = ""; // Limpa a lista de vagas

  // Inverte a ordem das vagas
  const ultimasVagas = vagas.reverse().slice(0, 3);

  if (ultimasVagas.length === 0) {
    listaVagas.innerHTML = "<p>Nenhuma vaga cadastrada.</p>";
  } else {
    ultimasVagas.forEach(vaga => {
      const vagaElemento = document.createElement("li");
      vagaElemento.textContent = `Vaga ${vaga.vaga} - Proprietário: ${vaga.nome}`;
      listaVagas.appendChild(vagaElemento);
    });
  }
}

// Chama a função quando a página de index for carregada
if (document.getElementById("lista-ultimas-vagas")) {
  mostrarUltimasVagas();
}

// Chama a função quando a página de index for carregada
if (document.getElementById("lista-ultimas-vagas")) {
  mostrarUltimasVagas();
}