function validarEmail() {
    const email = in_email.value.trim()
    const validEmail = /^(\w{2,})([._]?\w+)*@(\w{3,})([._]\w{2,})?([.-])[\w]{2,}$/.test(email)

    const email2 = email_input.value.trim()
    const validEmail2 = /^(\w{2,})([._]?\w+)*@(\w{3,})([._]\w{2,})?([.-])[\w]{2,}$/.test(email2)

    if (validEmail && validEmail2) {
        alert("✅ Email válido")
    } else {
        alert("⚠️ Email inválido")
    }
}

function validarSenha() {
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
        alert("✅ Senha válida")
    } else {
        alert("⚠️ Senha inválida")
    }
}

let status = false

function toggleVisibilidadeSenha() {
    const input = document.getElementById("in_senha")
    document.querySelector(".ph-eye").classList.toggle("ph-eye-slash")

    if (status) {
        input.setAttribute('type', 'password')
        status = false
    } else {
        input.setAttribute('type', 'text')
        status = true
    }
}

function toggleVisibilidadeSenha2() {
    const input = document.getElementById("in_confirmacao")
    document.querySelector(".ph-eye").classList.toggle("ph-eye-slash")

    if (status) {
        input.setAttribute('type', 'password')
        status = false
    } else {
        input.setAttribute('type', 'text')
        status = true
    }
}

function toggleVisibilidadeSenha3() {
    const input = document.getElementById("senha_input")
    document.querySelector(".ph-eye").classList.toggle("ph-eye-slash")

    if (status) {
        input.setAttribute('type', 'password')
        status = false
    } else {
        input.setAttribute('type', 'text')
        status = true
    }
}

function cadastrar() {
    validarEmail()
    validarSenha()
}