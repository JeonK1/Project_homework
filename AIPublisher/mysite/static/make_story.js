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

// 주인공, 배경, 사건, 상대, 감정1, 감정2, 감정3, 감정4, 감정5
// 여기서 받으면 될듯
var hero = "이기철";
var ground = "학교";
var event = "사랑";
var partner = "이희선";
var emotion = new Array('사랑','행복','의심','분노','슬픔');

// 발단
var expos = new Array("- "+hero+"에게 "+ground+"은(는) 어떤 곳인가요?",
            "- "+hero+"과 "+event+"은(는) 어떤 관련이 있나요?",
            "- "+hero+"은(는) "+partner+"에게 왜 "+emotion[0]+"을 느끼나요?");
// 전개
var compli = new Array("- "+hero+"은(는) 어떻게 "+event+"을 해결하고자 하나요?",
                       "- 왜 "+hero+"은(는) "+emotion[0]+"에서 "+emotion[1]+"가 되었나요?");
// 위기
var crisis = new Array("- 왜 "+hero+"은(는) "+emotion[1]+"에서 "+emotion[2]+"가 되었나요?")

//절정
var climax = new Array("- 왜 "+hero+"은(는) "+emotion[2]+"에서 "+emotion[3]+"가 되었나요?")

//결말
var result = new Array("- 왜 "+hero+"은(는) "+emotion[3]+"에서 "+emotion[4]+"가 되었나요?",
                       "- 이 이야기의 결말은 어떻게 되나요?")


function story_make(){
    $("#RightSidebar").hide();

    // 넥스트 버튼 눌렀을 때
    $("#next_shape").click(function () {
        count += 1;
        next_move(count);
        step_color_change(count);
    });

    // 왼쪽 단계 눌렀을 때때
   $("#STEP_1").click(function() {
        count = 0;
        next_move(count);
        step_color_change(count);
    });

    $("#STEP_2").click(function() {
        count = 1;
        next_move(count);
        step_color_change(count);
    });

    $("#STEP_3").click(function() {
        count = 2;
        next_move(count);
        step_color_change(count);
    });

    $("#STEP_4").click(function() {
        count = 3;
        next_move(count);
        step_color_change(count);
    });

    $("#STEP_5").click(function() {
        count = 4;
        next_move(count);
        step_color_change(count);
    });
}

function next_move(count){

    switch(count){
        case 0:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $('#input_text').val('');
            $("#RightSidebar").hide();
            break;
        case 1:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $('#input_text').val('');
            $("#RightSidebar").show();
            break;
        case 2:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $('#input_text').val('');
            $("#RightSidebar").show();
            break;
        case 3:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $('#input_text').val('');
            $("#RightSidebar").show();
            break;
        case 4:
            $("#left_frame").css( {"background-image":arrback[count],
                                "background-position":"left",
                                "background-size":"1020px 680px"});
            $("#right_frame").css( {"background-image":arrback[count],
                                "background-position":"right",
                                "background-size":"1020px 680px"});
            $('#input_text').val('');
            $("#RightSidebar").show();
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

function select_background(){
    $("#Ground_small_1").click(function () {
        $("#left_frame").css( {"background-image":($( "#Ground_small_1" ).css( "background-image" )),
                                "background-position":"left",
                                "background-size":"1020px 680px"});
        $("#right_frame").css( {"background-image":($( "#Ground_small_1" ).css( "background-image" )),
                                "background-position":"right",
                                "background-size":"1020px 680px"});
        arrback[count] = $( "#Ground_small_1" ).css( "background-image" );

    });

    $("#Ground_small_2").click(function() {
        $("#left_frame").css( {"background-image":($( "#Ground_small_2" ).css( "background-image" )),
                                "background-position":"left",
                                "background-size":"1020px 680px"});
        $("#right_frame").css( {"background-image":($( "#Ground_small_2" ).css( "background-image" )),
                                "background-position":"right",
                                "background-size":"1020px 680px"});
        arrback[count] = $( "#Ground_small_2" ).css( "background-image" );
    });

    $("#Ground_small_3").click(function() {
        $("#left_frame").css( {"background-image":($( "#Ground_small_3" ).css( "background-image" )),
                                "background-position":"left",
                                "background-size":"1020px 680px"});
        $("#right_frame").css( {"background-image":($( "#Ground_small_3" ).css( "background-image" )),
                                "background-position":"right",
                                "background-size":"1020px 680px"});
        arrback[count] = $( "#Ground_small_3" ).css( "background-image" );
    });

    $("#Ground_small_4").click(function() {
        $("#left_frame").css( {"background-image":($( "#Ground_small_4" ).css( "background-image" )),
                                "background-position":"left",
                                "background-size":"1020px 680px"});
        $("#right_frame").css( {"background-image":($( "#Ground_small_4" ).css( "background-image" )),
                                "background-position":"right",
                                "background-size":"1020px 680px"});
        arrback[count] = $( "#Ground_small_4" ).css( "background-image" );
    });

    $("#Ground_small_5").click(function() {
        $("#left_frame").css( {"background-image":($( "#Ground_small_5" ).css( "background-image" )),
                                "background-position":"left",
                                "background-size":"1020px 680px"});
        $("#right_frame").css( {"background-image":($( "#Ground_small_5" ).css( "background-image" )),
                                "background-position":"right",
                                "background-size":"1020px 680px"});
        arrback[count] = $( "#Ground_small_5" ).css( "background-image" );
    });
}


// 사용자가 적은 글 보여주기
function show_text() {

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            if (count == 1) {
                arrtext[0].push($("#input_text").val());
                $("#question_string_text").text(arrtext[0].toString().replace(/,/g, " "));
                $('#input_text').val('');

            } else if (count == 4) {
                arrtext[1].push($("#input_text").val());
                $("#question_string_text").text(arrtext[1].toString().replace(/,/g, " "));
                $('#input_text').val('');

            } else if (count == 7) {
                arrtext[2].push($("#input_text").val());
                $("#question_string_text").text(arrtext[2].toString().replace(/,/g, " "));
                $('#input_text').val('');

            } else if (count == 10) {
                arrtext[3].push($("#input_text").val());
                $("#question_string_text").text(arrtext[3].toString().replace(/,/g, " "));
                $('#input_text').val('');

            } else if (count == 13) {
                arrtext[4].push($("#input_text").val());
                $("#question_string_text").text(arrtext[4].toString().replace(/,/g, " "));
                $('#input_text').val('');

            }
        }
    });
}

function sendToNextPage(){
    //다음페이지로 POST 데이터 넘기기
    alert("했는데?");
    jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);
    console.log(jsonData);

    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();

}

