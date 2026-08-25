const formulario = document.querySelector('#formCep');
const botaoLimpar = document.querySelector('#limpar');

const cep = document.querySelector('#cep');

const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const ibge = document.querySelector('#ibge');

const mensagem = document.querySelector('#mensagem');

// Evento de submit do formulário
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    consultarCep();
});

botaoLimpar.addEventListener('click', function () {
    limparCampos();

    cep.classList.remove('is-invalid');
    mensagem.innerHTML = '';

});

// Consulta o CEP na API ViaCEP
async function consultarCep() {

    const valorCep = cep.value.replace(/\D/g, '');

    if (valorCep.length !== 8) {

        cep.classList.add('is-invalid');
            
        return;
    }

    cep.classList.remove('is-invalid');

    try {
        const resposta = await fetch('https://viacep.com.br/ws/' + valorCep + '/json/');
    
        const dados = await resposta.json();

        if (dados.erro) {
           
            cep.classList.add('is-invalid');

            document.querySelector('#erroCep').textContent = 'CEP não encontrado!!';
            
            return;
        }

        cep.classList.remove('is-invalid');
    
    logradouro.value = dados.logradouro;
    bairro.value = dados.bairro;
    localidade.value = dados.localidade;
    uf.value = dados.uf;
    ibge.value = dados.ibge;

    mensagem.innerHTML = '<div class="alert alert-success">CEP encontrado com sucesso!!</div>';


    } catch (erro) {
        mensagem.innerHTML = '<div class="alert alert-danger">Erro ao consultar o CEP!!</div>';

        console.error(erro);
    }
}

// Limpa os campos
function limparCampos() {
    cep.value = '';
    logradouro.value = '';
    bairro.value = '';
    localidade.value = '';
    uf.value = '';
    ibge.value = '';
};

// Formatação do CEP
cep.addEventListener("keyup", function (){

    let valor = cep.value.replace(/\D/g, "");

    if(valor.length > 5){
        valor = valor.substring(0, 5) + "-" + valor.substring(5, 8);
    }
    cep.value = valor;
});