$(window).on("load", function(){

    //Calcular tamaño image-slider
    var ventana_ancho = $(window).width();
    console.log(ventana_ancho);
    var heightHeader = $("header").outerHeight();
    if(ventana_ancho < 700){
        $(".images-slider").height(ventana_ancho*0.8+"px");
    }else{
        $(".images-slider").height("calc(100vh - "+heightHeader+"px)");
    }
   //

   //Calcular tamaño formulario
    var heightFooter = $("footer").outerHeight();
    // if(ventana_ancho > 700){
        $(".main-contact").height("calc(100vh - "+(heightFooter+heightHeader)+"px");
    // }

})

$(document).ready(function(){
    //Mostrar imagen logo
    setTimeout(function(){
        hideLogo();
    }, 3000);

    // Lightbox


    var claseFlecha    ;
    var urlImgNoPrefix ;
    var quantity       ;

    //Funcion de cambio de imagen al clickar en las flechas
    $(".images-slider .arrow").click(function(){
        var imagen   =  parseInt($(".new").attr("src").substring(19,20));
        var active   = !$(this).hasClass("disabled");
        var url      = "imgs/JPG/Novedades/";
        quantity     = parseInt($(".news").data("quantity"));
        arrowFeature(quantity, imagen , active, $(this),url,$(".new"), ".images-slider");
    });
    //

    //Abrir y cargar contenido
    $(".product.card").click(function(){
        $(".lightbox").show();
        $("body").addClass("scrollbar-invisible");

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
            console.log("Vuelta num -->"+ index);
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
        $("body").removeClass("scrollbar-invisible");

        $(".container-imgs-secondary").empty();
        $(".container-img-principal .img-principal").empty();
    });

    //

    //Menu desplegable

    $("header .links .hambur").click(function(){
        $(this).toggleClass("open");
        $(".container-links").slideToggle();
    });

    //Funcionamiento formulario
    $(".continue .next-step").click(function(event){
        event.preventDefault();
        $(".field-empty").hide();
        var inputFormActual = $(".form-group.active");
        var step            = inputFormActual.data("step");
        var value           = inputFormActual.children(".val-input").val();
        var id              = inputFormActual.attr("id");
        var inputFormNext   = $('.form-group[data-step="'+(step+1)+'"]');
        
        $(".form-group > div."+id+" > input").val(value);
        var ok = vacio(value);
        if(ok){
            
            inputFormActual.append('<div class="field-empty" style="color:red">*El campo no puede ir vacío</div>');
            return;
        }else{
            $(".field-empty").hide();
        }

        inputFormActual.removeClass("active");
        inputFormNext.addClass("active");
        
        if(step == 4){
            $(".button.send").removeClass("disabled");
            $(".button.continue").addClass("disabled");
            $(".form-group").addClass("active");
            $(".form-group > label + *").attr("disabled","disabled");
        }
    });

    $(".reset").click(function(){
        console.log("HOla");
        $(".button.send .face-sad").show();
        setTimeout(function(){
            $(".button.send .face-sad").hide();
            resetPage();
        }, 1000);
    });
});

function vacio(val){
    if(val == ''){
        return true;
    }else{
        return false;
    }
}

function sendForm() {
    var valido = false; 

    if (valido) {
      console.log("Enviado")
      document.getElementById("contact-form").submit();
    } else {
        console.log("No enviado")
      return false;
    }
  }

function hideLogo(){
    $(".loading").fadeOut(1000, function(){
        $("body").removeClass("scrollbar-invisible");
    });
};

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