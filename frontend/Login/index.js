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


function loginUsuario(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    
    const pessoa = {
        "email": email,
        "password": senha
    }

    console.log("OLA")
    
    event.preventDefault()
    axios.post('http://localhost:3000/tokens/', pessoa)
    .then((response) => {
        localStorage.setItem('pessoas', JSON.stringify(response.data))
        console.log("OLA 2")
        window.location.href = "./Home/index.html"
    }) 
    .catch(error =>  alert(error))
    
    
}
