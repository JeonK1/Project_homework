function make_story_move(){
    // 아래 화살표를 눌렀을 때
    // 0-2 발단, 3-5 전개, 6-8 위기, 9-11 절정, 12-14 결말
    $("#question_string").hide();
    $("#question_string_small").hide();
    $("#question_base_small").hide();
    $("#RightSidebar").hide();
    $("#camera").hide();

    var arrtext = new Array(5); //배열선언
    for (var i = 0; i < arrtext.length; i++){
        arrtext[i] = new Array(3)
    }

    var count = 0;
    $("#next_step").click(function() {
        count += 1;
        switch(count){
            case 1:
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 2:
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 3:
                $("#STEP_1").css("background-color","#D6ECD7");
                $("#STEP_1").css("box-shadow",'0px 0px 0px');
                $("#STEP_2").css("background-color","#FFFFFF");
                $("#STEP_2").css("box-shadow",'0 4px 4px #888');

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 4:
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 5:
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 6:
                $("#STEP_2").css("background-color","#D6ECD7");
                $("#STEP_2").css("box-shadow",'0px 0px 0px');
                $("#STEP_3").css("background-color","#FFFFFF");
                $("#STEP_3").css("box-shadow",'0 4px 4px #888');

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 7:
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 8:
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 9:
                $("#STEP_3").css("background-color","#D6ECD7");
                $("#STEP_3").css("box-shadow",'0px 0px 0px');
                $("#STEP_4").css("background-color","#FFFFFF");
                $("#STEP_4").css("box-shadow",'0 4px 4px #888');

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 10:
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 11:
                $("#question_string").hide();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 12:
                $("#STEP_4").css("background-color","#D6ECD7");
                $("#STEP_4").css("box-shadow",'0px 0px 0px');
                $("#STEP_5").css("background-color","#FFFFFF");
                $("#STEP_5").css("box-shadow",'0 4px 4px #888');

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 13:
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                break;
            case 14:
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

        $("#RightSidebar").hide();
        $("#camera").hide();
        $("#question_string").hide();
        $("#question_string_small").hide();
        $("#question_base_small").hide();
        $("#question_base").show();
    });

    // text 적기
    $("#input_text_box").keydown(function(key) {
        if(key.keyCode == 13){

        }
    });

    // question_text
    // 발단
    // - <주인공> 에게 <배경>은 어떤 곳인가요?
    // - <주인공>과 <사건>은 어떤 관련이 있나요?
    // - <주인공> 은 <상대> 에게 왜 <감정1>을 느끼나요?
    //
    // 전개
    // - <주인공>은 어떻게 <사건>을 해결하고자 하나요?
    // - 왜 <주인공>은 <감정1> 에서 <감정2>가 되었나요?
    //
    // 위기
    // - 왜 <주인공>은 <감정2> 에서 <감정3>가 되었나요?
    //
    // 절정
    // - 왜 <주인공>은 <감정3> 에서 <감정4>가 되었나요?
    //
    // 결말
    // - 왜 <주인공>은 <감정4> 에서 <감정5>가 되었나요?
    // - 이 이야기의 결말은 어떻게 되나요?

}