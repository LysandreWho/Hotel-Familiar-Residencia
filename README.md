# Hotel-Familiar-Residencia


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
