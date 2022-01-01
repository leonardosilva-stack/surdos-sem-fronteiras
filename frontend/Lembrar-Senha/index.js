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

function lembrarSenha(){
    let email = document.getElementById("email").value
    const pessoa = {
        "email": email
    }
    event.preventDefault()
    axios.post('http://localhost:3000/pessoas/', pessoa)
    .then(response => console.log(response.data))
    .catch(error =>  alert(error))
    window.location.href = "./Alterar-Senha/index.html"
}