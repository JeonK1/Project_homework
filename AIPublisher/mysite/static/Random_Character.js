var check = new Array(80);
var imgArray = new Array(80);
var imgNum = new Array(80);
var cardSelected = [0,0,0,0];

function random_character() {
    // 이미지 배열에 할당, [][0]은 이미지 내용, [][1]은 이미지가 사용되었는가를 표시.



    for (var i = 0; i < imgArray.length; i++) {
        imgArray[i] = new Array(2);
    }

    for(var i=0;i<imgArray.length;i++){
        imgArray[i][0] = "../../static/img/char/"+ (i+1) +".png";
        imgArray[i][1] = 0
    }

    // 이미지 숫자만큼 뽑을 풀 만들기


    for (var i = 0; i < imgNum.length; i++) {
        imgNum[i] = i;
    }

    //이미지 번호 Shuffle
    for (var i = 0; i < imgNum.length; i++) {
        var j = Math.floor(Math.random() * imgNum.length);
        // [array[i], array[j]] = [array[j], array[i]];
        var x = imgNum[i];
        imgNum[i] = imgNum[j];
        imgNum[j] = x;
    }
    // 1번부터 4번까지 카드 div 연결
    var objImg1 = document.getElementById("card1");
    var objImg2 = document.getElementById("card2");
    var objImg3 = document.getElementById("card3");
    var objImg4 = document.getElementById("card4");


    //src 입력var check = new Array(6);
    // var imgNum = new Array(6);
    objImg1.src = imgArray[imgNum[0]][0];
    objImg2.src = imgArray[imgNum[1]][0];
    objImg3.src = imgArray[imgNum[2]][0];
    objImg4.src = imgArray[imgNum[3]][0];

    // //클릭 이미지 이벤트
    // var divImg1 = document.getElementById("card_1");
    // var divImg2 = document.getElementById("card_2");
    // var divImg3 = document.getElementById("card_3");
    // var divImg4 = document.getElementById("card_4");


    for (var i = 0; i < check.length; i++) {
        check[i] = false;
    }

    //이미지 고르기.
    var selectBoxShadowStr = "5px 5px 7px black";
    var unSelectBoxShadowStr = "0px 0px 0px black";
    $("#card_1").click(function() {
        if (!check[0]) {
            check[0] = true;
            document.getElementById("card_1").style.boxShadow = selectBoxShadowStr;
        }
        else{
            check[0] = false;
            document.getElementById("card_1").style.boxShadow = unSelectBoxShadowStr;
        }
    });

   $("#card_2").click(function() {
        if (!check[1]) {
            check[1] = true;
            document.getElementById("card_2").style.boxShadow = selectBoxShadowStr;
        }
        else{
            check[1] = false;
            document.getElementById("card_2").style.boxShadow = unSelectBoxShadowStr;
        }
    });

   $("#card_3").click(function() {
        if (!check[2]) {
            check[2] = true;
            document.getElementById("card_3").style.boxShadow = selectBoxShadowStr;
        }
        else{
            check[2] = false;
            document.getElementById("card_3").style.boxShadow = unSelectBoxShadowStr;
        }
    });

   $("#card_4").click(function() {
        if (!check[3]) {
            check[3] = true;
            document.getElementById("card_4").style.boxShadow = selectBoxShadowStr;
        }
        else{
            check[3] = false;
            document.getElementById("card_4").style.boxShadow = unSelectBoxShadowStr;
        }
    });

   //이미지 다시뽑기 카운트
    var count = 0;

   //이미지 다시뽑기
    $("#redraw_btn").click(function() {
        count += 1;
        var num = 0;
        if(count < 3) {
            for(var i = 0; i < imgNum.length; i++) {
                if (check[i] == false) {
                    num +=1;
                }
            }
            var url_GET = '../get_random_character?data='
            url_GET = url_GET + JSON.stringify({required: num, exclude: imgNum});
            var req = new XMLHttpRequest();
            req.open('GET', url_GET, true);
            req.resposeType = 'json';
            req.onreadystatechange = function(e) {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status == 200) {
                        newcards = JSON.parse(req.response)["result"];
                        j = 0;
                        for (var i = 0; i < imgNum.length; i++) {
                            if(check[i] == false) {
                                imgNum[i] = newcards[j];
                                j++;
                            }
                        }
                        if(!check[0])
                        {
                            objImg1.src = "/static/img/char/" + imgNum[0];
                        }
                        if(!check[1])
                        {
                            objImg2.src = "/static/img/char/" + imgNum[1];
                        }
                        if(!check[2])
                        {
                            objImg3.src = "/static/img/char/" + imgNum[2];
                        }
                        if(!check[3])
                        {
                            objImg4.src = "/static/img/char/" + imgNum[3];
                        }
                    }
                }
            }
            req.send();
        }
    });

    $("#nextpage_btn").click(function() {
        var arrCharacter = new Array();

        //캐릭터 개수 세어서, 0명 선택인거 막아주기
        var charCnt = 0;
        for(i=0; i<4; i++){
            if(check[i])
                charCnt+=1;
        }
        if(charCnt<2){
            createModal_warn();
        } else {
            for(i=1;i<=4; i++){
                if(check[i-1]) {
                    charIdName = "card"+i;
                    bgImageUrl = document.getElementById(charIdName).src;
                    arrCharacter.push(bgImageUrl);
                }
            }
            var jsonObject = new Object();
            jsonObject.charList = arrCharacter;
            var jsonData = JSON.stringify(jsonObject);
            console.log(jsonData);
            document.getElementById("jsonData").value = jsonData;
            document.getElementById("sendJson").submit();
        }
    });
}

function createModal_nav(url){
    document.querySelector('#modal_button_yes').style.display = "";
    document.querySelector('#modal_button_no').style.display = "";
    document.querySelector('.modal_wrap').style.display ='block';
    document.querySelector('.black_bg').style.display ='block';
    locate_url = url
}
function removeModal(){
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}

function modalOk(){
    removeModal();
}

function modalYes_nav(){
    removeModal();
    if(locate_url=="back"){
        //뒤로가기
        history.back();
    } else {
        window.location = locate_url;
    }
}

function modalNo_nav(){
    removeModal();
}


function createModal_warn(){
    document.querySelector('.modal_warn_wrap').style.display ='block';
    document.querySelector('.black_bg_warn').style.display ='block';
}
function removeModal_warn(){
    document.querySelector('.modal_warn_wrap').style.display ='none';
    document.querySelector('.black_bg_warn').style.display ='none';
}