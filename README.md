# API CRUD-NodeJs

**API CRUD feito em Node, utilizando Array de Objetos.** Api desenvolvidade para fins didaticos.

# Funcionalidades

* **Get Users**
```
> GET http://localhost:3000/users/
- Lista todos os usuarios cadastrados no Array.
```

* **Get User By ID**
```
> GET http://localhost:3000/user/id/{Id User}
- Lista o usuario cadastrados no Array pelo ID.
```

* **Post new User**
```
> POST http://localhost:3000/user/
> Body: 
{
	"name": "User Name",
	"email": "email@email.com.br"
};
- Cadastras um novo usuário no Array.
```

* **Update em um Usuario**
```
> PUT http://localhost:3000/user/{Indice do Objeto no array}
> Body: 
{
	"name": "User Name",
	"email": "email@email.com.br"
};
- Update User.
```

* **Deletar um Usuario**
```
> DELETE http://localhost:3000/user/{Id User}
- Deleta Usuario do Array pelo ID.
```

# A API

* Pré-requisitos
Você deve instalar os seguintes pacotes antes de prosseguir:

```yarn```

# Dependências do Projeto

```
> Nodemon
> Express
```

# Executando o servidor da API

Na raiz deste projeto, rode:
```
> yarn install # vai demorar um pouco
> yarn dev # o servidor irá escutar a porta 3000 por padrão
```





