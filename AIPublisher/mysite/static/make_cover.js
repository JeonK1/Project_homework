function cover_text(){
    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            $("#Cover_title").text($("#input_text").val());
            $('#input_text').val('');
        }
    });

    $("#Cover_title").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#Cover", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });

}

function select_background(){

    $("#Ground_small_1").click(function () {
        $( "#Cover" ).css( {"background-image":($( "#Ground_small_1" ).css( "background-image" )),
                            "background-size":"cover"});
    });

    $("#Ground_small_2").click(function () {
        $( "#Cover" ).css( {"background-image":($( "#Ground_small_2" ).css( "background-image" )),
                            "background-size":"cover"});
    });

    $("#Ground_small_3").click(function () {
        $( "#Cover" ).css( {"background-image":($( "#Ground_small_3" ).css( "background-image" )),
                            "background-size":"cover"});
    });

    $("#Ground_small_4").click(function () {
        $( "#Cover" ).css( {"background-image":($( "#Ground_small_4" ).css( "background-image" )),
                            "background-size":"cover"});
    });

    $("#Ground_small_5").click(function () {
        $( "#Cover" ).css( {"background-image":($( "#Ground_small_5" ).css( "background-image" )),
                            "background-size":"cover"});
    });
}