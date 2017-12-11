$(document).ready(function() {
    $.ajax({
        url: "./data/tutoriales.json",
        type: "GET",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",


        beforeSend: function() {
            $('#post').html("Cargando tutoriales, por favor espere...");
        },
        success: function(response) {
            $('#post').html("");
            $.each(response, function(i, post) {
                    $('#post').append(
                        "<div class='bloque'>"+
                          "<div class='video'><iframe width='435' height='245' src='"+post.video+"' frameborder='0' allowfullscreen></iframe></div>"+
                          "<div class='descripcion columna'>"+
                            "<h3>"+post.titulo+"</h3>"+
                            "<p>"+post.descripcion+"</p>"+
                          "</div>"+    
                        "</div>"
                    );
        
            });
        }
        
    });

});