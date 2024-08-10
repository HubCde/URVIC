// // slider
// let copySlider = document.querySelector('.carrucel__item--slide').cloneNode(true);
// document.querySelector('.carrucel').appendChild(copySlider);

(function(){
    $(document).ready(function(){
        $(".btn-menu").click(function(e){
            e.preventDefault();
            let filtro = $(this).attr("data-filter");

            if (filtro == "micro") {
                $(".container__descript-h3").html("NAVE INDUSTRIAL MICROSOFT TRABAJOS DE OBRA CIVIL CIMENTACION Y TERRACERIAS EN PLATAFORMAS");
            } else if (filtro == "epic") {
                $(".container__descript-h3").html("CONTRUCCIÓN ,CIMENTACION ZAPATAS AISLADAS ,CIRTERNAS,MUROS DE CONTECION,PISOS PULIDOS.");
            }  else if (filtro == "xentric") {
                $(".container__descript-h3").html("PLAZA XENTRIC MIRADOR, EJECUTADOO ALBAÑILERIAS, MUROS DE BLOCK, ESCALERAS, BARDAS PERIMETRALES, GUARNICIONES, BANQUETAS, ESTACIONAMIENTOS, PISOS Y ACABADO RAYADO.");
            } else if (filtro == "resi") {
                $(".container__descript-h3").html("PROYECTO: SUPERVISIÓN Y CONSTRUCCION DE CASA RESIDENCIAL");
            } else if (filtro == "urban") {
                $(".container__descript-h3").html("PROYECTO: PARQUE LINEAL ARBOLEDAS, DENTELLOONES, TERRACERIAS, COLADOS DE ANDADORES, COLOR Y ESTAMPADO, MAMPOSTERIA Y ALBAÑILERIAS.");
            } else if (filtro == "construc") {
                $(".container__descript-h3").html("CONSTRUCCIÓN DEPARTAMENTO MUESTRA (ZOUL)");
            }

            if (filtro == "todos") {
                $(".box-img").show(500);
                $(".container__descript-h3").html("NUESTROS PROYECTOS");
            } else {
                $(".box-img").not("."+filtro).hide(500);
                $(".box-img").filter("."+filtro).show(500);
            }
        });

        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
        
    });
}());

// Función para abrir y cerrar el modal

$(document).ready(function() {
    // Función para abrir el modal con la imagen seleccionada
    $('.box-img img').on('click', function() {
        var imgSrc = $(this).attr('src');
        $('.modal img').attr('src', imgSrc);
        $('.modal').css('display', 'flex');
    });

    // Función para cerrar el modal al hacer clic en el botón de cerrar
    $('.close-modal').on('click', function() {
        $('.modal').hide();
    });

    // Función para cerrar el modal al hacer clic fuera de la imagen en el modal
    $('.modal').on('click', function(event) {
        if (!$(event.target).is('img')) {
            $('.modal').hide();
        }
    });
});
