## Ferramentas utilizadas

# Ferramentas e Padrões

* <img src ="https://img.icons8.com/color/35/000000/javascript.png" width="30"/>
* <img src="https://www.cypress.io/_astro/navbar-brand.D87396b0.svg" width="55"/>
* <img src="https://raw.githubusercontent.com/cucumber/.github/refs/heads/main/docs/img/cucumber-open-logo.png" width="130"/>
* **Padrão Page Objects**

## Resumo:  

  
O projeto está dividido em duas partes. A primeira delas consiste em automação com foco em API e a segunda com  foco em automação de elementos visuais. 

---

## Regras gerais:  

A automação do frontend será feita com JavaScript, Cypress e Cucumber. Também será usado padrão Page Objects e versionado com GitHub.  
A automação da API também será implmentada utilizando Cypress, fazendo com que todos os steps sejam executados de forma contínua e com uma única execução.  

---

### Automação API 

Resume-se em utilizar algumas APIs para criar um usuário, autorizá-lo, listar os livros disponíveis no Sistema, reservar duas opções a sua escolha, e ao final, listar os detalhes do usuário criado com os livros reservados.
O Swagger do desafio para consulta  encontra-se em: https://demoqa.com/swagger/.

**Passo a Passo**:

* Criar um usuário (https://demoqa.com/Account/v1/User)

* Gerar um token de acesso (https://demoqa.com/Account/v1/GenerateToken)

* Confirmar se o usuário criado está autorizado (https://demoqa.com/Account/v1/Authorized)

* Listar os livros disponíveis (https://demoqa.com/BookStore/v1/Books)

* Alugar dois livros de livre escolha (https://demoqa.com/BookStore/v1/Books)

* Listar os detalhes do usuário com os livros escolhidos (https://demoqa.com/Account/v1/User/{userID})


### Automação Frontend

#### Parte 1

**Passo a Passo**:

* Acessar o site https://demoqa.com/

* Escolher a opção Forms na página inicial

* Clicar no submenu Practice Form

* Preencher todo o formulário com valores aleatórios

* O Arquivo utilizado para upload, precisa ser um .txt qualquer, e precisa estar na devida pasta do github ao ser publicado o projeto

* Submter o formulário

* Garantir que um popup foi aberto após o submit

* Fechar o popup


#### Parte 2

**Passo a Passo**:

* Acessar o site https://demoqa.com/

* Escolher a opção Alerts, Frame & Windows na página inicial

* Clicar no submenu Browser Windows

* Clicar no botão new Windows

* Certifica-se que uma nova janela foi aberta, e validar a msg “This is a sample page”

* Fechar a nova janela aberta

#### Parte 3

**Passo a Passo**:

* Acessar o site https://demoqa.com/

* Escolher a opção Elements na página inicial

* Clicar no submenu Web Tables

* Criar um novo registro

* Editar o novo registro criado

* Deletar o novo registro criado.

**Adicionais**:

* Criar 12 novos registros de forma dinâmica através do cucumber

* Deletar todos os novos registros criados