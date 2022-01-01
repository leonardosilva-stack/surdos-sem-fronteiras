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

axios.get('http://localhost:3000/pessoas')
.then(response => criaListaDinamica(response.data))
.catch(error => console.log(error))

const criaListaDinamica = ( pessoas ) => {
    const ulAlunos = document.getElementById('pessoas');
    pessoas.map(pessoa => {
        const listaAluno = document.createElement('li')
        listaAluno.innerHTML  = `Nome: ${pessoa.nome}`
        ulAlunos.appendChild(listaAluno)
    }) 

    console.log(pessoas.celular)
}