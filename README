
### Documentação da Estrutura de Diretórios - API Livraria

#### controllers/
- **Responsabilidade**: Controlam o fluxo de dados entre `routes`, `services` e `models`. Realizam a lógica de negócios básica e manipulam requisições HTTP.
- **Exemplo**: Métodos como `getBooks`, `createBook`, `updateBook`, `deleteBook`.

#### database/
- **Responsabilidade**: Configuração e conexão com o banco de dados.
- **Exemplo**: Configuração de ORM, ou instâncias de conexão como `Prisma`, `TypeORM` ou `Sequelize`.

#### helpers/
- **Responsabilidade**: Funções auxiliares ou utilitárias que são usadas em diferentes partes do projeto.
- **Exemplo**: Funções de formatação de datas, geração de IDs ou validação de campos.

#### migrations/
- **Responsabilidade**: Scripts para a criação, alteração ou remoção de tabelas no banco de dados.
- **Exemplo**: Arquivos `.ts` que criam a tabela `books` ou adicionam campos como `price`.

#### models/
- **Responsabilidade**: Definem as estruturas de dados (entidades) e sua interação com o banco.
- **Exemplo**: Definições de `Book`, `User`, incluindo campos e relações.

#### repository/
- **Responsabilidade**: Camada responsável por interagir diretamente com o banco de dados. Realiza as operações CRUD.
- **Exemplo**: Métodos como `findAllBooks`, `findBookById`, `saveBook`, `deleteBook`.

#### routes/
- **Responsabilidade**: Define as rotas da API, associando URLs a seus respectivos controladores.
- **Exemplo**: `GET /books`, `POST /books`, `PUT /books/:id`, `DELETE /books/:id`.

#### services/
- **Responsabilidade**: Implementam a lógica de negócios da aplicação. Interagem com o `repository` para manipulação de dados.
- **Exemplo**: Validações de negócios, como verificar se um livro já existe antes de criar.

#### server.ts
- **Responsabilidade**: Ponto de entrada da aplicação. Configura o servidor, rotas e middleware.
- **Exemplo**: Inicialização do `Express`, configuração de `CORS`, e início da escuta na porta.




#### ROTAS:

- URL BASE: 'http://localhost:3000'


### Books:

- ### POST: Criar Livro /v2/livraria/livro
    Body: {
        title,
        subtitle,
        image,
        price,
    }

- ### PUT: Atualizar Livro /v2/livraria/atualizar/livro/:id
    Body: {
        title,
        subtitle,
        image,
        price,
    }
- ### GET: Buscar Todos Livros /v2/livraria/livros
 Body: {
    books: [
        {
            title,
            subtitle,
            image,
            price,
        },
        ...
    ]
 }
- ### GET: Buscar Pelo ID /v2/livraria/livros/:id
    Body: {
    books: [
        {
            title,
            subtitle,
            image,
            price,
        },
    ]
 }

- ###  DELETE: delete by id /v2/livraria/excluir/livro/:id

### User:

- ###  POST: Register /register
    body:
        {
            email,
            password,
            name
        }
- ###  POST: Login /login
    body: {
            email,
            password
        }



Integrantes:

Vinicius Somogyi - 56337

Wesley Victor - 22581

Victor Cordeiro - 65609



COMO RODAR O PROJETO:


entrar na pasta: livrariaApi

Rodar:

NPM install

NPM start




Com isso Back End Estara de Pe, logo apos:

entrar na pasta: ADMIN

no meu caso estou usando vsCode com o plugin 'Live Server'

Rodar o Front utilizando live server


e Pronto a aplicação fullsstack estará de pe


OBS com o projeto rodando crie uma conta em Registrar e faço o login antes de utilizar 