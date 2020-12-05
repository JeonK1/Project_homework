// 사용자 위치
var count = 0;

// 저장되는 순서들
// display imgUrl width height top left
// 각 페이지 정보들 (배경 제외) display width height top left
var expos_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < expos_info.length; i++){
    expos_info[i] = "" // 발단
}
var compli_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < compli_info.length; i++){
    compli_info[i] = "" // 전개
}
var crisis_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < crisis_info.length; i++){
    crisis_info[i] = "" // 위기
}
var climax_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < climax_info.length; i++){
    climax_info[i] = "" // 절정
}
var result_info = new Array(5); // 0-3 캐릭터 정보 4 글상자 정보
for (var i = 0; i < result_info.length; i++){
    result_info[i] = "" // 결말
}

function move_book(){

    view_book(count);

    // 왼쪽 넘기기 버튼 눌렀을 때
    $("#noris_icon").click(function () {
        count -= 1;
        if(count < 0) count += 1;
        else view_book(count);
    });


    // 오른쪽 넘기기 버튼 눌렀을 때
    $("#two_finger").click(function () {
        count += 1;
        if(count > 4) count -= 1;
        else view_book(count);
    });


}

function view_book(count){

    jsonData = document.getElementById("jsonData").value;
    // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);

    var change = document.getElementById("bookData").value.replace('[[[',"[[");
    change = change.replace(']]]',"]]");
    change = change.replaceAll("'","");
    var change2 = document.getElementById("groundData").value.replace('[[[',"[[");
    change2 = change2.replace(']]]',"]]");
    change2 = change2.replaceAll("'","");

    var book_data = change.split(']], ');
    var ground_data = change2.split(']], ');

    for(var i = 0; i< book_data.length; i++){
        book_data[i] = book_data[i] + "]]";
        book_data[i] = book_data[i].replace(']]]]',"]]");
        //alert(book_data[i])
    }

    for(var i = 0; i< ground_data.length; i++){
        ground_data[i] = ground_data[i] + "]]";
        ground_data[i] = ground_data[i].replace(']]]]',"]]");
        //alert(book_data[i])
    }
    // 저장되는 순서들
    // display imgUrl width height top left
    cover_info = book_data[0]; // 커버
    expos_info = book_data[1]; // 발단
    compli_info = book_data[2]; // 전개
    crisis_info = book_data[3]; // 위기
    climax_info = book_data[4]; // 절정
    result_info = book_data[5]; // 결말

    cover = ground_data[0]; // 커버
    expos = ground_data[1]; // 발단
    compli = ground_data[2]; // 전개
    crisis = ground_data[3]; // 위기
    climax = ground_data[4]; // 절정
    result = ground_data[5]; // 결말

    var String = cover_info.replace('[[',"[");
    String = String.replace(']]',"]");
    var String1 = expos_info.replace('[[',"[");
    String1 = String1.replace(']]',"]");
    var String2 = compli_info.replace('[[',"[");
    String2 = String2.replace(']]',"]");
    var String3 = crisis_info.replace('[[',"[");
    String3 = String3.replace(']]',"]");
    var String4 = climax_info.replace('[[',"[");
    String4 = String4.replace(']]',"]");
    var String5 = result_info.replace('[[',"[");
    String5 = String5.replace(']]',"]");

    cover_info = String.split('], ');
    expos_info = String1.split('], ');
    compli_info = String2.split('], ');
    crisis_info = String3.split('], ');
    climax_info = String4.split('], ');
    result_info = String5.split('], ');


    var string = cover.replace('[[',"");
    string = string.replace(']]',"");
    var string1 = expos.replace('[[',"[");
    string1 = string1.replace(']]',"]");
    var string2 = compli.replace('[[',"[");
    string2 = string2.replace(']]',"]");
    var string3 = crisis.replace('[[',"[");
    string3 = string3.replace(']]',"]");
    var string4 = climax.replace('[[',"[");
    string4 = string4.replace(']]',"]");
    var string5 = result.replace('[[',"[");
    string5 = string5.replace(']]',"]");

    cover = string.split(', ');
    expos = string1.split(', "');
    compli = string2.split(', "');
    crisis = string3.split(', "');
    climax = string4.split(', "');
    result = string5.split(', "');

    expos[1] = expos[1].substring(1, expos[1].length-3);
    compli[1] = compli[1].substring(1, compli[1].length-3);
    crisis[1] = crisis[1].substring(1, crisis[1].length-3);
    climax[1] = climax[1].substring(1, climax[1].length-3);
    result[1] = result[1].substring(1, result[1].length-3);


    expos[0] = expos[0].substring(1, expos[0].length);
    compli[0] = compli[0].substring(1, compli[0].length);
    crisis[0] = crisis[0].substring(1, crisis[0].length);
    climax[0] = climax[0].substring(1, climax[0].length);
    result[0] = result[0].substring(1, result[0].length);

    expos[0] = "url(\""+expos[0]+"\")";
    compli[0] = "url(\""+compli[0]+"\")";
    crisis[0] = "url(\""+crisis[0]+"\")";
    climax[0] = "url(\""+climax[0]+"\")";
    result[0] = "url(\""+result[0]+"\")";

    $("#title").text(cover[1]);

    for(var i = 0; i< cover_info.length; i++){
        cover_info[i] = cover_info[i] + "]";
        cover_info[i] = cover_info[i].replace(']]',"]");
        expos_info[i] = expos_info[i] + "]";
        expos_info[i] = expos_info[i].replace(']]',"]");
        compli_info[i] = compli_info[i] + "]";
        compli_info[i] = compli_info[i].replace(']]',"]");
        crisis_info[i] = crisis_info[i] + "]";
        crisis_info[i] = crisis_info[i].replace(']]',"]");
        climax_info[i] = climax_info[i] + "]";
        climax_info[i] = climax_info[i].replace(']]',"]");
        result_info[i] = result_info[i] + "]";
        result_info[i] = result_info[i].replace(']]',"]");

        sub_string = cover_info[i].replace('[',"");
        sub_string = sub_string.replace(']',"");
        sub_string = sub_string.replaceAll("'","");
        cover_info[i] = sub_string.split(', ');

        sub_string1 = expos_info[i].replace('[',"");
        sub_string1 = sub_string1.replace(']',"");
        sub_string1 = sub_string1.replaceAll("'","");
        expos_info[i] = sub_string1.split(', ');

        sub_string2 = compli_info[i].replace('[',"");
        sub_string2 = sub_string2.replace(']',"");
        sub_string2 = sub_string2.replaceAll("'","");
        compli_info[i] = sub_string2.split(', ');

        sub_string3 = crisis_info[i].replace('[',"");
        sub_string3 = sub_string3.replace(']',"");
        sub_string3 = sub_string3.replaceAll("'","");
        crisis_info[i] = sub_string3.split(', ');

        sub_string4 = climax_info[i].replace('[',"");
        sub_string4 = sub_string4.replace(']',"");
        sub_string4 = sub_string4.replaceAll("'","");
        climax_info[i] = sub_string4.split(', ');

        sub_string5 = result_info[i].replace('[',"");
        sub_string5 = sub_string5.replace(']',"");
        sub_string5 = sub_string5.replaceAll("'","");
        result_info[i] = sub_string5.split(', ');

        expos_info[i][1] = "url(\""+expos_info[i][1]+"\")";
        compli_info[i][1] = "url(\""+compli_info[i][1]+"\")";
        crisis_info[i][1] = "url(\""+crisis_info[i][1]+"\")";
        climax_info[i][1] = "url(\""+climax_info[i][1]+"\")";
        result_info[i][1] = "url(\""+result_info[i][1]+"\")";
    }




    switch(count){
        case 0:
            $("#main_border").css( {"background-image":expos[0],
                                "background-size":"cover"});
            for(var i = 1; i < expos_info.length; i++){
                $("#Card_small_"+i).css({"display":expos_info[i][0],
                                        "width":expos_info[i][2],
                                        "height":expos_info[i][3],
                                        "top":expos_info[i][4],
                                        "left":expos_info[i][5],
                                        "background":expos_info[i][1],
                                        "background-size":"contain",
                                        "background-repeat": "no-repeat",
                                        "background-position":"center bottom",
                                        "position": "absolute"});
            }
            $("#text_box").text(expos[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":expos_info[0][0],
                                        "width":expos_info[0][2],
                                        "height":expos_info[0][3],
                                        "top":expos_info[0][4],
                                        "left":expos_info[0][5],
                                        "position": "absolute"});
            break;
        case 1:
            $("#main_border").css( {"background-image":compli[0],
                                "background-size":"cover"});
            for(var i = 1; i < compli_info.length; i++){
                $("#Card_small_"+i).css({"display":compli_info[i][0],
                                        "width":compli_info[i][2],
                                        "height":compli_info[i][3],
                                        "top":compli_info[i][4],
                                        "left":compli_info[i][5],
                                        "background":compli_info[i][1],
                                        "background-size":"contain",
                                        "background-repeat": "no-repeat",
                                        "background-position":"center bottom",
                                        "position": "absolute"});
            }
            $("#text_box").text(compli[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":compli_info[0][0],
                                        "width":compli_info[0][2],
                                        "height":compli_info[0][3],
                                        "top":compli_info[0][4],
                                        "left":compli_info[0][5],
                                        "position": "absolute"});
            break;
        case 2:
            $("#main_border").css( {"background-image":crisis[0],
                                "background-size":"cover"});
            for(var i = 1; i < crisis_info.length; i++){
                $("#Card_small_"+i).css({"display":crisis_info[i][0],
                                        "width":crisis_info[i][2],
                                        "height":crisis_info[i][3],
                                        "top":crisis_info[i][4],
                                        "left":crisis_info[i][5],
                                        "background":crisis_info[i][1],
                                        "background-size":"contain",
                                        "background-repeat": "no-repeat",
                                        "background-position":"center bottom",
                                        "position": "absolute"});
            }
            $("#text_box").text(crisis[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":crisis_info[0][0],
                                        "width":crisis_info[0][2],
                                        "height":crisis_info[0][3],
                                        "top":crisis_info[0][4],
                                        "left":crisis_info[0][5],
                                        "position": "absolute"});
            break;
        case 3:
            $("#main_border").css( {"background-image":climax[0],
                                "background-size":"cover"});
            for(var i = 1; i < climax_info.length; i++){
                $("#Card_small_"+i).css({"display":climax_info[i][0],
                                        "width":climax_info[i][2],
                                        "height":climax_info[i][3],
                                        "top":climax_info[i][4],
                                        "left":climax_info[i][5],
                                        "background":climax_info[i][1],
                                        "background-size":"contain",
                                        "background-repeat": "no-repeat",
                                        "background-position":"center bottom",
                                        "position": "absolute"});
            }
            $("#text_box").text(climax[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":climax_info[0][0],
                                        "width":climax_info[0][2],
                                        "height":climax_info[0][3],
                                        "top":climax_info[0][4],
                                        "left":climax_info[0][5],
                                        "position": "absolute"});
            break;
        case 4:
            $("#main_border").css( {"background-image":result[0],
                                "background-size":"cover"});
            for(var i = 1; i < result_info.length; i++){
                $("#Card_small_"+i).css({"display":result_info[i][0],
                                        "width":result_info[i][2],
                                        "height":result_info[i][3],
                                        "top":result_info[i][4],
                                        "left":result_info[i][5],
                                        "background":result_info[i][1],
                                        "background-size":"contain",
                                        "background-repeat": "no-repeat",
                                        "background-position":"center bottom",
                                        "position": "absolute"});
            }
            $("#text_box").text(result[1].toString().replace(/,/g," "));
            $("#text_box").css({"display":result_info[0][0],
                                        "width":result_info[0][2],
                                        "height":result_info[0][3],
                                        "top":result_info[0][4],
                                        "left":result_info[0][5],
                                        "position": "absolute"});
            break;
    }
}