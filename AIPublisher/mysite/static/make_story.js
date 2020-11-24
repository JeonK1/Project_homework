// 사용자 위치
var count = 0;

// 사용자가 적은 글들 저장
var arrtext = new Array(5);
for(var i = 0; i < arrtext.length; i++){
    arrtext[i] = new Array()
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


// 아래 화살표를 눌렀을 때
function nextstep_move() {
    // 0-2 발단, 3-5 전개, 6-8 위기, 9-11 절정, 12-14 결말
    $("#question_base_text").html(expos.toString().replace(/,/g,'<br/>'));
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
                $("#question_string_text").text(arrtext[0].toString().replace(/,/g," "));
                break;
            case 2:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
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

                $("#question_base_text").html(compli.toString().replace(/,/g,'<br/>'))

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
                $("#question_string_text").text(arrtext[1].toString().replace(/,/g," "));
                break;
            case 5:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
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

                $("#question_base_text").html(crisis.toString().replace(/,/g,'<br/>'))

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
                $("#question_string_text").text(arrtext[2].toString().replace(/,/g," "));
                break;
            case 8:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
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

                $("#question_base_text").html(climax.toString().replace(/,/g,'<br/>'))

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
                $("#question_string_text").text(arrtext[3].toString().replace(/,/g," "));
                break;
            case 11:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
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

                $("#question_base_text").html(result.toString().replace(/,/g,'<br/>'))

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
                $("#question_string_text").text(arrtext[4].toString().replace(/,/g," "));
                break;
            case 14:
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
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


        $("#question_base_text").html(expos.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');

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

        $("#question_base_text").html(compli.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');

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

        $("#question_base_text").html(crisis.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');

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

        $("#question_base_text").html(climax.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');

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

        $("#question_base_text").html(result.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');

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

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            if(count == 1){
                arrtext[0].push($("#input_text").val());
                $("#question_string_text").text(arrtext[0].toString().replace(/,/g," "));
                $('#input_text').val('');

            } else if(count == 4){
                arrtext[1].push($("#input_text").val());
                $("#question_string_text").text(arrtext[1].toString().replace(/,/g," "));
                $('#input_text').val('');

            } else if(count == 7){
                arrtext[2].push($("#input_text").val());
                $("#question_string_text").text(arrtext[2].toString().replace(/,/g," "));
                $('#input_text').val('');

            } else if(count == 10){
                arrtext[3].push($("#input_text").val());
                $("#question_string_text").text(arrtext[3].toString().replace(/,/g," "));
                $('#input_text').val('');

            } else if(count == 13){
                arrtext[4].push($("#input_text").val());
                $("#question_string_text").text(arrtext[4].toString().replace(/,/g," "));
                $('#input_text').val('');

            }
        }
    });
}
// 질문글 보여주기

// 등장인물 배치하기

