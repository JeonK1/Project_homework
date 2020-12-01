// 사용자 위치
var count = 0;

// 사용자가 적용한 배경 저장
var arrback = new Array(5);
for(var i = 0; i < arrback.length; i++) {
    arrback[i] = "";
}

// 사용자가 적용한 배경 저장
var arrimg = new Array(4);
for(var i = 0; i < arrimg.length; i++) {
    arrimg[i] = "";
}

// 각 페이지 정보들 (배경 제외) display width height top left
var expos_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < expos_info.length; i++){
    expos_info[i] = new Array(); // 발단
}
var compli_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < compli_info.length; i++){
    compli_info[i] = new Array(); // 전개
}
var crisis_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < crisis_info.length; i++){
    crisis_info[i] = new Array(); // 위기
}
var climax_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < climax_info.length; i++){
    climax_info[i] = new Array(); // 절정
}
var result_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < result_info.length; i++){
    result_info[i] = new Array(); // 결말
}

function move_book(){

    // 왼쪽 넘기기 버튼 눌렀을 때
    $("#left_move").click(function () {
        count -= 1;
        if(count < 0) count += 1;
        else view_book(count);
    });


    // 오른쪽 넘기기 버튼 눌렀을 때
    $("#right_move").click(function () {
        count += 1;
        if(count > 4) count -= 1;
        else view_book(count);
    });


}

function view_book(count){

    switch(count){
        case 0:
            $("#reading_border").css( {"background-image":arrback[count],
                                "background-size":"cover"});
            $("#decorate_ch_1").css({"display":expos_info[0][0],
                                        "width":expos_info[0][1],
                                        "height":expos_info[0][2],
                                        "top":expos_info[0][3],
                                        "left":expos_info[0][4],
                                        "background":arrimg[0]});
            $("#decorate_ch_2").css({"display":expos_info[1][0],
                                        "width":expos_info[1][1],
                                        "height":expos_info[1][2],
                                        "top":expos_info[1][3],
                                        "left":expos_info[1][4],
                                        "background":arrimg[1]});
            $("#decorate_ch_3").css({"display":expos_info[2][0],
                                        "width":expos_info[2][1],
                                        "height":expos_info[2][2],
                                        "top":expos_info[2][3],
                                        "left":expos_info[2][4],
                                        "background":arrimg[2]});
            $("#decorate_ch_4").css({"display":expos_info[3][0],
                                        "width":expos_info[3][1],
                                        "height":expos_info[3][2],
                                        "top":expos_info[3][3],
                                        "left":expos_info[3][4],
                                        "background":arrimg[3]});
            $("#text_box").text(arrtext[0].toString().replace(/,/g," "));
            $("#text_box").css({"display":expos_info[4][0],
                                        "width":expos_info[4][1],
                                        "height":expos_info[4][2],
                                        "top":expos_info[4][3],
                                        "left":expos_info[4][4]});
            break;
        case 1:
            $("#reading_border").css( {"background-image":arrback[count],
                                "background-size":"cover"});
            $("#decorate_ch_1").css({"display":compli_info[0][0],
                                        "width":compli_info[0][1],
                                        "height":compli_info[0][2],
                                        "top":compli_info[0][3],
                                        "left":compli_info[0][4],
                                        "background":arrimg[0]});
            $("#decorate_ch_2").css({"display":compli_info[1][0],
                                        "width":compli_info[1][1],
                                        "height":compli_info[1][2],
                                        "top":compli_info[1][3],
                                        "left":compli_info[1][4],
                                        "background":arrimg[1]});
            $("#decorate_ch_3").css({"display":compli_info[2][0],
                                        "width":compli_info[2][1],
                                        "height":compli_info[2][2],
                                        "top":compli_info[2][3],
                                        "left":compli_info[2][4],
                                        "background":arrimg[2]});
            $("#decorate_ch_4").css({"display":compli_info[3][0],
                                        "width":compli_info[3][1],
                                        "height":compli_info[3][2],
                                        "top":compli_info[3][3],
                                        "left":compli_info[3][4],
                                        "background":arrimg[3]});
            $("#text_box").text(arrtext[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":compli_info[4][0],
                                        "width":compli_info[4][1],
                                        "height":compli_info[4][2],
                                        "top":compli_info[4][3],
                                        "left":compli_info[4][4]});
            break;
        case 2:
            $("#reading_border").css( {"background-image":arrback[count],
                                "background-size":"cover"});
            $("#decorate_ch_1").css({"display":crisis_info[0][0],
                                        "width":crisis_info[0][1],
                                        "height":crisis_info[0][2],
                                        "top":crisis_info[0][3],
                                        "left":crisis_info[0][4],
                                        "background":arrimg[0]});
            $("#decorate_ch_2").css({"display":crisis_info[1][0],
                                        "width":crisis_info[1][1],
                                        "height":crisis_info[1][2],
                                        "top":crisis_info[1][3],
                                        "left":crisis_info[1][4],
                                        "background":arrimg[1]});
            $("#decorate_ch_3").css({"display":crisis_info[2][0],
                                        "width":crisis_info[2][1],
                                        "height":crisis_info[2][2],
                                        "top":crisis_info[2][3],
                                        "left":crisis_info[2][4],
                                        "background":arrimg[2]});
            $("#decorate_ch_4").css({"display":crisis_info[3][0],
                                        "width":crisis_info[3][1],
                                        "height":crisis_info[3][2],
                                        "top":crisis_info[3][3],
                                        "left":crisis_info[3][4],
                                        "background":arrimg[3]});
            $("#text_box").text(arrtext[2].toString().replace(/,/g," "));
            $("#text_box").css({"display":crisis_info[4][0],
                                        "width":crisis_info[4][1],
                                        "height":crisis_info[4][2],
                                        "top":crisis_info[4][3],
                                        "left":crisis_info[4][4]});
            break;
        case 3:
            $("#reading_border").css( {"background-image":arrback[count],
                                "background-size":"cover"});
            $("#decorate_ch_1").css({"display":climax_info[0][0],
                                        "width":climax_info[0][1],
                                        "height":climax_info[0][2],
                                        "top":climax_info[0][3],
                                        "left":climax_info[0][4],
                                        "background":arrimg[0]});
            $("#decorate_ch_2").css({"display":climax_info[1][0],
                                        "width":climax_info[1][1],
                                        "height":climax_info[1][2],
                                        "top":climax_info[1][3],
                                        "left":climax_info[1][4],
                                        "background":arrimg[1]});
            $("#decorate_ch_3").css({"display":climax_info[2][0],
                                        "width":climax_info[2][1],
                                        "height":climax_info[2][2],
                                        "top":climax_info[2][3],
                                        "left":climax_info[2][4],
                                        "background":arrimg[2]});
            $("#decorate_ch_4").css({"display":climax_info[3][0],
                                        "width":climax_info[3][1],
                                        "height":climax_info[3][2],
                                        "top":climax_info[3][3],
                                        "left":climax_info[3][4],
                                        "background":arrimg[3]});
            $("#text_box").text(arrtext[3].toString().replace(/,/g," "));
            $("#text_box").css({"display":climax_info[4][0],
                                        "width":climax_info[4][1],
                                        "height":climax_info[4][2],
                                        "top":climax_info[4][3],
                                        "left":climax_info[4][4]});
            break;
        case 4:
            $("#reading_border").css( {"background-image":arrback[count],
                                "background-size":"cover"});
            $("#decorate_ch_1").css({"display":result_info[0][0],
                                        "width":result_info[0][1],
                                        "height":result_info[0][2],
                                        "top":result_info[0][3],
                                        "left":result_info[0][4],
                                        "background":arrimg[0]});
            $("#decorate_ch_2").css({"display":result_info[1][0],
                                        "width":result_info[1][1],
                                        "height":result_info[1][2],
                                        "top":result_info[1][3],
                                        "left":result_info[1][4],
                                        "background":arrimg[1]});
            $("#decorate_ch_3").css({"display":result_info[2][0],
                                        "width":result_info[2][1],
                                        "height":result_info[2][2],
                                        "top":result_info[2][3],
                                        "left":result_info[2][4],
                                        "background":arrimg[2]});
            $("#decorate_ch_4").css({"display":result_info[3][0],
                                        "width":result_info[3][1],
                                        "height":result_info[3][2],
                                        "top":result_info[3][3],
                                        "left":result_info[3][4],
                                        "background":arrimg[3]});
            $("#text_box").text(arrtext[4].toString().replace(/,/g," "));
            $("#text_box").css({"display":result_info[4][0],
                                        "width":result_info[4][1],
                                        "height":result_info[4][2],
                                        "top":result_info[4][3],
                                        "left":result_info[4][4]});
            break;
    }
}