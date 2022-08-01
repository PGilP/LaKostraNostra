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
        var active = !$(this).hasClass("disabled");
        console.log(imagen);
 

        if(imagen == maximo && active ){
            console.log("imagen = maximo");
            if($(this).hasClass("previous")){
                imagen -=1;
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
            }
        }else if(imagen == 1 && active){
            if($(this).hasClass("next")){
                imagen +=1;
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
            }
        }else if(active){
            console.log("else");
            if($(this).hasClass("next")){
                imagen +=1;
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
            }else if($(this).hasClass("previous")){
                imagen -=1;
                $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
            }
        }
        

        if(imagen == maximo){
            $(".arrow.next").addClass("disabled");
        }else if(imagen == 1){
            $(".arrow.previous").addClass("disabled");
        }else{
            $(".arrow").removeClass("disabled");
        }

    });
    //

});