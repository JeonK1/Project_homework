function cover_text(){

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {

            $("#Cover_text").text($("#input_text").val());
            $('#input_text').val('');

        }

    });

}