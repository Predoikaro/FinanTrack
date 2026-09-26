const transacoes = [];

function adicionarTransacao(descricao, categoria, tipo, valor, data) {

    const transacao = {
        descricao,
        categoria,
        tipo,
        valor,
        data
    };

    transacoes.push(transacao);
}

adicionarTransacao(
    "Salário",
    "Trabalho",
    "receita",
    2500,
    "20/09/2026"
);

adicionarTransacao(
    "Faculdade",
    "Educação",
    "despesa",
    580,
    "20/09/2026"
);


const listaTransacoes = document.getElementById("transactionList");


function renderizarTransacao(transacao) {

    const linha = document.createElement("tr");

    const celulaDescricao = document.createElement("td");
    celulaDescricao.textContent = transacao.descricao;
    linha.appendChild(celulaDescricao);

    const celulaCategoria = document.createElement("td");
    celulaCategoria.textContent = transacao.categoria;
    linha.appendChild(celulaCategoria);

    const celulaData = document.createElement("td");
    celulaData.textContent = transacao.data;
    linha.appendChild(celulaData);

    const celulaValor = document.createElement("td");
    celulaValor.textContent = transacao.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    linha.appendChild(celulaValor);

    const celulaTipo = document.createElement("td");
    celulaTipo.textContent = transacao.tipo;
    linha.appendChild(celulaTipo);

    listaTransacoes.appendChild(linha);
}


function atualizarResumo() {

    console.log("ATUALIZAR RESUMO FOI EXECUTADO");

    let totalReceitas = 0;

    transacoes.forEach((transacao) => {

        if (transacao.tipo === "receita") {
            totalReceitas += transacao.valor;
        }

    });


    let totalDespesas = 0;

    transacoes.forEach((transacao) => {

        if (transacao.tipo === "despesa") {
            totalDespesas += transacao.valor;
        }

    });


    let saldo = totalReceitas - totalDespesas;

    console.log(saldo);


    const saldoElemento = document.getElementById("balance");

    saldoElemento.textContent = saldo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    const receitasElemento = document.getElementById("income");

    receitasElemento.textContent = totalReceitas.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    const despesasElemento = document.getElementById("expense");

    despesasElemento.textContent = totalDespesas.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    let economia = saldo / totalReceitas * 100;

    const porcentagemElemento = document.getElementById("savings");

    porcentagemElemento.textContent = economia.toFixed(1) + "%";
}


// Executa o resumo inicial
atualizarResumo();


// Renderiza as transações iniciais
transacoes.forEach((transacao) => {

    renderizarTransacao(transacao);

});


const botaoAdicionar = document.getElementById("addTransaction");

const formularioTransacao = document.getElementById("transactionForm");


const campoDescricao = document.getElementById("descricao");

const campoCategoria = document.getElementById("categoria");

const campoTipo = document.getElementById("tipo");

const campoValor = document.getElementById("valor");

const campoData = document.getElementById("data");

const botaoSalvar = document.getElementById("saveTransaction");


botaoAdicionar.addEventListener("click", () => {

    formularioTransacao.style.display = "block";

});


botaoSalvar.addEventListener("click", () => {

    console.log(campoDescricao.value);

    console.log(campoCategoria.value);

    console.log(campoTipo.value);

    console.log(campoValor.value);

    console.log(campoData.value);


    const valor = Number(campoValor.value);


    const novaTransacao = {

        descricao: campoDescricao.value,

        categoria: campoCategoria.value,

        tipo: campoTipo.value,

        valor: valor,

        data: campoData.value

    };


    console.log(novaTransacao);

    transacoes.push(novaTransacao);

    atualizarResumo();

    renderizarTransacao(novaTransacao);

    campoDescricao.value = "";
    campoCategoria.value = "";
    campoValor.value = "";
    campoData.value = "";
    campoTipo.value = "receita"

});

