const sgMail = require('@sendgrid/mail');

//const sendApiKey = "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";

const ActiveAccount = async(user) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: `${user.email}`,
        from: 'wernnevon12@gmail.com',
        subject: 'Autenticação de conta',
        html: 
        `  Olá, ${user.username}!
        <br />
        <br />
       Acesse o Link abaixo para ativar sua conta
        <br />
        <a href="http://localhost:3000/user/activeAccount/${user.id}">Ativar conta</a>
        <p>
          http://localhost:3000/user/activeAccount/${user.id}
        </p>`,
      };
        try {
          await sgMail.send(msg);
          console.log("Mail sent!");
        } catch (error) {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        }
}
module.exports = ActiveAccount;