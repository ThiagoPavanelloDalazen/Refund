# Refund

Aplicação web para **solicitação e gestão de reembolsos**, desenvolvida com React. O sistema possui fluxos distintos para colaboradores e gestores, além de telas de autenticação.

## Funcionalidades

### Colaborador (`employee`)
- Preencher formulário de solicitação de reembolso
- Informar nome, categoria, valor e anexar comprovante
- Enviar solicitação e visualizar tela de confirmação

### Gestor (`manager`)
- Visualizar lista de solicitações no dashboard
- Pesquisar solicitações por nome
- Navegar entre páginas com paginação
- Abrir detalhes de uma solicitação específica

### Autenticação
- Tela de login
- Tela de cadastro
- Logout com redirecionamento para a tela de login

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 19](https://react.dev/) | Interface e componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Vite](https://vite.dev/) | Build e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | Roteamento SPA |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Utilitários de classes CSS |

## Como executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)

### Instalação

```bash
# Clonar o repositório (se aplicável)
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd Refund

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
npm run preview
```

## Rotas

### Autenticação (usuário não logado)
| Rota | Página |
|---|---|
| `/` | Login |
| `/signup` | Cadastro |

### Colaborador
| Rota | Página |
|---|---|
| `/` | Formulário de reembolso |
| `/confirm` | Confirmação de envio |

### Gestor
| Rota | Página |
|---|---|
| `/` | Dashboard de solicitações |
| `/refund/:id` | Detalhes da solicitação |

## Estrutura do projeto

```
src/
├── assets/          # Ícones e imagens SVG
├── components/      # Componentes reutilizáveis (Button, Input, Header, etc.)
├── contexts/        # Contextos React (autenticação)
├── data/            # Dados mockados (solicitações de reembolso)
├── pages/           # Páginas da aplicação
├── routes/          # Definição de rotas por perfil de usuário
└── utils/           # Funções auxiliares (categorias, formatação de moeda)
```

## Perfis de usuário

O acesso às rotas é controlado pelo contexto de autenticação em `src/contexts/AuthContext.tsx`. O perfil ativo é definido pelo campo `role`:

- `employee` — fluxo do colaborador
- `manager` — fluxo do gestor
- `undefined` — fluxo de autenticação (login/cadastro)

Para testar um perfil específico durante o desenvolvimento, altere o valor inicial da sessão em `AuthContext.tsx`:

```ts
const [session, setSession] = useState<Session | undefined>({
  user: {
    role: "manager", // ou "employee"
  },
})
```

Para iniciar deslogado (tela de login), use `undefined` como valor inicial.

## Categorias de despesa

As categorias disponíveis no formulário são:

- Alimentação
- Hospedagem
- Serviços
- Transporte
- Outros

## Dados mockados

As solicitações exibidas no dashboard do gestor estão em `src/data/refunds.ts`. Não há integração com API backend neste momento — os dados são estáticos para fins de desenvolvimento e demonstração.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |

## Próximos passos sugeridos

- Integração com API backend para autenticação e persistência de dados
- Implementar login e cadastro com validação real
- Persistir sessão do usuário (ex.: `localStorage` ou cookies)
- Conectar busca e paginação do dashboard a uma API
- Upload real de comprovantes

## Licença

Projeto privado.
