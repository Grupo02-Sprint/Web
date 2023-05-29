//validações da tela de cadastro do funcionário
function validEmailMaskCadastro() {
    const email = in_email.value.trim()
    const validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/.test(email);

    if (validarEmail) {
        alert("✅ Email com padrões válidos!")
    } else {
        alert("⚠️ Email com padrões inválidos!")
    }
}

function validSenhaMaskCadastro() {
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
        alert("✅ Senha com padrões válidos!")
    } else {
        alert("⚠️ Senha com padrões inválidos!")
    }
}

//--------------------------------------------------------------------------------------
//validações tela de login
function validEmailMaskLogin() {
    const email = email_input.value.trim()
    const validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/.test(email);

    if (validarEmail) {
        alert("✅ Email com padrões válidos!")
    } else {
        alert("⚠️ Email com padrões inválidos!")
    }
}

function validSenhaMaskLogin() {
    const senha = senha_input.value.trim()
    const hasUppercase = /[A-Z]/g.test(senha)
    const hasLowercase = /[a-z]/g.test(senha)
    const hasNumbers = /[0-9]/g.test(senha)
    const hasSpecialChar = /\D/g.test(senha)
    const validSenha = hasUppercase && hasLowercase && hasNumbers && hasSpecialChar

    if (validSenha) {
        alert("✅ Senha com padrões válidos!")
    } else {
        alert("⚠️ Senha com padrões inválidos!")
    }
}

//--------------------------------------------------------------------------------------
//validações tela de cadastro da loja

function maskPhone() {
    let phone = in_telefone.value.replace(/\D+/g, "").trim();

    if (phone.length > 11) {
        return false;
    }

    if (phone.length > 10) {
        phone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (phone.length > 6) {
        phone = phone.replace(/^(\d{2})(\d{4})/, "($1) $2-");
    } else if (phone.length > 1) {
        phone = phone.replace(/^(\d{2})/, "($1) ");
    }

    in_telefone.value = phone;
}

function maskCNPJ() {
    let document = in_cnpj.value.replace(/\D+/g, "").trim();

    if (document.length > 14) {
        return false;
    } else {
        if (document.length > 11) {
            document = document.replace(
                /(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/,
                "$1.$2.$3/$4-$5"
            );
        } else if (document.length > 7) {
            document = document.replace(
                /(\d{2})(\d{3})(\d{3})(\d{0,4})/,
                "$1.$2.$3/$4-"
            );
        } else if (document.length > 5) {
            document = document.replace(/(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3/");
        } else if (document.length > 2) {
            document = document.replace(/(\d{2})(\d{1,3})/, "$1.$2.");
        } else {
            document = document.replace(/(\d{2})/, "$1.");
        }
    }

    in_cnpj.value = document;
}

//--------------------------------------------------------------------------------------
//validações 'eye' dos campos de password
function verSenha(input, icone) {
    if (input.type == "password") {
        input.type = "text";
        icone.classList.replace("ph-eye", "ph-eye-slash");
    } else {
        input.type = "password";
        icone.classList.replace("ph-eye-slash", "ph-eye");
    }
}

function cadastrar() {
    validEmailMask()
    validSenhaMask()
}