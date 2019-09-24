$(document).ready(function () {

    let viewTokensDisponiveis = $('#viewTokensDisponiveis');
    ajaxTokensDisponiveis();

    function ajaxTokensDisponiveis() {
        $.ajax({
            url: 'ajax/numTokensDisponiveis.php',
            type: 'POST',
            data: {
            },
            success: function (data) {
                viewTokensDisponiveis.html(data);
            },
            beforeSend: function () {
                viewTokensDisponiveis.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
            }
        });
    }

});