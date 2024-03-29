$(document).ready(function () {

    $('#inputPhone').mask('(00) 00000-0000');
    $('#inputTelefoneCliente').mask('(00) 00000-0000');
    $('#telefoneRecuperacao').mask('(00) 00000-0000');

    bsCustomFileInput.init();

    // INICIA A VERIFICACAO
    if (typeof ($("#inputPhone")).val() !== "undefined") {
        let loopcadastro = setInterval(verificaCadastro, 300);
    }

    function verificaCadastro() {

        let inputPhone = $('#inputPhone');
        let inputNome = $('#inputNome');
        let inputEmail = $('#inputEmail');
        let inputSenha = $('#inputSenha');
        let inputConfirmaSenha = $('#inputCSenha');

        let valid = true;

        if (inputPhone.val().length < 15) {
            inputPhone.removeClass('is-valid');
            inputPhone.addClass('is-invalid');
            valid = false;
        } else {
            inputPhone.removeClass('is-invalid');
            inputPhone.addClass('is-valid');
        }

        if (inputNome.val().length < 2) {
            inputNome.removeClass('is-valid');
            inputNome.addClass('is-invalid');
            valid = false;
        } else {
            inputNome.removeClass('is-invalid');
            inputNome.addClass('is-valid');
        }

        if (inputEmail.val().length == 0 || inputEmail.val().indexOf('@') == -1 || inputEmail.val().indexOf('.') == -1) {
            inputEmail.removeClass('is-valid');
            inputEmail.addClass('is-invalid');
            valid = false;
        } else {
            inputEmail.removeClass('is-invalid');
            inputEmail.addClass('is-valid');
        }

        if (inputSenha.val().length < 8) {
            inputSenha.removeClass('is-valid');
            inputSenha.addClass('is-invalid');
            valid = false;
        } else {
            inputSenha.removeClass('is-invalid');
            inputSenha.addClass('is-valid');
        }

        if (inputConfirmaSenha.val() != inputSenha.val() || inputConfirmaSenha.val().length < 8) {
            inputConfirmaSenha.removeClass('is-valid');
            inputConfirmaSenha.addClass('is-invalid');
            valid = false;
        } else {
            inputConfirmaSenha.removeClass('is-invalid');
            inputConfirmaSenha.addClass('is-valid');
        }

        return valid;

    }

    $('#btnCadastrar').click(function (e) {
        let btnCadastrar = $('#btnCadastrar');
        e.preventDefault();

        if (verificaCadastro()) {
            btnCadastrar.removeClass('btn-orange');
            btnCadastrar.addClass('btn-secondary');
            btnCadastrar.attr('disabled', true);
            btnCadastrar.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...');
            $('#formCadastrar').submit();
        }

    })


    // INICIA A VERIFICACAO
    if (typeof ($("#inputSenhaNova")).val() !== "undefined") {
        let loopsenhanova = setInterval(verificaSenhaNova, 300);
    }

    function verificaSenhaNova() {
        let inputSenhaNova = $('#inputSenhaNova');
        let valid = true;

        if (inputSenhaNova.val().length == 0) {
            inputSenhaNova.removeClass('is-valid');
            inputSenhaNova.removeClass('is-invalid');
        } else if (inputSenhaNova.val().length < 8) {
            inputSenhaNova.removeClass('is-valid');
            inputSenhaNova.addClass('is-invalid');
            valid = false;
        } else {
            inputSenhaNova.removeClass('is-invalid');
            inputSenhaNova.addClass('is-valid');
        }

        return valid;

    }

    if (typeof ($("#inputNomeCliente")).val() !== "undefined") {
        let loopnome = setInterval(verificaNomeConfig, 300);
    }

    function verificaNomeConfig() {
        let inputNome = $('#inputNomeCliente');
        let valid = true;

        if (inputNome.val().length > 3) {
            inputNome.addClass('is-valid');
            inputNome.removeClass('is-invalid');
        } else {
            inputNome.addClass('is-invalid');
            inputNome.removeClass('is-valid');
        }

        return valid;
    }

    $('#btnSalvarConfig').click(function (e) {
        let btnSalvarConfig = $('#btnSalvarConfig');
        e.preventDefault();

        if (verificaSenhaNova() && verificaNomeConfig()) {
            btnSalvarConfig.removeClass('btn-orange');
            btnSalvarConfig.addClass('btn-secondary');
            btnSalvarConfig.attr('disabled', true);
            btnSalvarConfig.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...');
            $('#formSalvarConfig').submit();
        }


    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });





});