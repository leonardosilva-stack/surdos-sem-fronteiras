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


// axios.get('http://localhost:3000/pessoas/')
// .then(response => criaListaDinamica(response.data))
// .catch(error => console.log(error))

// const criaListaDinamica = ( pessoas ) => {
//     const hello = localStorage.setItem('pessoas', JSON.stringify(pessoas));
//     console.log(hello)
//     const ulAlunos = document.getElementById('pessoas');
//      pessoas.map(pessoa => {
//         const listaAluno = document.createElement('li')
//         listaAluno.innerHTML  = `Nome: ${hello.nome}`
//         ulAlunos.appendChild(listaAluno)
//      }) 
// }

function verificarLogado(){
    let notification = document.getElementById('notification')

    function alert(message, type) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    notification.append(wrapper)
    }

    alert("LOGADO COM SUCESSO","success")

    $("#notification").fadeTo(2000, 500).slideUp(500, function(){
        $("#notification").slideUp(500);
    });

    const logado = JSON.parse(localStorage.getItem('pessoas'))

    if(logado){
        axios.get(`http://localhost:3000/pessoas/${logado.id}`,{ headers: {"Authorization" : `Bearer ${logado.token}`} })
        .then ((response)  =>{
            window.location.replace("./Home/index.html")
        })
        .catch((error) =>{
            console.log(error)
            if(error.request.status === 401){
                alert("POR FAVOR ENTRE COM UM NOVO USUARIO")
                localStorage.removeItem('pessoas');
    
            }else{
                Alert("Error não tratado")
                
            }
        })
    }
}

