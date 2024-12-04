
const botaoSalvar = document.getElementById('salvar')
const baseUrl = 'http://localhost:3000';

const postLivro = async function () {

    let url = baseUrl + '/v2/livraria/livro'

    let titulo = document.getElementById('title')
    let descricao = document.getElementById('subtitle')
    let foto = document.getElementById('image')
    let valor = document.getElementById('price')

    let livroJSON = {}

    livroJSON.title = titulo.value
    livroJSON.subtitle = descricao.value
    livroJSON.image = foto.value
    livroJSON.price = valor.value

    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livroJSON)
    })

    if (response.status == 401) {
        alert('Refaça o Login Antes de Usar o App')

        sessionStorage.setItem('isAuthenticate', false)
        sessionStorage.setItem('token', null)

        return;
    }


    if (response.status == 201) {
        alert('Registro inserido com sucesso')
        getLivros()
    } else {
        alert('Não foi possivel inserir o registro, verifique os dados enviados')
    }


}

const putLivro = async function () {

    let id = sessionStorage.getItem('idLivro')

    let url = baseUrl + '/v2/livraria/atualizar/livro/' + id

    let titulo = document.getElementById('title')
    let descricao = document.getElementById('subtitle')
    let foto = document.getElementById('image')
    let valor = document.getElementById('price')

    let livroJSON = {}

    livroJSON.title = titulo.value
    livroJSON.subtitle = descricao.value
    livroJSON.image = foto.value
    livroJSON.price = valor.value

    let response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livroJSON)
    })

    if (response.status == 401) {
        alert('Refaça o Login Antes de Usar o App')

        sessionStorage.setItem('isAuthenticate', false)
        sessionStorage.setItem('token', null)

        return;
    }

    if (response.status == 200) {
        alert('Registro atualizado com sucesso')
        getLivros()
    } else {
        alert('Não foi possivel inserir o registro, verifique os dados enviados')
    }

}

const deleteLivro = async function (idLivro) {
    let url = baseUrl + '/v2/livraria/excluir/livro/' + idLivro

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
    })


    if (response.status == 401) {
        alert('Refaça o Login Antes de Usar o App')

        sessionStorage.setItem('isAuthenticate', false)
        sessionStorage.setItem('token', null)

        return;
    }

    if (response.status == 200) {
        alert('Registro excluído com sucesso!')
        getLivros()
    } else {
        alert('Não foi possível realizar a exclusão do registro.')
    }

}

const getLivros = async function () {

    let url = baseUrl + '/v2/livraria/livros'

    let response = await fetch(url,
        {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        }
    )

    let dados = await response.json()

    if (response.status == 401) {
        alert('Faça Login Antes de Usar o App')

        sessionStorage.setItem('isAuthenticate', false)
        sessionStorage.setItem('token', null)

        return;
    }


    let divListDados = document.getElementById('listDados')

    divListDados.innerText = ''

    dados.books.forEach(function (livro) {
        let divDados = document.createElement('div')
        let divTitle = document.createElement('div')
        let divSubTitle = document.createElement('div')
        let divPrice = document.createElement('div')
        let divOpcoes = document.createElement('div')
        let spanEditar = document.createElement('span')
        let imgEditar = document.createElement('img')
        let spanExcluir = document.createElement('span')
        let imgExcluir = document.createElement('img')

        divDados.setAttribute('id', 'dados')
        divDados.setAttribute('class', 'linha dados')
        imgEditar.setAttribute('src', 'icones/editar.png')
        imgEditar.setAttribute('idLivro', livro.id)
        imgExcluir.setAttribute('src', 'icones/excluir.png')
        imgExcluir.setAttribute('idLivro', livro.id)

        divTitle.innerText = livro.title
        divSubTitle.innerText = livro.subtitle
        divPrice.innerText = livro.price

        divListDados.appendChild(divDados)
        divDados.appendChild(divTitle)
        divDados.appendChild(divSubTitle)
        divDados.appendChild(divPrice)
        divDados.appendChild(divOpcoes)
        divOpcoes.appendChild(spanEditar)
        spanEditar.appendChild(imgEditar)
        divOpcoes.appendChild(spanExcluir)
        spanExcluir.appendChild(imgExcluir)


        imgExcluir.addEventListener('click', function () {
            let resposta = confirm('Deseja realmente excluir esse item?')

            if (resposta) {
                let id = imgExcluir.getAttribute('idLivro')
                deleteLivro(id)
            }
        })

        imgEditar.addEventListener('click', function () {
            let id = imgEditar.getAttribute('idLivro')

            getBuscarLivro(id)
        })
    })



}

const getBuscarLivro = async function (idLivro) {
    let url = baseUrl + '/v2/livraria/livro/' + idLivro

    let response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
    })

    let dados = await response.json()

    if (response.status == 401) {
        alert('Faça Login Antes de Usar o App')

        sessionStorage.setItem('isAuthenticate', false)
        sessionStorage.setItem('token', null)

        return;
    }


    if (response.status == 200) {
        document.getElementById('title').value = dados.books[0].title
        document.getElementById('subtitle').value = dados.books[0].subtitle
        document.getElementById('image').value = dados.books[0].image
        document.getElementById('price').value = dados.books[0].price
        document.getElementById('salvar').innerText = 'Atualizar'

        sessionStorage.setItem('idLivro', idLivro)

    } else {
        alert('Não foi possível localizar o registro.')
    }
}

const swithLogin = () => {
    const inputLogin = document.querySelector('.input_login')

    if (inputLogin.style.visibility === 'visible') {
        inputLogin.style.visibility = 'hidden';
        inputLogin.style.width = '0px';
        inputLogin.style.height = '0px';

    } else {
        inputLogin.style.visibility = 'visible';
        inputLogin.style.width = '500px';
        inputLogin.style.height = '500px';

    }
}


const swithRegister = async () => {
    const inputRegister = document.querySelector('.input_register')

    if (inputRegister.style.visibility === 'visible') {
        inputRegister.style.visibility = 'hidden';
        inputRegister.style.width = '0px';
        inputRegister.style.height = '0px';

    } else {
        inputRegister.style.visibility = 'visible';
        inputRegister.style.width = '500px';
        inputRegister.style.height = '500px';

    }
}


const doLogin = async () => {
    let url = baseUrl + '/login';

    let email = document.getElementById('email_login').value
    let password = document.getElementById('password_login').value


    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })



    if (response.status == 200) {
        const data = await response.json()

        alert('Logado com sucesso!')

        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('isAuthenticate', true)

        getLivros()
    } else {
        alert('Verifique os Dados preenchidos')
    }
}

const doRegister = async () => {
    let url = baseUrl + '/register';

    let email = document.getElementById('email_register').value
    let name = document.getElementById('nome_register').value
    let password = document.getElementById('password_register').value

    console.log({ email, password, name });

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, name })
        });
    
        if (!response.ok) {
            const errorDetails = await response.json();
            console.error('Erro:', errorDetails);
            alert(`Erro: ${response.status}`);
        } else {
            alert('Conta Criada com Sucesso!');
        }
    } catch (error) {
        console.error('Erro inesperado:', error);
    }

    if (response.status == 201) {
        alert('Conta Criada com sucesso!')
    } else {
        alert('Verifique os Dados preenchidos')
    }
}

botaoSalvar.addEventListener('click', function () {

    if (document.getElementById('salvar').innerText == 'Salvar') {
        postLivro()
    } else if (document.getElementById('salvar').innerText == 'Atualizar') {
        putLivro()
    }


    document.getElementById('title').value = ''
    document.getElementById('subtitle').value = ''
    document.getElementById('image').value = ''
    document.getElementById('price').value = ''
    document.getElementById('salvar').innerText = 'Salvar'
})

window.addEventListener('load', function () {
    getLivros()


    document.querySelector('.acao_login').addEventListener('click', swithLogin)

    document.querySelector('.acao_register').addEventListener('click', swithRegister)


    this.document.querySelector('.login-button').addEventListener('click', doLogin);

    this.document.querySelector('.register-button').addEventListener('click', doRegister);

})