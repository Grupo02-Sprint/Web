//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var nodemailer = require("nodemailer");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var funcionarioRouter = require("./src/routes/funcionarios");
var maquinaRouter = require("./src/routes/maquinas");
var perfilRouter = require("./src/routes/perfis");
var lojaRouter = require("./src/routes/lojas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/maquinas", maquinaRouter);
app.use("/perfis", perfilRouter);
app.use("/lojas", lojaRouter);

app.post("/recuperar-senha", (req, res) => {
  const { email, senha} = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "maxsolutionssptech@outlook.com",
      pass: "M@xsolutions123",
    },
  });

  const mailOptions = {
    from: "maxsolutionssptech@outlook.com",
    to: email,
    subject: "Seja Bem Vindo a MaxSolutions",
    text: `Olá, você foi cadastrado na MaxSolutions, use esse mesmo email e use essa senha para acessar a nossa plataforma. ${senha}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao enviar o email" });
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).json({ message: "Email enviado com sucesso" });
    }
  });
});


app.post("/recuperar-senha2", (req, res) => {
  const { email, senha} = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "maxsolutionssptech@outlook.com",
      pass: "M@xsolutions123",
    },
  });

  const mailOptions = {
    from: "maxsolutionssptech@outlook.com",
    to: email,
    subject: "Nova Senha",
    text: `Olá, foi gerado uma nova senha para você. ${senha}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao enviar o email" });
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).json({ message: "Email enviado com sucesso" });
    }
  });
});
app.listen(PORTA, function () {
  console.log(
    `Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`
  );
});
