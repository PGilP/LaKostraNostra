$(window).on("load", function(){

    //Calcular tamaño image-slider
    var heightHeader = $("header").outerHeight();
    console.log("calc(100vh - "+heightHeader+"px)");
    $(".images-slider").height("calc(100vh - "+heightHeader+"px)");
    //
})

$(document).ready(function(){

    //Funcion de cambio de imagen al clickar en las flechas
    $(".arrow").click(function(){
        var maximo = 3;
        var imagen =  parseInt($(".new").attr("src").substring(19,20));

        console.log(imagen);
        
        if(imagen == maximo ){
            console.log("imagen = maximo");
            if($(this).hasClass("previous")){
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen-1)+".jpg");
            }
        }else if(imagen == 1){
            console.log("imagen = 1");
            if($(this).hasClass("next")){
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen+1)+".jpg");
            }
        }else{
            console.log("else");
            if($(this).hasClass("next")){
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen+1)+".jpg");
            }else if($(this).hasClass("previous")){
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen-1)+".jpg");
            }
        }
    });
    //

});