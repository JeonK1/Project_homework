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


// 아래 화살표를 눌렀을 때
function nextstep_move() {
    // 0-2 발단, 3-5 전개, 6-8 위기, 9-11 절정, 12-14 결말
    $("#question_base_text").html(expos.toString().replace(/,/g,'<br/>'));
    $("#Select_Ground_Card_Field").hide();
    $("#question_string").hide();
    $("#question_string_small").hide();
    $("#question_base_small").hide();
    $("#RightSidebar").hide();
    $("#camera").hide();

    $("#next_step").click(function () {
        count += 1;
        switch (count) {
            case 1:
                $( "#Field" ).css( "background-image", "");
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[0].toString().replace(/,/g," "));
                break;
            case 2:
                drag_character();
                $( "#Field" ).css( "background-image", arrback[0]);
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#question_string").hide();
                $("#Select_Ground_Card_Field").show();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 3:
                drag_character_stop();
                $("#STEP_1").css("background-color", "#D6ECD7");
                $("#STEP_1").css("box-shadow", '0px 0px 0px');
                $("#STEP_2").css("background-color", "#FFFFFF");
                $("#STEP_2").css("box-shadow", '0 4px 4px #888');
                $( "#Field" ).css( "background-image", "");

                $("#question_base_text").html(compli.toString().replace(/,/g,'<br/>'))

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 4:
                $( "#Field" ).css( "background-image", "");
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[1].toString().replace(/,/g," "));
                break;
            case 5:
                drag_character();
                $( "#Field" ).css( "background-image", arrback[1]);
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#question_string").hide();
                $("#Select_Ground_Card_Field").show();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 6:
                drag_character_stop();
                $("#STEP_2").css("background-color", "#D6ECD7");
                $("#STEP_2").css("box-shadow", '0px 0px 0px');
                $("#STEP_3").css("background-color", "#FFFFFF");
                $("#STEP_3").css("box-shadow", '0 4px 4px #888');
                $( "#Field" ).css( "background-image", "");

                $("#question_base_text").html(crisis.toString().replace(/,/g,'<br/>'))

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 7:
                $( "#Field" ).css( "background-image", "");
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[2].toString().replace(/,/g," "));
                break;
            case 8:
                drag_character();
                $( "#Field" ).css( "background-image", arrback[2]);
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#question_string").hide();
                $("#Select_Ground_Card_Field").show();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 9:
                drag_character_stop();
                $("#STEP_3").css("background-color", "#D6ECD7");
                $("#STEP_3").css("box-shadow", '0px 0px 0px');
                $("#STEP_4").css("background-color", "#FFFFFF");
                $("#STEP_4").css("box-shadow", '0 4px 4px #888');
                $( "#Field" ).css( "background-image", "");

                $("#question_base_text").html(climax.toString().replace(/,/g,'<br/>'))

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 10:
                $( "#Field" ).css( "background-image", "");
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[3].toString().replace(/,/g," "));
                break;
            case 11:
                drag_character();
                $( "#Field" ).css( "background-image", arrback[3]);
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#question_string").hide();
                $("#Select_Ground_Card_Field").show();
                $("#question_string_small").show();
                $("#RightSidebar").show();
                $("#camera").show();
                break;
            case 12:
                drag_character_stop();
                $("#STEP_4").css("background-color", "#D6ECD7");
                $("#STEP_4").css("box-shadow", '0px 0px 0px');
                $("#STEP_5").css("background-color", "#FFFFFF");
                $("#STEP_5").css("box-shadow", '0 4px 4px #888');
                $( "#Field" ).css( "background-image", "");

                $("#question_base_text").html(result.toString().replace(/,/g,'<br/>'))

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
            case 13:
                $( "#Field" ).css( "background-image", "");
                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[4].toString().replace(/,/g," "));
                break;
            case 14:
                drag_character();
                $( "#Field" ).css( "background-image", arrback[4]);
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#question_string").hide();
                $("#Select_Ground_Card_Field").show();
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
        $( "#Field" ).css( "background-image", "");


        $("#question_base_text").html(expos.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');
        $("#Select_Ground_Card_Field").hide();

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
        $( "#Field" ).css( "background-image", "");

        $("#question_base_text").html(compli.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');
        $("#Select_Ground_Card_Field").hide();

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
        $( "#Field" ).css( "background-image", "");

        $("#question_base_text").html(crisis.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');
        $("#Select_Ground_Card_Field").hide();

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
        $( "#Field" ).css( "background-image", "");

        $("#question_base_text").html(climax.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');
        $("#Select_Ground_Card_Field").hide();

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
        $( "#Field" ).css( "background-image", "");

        $("#question_base_text").html(result.toString().replace(/,/g,'<br/>'))
        $("#input_text").attr("disabled", true);
        $('#input_text').val('');
        $("#question_string_text").text('');
        $("#Select_Ground_Card_Field").hide();

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
function question_small_move(){

    $("#question_base_small").click(function(){
        switch(count){
            case 1:
            case 2:
                count = 0;
                // 배경 초기화
                $( "#Field" ).css( "background-image", "");
                // 질문
                $("#question_base_text").html(expos.toString().replace(/,/g,'<br/>'))
                // 텍스트 박스 비활성화 / 초기화
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                // 텍스트 입력 초기화
                $("#question_string_text").text('');
                // 배경 선택 숨기기
                $("#Select_Ground_Card_Field").hide();

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;

            case 4:
            case 5:
                count = 3;
                $( "#Field" ).css( "background-image", "");
                $("#question_base_text").html(compli.toString().replace(/,/g,'<br/>'))
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#Select_Ground_Card_Field").hide();

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;

            case 7:
            case 8:
                count = 6;
                $( "#Field" ).css( "background-image", "");
                $("#question_base_text").html(crisis.toString().replace(/,/g,'<br/>'))
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#Select_Ground_Card_Field").hide();

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;

            case 10:
            case 11:
                count = 9;
                $( "#Field" ).css( "background-image", "");
                $("#question_base_text").html(climax.toString().replace(/,/g,'<br/>'))
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#Select_Ground_Card_Field").hide();

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;

            case 13:
            case 14:
                count = 12;
                $( "#Field" ).css( "background-image", "");
                $("#question_base_text").html(result.toString().replace(/,/g,'<br/>'))
                $("#input_text").attr("disabled", true);
                $('#input_text').val('');
                $("#question_string_text").text('');
                $("#Select_Ground_Card_Field").hide();

                $("#RightSidebar").hide();
                $("#camera").hide();
                $("#question_string").hide();
                $("#question_string_small").hide();
                $("#question_base_small").hide();
                $("#question_base").show();
                break;
        }
    });

    $("#question_string_small").click(function(){
        switch(count){
            case 2:
                count = 1;
                $( "#Field" ).css( "background-image", "");
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#RightSidebar").hide();
                $("#camera").hide();

                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[0].toString().replace(/,/g," "));
                break;
            case 5:
                count = 4;
                $( "#Field" ).css( "background-image", "");
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#RightSidebar").hide();
                $("#camera").hide();

                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[1].toString().replace(/,/g," "));
                break;
            case 8:
                count = 7;
                $( "#Field" ).css( "background-image", "");
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#RightSidebar").hide();
                $("#camera").hide();

                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[2].toString().replace(/,/g," "));
                break;
            case 11:
                count = 10;
                $( "#Field" ).css( "background-image", "");
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#RightSidebar").hide();
                $("#camera").hide();

                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[3].toString().replace(/,/g," "));
                break;
            case 14:
                count = 13;
                $( "#Field" ).css( "background-image", "");
                $("#Select_Ground_Card_Field").hide();
                $("#question_string_small").hide();
                $("#RightSidebar").hide();
                $("#camera").hide();

                $("#input_text").attr("disabled", false);
                $("#question_base").hide();
                $("#question_string").show();
                $("#question_base_small").show();
                $("#question_string_text").text(arrtext[4].toString().replace(/,/g," "));
                break;
            }

    });
}
// 등장인물 배치하기
function drag_character(){

    var cloneElements = new Array(4);
    cloneElements[0] = $('#Card_small_1').clone();
    cloneElements[1] = $('#Card_small_2').clone();
    cloneElements[2] = $('#Card_small_3').clone();
    cloneElements[3] = $('#Card_small_4').clone();
    // 변수 cloneElements를 만들어 복사된 요소들을 저장

    for(var i = 0; i < cloneElements.length; i++)
        cloneElements[i].appendTo('#Select_Character_Card_Field').css("z-index","1");


    $("#Card_small_1").draggable();
    $("#Card_small_1").resizable({
        //함께 커질영역
        alsoResize: ".wrap-box",
        animateDuration: 300,
        animateEasing: "swing",
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true,
        //minHeight, maxHeight, minWidth, maxWidth 최소,최대 크기지정
    });

    $("#Card_small_2").draggable();
    $("#Card_small_2").resizable({
        //함께 커질영역
        alsoResize: ".wrap-box",
        animateDuration: 300,
        animateEasing: "swing",
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true,
        //minHeight, maxHeight, minWidth, maxWidth 최소,최대 크기지정
    });
    $("#Card_small_3").draggable();
    $("#Card_small_3").resizable({
        //함께 커질영역
        alsoResize: ".wrap-box",
        animateDuration: 300,
        animateEasing: "swing",
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true,
        //minHeight, maxHeight, minWidth, maxWidth 최소,최대 크기지정
    });
    $("#Card_small_4").draggable();
    $("#Card_small_4").resizable({
        //함께 커질영역
        alsoResize: ".wrap-box",
        animateDuration: 300,
        animateEasing: "swing",
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true,
        //minHeight, maxHeight, minWidth, maxWidth 최소,최대 크기지정
    });
}
function drag_character_stop() {
    $("#Card_small_1").draggable({ disabled: true });
    $("#Card_small_1").resizable({ disabled: true });
    $("#Card_small_2").draggable({ disabled: true });
    $("#Card_small_2").resizable({ disabled: true });
    $("#Card_small_3").draggable({ disabled: true });
    $("#Card_small_3").resizable({ disabled: true });
    $("#Card_small_4").draggable({ disabled: true });
    $("#Card_small_4").resizable({ disabled: true });
}


// 배경 만들기
function select_background(){
    var remain = 0;
    var quotie = 0;
    var sum = 0; // 0~4 까지 어디에 넣는 배경인지
    $("#Ground_small_1").click(function () {
        remain = parseInt(count / 3);
        quotie = count % 3;
        sum = remain + quotie - 2;
        $( "#Field" ).css( "background-image",($( "#Ground_small_1" ).css( "background-image" )));
        arrback[sum] = $( "#Ground_small_1" ).css( "background-image" );
    });

    $("#Ground_small_2").click(function () {
        remain = parseInt(count / 3);
        quotie = count % 3;
        sum = remain + quotie - 2;
        $( "#Field" ).css( "background-image",($( "#Ground_small_2" ).css( "background-image" )));
        arrback[sum] = $( "#Ground_small_2" ).css( "background-image" );
    });

    $("#Ground_small_3").click(function () {
        remain = parseInt(count / 3);
        quotie = count % 3;
        sum = remain + quotie - 2;
        $( "#Field" ).css( "background-image",($( "#Ground_small_3" ).css( "background-image" )));
        arrback[sum] = $( "#Ground_small_3" ).css( "background-image" );
    });

    $("#Ground_small_4").click(function () {
        remain = parseInt(count / 3);
        quotie = count % 3;
        sum = remain + quotie - 2;
        $( "#Field" ).css( "background-image",($( "#Ground_small_4" ).css( "background-image" )));
        arrback[sum] = $( "#Ground_small_4" ).css( "background-image" );
    });
}
