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

Instale as dependências necessárias:
npm install express body-parser sequelize sqlite3
npm install --save-dev @types/express @types/node

Execute o servidor:
npx ts-node server.ts

