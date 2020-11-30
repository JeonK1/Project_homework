// 사용자 위치
var count = 0;

// 사용자가 적은 글들 저장
var arrtext = new Array(5);
for(var i = 0; i < arrtext.length; i++){
    arrtext[i] = new Array();
}

// 사용자가 적용한 배경 저장
var arrback = new Array(5);
for(var i = 0; i < arrback.length; i++) {
    arrback[i] = "";
}

// 각 페이지 정보들 (배경 제외) display width height top left
var expos_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < expos_info.length; i++){
    expos_info[i] = new Array(); //
}
var compli_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < compli_info.length; i++){
    compli_info[i] = new Array(); //
}
var crisis_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < crisis_info.length; i++){
    crisis_info[i] = new Array(); //
}
var climax_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < climax_info.length; i++){
    climax_info[i] = new Array(); //
}
var result_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < result_info.length; i++){
    result_info[i] = new Array(); //
}
// 값정보 초기화
for (var i = 0; i < expos_info.length; i++){
    expos_info[i][0] = "none";
    compli_info[i][0] = "none";
    crisis_info[i][0] = "none";
    climax_info[i][0] = "none";
    result_info[i][0] = "none";
}



function story_make(){
    // 주인공, 배경, 사건, 상대, 감정1, 감정2, 감정3, 감정4, 감정5
    // 여기서 받으면 될듯
    jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);

    var hero = jsonObject.mainChar.name;
    var ground = "학교";
    var event = "사랑";
    var partner = jsonObject.subChar.name;
    var emotion = new Array(jsonObject.relList);
    emotion = emotion.toString();
    var emotion_array =  emotion.split(",");

    // 발단
    var expos = new Array(hero+"에게 "+ground+"은(는) 어떤 곳인가요?",
                hero+"과 "+event+"은(는) 어떤 관련이 있나요?",
                hero+"은(는) "+partner+"에게 왜 "+emotion_array[0]+"을 느끼나요?");
    // 전개
    var compli = new Array(hero+"은(는) 어떻게 "+event+"을 해결하고자 하나요?",
                           "왜 "+hero+"은(는) "+emotion_array[0]+"에서 "+emotion_array[1]+"가 되었나요?");
    // 위기
    var crisis = new Array("왜 "+hero+"은(는) "+emotion_array[1]+"에서 "+emotion_array[2]+"가 되었나요?");

    //절정
    var climax = new Array("왜 "+hero+"은(는) "+emotion_array[2]+"에서 "+emotion_array[3]+"가 되었나요?");

    //결말
    var result = new Array("왜 "+hero+"은(는) "+emotion_array[3]+"에서 "+emotion_array[4]+"가 되었나요?",
                           "이 이야기의 결말은 어떻게 되나요?");



    $("#RightSidebar").hide();
    $("#keyword_text").text(event);
    $("#guide_text").text(expos);
    $("#decorate_ch_1").hide();
    $("#decorate_ch_2").hide();
    $("#decorate_ch_3").hide();
    $("#decorate_ch_4").hide();
    $("#text_box").hide();

    // 넥스트 버튼 눌렀을 때
    $("#next_shape").click(function () {
        store_content(count);
        count += 1;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });

    // 왼쪽 단계 눌렀을 때때
    $("#STEP_1").click(function() {
        store_content(count);
        count = 0;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });

    $("#STEP_2").click(function() {
        store_content(count);
        count = 1;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });

    $("#STEP_3").click(function() {
        store_content(count);
        count = 2;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });

    $("#STEP_4").click(function() {
        store_content(count);
        count = 3;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });

    $("#STEP_5").click(function() {
        store_content(count);
        count = 4;
        next_move(count,expos,compli,crisis,climax,result);
        step_color_change(count);
    });



    // 캐릭터 눌렀을 때
    $("#decorate_ch_1").resizable({
        handles : 'w,n,s,e',
        containment:"#story_frame",
        maxWidth: 900,
        minWidth: 85,
        maxHeight: 1000,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });
    $("#decorate_ch_1").draggable({
        cursor:"pointer", // 커서 모양
        containment:"#story_frame", // div영역 에서만 움직이도록 설정
        revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
    });

    $("#decorate_ch_2").resizable({
        handles : 'w,n,s,e',
        containment:"#story_frame",
        maxWidth: 900,
        minWidth: 85,
        maxHeight: 1000,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });
    $("#decorate_ch_2").draggable({
        cursor:"pointer", // 커서 모양
        containment:"#story_frame", // div영역 에서만 움직이도록 설정
        revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
    });
    $("#decorate_ch_3").resizable({
        handles : 'w,n,s,e',
        containment:"#story_frame",
        maxWidth: 900,
        minWidth: 85,
        maxHeight: 1000,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_3").draggable({
        cursor:"pointer", // 커서 모양
        containment:"#story_frame", // div영역 에서만 움직이도록 설정
        revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
    });
    $("#decorate_ch_4").resizable({
        handles : 'w,n,s,e',
        containment:"#story_frame",
        maxWidth: 900,
        minWidth: 85,
        maxHeight: 1000,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_4").draggable({
        cursor:"pointer", // 커서 모양
        containment:"#story_frame", // div영역 에서만 움직이도록 설정
        revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
    });

    $("#text_box").resizable({
        handles : 'w,n,s,e',
        containment:"#story_frame",
        maxWidth: 510,
        minWidth: 373,
        maxHeight: 340,
        minHeight: 129,
    });

    $("#text_box").draggable({
        cursor:"pointer", // 커서 모양
        containment:"#story_frame", // div영역 에서만 움직이도록 설정
        revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
    });

    $("#Card_small_1").click(function () {
    if($("#decorate_ch_1").css("display") == "none"){
        $("#decorate_ch_1").show();
        } else {
        $("#decorate_ch_1").hide();
        }
    });

    $("#Card_small_2").click(function () {
    if($("#decorate_ch_2").css("display") == "none"){
        $("#decorate_ch_2").show();
        } else {
        $("#decorate_ch_2").hide();
        }
    });

    $("#Card_small_3").click(function () {
    if($("#decorate_ch_3").css("display") == "none"){
        $("#decorate_ch_3").show();
        } else {
        $("#decorate_ch_3").hide();
        }
    });

    $("#Card_small_4").click(function () {
    if($("#decorate_ch_4").css("display") == "none"){
        $("#decorate_ch_4").show();
        } else {
        $("#decorate_ch_4").hide();
        }
    });

    $("#guide_image").click(function () {
    if($("#text_box").css("display") == "none"){
        $("#text_box").show();
        } else {
        $("#text_box").hide();
        }
    });
}

function next_move(count,expos,compli,crisis,climax,result){

    switch(count){
        case 0:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $("#decorate_ch_1").css({"display":expos_info[0][0],
                                        "width":expos_info[0][1],
                                        "height":expos_info[0][2],
                                        "top":expos_info[0][3],
                                        "left":expos_info[0][4]});
            $("#decorate_ch_2").css({"display":expos_info[1][0],
                                        "width":expos_info[1][1],
                                        "height":expos_info[1][2],
                                        "top":expos_info[1][3],
                                        "left":expos_info[1][4]});
            $("#decorate_ch_3").css({"display":expos_info[2][0],
                                        "width":expos_info[2][1],
                                        "height":expos_info[2][2],
                                        "top":expos_info[2][3],
                                        "left":expos_info[2][4]});
            $("#decorate_ch_4").css({"display":expos_info[3][0],
                                        "width":expos_info[3][1],
                                        "height":expos_info[3][2],
                                        "top":expos_info[3][3],
                                        "left":expos_info[3][4]});
            $("#text_box").text(arrtext[0].toString().replace(/,/g," "));
            $("#text_box").css({"display":expos_info[4][0],
                                        "width":expos_info[4][1],
                                        "height":expos_info[4][2],
                                        "top":expos_info[4][3],
                                        "left":expos_info[4][4]});
            $('#input_text').val('');
            $("#RightSidebar").hide();
            $("#guide_text").text(expos);
            break;
        case 1:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $("#decorate_ch_1").css({"display":compli_info[0][0],
                                        "width":compli_info[0][1],
                                        "height":compli_info[0][2],
                                        "top":compli_info[0][3],
                                        "left":compli_info[0][4]});
            $("#decorate_ch_2").css({"display":compli_info[1][0],
                                        "width":compli_info[1][1],
                                        "height":compli_info[1][2],
                                        "top":compli_info[1][3],
                                        "left":compli_info[1][4]});
            $("#decorate_ch_3").css({"display":compli_info[2][0],
                                        "width":compli_info[2][1],
                                        "height":compli_info[2][2],
                                        "top":compli_info[2][3],
                                        "left":compli_info[2][4]});
            $("#decorate_ch_4").css({"display":compli_info[3][0],
                                        "width":compli_info[3][1],
                                        "height":compli_info[3][2],
                                        "top":compli_info[3][3],
                                        "left":compli_info[3][4]});
            $("#text_box").text(arrtext[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":compli_info[4][0],
                                        "width":compli_info[4][1],
                                        "height":compli_info[4][2],
                                        "top":compli_info[4][3],
                                        "left":compli_info[4][4]});
            $('#input_text').val('');
            $("#RightSidebar").show();
            $("#guide_text").text(compli);
            break;
        case 2:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $("#decorate_ch_1").css({"display":crisis_info[0][0],
                                        "width":crisis_info[0][1],
                                        "height":crisis_info[0][2],
                                        "top":crisis_info[0][3],
                                        "left":crisis_info[0][4]});
            $("#decorate_ch_2").css({"display":crisis_info[1][0],
                                        "width":crisis_info[1][1],
                                        "height":crisis_info[1][2],
                                        "top":crisis_info[1][3],
                                        "left":crisis_info[1][4]});
            $("#decorate_ch_3").css({"display":crisis_info[2][0],
                                        "width":crisis_info[2][1],
                                        "height":crisis_info[2][2],
                                        "top":crisis_info[2][3],
                                        "left":crisis_info[2][4]});
            $("#decorate_ch_4").css({"display":crisis_info[3][0],
                                        "width":crisis_info[3][1],
                                        "height":crisis_info[3][2],
                                        "top":crisis_info[3][3],
                                        "left":crisis_info[3][4]});
            $("#text_box").text(arrtext[2].toString().replace(/,/g," "));
            $("#text_box").css({"display":crisis_info[4][0],
                                        "width":crisis_info[4][1],
                                        "height":crisis_info[4][2],
                                        "top":crisis_info[4][3],
                                        "left":crisis_info[4][4]});
            $('#input_text').val('');
            $("#RightSidebar").show();
            $("#guide_text").text(crisis);
            break;
        case 3:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $("#decorate_ch_1").css({"display":climax_info[0][0],
                                        "width":climax_info[0][1],
                                        "height":climax_info[0][2],
                                        "top":climax_info[0][3],
                                        "left":climax_info[0][4]});
            $("#decorate_ch_2").css({"display":climax_info[1][0],
                                        "width":climax_info[1][1],
                                        "height":climax_info[1][2],
                                        "top":climax_info[1][3],
                                        "left":climax_info[1][4]});
            $("#decorate_ch_3").css({"display":climax_info[2][0],
                                        "width":climax_info[2][1],
                                        "height":climax_info[2][2],
                                        "top":climax_info[2][3],
                                        "left":climax_info[2][4]});
            $("#decorate_ch_4").css({"display":climax_info[3][0],
                                        "width":climax_info[3][1],
                                        "height":climax_info[3][2],
                                        "top":climax_info[3][3],
                                        "left":climax_info[3][4]});
            $("#text_box").text(arrtext[3].toString().replace(/,/g," "));
            $("#text_box").css({"display":climax_info[4][0],
                                        "width":climax_info[4][1],
                                        "height":climax_info[4][2],
                                        "top":climax_info[4][3],
                                        "left":climax_info[4][4]});
            $('#input_text').val('');
            $("#RightSidebar").show();
            $("#guide_text").text(climax);
            break;
        case 4:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $("#decorate_ch_1").css({"display":result_info[0][0],
                                        "width":result_info[0][1],
                                        "height":result_info[0][2],
                                        "top":result_info[0][3],
                                        "left":result_info[0][4]});
            $("#decorate_ch_2").css({"display":result_info[1][0],
                                        "width":result_info[1][1],
                                        "height":result_info[1][2],
                                        "top":result_info[1][3],
                                        "left":result_info[1][4]});
            $("#decorate_ch_3").css({"display":result_info[2][0],
                                        "width":result_info[2][1],
                                        "height":result_info[2][2],
                                        "top":result_info[2][3],
                                        "left":result_info[2][4]});
            $("#decorate_ch_4").css({"display":result_info[3][0],
                                        "width":result_info[3][1],
                                        "height":result_info[3][2],
                                        "top":result_info[3][3],
                                        "left":result_info[3][4]});
            $("#text_box").text(arrtext[4].toString().replace(/,/g," "));
            $("#text_box").css({"display":result_info[4][0],
                                        "width":result_info[4][1],
                                        "height":result_info[4][2],
                                        "top":result_info[4][3],
                                        "left":result_info[4][4]});
            $('#input_text').val('');
            $("#RightSidebar").show();
            $("#guide_text").text(result);
            break;
        case 5:
            sendToNextPage();
            break;
    }
}


function step_color_change(count){
    switch(count){
        case 0:
            $("#STEP_1").css( "background", "#B9E4C9");
            $("#STEP_1_TEXT").css( "color", "#000000");

            $("#STEP_2").css( "background", "#E6E2CF");
            $("#STEP_2_TEXT").css( "color", "#666666");
            $("#STEP_3").css( "background", "#E6E2CF");
            $("#STEP_3_TEXT").css( "color", "#666666");
            $("#STEP_4").css( "background", "#E6E2CF");
            $("#STEP_4_TEXT").css( "color", "#666666");
            $("#STEP_5").css( "background", "#E6E2CF");
            $("#STEP_5_TEXT").css( "color", "#666666");
            break;
        case 1:
            $("#STEP_1").css( "background", "#E6E2CF");
            $("#STEP_1_TEXT").css( "color", "#666666");

            $("#STEP_2").css( "background", "#B9E4C9");
            $("#STEP_2_TEXT").css( "color", "#000000");

            $("#STEP_3").css( "background", "#E6E2CF");
            $("#STEP_3_TEXT").css( "color", "#666666");
            $("#STEP_4").css( "background", "#E6E2CF");
            $("#STEP_4_TEXT").css( "color", "#666666");
            $("#STEP_5").css( "background", "#E6E2CF");
            $("#STEP_5_TEXT").css( "color", "#666666");
            break;
        case 2:
            $("#STEP_1").css( "background", "#E6E2CF");
            $("#STEP_1_TEXT").css( "color", "#666666");
            $("#STEP_2").css( "background", "#E6E2CF");
            $("#STEP_2_TEXT").css( "color", "#666666");

            $("#STEP_3").css( "background", "#B9E4C9");
            $("#STEP_3_TEXT").css( "color", "#000000");

            $("#STEP_4").css( "background", "#E6E2CF");
            $("#STEP_4_TEXT").css( "color", "#666666");
            $("#STEP_5").css( "background", "#E6E2CF");
            $("#STEP_5_TEXT").css( "color", "#666666");
            break;
        case 3:
            $("#STEP_1").css( "background", "#E6E2CF");
            $("#STEP_1_TEXT").css( "color", "#666666");
            $("#STEP_2").css( "background", "#E6E2CF");
            $("#STEP_2_TEXT").css( "color", "#666666");
            $("#STEP_3").css( "background", "#E6E2CF");
            $("#STEP_3_TEXT").css( "color", "#666666");

            $("#STEP_4").css( "background", "#B9E4C9");
            $("#STEP_4_TEXT").css( "color", "#000000");

            $("#STEP_5").css( "background", "#E6E2CF");
            $("#STEP_5_TEXT").css( "color", "#666666");
            break;
        case 4:
            $("#STEP_1").css( "background", "#E6E2CF");
            $("#STEP_1_TEXT").css( "color", "#666666");
            $("#STEP_2").css( "background", "#E6E2CF");
            $("#STEP_2_TEXT").css( "color", "#666666");
            $("#STEP_3").css( "background", "#E6E2CF");
            $("#STEP_3_TEXT").css( "color", "#666666");
            $("#STEP_4").css( "background", "#E6E2CF");
            $("#STEP_4_TEXT").css( "color", "#666666");

            $("#STEP_5").css( "background", "#B9E4C9");
            $("#STEP_5_TEXT").css( "color", "#000000");
            break;
    }
}

//function select_background(){
//    $("#Ground_small_1").click(function () {
//        $("#left_frame").css( {"background-image":($( "#Ground_small_1" ).css( "background-image" )),
//                                "background-position":"left",
//                                "background-size":"1020px 680px"});
//        $("#right_frame").css( {"background-image":($( "#Ground_small_1" ).css( "background-image" )),
//                                "background-position":"right",
//                                "background-size":"1020px 680px"});
//        arrback[count] = $( "#Ground_small_1" ).css( "background-image" );
//
//    });
//
//    $("#Ground_small_2").click(function() {
//        $("#left_frame").css( {"background-image":($( "#Ground_small_2" ).css( "background-image" )),
//                                "background-position":"left",
//                                "background-size":"1020px 680px"});
//        $("#right_frame").css( {"background-image":($( "#Ground_small_2" ).css( "background-image" )),
//                                "background-position":"right",
//                                "background-size":"1020px 680px"});
//        arrback[count] = $( "#Ground_small_2" ).css( "background-image" );
//    });
//
//    $("#Ground_small_3").click(function() {
//        $("#left_frame").css( {"background-image":($( "#Ground_small_3" ).css( "background-image" )),
//                                "background-position":"left",
//                                "background-size":"1020px 680px"});
//        $("#right_frame").css( {"background-image":($( "#Ground_small_3" ).css( "background-image" )),
//                                "background-position":"right",
//                                "background-size":"1020px 680px"});
//        arrback[count] = $( "#Ground_small_3" ).css( "background-image" );
//    });
//
//    $("#Ground_small_4").click(function() {
//        $("#left_frame").css( {"background-image":($( "#Ground_small_4" ).css( "background-image" )),
//                                "background-position":"left",
//                                "background-size":"1020px 680px"});
//        $("#right_frame").css( {"background-image":($( "#Ground_small_4" ).css( "background-image" )),
//                                "background-position":"right",
//                                "background-size":"1020px 680px"});
//        arrback[count] = $( "#Ground_small_4" ).css( "background-image" );
//    });
//
//    $("#Ground_small_5").click(function() {
//        $("#left_frame").css( {"background-image":($( "#Ground_small_5" ).css( "background-image" )),
//                                "background-position":"left",
//                                "background-size":"1020px 680px"});
//        $("#right_frame").css( {"background-image":($( "#Ground_small_5" ).css( "background-image" )),
//                                "background-position":"right",
//                                "background-size":"1020px 680px"});
//        arrback[count] = $( "#Ground_small_5" ).css( "background-image" );
//    });
//}
function select_background(ground_id){
    $("#left_frame").css( {"background-image":($( "#"+ground_id ).css( "background-image" )),
                            "background-position":"left",
                            "background-size":"1020px 680px"});
    $("#right_frame").css( {"background-image":($( "#"+ground_id ).css( "background-image" )),
                            "background-position":"right",
                            "background-size":"1020px 680px"});
    arrback[count] = $( "#"+ground_id  ).css( "background-image" );
}

function store_content(){
    var j = 0;
    switch(count){
        case 0:
            for(var i = 0; i < expos_info.length; i++){
                if(i < 4) {
                    j = i + 1;
                    expos_info[i][0] = $("#decorate_ch_" + j).css("display");
                    expos_info[i][1] = $("#decorate_ch_" + j).css("width");
                    expos_info[i][2] = $("#decorate_ch_" + j).css("height");
                    expos_info[i][3] = $("#decorate_ch_" + j).css("top");
                    expos_info[i][4] = $("#decorate_ch_" + j).css("left");
                } else {
                    expos_info[i][0] = $("#text_box").css("display");
                    expos_info[i][1] = $("#text_box").css("width");
                    expos_info[i][2] = $("#text_box").css("height");
                    expos_info[i][3] = $("#text_box").css("top");
                    expos_info[i][4] = $("#text_box").css("left");
                }
            }
            break;
        case 1:
            for(var i = 0; i < compli_info.length; i++){
                if(i < 4) {
                    j = i + 1;
                    compli_info[i][0] = $("#decorate_ch_" + j).css("display");
                    compli_info[i][1] = $("#decorate_ch_" + j).css("width");
                    compli_info[i][2] = $("#decorate_ch_" + j).css("height");
                    compli_info[i][3] = $("#decorate_ch_" + j).css("top");
                    compli_info[i][4] = $("#decorate_ch_" + j).css("left");
                } else {
                    compli_info[i][0] = $("#text_box").css("display");
                    compli_info[i][1] = $("#text_box").css("width");
                    compli_info[i][2] = $("#text_box").css("height");
                    compli_info[i][3] = $("#text_box").css("top");
                    compli_info[i][4] = $("#text_box").css("left");
                }
            }
            break;
        case 2:
            for(var i = 0; i < crisis_info.length; i++){
                if(i < 4) {
                    j = i + 1;
                    crisis_info[i][0] = $("#decorate_ch_" + j).css("display");
                    crisis_info[i][1] = $("#decorate_ch_" + j).css("width");
                    crisis_info[i][2] = $("#decorate_ch_" + j).css("height");
                    crisis_info[i][3] = $("#decorate_ch_" + j).css("top");
                    crisis_info[i][4] = $("#decorate_ch_" + j).css("left");
                } else {
                    crisis_info[i][0] = $("#text_box").css("display");
                    crisis_info[i][1] = $("#text_box").css("width");
                    crisis_info[i][2] = $("#text_box").css("height");
                    crisis_info[i][3] = $("#text_box").css("top");
                    crisis_info[i][4] = $("#text_box").css("left");
                }
            }
            break;
        case 3:
            for(var i = 0; i < climax_info.length; i++){
                if(i < 4) {
                    j = i + 1;
                    climax_info[i][0] = $("#decorate_ch_" + j).css("display");
                    climax_info[i][1] = $("#decorate_ch_" + j).css("width");
                    climax_info[i][2] = $("#decorate_ch_" + j).css("height");
                    climax_info[i][3] = $("#decorate_ch_" + j).css("top");
                    climax_info[i][4] = $("#decorate_ch_" + j).css("left");
                } else {
                    climax_info[i][0] = $("#text_box").css("display");
                    climax_info[i][1] = $("#text_box").css("width");
                    climax_info[i][2] = $("#text_box").css("height");
                    climax_info[i][3] = $("#text_box").css("top");
                    climax_info[i][4] = $("#text_box").css("left");
                }
            }
            break;
        case 4:
            for(var i = 0; i < result_info.length; i++){
                if(i < 4) {
                    j = i + 1;
                    result_info[i][0] = $("#decorate_ch_" + j).css("display");
                    result_info[i][1] = $("#decorate_ch_" + j).css("width");
                    result_info[i][2] = $("#decorate_ch_" + j).css("height");
                    result_info[i][3] = $("#decorate_ch_" + j).css("top");
                    result_info[i][4] = $("#decorate_ch_" + j).css("left");
                } else {
                    result_info[i][0] = $("#text_box").css("display");
                    result_info[i][1] = $("#text_box").css("width");
                    result_info[i][2] = $("#text_box").css("height");
                    result_info[i][3] = $("#text_box").css("top");
                    result_info[i][4] = $("#text_box").css("left");
                }
            }
            break;
    }
}
// 사용자가 적은 글 보여주기
function show_text() {

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            switch(count){
                case 0:
                    arrtext[0].push($("#input_text").val());
                    $("#text_box").text(arrtext[0].toString().replace(/,/g, " "));
                    $("#text_box").resizable({
                        handles : 'w,n,s,e',
                        containment:"#story_frame",
                        maxWidth: 510,
                        minWidth: 373,
                        maxHeight: 340,
                        minHeight: 129
                    });
                    $('#input_text').val('');
                    break;
                case 1:
                    arrtext[1].push($("#input_text").val());
                    $("#text_box").text(arrtext[1].toString().replace(/,/g, " "));
                    $('#input_text').val('');
                    $("#text_box").resizable({
                        handles : 'w,n,s,e',
                        containment:"#story_frame",
                        maxWidth: 510,
                        minWidth: 373,
                        maxHeight: 340,
                        minHeight: 129
                    });
                    break;
                case 2:
                    arrtext[2].push($("#input_text").val());
                    $("#text_box").text(arrtext[2].toString().replace(/,/g, " "));
                    $('#input_text').val('');
                    $("#text_box").resizable({
                        handles : 'w,n,s,e',
                        containment:"#story_frame",
                        maxWidth: 510,
                        minWidth: 373,
                        maxHeight: 340,
                        minHeight: 129
                    });
                    break;
                case 3:
                    arrtext[3].push($("#input_text").val());
                    $("#text_box").text(arrtext[3].toString().replace(/,/g, " "));
                    $('#input_text').val('');
                    $("#text_box").resizable({
                        handles : 'w,n,s,e',
                        containment:"#story_frame",
                        maxWidth: 510,
                        minWidth: 373,
                        maxHeight: 340,
                        minHeight: 129
                    });
                    break;
                case 4:
                    arrtext[4].push($("#input_text").val());
                    $("#text_box").text(arrtext[4].toString().replace(/,/g, " "));
                    $('#input_text').val('');
                    $("#text_box").resizable({
                        handles : 'w,n,s,e',
                        containment:"#story_frame",
                        maxWidth: 510,
                        minWidth: 373,
                        maxHeight: 340,
                        minHeight: 129
                    });
                    break;

            }
        }
    });
}

function sendToNextPage(){
    //다음페이지로 POST 데이터 넘기기
    jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);
    console.log(jsonData);

    var sendJsonObject = new Object();
    var bookPage = new Object();
    var background = new Array();
    var context = new Array();
    var elements = new Array();

    for(i=0; i<5; i++) {

        context.push(arrtext[i]);
        background.push(arrback[i]);

        expos_content = new Object();
        expos_content.display = expos_info[i][0];
        expos_content.width = expos_info[i][1];
        expos_content.height = expos_info[i][2];
        expos_content.top = expos_info[i][3];
        expos_content.left = expos_info[i][4];
        elements.push(expos_content);

        compli_content = new Object();
        compli_content.display = compli_info[i][0];
        compli_content.width = compli_info[i][1];
        compli_content.height = compli_info[i][2];
        compli_content.top = compli_info[i][3];
        compli_content.left = compli_info[i][4];
        elements.push(compli_content);

        crisis_content = new Object();
        crisis_content.display = crisis_info [i][0];
        crisis_content.width = crisis_info [i][1];
        crisis_content.height = crisis_info [i][2];
        crisis_content.top = crisis_info [i][3];
        crisis_content.left = crisis_info [i][4];
        elements.push(crisis_content);

        climax_content = new Object();
        climax_content.display = climax_info[i][0];
        climax_content.width = climax_info[i][1];
        climax_content.height = climax_info[i][2];
        climax_content.top = climax_info[i][3];
        climax_content.left = climax_info[i][4];
        elements.push(climax_content);

        result_content = new Object();
        result_content.display = result_info[i][0];
        result_content.width = result_info[i][1];
        result_content.height = result_info[i][2];
        result_content.top = result_info[i][3];
        result_content.left = result_info[i][4];
        elements.push(result_content);
    }

    bookPage.background = background;
    bookPage.context = context;
    bookPage.elements = elements;
    sendJsonObject = jsonObject;
    sendJsonObject.BookPage = bookPage;

    var jsonData = JSON.stringify(jsonObject);

    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();

}

// 말풍선
function createSpeechBox(){
    document.getElementById("speech_box").style.display="";
}
function removeSpeechBox(){
    document.getElementById("speech_box").style.display="none";
}

//모달창
function createModal(type, title, message){
    if(type=="warning"){
        //경고일 때
        document.querySelector('#modal_button_ok').style.display = '';
        document.querySelector('#modal_button_yes').style.display = 'none';
        document.querySelector('#modal_button_no').style.display = 'none';

        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('#modal_title').innerText = title;
        document.querySelector('#modal_context').innerText = message;
        document.querySelector('#modal_button_ok').style.color = "#FAC1D6";
        document.querySelector('#modal_button_ok').style.background = "#A90E46";

    } else if(type=="book"){
        document.querySelector('#modal_button_ok').style.display = '';
        document.querySelector('#modal_button_yes').style.display = 'none';
        document.querySelector('#modal_button_no').style.display = 'none';

        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('#modal_title').innerText = title;
        document.querySelector('#modal_context').innerText = message;
        document.getElementById('modal_warning_img').src = document.getElementById('modal_warning_img').src+"/../ic_book.png";
        document.querySelector('#modal_button_ok').style.color = "#C5F2C7";
        document.querySelector('#modal_button_ok').style.background = "#F8B24";
        document.getElementById("modal_button_ok").onclick = sendToNextPage;
    }
}
function removeModal(){
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}
function modalOk(){
    //확인 누르면 자기 자신 페이지로 돌아옴
    removeModal();
}

//나의 배경 불러오기 모달창
function createMyBgModal(){
    document.querySelector('.modal_wrap').style.display ='block';
    document.querySelector('.black_bg').style.display ='block';
}
function removeMyBgModal(){
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}
function bgModalYes(){
    // 배경화면 적용 후 모달 종료
    var backgroundId = $("input[name='select_bg']:checked").val();
    select_background(backgroundId);
    removeMyBgModal();
}
function bgModalNo(){
    // 모달 종료
    removeMyBgModal();
}
function clickLeft(){
    // 왼쪽 버튼 클릭 시, 이전목록 3개의 background 세팅
}

function clickRight(){
    // 오른쪽 버튼 클릭 시, 이전목록 3개의 background 세팅
}
