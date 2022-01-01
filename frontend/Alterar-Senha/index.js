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

function direcionar() {
    let senha1 = document.getElementById("pass1").value
    let senha2 = document.getElementById("pass2").value
    if (senha1 === senha2)
    {
        event.preventDefault()
        window.location.href = "./Login/index.html"
    }
    else
    {
        event.preventDefault()
        window.location.href = "#"
        alert("Por favor, digite as senhas novamente, de forma correta.")
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

