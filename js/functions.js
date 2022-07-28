$(window).on("load", function(){

    //Calcular tamaño image-slider
    var heightHeader = $("header").outerHeight();
    console.log("calc(100vh - "+heightHeader+"px)");
    $(".images-slider").height("calc(100vh - "+heightHeader+"px)");
    //
})