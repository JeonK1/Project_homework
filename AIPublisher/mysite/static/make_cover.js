var viewarray = new Array(4);
    for (var i = 0; i < viewarray.length; i++){
        viewarray[i] = true; //초기화
    }

function cover_decoration(){
    $("#decorate_ch_1").hide();
    $("#decorate_ch_2").hide();
    $("#decorate_ch_3").hide();
    $("#decorate_ch_4").hide();



    $("#decorate_ch_1").resizable({
        handles : 'se',
        containment:"#Cover",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_1").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#Cover", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_2").resizable({
        handles : 'se',
        containment:"#Cover",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_2").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#Cover", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_3").resizable({
        handles : 'se',
        containment:"#Cover",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_3").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#Cover", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_4").resizable({
        handles : 'se',
        containment:"#Cover",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_4").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#Cover", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });

    $("#Card_small_1").click(function () {
        if(viewarray[0] == true){
            viewarray[0] = false;
            $("#decorate_ch_1").show();
        } else {
            viewarray[0] = true;
            $("#decorate_ch_1").hide();
        }
    });

    $("#Card_small_2").click(function () {
        if(viewarray[1] == true){
            viewarray[1] = false;
            $("#decorate_ch_2").show();
        } else {
            viewarray[1] = true;
            $("#decorate_ch_2").hide();
        }
    });

    $("#Card_small_3").click(function () {
        if(viewarray[2] == true){
            viewarray[2] = false;
            $("#decorate_ch_3").show();
        } else {
            viewarray[2] = true;
            $("#decorate_ch_3").hide();
        }
    });

    $("#Card_small_4").click(function () {
        if(viewarray[3] == true){
            viewarray[3] = false;
            $("#decorate_ch_4").show();
        } else {
            viewarray[3] = true;
            $("#decorate_ch_4").hide();
        }
    });

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            $("#Cover_title").text($("#input_text").val());
            $('#input_text').val('');
        }
    });

    $("#Cover_title").resizable({
        handles : 'se',
        containment:"#Cover",
        maxWidth: 500,
        minWidth: 200,
        maxHeight: 400,
        minHeight: 100,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
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