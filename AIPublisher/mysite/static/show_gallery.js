
function set_page(){
//    var bookinfo = $("#userbook").val();    // 책 권수
//    var bookinfo_id = $("#userbooknum").val(); // DB bookinfo에서 bookno 값
//    var backgroundUrl = $("#mybackground").val(); // DB bookPage에 있는 배경url 값
//    var booktitle = $("#title").val(); // DB bookinfo에서 BookTitle 값

        //만든 책의 권수
    var String1 = document.getElementById("userbook").value.replace('[',"");
    madebook = String1.replace(']',"");


    //책 커버의 그림
    var String2 = document.getElementById("mybackground").value.replace('[',"");
    String2 = String2.replace(']',"");
    String2 = String2.replaceAll("'","");
    String2 = String2.replaceAll("'","");

    var backgroundfile = String2.split(', ');


    //책 제목
    var String3 = document.getElementById("title").value.replace('[',"");
    String3 = String3.replace(']',"");
    String3 = String3.replaceAll("'","");
    String3 = String3.replaceAll("'","");

    var title = String3.split(', ');
    console.log(title)

    //책 bookinfo_id 값
    var String4 = document.getElementById("userbooknum").value.replace('[',"");
    String4 = String4.replace(']',"");
    String4 = String4.replaceAll("'","");
    String4 = String4.replaceAll("'","");

    var booknum = String4.split(', ');

//    alert(madebook);
//    alert(backgroundfile[0]);
//    alert(title);
//    alert(booknum);


    $("#book1").css( {"background-image":backgroundfile[0],
                                "background-size":"cover"});
    $("#book1").html("1번책");
    $("#book2").css( {"background-image":backgroundfile[1],
                                "background-size":"cover"});
    $("#book2").html("2번책");
    $("#book3").css( {"background-image":backgroundfile[2],
                                "background-size":"cover"});
    $("#book3").html("3번책");

    $("#book1").click(function () {

        var jsonObject = new Object();
        jsonObject.bookinfo_id = booknum[0];
        var jsonData = JSON.stringify(jsonObject);
        console.log(jsonData);
        document.getElementById("jsonData").value = jsonData;
        document.getElementById("sendJson").submit();

    });

    $("#book2").click(function () {


        var jsonObject = new Object();
        jsonObject.bookinfo_id = booknum[1];
        var jsonData = JSON.stringify(jsonObject);
        console.log(jsonData);
        document.getElementById("jsonData").value = jsonData;
        document.getElementById("sendJson").submit();

    });

    $("#book3").click(function () {
        var jsonObject = new Object();
        jsonObject.bookinfo_id = booknum[2];
        var jsonData = JSON.stringify(jsonObject);
        console.log(jsonData);
        document.getElementById("jsonData").value = jsonData;
        document.getElementById("sendJson").submit();
    });



//    var pagecount = 1;
//    var index = 0;
//
//    //처음과 마지막 페이지에서 좌우로 움직이는 버튼 작동 X;
//    if(pagecount==1){
//        $("#left_move").hide();
//    }
//
//
//     $("#right_move").click(function() {
//
//            index = index + 3;
//            pagecount++;
//            if(pagecount<(madebook/3)) {
//                $("#left_move").show();
//                $("#storybook1").attr('src',backgroundfile[index]);
//                $("#storybook2").attr('src',backgroundfile[index + 1]);
//                $("#storybook3").attr('src',backgroundfile[index + 2]);
//                $("#storybook1_title_text").text(title[index]);
//                $("#storybook2_title_text").text(title[index + 1]);
//                $("#storybook3_title_text").text(title[index + 2]);
//
//            }
//            else
//            {
//                if((madebook%3)==1) {
//                    $("#storybook1").attr('src',backgroundfile[index]);
//                    $("#storybook2").attr('src'," ");
//                    $("#storybook3").attr('src'," ");
//                    $("#storybook1_title_text").text(title[index]);
//                    $("#storybook2_title_text").text(" ");
//                    $("#storybook3_title_text").text(" ");
//                    $("#storybook2_title").hide();
//                    $("#storybook3_title").hide();
//                    $("#storybook2_btn").hide();
//                    $("#storybook3_btn").hide();
//                    $("#right_move").hide();
//                    $("#left_move").show();
//                }
//                else if((madebook%3)==2) {
//                    $("#storybook1").attr('src',backgroundfile[index]);
//                    $("#storybook2").attr('src',backgroundfile[index + 1]);
//                    $("#storybook3").attr('src'," ");
//                    $("#storybook1_title_text").text(title[index]);
//                    $("#storybook2_title_text").text(title[index + 1]);
//                    $("#storybook3_title_text").text(" ");
//                    $("#storybook3_title").hide();
//                    $("#storybook3_btn").hide();
//                    $("#right_move").hide();
//                    $("#left_move").show();
//                }
//                else {
//                    $("#left_move").show();
//                    $("#right_move").hide();
//                }
//
//            }
//        });
//
//    $("#left_move").click(function() {
//            index = index - 3;
//            pagecount--;
//            if(pagecount>=1) {
//                $("#right_move").show();
//                $("#storybook1").attr('src',backgroundfile[index]);
//                $("#storybook2").attr('src',backgroundfile[index + 1]);
//                $("#storybook3").attr('src',backgroundfile[index + 2]);
//                $("#storybook1_title_text").text(title[index]);
//                $("#storybook2_title_text").text(title[index + 1]);
//                $("#storybook3_title_text").text(title[index + 2]);
//                $("#storybook2_title").show();
//                $("#storybook3_title").show();
//                $("#storybook2_btn").show();
//                $("#storybook3_btn").show();
//                if(pagecount==1) {
//                    $("#left_move").hide();
//                }
//
//            }
//            else{
//
//                $("#right_move").show();
//                $("#left_move").hide();
//            }
//
//        });
}