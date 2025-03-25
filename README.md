# Sistema de Controle Financeiro  - Frontend

Este é o frontend da aplicação "Sistema de Controle Financeiro", desenvolvida em React. O sistema permite aos usuários gerenciar suas receitas e despesas, categorizando gastos e gerando relatórios financeiros.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **React Router**: Para gerenciar a navegação entre páginas.
- **Axios**: Para fazer requisições HTTP ao backend.
- **Bootstrap**: Para estilização e design responsivo.
- **Chart.js**: Para visualização gráfica dos dados financeiros.

## Estrutura do Projeto

```plaintext
frontend/
├── public/               # Arquivos públicos
├── src/                  # Código fonte
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Lógica de chamadas APIs 
│   ├── App.js            # Componente principal
│   └── index.js          # Ponto de entrada
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```
## Instalação
1. Clone este repositório :
   ```bash
     git clone https://github.com/seu-usuario/Controle-Financeiro.git
     cd Controle-Financeiro/frontend
2. Instale as dependências :
   ```bash
      npm install
3. Execute o aplicativo :
    ```bash
     npm start
O aplicativo será iniciado e estará disponível em http://localhost:3000 .

## Requisitos
 Node.js : Você precisa ter o Node.js instalado em sua máquina. 
## Uso: 
1. Navegue pelas diferentes páginas utilizando a navegação na parte superior (Navbar).

2. Na página de Receitas, você pode visualizar, adicionar, editar e remover receitas.

3. Na página de Despesas, você pode gerenciar suas despesas.
A página de Relatório exibirá gráficos com seu desempenho financeiro.
4. API
O frontend se comunica com a API do backend disponíveis em:

     Receitas : http://localhost:8080/api/receitas

    Despesas : http://localhost:8080/api/despesas

5. Certifique-se de que o backend esteja em execução para que as requisições funcionem corretamente.

## Contribuição:
Sinta-se à vontade para contribuir com o projeto! Para contribuir, por favor, envie suas alterações através de pull requests.

## Licença:
Este projeto está licenciado sob a MIT License.

### *Status*: em construção

Desenvolvido por *Aylla Scaglia*

