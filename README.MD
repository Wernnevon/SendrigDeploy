# pw2-2021-1-mp01-team-jonaswernnevon
pw2-2021-1-mp01-team-jonaswernnevon created by GitHub Classroom

# 6.02_Mini-projeto1
Implementar a funcionalidade de verificação de contas por e-mail da API REST Express.

## Requisitos

- O usuário cria uma conta na aplicação;
- O usuário não pode fazer login até que seu e-mail seja verificado num prazo de até 24h;
- O usuário recebe um e-mail com um link de verificação que contém um token;
- O usuário clica no link de verificação, disparando a função de verificação do token na aplicação;
- A documentação Swagger é atualizada com o novo endpoint de verificação de token.

OBS: As tecnologias a serem usadas são as mesmas até agora (Express, Sequelize, JWT, SwaggerUI), mas com a adição o SendGrid (pacote `sendgrid` no `npm`) para envio dos e-mails. Outras bibliotecas podem ser adicionadas a depender a necessidade.

OBS-02: Verificar as credeciais de conexão com banco de dados em `app.js`, `contato.js` e `user.js`

