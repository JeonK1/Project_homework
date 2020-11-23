// 사용자 위치
var count = 0;

// 아래 화살표를 눌렀을 때
function nextstep_move() {
    // 0-2 발단, 3-5 전개, 6-8 위기, 9-11 절정, 12-14 결말
    $("#question_base_text").text("아")
    $("#question_string").hide();
    $("#question_string_small").hide();
    $("#question_base_small").hide();
    $("#RightSidebar").hide();
    $("#camera").hide();

    $("#next_step").click(function () {
        count += 1;
        switch (count) {
            case 1:
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 2:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 3:
                $("#STEP_1").css("background-color", "#D6ECD7");
                $("#STEP_1").css("box-shadow", '0px 0px 0px');
                $("#STEP_2").css("background-color", "#FFFFFF");
                $("#STEP_2").css("box-shadow", '0 4px 4px #888');

                $("#question_base_text").text("왜이리")

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 4:
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 5:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 6:
                $("#STEP_2").css("background-color", "#D6ECD7");
                $("#STEP_2").css("box-shadow", '0px 0px 0px');
                $("#STEP_3").css("background-color", "#FFFFFF");
                $("#STEP_3").css("box-shadow", '0 4px 4px #888');

                $("#question_base_text").text("시끄러운")

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 7:
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 8:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 9:
                $("#STEP_3").css("background-color", "#D6ECD7");
                $("#STEP_3").css("box-shadow", '0px 0px 0px');
                $("#STEP_4").css("background-color", "#FFFFFF");
                $("#STEP_4").css("box-shadow", '0 4px 4px #888');

                $("#question_base_text").text("것이냐")

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 10:
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 11:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 12:
                $("#STEP_4").css("background-color", "#D6ECD7");
                $("#STEP_4").css("box-shadow", '0px 0px 0px');
                $("#STEP_5").css("background-color", "#FFFFFF");
                $("#STEP_5").css("box-shadow", '0 4px 4px #888');

                $("#question_base_text").text("두두둥장")

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 13:
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 14:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 15:
                count = 0;
                location.href = '/AI_Publisher/make_cover/'
                break;
        }
    });
}

function stepbar_move(){
    // STEP 발단 눌렀을 때
    $("#STEP_1").click(function() {
        count = 0;
        $("#STEP_1").css("background-color","#FFFFFF");
        $("#STEP_1").css("box-shadow",'0 4px 4px #888');
        $("#STEP_2").css("background-color","#D6ECD7");
        $("#STEP_2").css("box-shadow",'0px 0px 0px');
        $("#STEP_3").css("background-color","#D6ECD7");
        $("#STEP_3").css("box-shadow",'0px 0px 0px');
        $("#STEP_4").css("background-color","#D6ECD7");
        $("#STEP_4").css("box-shadow",'0px 0px 0px');
        $("#STEP_5").css("background-color","#D6ECD7");
        $("#STEP_5").css("box-shadow",'0px 0px 0px');


        $("#question_base_text").text("아")
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });

    // STEP 전개 눌렀을 때
    $("#STEP_2").click(function() {
        count = 3;
        $("#STEP_1").css("background-color","#D6ECD7");
        $("#STEP_1").css("box-shadow",'0px 0px 0px');
        $("#STEP_2").css("background-color","#FFFFFF");
        $("#STEP_2").css("box-shadow",'0 4px 4px #888');
        $("#STEP_3").css("background-color","#D6ECD7");
        $("#STEP_3").css("box-shadow",'0px 0px 0px');
        $("#STEP_4").css("background-color","#D6ECD7");
        $("#STEP_4").css("box-shadow",'0px 0px 0px');
        $("#STEP_5").css("background-color","#D6ECD7");
        $("#STEP_5").css("box-shadow",'0px 0px 0px');

        $("#question_base_text").text("왜이리")
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });

    // STEP 위기 눌렀을 때
    $("#STEP_3").click(function() {
        count = 6;
        $("#STEP_1").css("background-color","#D6ECD7");
        $("#STEP_1").css("box-shadow",'0px 0px 0px');
        $("#STEP_2").css("background-color","#D6ECD7");
        $("#STEP_2").css("box-shadow",'0px 0px 0px');
        $("#STEP_3").css("background-color","#FFFFFF");
        $("#STEP_3").css("box-shadow",'0 4px 4px #888');
        $("#STEP_4").css("background-color","#D6ECD7");
        $("#STEP_4").css("box-shadow",'0px 0px 0px');
        $("#STEP_5").css("background-color","#D6ECD7");
        $("#STEP_5").css("box-shadow",'0px 0px 0px');

        $("#question_base_text").text("시끄러운")
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });

    // STEP 절정 눌렀을 때
    $("#STEP_4").click(function() {
        count = 9;
        $("#STEP_1").css("background-color","#D6ECD7");
        $("#STEP_1").css("box-shadow",'0px 0px 0px');
        $("#STEP_2").css("background-color","#D6ECD7");
        $("#STEP_2").css("box-shadow",'0px 0px 0px');
        $("#STEP_3").css("background-color","#D6ECD7");
        $("#STEP_3").css("box-shadow",'0px 0px 0px');
        $("#STEP_4").css("background-color","#FFFFFF");
        $("#STEP_4").css("box-shadow",'0 4px 4px #888');
        $("#STEP_5").css("background-color","#D6ECD7");
        $("#STEP_5").css("box-shadow",'0px 0px 0px');

        $("#question_base_text").text("것이냐")
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });

    // STEP 결말 눌렀을 때
    $("#STEP_5").click(function() {
        count = 12;
        $("#STEP_1").css("background-color","#D6ECD7");
        $("#STEP_1").css("box-shadow",'0px 0px 0px');
        $("#STEP_2").css("background-color","#D6ECD7");
        $("#STEP_2").css("box-shadow",'0px 0px 0px');
        $("#STEP_3").css("background-color","#D6ECD7");
        $("#STEP_3").css("box-shadow",'0px 0px 0px');
        $("#STEP_4").css("background-color","#D6ECD7");
        $("#STEP_4").css("box-shadow",'0px 0px 0px');
        $("#STEP_5").css("background-color","#FFFFFF");
        $("#STEP_5").css("box-shadow",'0 4px 4px #888');

        $("#question_base_text").text("두두둥장")
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });
}

// 사용자가 적은 글 보여주기
function show_text(){
    var arrtext = new Array();

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            alert(count);
            $("#question_string_text").text($("#input_text").val());
        }
    });
}
// 질문글 보여주기


// 등장인물 배치하기

