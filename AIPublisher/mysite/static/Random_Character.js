var check = new Array(6);
var imgArray = new Array(6);
var imgNum = new Array(6);

function random_character() {
    // 이미지 배열에 할당, [][0]은 이미지 내용, [][1]은 이미지가 사용되었는가를 표시.



    for (var i = 0; i < imgArray.length; i++) {
        imgArray[i] = new Array(2);
    }

    // for(var i=0;i<6;i++){
    //     imgArray[i][0] = "../../static/img/characters/"+(i+1)+".jpg";
    //     imgArray[i][1] = 0
    // }
    imgArray[0][0] = "../../static/img/characters/1.jpg";
    imgArray[0][1] = 0;
    imgArray[1][0] = "../../static/img/characters/2.jpeg";
    imgArray[1][1] = 0;
    imgArray[2][0] = "../../static/img/characters/3.jpg";
    imgArray[2][1] = 0;
    imgArray[3][0] = "../../static/img/characters/4.jpg";
    imgArray[3][1] = 0;
    imgArray[4][0] = "../../static/img/characters/5.jpg";
    imgArray[4][1] = 0;
    imgArray[5][0] = "../../static/img/characters/6.jpg";
    imgArray[5][1] = 0;
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
    $("#card1").click(function() {
        if (imgArray[imgNum[0]][1] == 0) {
            check[0] = true;
            imgArray[imgNum[0]][1] = 1;
            objImg1.border = "30px";
        }
        else{
            check[0] = false;
            imgArray[imgNum[0]][1] = 0;
            objImg1.border = "3px";
        }
    });

   $("#card2").click(function() {
        if (imgArray[imgNum[1]][1] == 0) {

            check[1] = true;
            imgArray[imgNum[1]][1] = 1;
            objImg2.border = "30px";
        }
        else{
            check[1] = false;
            imgArray[imgNum[1]][1] = 0;
            objImg2.border = "3px";
        }
    });

   $("#card3").click(function() {
        if (imgArray[imgNum[2]][1] == 0) {

            check[2] = true;
            imgArray[imgNum[2]][1] = 1;
            objImg3.border = "30px";
        }
        else{
            check[2] = false;
            imgArray[imgNum[2]][1] = 0;
            objImg3.border = "3px";
        }
    });

   $("#card4").click(function() {
        if (imgArray[imgNum[3]][1] == 0) {

            check[3] = true;
            imgArray[imgNum[3]][1] = 1;
            objImg4.border = "30px";
        }
        else{
            check[3] = false;
            imgArray[imgNum[3]][1] = 0;
            objImg4.border = "3px";
        }
    });

   //이미지 다시뽑기 카운트
    var count = 0;

   //이미지 다시뽑기
    $("#redraw").click(function() {
        count += 1;

        if(count < 3) {
            //안 썼던 카드끼리 비교해서 섞어 버리기.
            for (var i = 0; i < imgNum.length; i++) {
                var j = Math.floor(Math.random() * imgNum.length);
                // [array[i], array[j]] = [array[j], array[i]];
                if(check[i] == false && check[j] == false) {
                    var x = imgNum[i];
                    imgNum[i] = imgNum[j];
                    imgNum[j] = x;
                }
            }

            if(!check[0])
            {
                objImg1.src = imgArray[imgNum[0]][0];
            }

            if(!check[1])
            {
                objImg2.src = imgArray[imgNum[1]][0];
            }

            if(!check[2])
            {
                objImg3.src = imgArray[imgNum[2]][0];
            }

            if(!check[3])
            {
                objImg4.src = imgArray[imgNum[3]][0];
            }
        }




    });

}

function next_page(){
    console.log(imgArray);
    var arrCharacter = new Array();
    for(i=1;i<=4; i++){

        if(check[i-1]) {
            charIdName = "card"+i;

            bgImageUrl = imgArray[imgNum[i-1]][0];
            arrCharacter.push(bgImageUrl);
        }
    }

    var jsonObject = new Object();
    jsonObject.charList = arrCharacter;
    var jsonData = JSON.stringify(jsonObject);
    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();
}