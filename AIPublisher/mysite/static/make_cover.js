function cover_text(){

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            alert("sadf")
            $("#Cover_text").text($("#input_text").val());
            $('#input_text').val('');
        }
    });
}

function cover_text(){

    $("#Ground_small_1").click(function () {

        $( "#BackGround" ).css( "background-image",($( "#Ground_small_1" ).css( "background-image" )))



    });

    $("#Ground_small_2").click(function () {


    });

    $("#Ground_small_3").click(function () {


    });

    $("#Ground_small_4").click(function () {


    });
}