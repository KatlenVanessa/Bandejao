# Bandejao


## Configuração do bando de dados
  
Baixe a VM: https://drive.google.com/file/d/14L7lx0rZ6dF-FaSgdjxWB129HrKMxWTt/view?usp=sharing

Login
```
ihc
123
```

Execute e verifique o IP da máquina:
```
ip a
```
Altere o IP no arquivo 'conexao.php' dentro da pasta 'api' do repositório

---
## Execução do ambiente

Use dois terminais:

- Backend (precisa do PHP instalado)

Use os comandos abaixo para entrar na pasta do backend e iniciar o servidor do php

Dentro da pasta do repositório:
```
cd api
php -S localhost:8000
```
---
## App

Crie um app com expo

Dentro da pasta do repositório:
```
npx create-expo-app app
```

Copie os arquivos da pasta 'bandejao' do repositorio para a raiz do app criado
```
app.js, \telas ->> \app 
```
Rode o app

Dentro da pasta do repositório:
```
cd app
npm run web
```
