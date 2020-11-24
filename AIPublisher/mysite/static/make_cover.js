function cover_text(){
    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            $("#Cover_text").text($("#input_text").val());
            $('#input_text').val('');
        }
    });
}

function select_background(){

    $("#Ground_small_1").click(function () {

        $( "#Cover" ).css( "background-image",($( "#Ground_small_1" ).css( "background-image" )));

    });

    $("#Ground_small_2").click(function () {

        $( "#Cover" ).css( "background-image",($( "#Ground_small_2" ).css( "background-image" )));

    });

    $("#Ground_small_3").click(function () {

        $( "#Cover" ).css( "background-image",($( "#Ground_small_3" ).css( "background-image" )));
    });

    $("#Ground_small_4").click(function () {

        $( "#Cover" ).css( "background-image",($( "#Ground_small_4" ).css( "background-image" )));
    });
}