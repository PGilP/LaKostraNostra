$(window).on("load", function(){

    //Calcular tamaño image-slider
    var heightHeader = $("header").outerHeight();
    console.log("calc(100vh - "+heightHeader+"px)");
    $(".images-slider").height("calc(100vh - "+heightHeader+"px)");
    //
})

$(document).ready(function(){
    
    //Funcion de cambio de imagen al clickar en las flechas
    $(".images-slider .arrow").click(function(){
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
            $(".images-slider .arrow.next").addClass("disabled");
        }else if(imagen == 1){
            $(".images-slider .arrow.previous").addClass("disabled");
        }else{
            $(".images-slider .arrow").removeClass("disabled");
        }

    });
    //

    // Lightbox

    //Abrir y cargar contenido
    $(".product.card").click(function(){
        $(".lightbox").show();
        $("body").addClass("scrollbarInvisible");

        var urlImgNoPrefix = "imgs/JPG/" + $(this).data("product") + "/";
        
        var quantity = parseInt($(this).data("quantity"));

        for (let index = 1; index <= quantity; index++) {
            
            var urlImgFinal = urlImgNoPrefix + index + ".jpg";

            if(index == 1){
                $(".img-principal").append('<img class="principal-img-lihgtbox" src='+urlImgFinal+'>');
            }    
        
            console.log(urlImgFinal);

            $(".container-imgs-secondary").append('<img class="little-img-lihgtbox" width="20%" src='+urlImgFinal+'>');
            
        }

        $(".little-img-lihgtbox").click(function(){
            var newUrlImgPrincipal = $(this).attr("src");
            $(".container-img-principal .img-principal").empty();
            $(".img-principal").append('<img class="principal-img-lihgtbox" src='+newUrlImgPrincipal+'>');
        });
        
    });

    //Cerrar y vaciar contenido
    $(".lightbox .hide").click(function(){
        $(".lightbox").hide();
        $("body").removeClass("scrollbarInvisible");

        $(".container-imgs-secondary").empty();
        $(".container-img-principal .img-principal").empty();

    });
    //

});
