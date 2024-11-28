# Hotel-Familiar-Residencia

Aplicativo de Cadastro de Vagas de Hotel.
Este é um aplicativo de gerenciamento de vagas para um hotel familiar, desenvolvido utilizando React Native com Expo. Ele permite cadastrar e visualizar vagas disponíveis, realizar login, gerenciar contas de usuários e entrar em contato via WhatsApp para vagas abertas.

Funcionalidades

Autenticação:
Login e cadastro de usuários.
Controle de acesso às funcionalidades mediante autenticação.

Gerenciamento de Vagas:
Exibição de até 5 quartos com detalhes:
Ocupação (sim ou não).
Valor da estadia.
Quantidade de camas.
Presença de ventilador ou ar-condicionado.
Descrição do quarto.
Refeições inclusas (sim ou não).
Cadastro de vagas (somente para administradores).
Visualização detalhada de cada vaga com botão de contato via WhatsApp para vagas abertas.

Gerenciamento de Conta:
Edição de dados do usuário.

Logout.
Layout:
Design minimalista para facilitar a usabilidade.

Navegação:
Uso de pilhas de autenticação.
Navegação por abas para acesso às principais telas.
Exibição de componentes específicos quando não houver vagas.

src/
├── assets/                # Imagens e outros recursos estáticos
├── api.ts                 # Configuração do Axios e interação com a API
├── App.tsx                # Arquivo principal do aplicativo
├── components/            # Componentes reutilizáveis
│   ├── BotaoContato.tsx   # Botão de contato para WhatsApp
│   ├── VagaCard.tsx       # Card para exibição de vagas
├── context/               # Contextos globais (e.g., autenticação)
│   └── AuthContext.tsx    
├── navigation/            # Configuração de rotas e navegação
│   └── index.tsx          
├── screens/               # Telas do aplicativo
│   ├── LoginScreen.tsx    
│   ├── CadastroScreen.tsx 
│   ├── HomeScreen.tsx     
│   ├── VagasScreen.tsx    
│   ├── DetalhesVagaScreen.tsx
│   ├── ConfiguracoesScreen.tsx
│   ├── CadastroVagaScreen.tsx
├── styles.ts              # Estilos globais reutilizáveis
├── types.ts               # Tipos e interfaces TypeScript
└── utils/                 # Utilitários diversos
    └── formatCurrency.ts  # Formatação de valores monetários
