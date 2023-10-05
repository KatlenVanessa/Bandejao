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

Servidor PHP:
```
cd api
php -S localhost:8000
```

App: 

```
cd app
npm run web
```
