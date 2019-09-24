$('.testimonial-pics img').click(function () {
    // Selecionando elementos ativos
    $(".testimonial-pics img").removeClass("active");
    $(this).addClass("active");

    // Conteudo do Elemento
    $(".testimonial").removeClass("active");
    $("#" + $(this).attr("alt")).addClass("active");
});