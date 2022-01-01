function renderizaTela (){

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type=== 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
}

    const ulAlunos = document.getElementById('pessoas');
    const listaAluno = document.createElement('p')
    const hello = JSON.parse(localStorage.getItem('pessoas'));
    listaAluno.innerHTML  = hello.nome
    ulAlunos.appendChild(listaAluno)

// function  carregarPessoa(){
//     alert("OLA")
//     console.log("CHAMEI")
//     criaListaDinamica();
// }

// const  criaListaDinamica = () => {
//     const hello = localStorage.getItem('pessoas');
//     console.log(hello)
//     const ulAlunos = document.getElementById('pessoas');
//     const listaAluno = document.createElement('p')
//     listaAluno.innerHTML  = `Nome: ${hello.nome}`
//     ulAlunos.appendChild(listaAluno)
// }

function deslogar() 
{
    event.preventDefault()
    localStorage.removeItem('pessoas')
    window.location.href = "./Login/index.html"
}