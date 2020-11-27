// 사용자 위치
var count = 0;

// 사용자가 적은 글들 저장
var arrtext = new Array(5);
for(var i = 0; i < arrtext.length; i++){
    arrtext[i] = new Array()
}

// 사용자가 적용한 배경 저장
var arrback = new Array(5);


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

function make_move(){

    if(click_step() == true){
        count = click_step();
        display_window();
    }
    $("#button_next").click(function () {
        count += 1;
        display_window();
    });
}

function click_background(){

    $("#Ground_small_1").click(function () {

        $( "#left_frame" ).css( {"background-image" : ($( "#Ground_small_1" ).css( "background-image" )),
                                  "background-position":"left","background-size":"cover"});

        $( "#right_frame" ).css( {"background-image" : ($( "#Ground_small_1" ).css( "background-image" )),
                                  "background-position":"right","background-size":"cover"});
    });
    $("#Ground_small_2").click(function () {

        $( "#left_frame" ).css( {"background-image" : ($( "#Ground_small_2" ).css( "background-image" )),
                                  "background-position":"left","background-size":"cover"});

        $( "#right_frame" ).css( {"background-image" : ($( "#Ground_small_2" ).css( "background-image" )),
                                  "background-position":"right","background-size":"cover"});
    });
    $("#Ground_small_3").click(function () {

        $( "#left_frame" ).css( {"background-image" : ($( "#Ground_small_3" ).css( "background-image" )),
                                  "background-position":"left","background-size":"cover"});

        $( "#right_frame" ).css( {"background-image" : ($( "#Ground_small_3" ).css( "background-image" )),
                                  "background-position":"right","background-size":"cover"});
    });
    $("#Ground_small_4").click(function () {

        $( "#left_frame" ).css( {"background-image" : ($( "#Ground_small_4" ).css( "background-image" )),
                                  "background-position":"left","background-size":"cover"});

        $( "#right_frame" ).css( {"background-image" : ($( "#Ground_small_4" ).css( "background-image" )),
                                  "background-position":"right","background-size":"cover"});
    });
}

function click_step(){
    $("#STEP_1").click(function () {
        alert("678")
        count = 0;
    });
    $("#STEP_2").click(function () {
        count = 1;
    });
    $("#STEP_3").click(function () {
        count = 2;
    });
    $("#STEP_4").click(function () {
        count = 3;
    });
    $("#STEP_5").click(function () {
        count = 4;
    });

    return count;
}

function display_window(){
    $("#RightSidebar").hide();
    switch(count){
        //발단
        case 0:
        $("#RightSidebar").hide();
            break;
        //전개
        case 1:
        click_background();
        $("#RightSidebar").show();
        $("#STEP_1").css('background','#E6E2CF');
        $("#STEP_1_TEXT").css('color','#666666');
        $("#STEP_2").css('background','#B9E4C9');
        $("#STEP_2_TEXT").css('color','#000000');
            break;
        //위기
        case 2:
        click_background();
        $("#RightSidebar").show();
        $("#STEP_2").css('background','#E6E2CF');
        $("#STEP_2_TEXT").css('color','#666666');
        $("#STEP_3").css('background','#B9E4C9');
        $("#STEP_3_TEXT").css('color','#000000');
            break;
        //절정
        case 3:
        click_background();
        $("#RightSidebar").show();
        $("#STEP_3").css('background','#E6E2CF');
        $("#STEP_3_TEXT").css('color','#666666');
        $("#STEP_4").css('background','#B9E4C9');
        $("#STEP_4_TEXT").css('color','#000000');
            break;
        //결말
        case 4:
        click_background();
        $("#RightSidebar").show();
        $("#STEP_4").css('background','#E6E2CF');
        $("#STEP_4_TEXT").css('color','#666666');
        $("#STEP_5").css('background','#B9E4C9');
        $("#STEP_5_TEXT").css('color','#000000');
            break;
        // 종료
        case 5:
            break;
    }

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

