const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




function cadastrarUsuario(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    const pessoa = {
        "nome": nome,
        "email": email,
        "password": senha
    }
    event.preventDefault()
    axios.post('http://localhost:3000/pessoas/', pessoa)
    .then(response => console.log(response.data))
    .catch(error =>  alert(error))
    window.location.href = "../Login/index.html"
}