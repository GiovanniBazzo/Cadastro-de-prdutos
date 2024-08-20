const form = document.querySelector('#form');

function verificar() {
    if (document.querySelector("#preco").value === '' || document.getElementById("produto").value === '') {
        alert("Preencha os campos vazios")
        return
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const preco = document.querySelector("#preco").value;
    const produto = document.getElementById("produto").value;
    let lista = document.getElementById("resultado");

    lista.innerHTML = lista.innerHTML + ` <li> • ${produto} R$${preco}</li> `
})