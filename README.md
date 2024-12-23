Sistema de Login e Senha

** Descrição
Este é um sistema simples de login e senha desenvolvido em HTML, CSS e JavaScript com objetivo de verificação de inputs e aparecer notificações de campo vazio ou usuário/senha inválidos. Ele permite o acesso de um usuário através de credenciais predefinidas e redireciona o usuário autenticado para outra página.

** Requisitos
Navegador moderno (Google Chrome, Firefox, Edge, etc.)
Arquivos incluídos no projeto:
  -> Estrutura de pastas:
        css/main.css (Estilo visual)
        js/login.js (Função de login)
        img/bgvideo.mp4 (Vídeo de fundo)
        img/favicon.png (Favicon)
        usuario.html (Página de redirecionamento após login bem-sucedido)

////////////

** Como Usar
1. Download ou Clone do Repositório:
      git clone <URL_DO_REPOSITORIO>

2. Acesse a pasta do projeto:
      cd nome-do-projeto
   
3. Abra o arquivo index.html:
      Clique duas vezes no arquivo ou abra-o em um navegador.
   
4. Faça login com as credenciais predefinidas:
      Login: admin
      Senha: 123
   
5. Redirecionamento:
      Se as credenciais estiverem corretas, o usuário será redirecionado para a página usuario.html.
      Caso contrário, uma mensagem de erro será exibida.

///////////

Estrutura de Arquivos
/
├── index.html
├── usuario.html
├── css/
│   └── main.css
├── js/
│   └── login.js
├── img/
│   ├── bgvideo.mp4
│   └── favicon.png
└── README.md


///////////////



** Personalização
1. Alterar credenciais:
      Abra o arquivo index.html e edite a função entrar().
      Altere as linhas:
      if (login === 'admin' && senha === '123') {
      Substitua os valores 'admin' e '123' pelas credenciais desejadas.
   
2. Mudar o vídeo de fundo:
      Substitua o arquivo bgvideo.mp4 na pasta img/ por outro arquivo com o mesmo nome.


////////////////


Aviso
Este sistema é apenas para fins educacionais e demonstração. Não deve ser utilizado em ambientes de produção sem melhorias adicionais na segurança.

Autor
Desenvolvido por: AndréMks
