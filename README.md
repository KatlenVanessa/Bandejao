
---

# University Restaurant Ticketing App

## Descrição

A idea desse projeto baseia-se em aplicativo móvel desenvolvido em React que permite aos estudantes universitários comprar tickets para refeições em um restaurante universitário. O aplicativo fornece uma interface intuitiva para selecionar e comprar diferentes tipos de refeições, como café da manhã, almoço e jantar, além de gerenciar o carrinho de compras e visualizar o perfil do estudante.

## Funcionalidades

- **Seleção de Refeições**: Os usuários podem selecionar a quantidade de tickets para diferentes tipos de refeições.
- **Carrinho de Pedidos**: Os usuários podem adicionar, visualizar e atualizar tickets no carrinho de compras.
- **Autenticação**: Login e logout para garantir que apenas usuários autorizados possam comprar tickets.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **PHP**: Linguagem de script para desenvolvimento do backend.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Axios**: Biblioteca para fazer requisições HTTP no frontend.
- **Context API**: Gerenciamento de estado global no React.

## Capturas de Tela
### Página de Login

<p>
<img src="/screenshots/log1.png" width="150">
<img src="/screenshots/log2.png" width="150">
</p>

### Seleção de Tickets

<p>
<img src="/screenshots/tick1.png" width="150">
<img src="/screenshots/tick2.png" width="150">
</p>

### Carrinho de Pedidos

<p>
<img src="/screenshots/pedido.png" width="150">
</p>

### Perfil

<p>
<img src="/screenshots/perfil1.png" width="150">
<img src="/screenshots/perfil2.png" width="150">
</p>

## Instalação

### Recursos Externos
- VM com o Banco de Dados: https://drive.google.com/file/d/14L7lx0rZ6dF-FaSgdjxWB129HrKMxWTt/view?usp=sharing

### Passos para Instalação

1. Instale as dependências do frontend:

    ```bash
    cd bandejao
    npm install
    ```

2. Inicie o servidor MySQL:

    - Baixe a VM - ihc 123 com o banco de dados - ihc 123
    - Altere o IP no arquivo 'conexao.php' em '\api'

3. Inicie o servidor PHP:

    ```bash
    php -S localhost:8000
    ```

4. Inicie o frontend:

    ```bash
    cd bandejao
    npm run web
    ```

## Uso

1. Abra o navegador para acessar o frontend.
3. Faça login com uma conta do bando de dados

## Contribuição

Se você deseja contribuir com o projeto, não queira

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

