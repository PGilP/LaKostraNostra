$(window).on("load", function(){

    //Calcular tamaño image-slider

    var ventana_ancho = $(window).width();
    console.log(ventana_ancho);
    var heightHeader = $("header").outerHeight();
    if(ventana_ancho < 500){
        $(".images-slider").height(ventana_ancho*0.8+"px");
    }else{
        $(".images-slider").height("calc(100vh - "+heightHeader+"px)");
    }
    
    //
})

$(document).ready(function(){

    
    
    //Funcion de cambio de imagen al clickar en las flechas
    $(".images-slider .arrow").click(function(){
        var quantity = parseInt($(".news").data("quantity"));
        var imagen   =  parseInt($(".new").attr("src").substring(19,20));
        var active   = !$(this).hasClass("disabled");
        var url      = "imgs/JPG/Novedades/";
        arrowFeature(quantity, imagen , active, $(this),url,$(".new"), ".images-slider");
    });
    //

    // Lightbox

    //Abrir y cargar contenido

    var claseFlecha    ;
    var urlImgNoPrefix ;
    var quantity       ;

    $(".product.card").click(function(){
        $(".lightbox").show();
        $("body").addClass("scrollbarInvisible");

        claseFlecha    = ".lightbox";
        urlImgNoPrefix = "imgs/JPG/" + $(this).data("product") + "/";
        quantity       = parseInt($(this).data("quantity"));

        if(quantity == 1){
            $(claseFlecha+" .arrow.next").addClass("disabled");
            $(claseFlecha+" .arrow.previous").addClass("disabled");
        }else{
            $(claseFlecha+" .arrow.next").removeClass("disabled");
        }

        for (let index = 1; index <= quantity; index++) {
            
            var urlImgFinal = urlImgNoPrefix + index + ".jpg";

            if(index == 1){
                $(".img-principal").append('<img class="principal-img-lihgtbox" src='+urlImgFinal+'>');
            }    
        
            $(".container-imgs-secondary").append('<img class="little-img-lihgtbox" src='+urlImgFinal+'>');
            
        }

        $(".little-img-lihgtbox").click(function(event){
            event.stopPropagation();

            var newUrlImgPrincipal = $(this).attr("src");
            var numImagen          = parseInt(newUrlImgPrincipal.substr(newUrlImgPrincipal.length -5 ,1));
            $(".container-img-principal .img-principal").empty();
            $(".img-principal").append('<img class="principal-img-lihgtbox" src='+newUrlImgPrincipal+'>');

            if(numImagen == quantity){
                console.log("numImagen==quantity");
                $(claseFlecha+" .arrow.next").addClass("disabled");
                $(claseFlecha+" .arrow.previous").removeClass("disabled");
            }else if(numImagen == 1){

                console.log("numImagen==1");

                $(claseFlecha+" .arrow.previous").addClass("disabled");
                $(claseFlecha+" .arrow.next").removeClass("disabled");
            }else{

                console.log("else");
                $(claseFlecha+" .arrow").removeClass("disabled");
            }

        });


        
    });

    $(".lightbox .arrow").click(function(event){
        event.stopPropagation();

        var srcImagen = $(".principal-img-lihgtbox").attr("src");
        var numImagen = parseInt(srcImagen.substr(srcImagen.length -5 ,1));
        var active    = !$(this).hasClass("disabled");
        
        arrowFeature(quantity, numImagen , active, $(this),urlImgNoPrefix,$(".principal-img-lihgtbox"),claseFlecha);
    });

    $(".lightbox .img-principal").click(function(event){
        event.stopPropagation();
    });

    //Cerrar y vaciar contenido

    $(".lightbox .hide, .lightbox").click(function(event){

        $(".lightbox .arrow.previous").addClass("disabled");
        $(".lightbox  .arrow.next").removeClass("disabled");

        $(".lightbox").hide();
        $("body").removeClass("scrollbarInvisible");

        $(".container-imgs-secondary").empty();
        $(".container-img-principal .img-principal").empty();
    });

    //

    //Funcionamiento flechas
    function arrowFeature(quantity, imagen, active, arrow, url, claseImagen, claseFlecha){

        if(imagen == quantity && active ){
            if(arrow.hasClass("previous")){
                imagen -=1;
                claseImagen.attr("src", url+(imagen)+".jpg");
            }
        }else if(imagen == 1 && active){
            if(arrow.hasClass("next")){
                imagen +=1;
                claseImagen.attr("src", url+(imagen)+".jpg");
            }
        }else if(active){
            if(arrow.hasClass("next")){
                imagen +=1;
                claseImagen.attr("src", url+(imagen)+".jpg");
            }else if(arrow.hasClass("previous")){
                imagen -=1;
                claseImagen.attr("src", url+(imagen)+".jpg");
            }
        }
        
        if(imagen == quantity){
            $(claseFlecha+" .arrow.next").addClass("disabled");
            $(claseFlecha+" .arrow.previous").removeClass("disabled");
        }else if(imagen == 1){
            $(claseFlecha+" .arrow.previous").addClass("disabled");
            $(claseFlecha+" .arrow.next").removeClass("disabled");
        }else{
            $(claseFlecha+" .arrow").removeClass("disabled");
        }
        
    }

});





// if(imagen == quantity && active ){
//     console.log("imagen = quantity");
//     if($(this).hasClass("previous")){
//         imagen -=1;
//         $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
//     }
// }else if(imagen == 1 && active){
//     if($(this).hasClass("next")){
//         imagen +=1;
//         $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
//     }
// }else if(active){
//     console.log("else");
//     if($(this).hasClass("next")){
//         imagen +=1;
//         $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
//     }else if($(this).hasClass("previous")){
//         imagen -=1;
//         $(".new").attr("src", "imgs/JPG/Novedades/"+(imagen)+".jpg");
//     }
// }

// if(imagen == quantity){
//     $(".images-slider .arrow.next").addClass("disabled");
// }else if(imagen == 1){
//     $(".images-slider .arrow.previous").addClass("disabled");
// }else{
//     $(".images-slider .arrow").removeClass("disabled");
// }