$(document).ready(function() {
    $.ajax({
        url: "./data/timeline-foros.json",
        type: "GET",
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",


        beforeSend: function() {
            $('#post').html("Cargando post, por favor espere...");
        },
        success: function(response) {
            $('#post').html("");
            var contador = 0;
            $.each(response, function(i, post) {
                contador+=1;
                if (contador%2==0){
                    $('#post').append(
                    "<li id='newE' class='timeline-inverted'>"+
                        "<div id='postsEncabezado' class='timeline-badge'>"+
                          "<a><i class='fa fa-circle' id=''></i></a>"+
                        "</div>"+
                        "<div class='timeline-panel'>"+
                            "<div id='postsEncabezado' class='card-header'>"+
                                "<h4>"+post.titulo+"</h4>"+
                            "</div>"+
                            "<div class='timeline-body'>"+
                                "<p class='text-justify'>"+post.contenido+"</p>"+
                                "<p class='text-right'>"+post.autor+"</p>"+
                            "</div>"+
                            "<a href='foro.html' id='"+post.id+"' class='botonVerde btn btn-primary pull-right'>Visitar Foro</a>"+
                            "<div class='card-footer text-muted'>"+
                              post.fecha+", "+post.comentarios+" entradas"+
                            "</div>"+
                        "</div>"+
                    "</li>"
                    );

                } else {
                    $('#post').append(
                    "<li id='newE' class=''>"+
                        "<div id='postsEncabezado' class='timeline-badge'>"+
                          "<a><i class='fa fa-circle' id=''></i></a>"+
                        "</div>"+
                        "<div class='timeline-panel'>"+
                            "<div id='postsEncabezado' class='card-header'>"+
                                "<h4>"+post.titulo+"</h4>"+
                            "</div>"+
                            "<div class='timeline-body'>"+
                                "<p class='text-justify'>"+post.contenido+"</p>"+
                                "<p class='text-right'>"+post.autor+"</p>"+
                            "</div>"+
                            "<a href='foro.html' id='"+post.id+"' class='botonVerde btn btn-primary pull-right'>Visitar Foro</a>"+
                            "<div class='card-footer text-muted'>"+
                              post.fecha+", "+post.comentarios+" entradas"+
                            "</div>"+
                        "</div>"+
                    "</li>"
                    );

                }
                
            });
        }
        
    });

});