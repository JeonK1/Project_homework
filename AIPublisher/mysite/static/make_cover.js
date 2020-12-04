var backArray;

// 사용자가 적용한 배경 저장
var arrback = ""

function get_background(personal = false) {
    backArray = document.getElementById("RightSidebar_scroll");
    var url_GET = '../get_background?data=';
    url_GET = url_GET + JSON.stringify({"personal": personal});
    var req = new XMLHttpRequest();
    req.open('GET', url_GET, true);
    req.responseType = 'json';
    req.onreadystatechange = function(e) {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status == 200) {
                var backs = req.response["result"];
                for (var i = 0; i < backs.length; i++) {
                    make_background_button(i, "../../static/img/bg/" + backs[i]);
                }
            }
        }
    }
    req.send();
}

function make_background_button(i, src) {
    var divElement = document.createElement("div");
    divElement.className="Ground_small";
    var picElement = document.createElement("div");
    picElement.className="Ground_small_img";
    picElement.id = "Ground_small_" + (i+1).toString();
    picElement.style.backgroundImage = "url('"+src+"')";
    divElement.onclick = function() {

        $("#main_border").css( {"background-image":($( "#"+picElement.id ).css( "background-image" )),
                            "background-size":"cover"});
        arrback = $( "#"+picElement.id  ).css( "background-image" );
    };
    divElement.append(picElement);
    backArray.append(divElement);
}

function cover_decoration(){
    $("#decorate_ch_1").hide();
    $("#decorate_ch_2").hide();
    $("#decorate_ch_3").hide();
    $("#decorate_ch_4").hide();

    jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');

    $("#decorate_ch_1").resizable({
        handles : 'w,n,s,e',
        containment:"#main_border",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_1").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#main_border", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_2").resizable({
        handles : 'w,n,s,e',
        containment:"#main_border",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_2").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#main_border", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_3").resizable({
        handles : 'w,n,s,e',
        containment:"#main_border",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_3").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#main_border", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });
    $("#decorate_ch_4").resizable({
        handles : 'w,n,s,e',
        containment:"#main_border",
        maxWidth: 500,
        minWidth: 85,
        maxHeight: 400,
        minHeight: 114,
        //비율유지
        aspectRatio: true,
        //마우스 hover 아닐때 핸들러 숨기기
        autoHide: true
    });

    $("#decorate_ch_4").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#main_border", // div영역 에서만 움직이도록 설정
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

    $("#input_text").keydown(function (key) {
        if (key.keyCode == 13) {
            $("#text_box").text($("#input_text").val());
            $('#input_text').val('');
            $("#text_box").resizable({
                handles : 'w,n,s,e',
                containment:"#main_border",
                maxWidth: 500,
                minWidth: 200,
                maxHeight: 400,
                minHeight: 100,
            });
        }
    });

    $("#text_box").resizable({
        handles : 'w,n,s,e',
        containment:"#main_border",
        maxWidth: 500,
        minWidth: 200,
        maxHeight: 400,
        minHeight: 100,

    });

    $("#text_box").draggable({
                         cursor:"pointer", // 커서 모양
                         containment:"#main_border", // div영역 에서만 움직이도록 설정
                         revert:false // true:드래그 후 원위치로 복귀, false:드래그 후 현재(이동한) 위치
                    });

}

function makeBook(){
    get_background();
    if(document.getElementById('main_border').style.backgroundImage == ""){
        //배경 설정 안됨
        createModal("warning","경고", "배경화면을 선택해주세요");
    } else if(document.getElementById('text_box').innerText == ""){
        createModal("warning","경고", "동화의 제목을 지어주세요");
    } else {
        createModal("book","동화를 완성합니다.", "나의 책장에서 확인할 수 있습니다.");
    }
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
function sendToNextPage(){
    removeModal();

    //다음페이지로 POST 데이터 넘기기
    jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);
    console.log(jsonData);

    var bookPage = new Object();
    bookPage.background = ($("#main_border").css("background-image")).slice(5, -2);
    bookPage.context = document.getElementById("text_box").innerText;
    var elements = new Array();
    for(j=1; j<=4; j++){
        // 캐릭터 업로드
        var element = new Object();
        element.display = $("#decorate_ch_"+j).css("display");
        element.width = $("#decorate_ch_"+j).css("width");
        element.height = $("#decorate_ch_"+j).css("height");
        element.top = $("#decorate_ch_"+j).css("top");
        element.left = $("#decorate_ch_"+j).css("left");
        elements.push(element);
    }
    // Cover textbox 추가
    var element = new Object();
    element.display = $("#text_box").css("display");
    element.width = $("#text_box").css("width");
    element.height = $("#text_box").css("height");
    element.top = $("#text_box").css("top");
    element.left = $("#text_box").css("left");
    elements.push(element);

    bookPage.elements = elements;


    jsonObject.BookCover = bookPage;

    var jsonData = JSON.stringify(jsonObject);
    document.getElementById("jsonData").value = jsonData;


    var url_POST = '../update_book/';
    var req = new XMLHttpRequest();
    req.open('POST', url_POST, true);
    req.responseType = 'json';
    req.onreadystatechange = function(e) {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status == 200) {
                var words = req.response["result"];
            }
        }
    }
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send("jsonData="+jsonData);

    //window.location = '/AI_Publisher/show_gallery';
}
