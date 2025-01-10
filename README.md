<h1 align="center">
  🍃 API com MongoDB
</h1>

## 💻 Sobre o projeto

API em Node.js e MongoDB desenvolvida para o trabalho da segunda unidade da disciplina de Banco de Dados NoSQL.

---

## ⚙ Funcionalidades

- Criação de um usuário
- Busca de todos os usuários com paginação e projeção
- Busca por um usuário
- Atualização de um usuário

---

## 🚀 Como executar o projeto

Para executar o projeto, siga os seguintes passos:

1. É preciso ter o Node.js instalado na sua máquina.
2. No terminal:

```bash
# Clone este repositório
$ git clone git@github.com:imetropoledigital/trabalho-ii-unidade-bianca-fabiana-e-samuel.git

# Acesse a pasta do projeto no terminal/cmd
$ cd trabalho-ii-unidade-bianca-fabiana-e-samuel

# Instale as dependências
$ npm ci

# Execute a apicação
$ npm start
```
## 🛣️ Rotas

Para testar a API, utilize o software de sua preferência, mas o passo a passo foi seguindo a estrutura do Postman.

1. POST: para criar um novo usuario
```
localhost:3000/users
```
Em Body > raw especifique o tipo como JSON.

2. PUT: para atualizar determinado item da coleção (utilizando o id)
```
localhost:3000/users/67702883a36d6d88681a70df
```

3. GET: para listar todos os itens da coleção (com paginação)
```
localhost:3000/users?page=2&limit=4
```

4. GET: para listar por ID
```
localhost:3000/users/6770283646ed36a690e76e6a
```

5. GET: para listar utilizando o Query
```
localhost:3000/users?query={"name":"Bianca"}
```

6. GET: para listar todos os itens da coleção com projeção
```
localhost:3000/users?fields=name
```

---

## 👥 Autores

- Bianca Mirtes
- Fabiana Pereira
- Samuel Costa
