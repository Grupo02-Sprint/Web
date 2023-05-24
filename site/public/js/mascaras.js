function validEmailMask(){
    const email = in_email.value.trim()
    const validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/.test(email);

    if (validarEmail) {
        alert("✅ Email válido!")
    } else {
        alert("⚠️ Email inválido!")
    }
}

function validSenhaMask() {
    const senha = in_senha.value.trim()
    const hasUppercase = /[A-Z]/g.test(senha)
    const hasLowercase = /[a-z]/g.test(senha)
    const hasNumbers = /[0-9]/g.test(senha)
    const hasSpecialChar = /\D/g.test(senha)
    const validSenha = hasUppercase && hasLowercase && hasNumbers && hasSpecialChar

    const confirmacaoSenha = in_confirmacao.value.trim()
    const hasUppercase2 = /[A-Z]/g.test(confirmacaoSenha)
    const hasLowercase2 = /[a-z]/g.test(confirmacaoSenha)
    const hasNumbers2 = /[0-9]/g.test(confirmacaoSenha)
    const hasSpecialChar2 = /\D/g.test(confirmacaoSenha)
    const validconfirmSenha = hasUppercase2 && hasLowercase2 && hasNumbers2 && hasSpecialChar2

    if (validSenha && validconfirmSenha) {
        alert("✅ Senha válida!")
    } else {
        alert("⚠️ Senha inválida!")
    }
}

function toggleVisibility(event) {
    var fieldId = event.target.id;
    var passwordField = document.getElementById(fieldId);
  
    // Lógica para alternar a visibilidade da senha
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
}
  
  // Adicione um ouvinte de eventos para cada campo de senha
  var passwordField1 = document.getElementById('in_senha');
  var passwordField2 = document.getElementById('in_confirmacao');
  var passwordField3 = document.getElementById('senha_input');
  
  passwordField1.addEventListener('click', toggleVisibility);
  passwordField2.addEventListener('click', toggleVisibility);
  passwordField3.addEventListener('click', toggleVisibility);

  function cadastrar() {
    validEmailMask()
    validSenhaMask()
    }