function entrar(){

    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    let mensagem = document.getElementById('mensagem')
 
    if (login === '' || senha === '') {
        mensagem.textContent = '[*] Por favor, preencha todos os campos'
        mensagem.style.color = 'red'
        return
    }

    mensagem.textContent = '';

    if(login === 'admin' && senha === '123'){
        window.location.href = 'usuario.html'
    }else{
        alert('Usuário ou senha inválidos. Tente novamente!')
    }
}