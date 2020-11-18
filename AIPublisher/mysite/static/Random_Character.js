function random_character(){
    // 이미지 배열에 할당, [][0]은 이미지 내용, [][1]은 이미지가 사용되었는가를 표시.
    var imgArray = new Array(6);


    for(var i=0;i<imgArray.length;i++){
        imgArray[i] = new Array(2);
    }

    // for(var i=0;i<6;i++){
    //     imgArray[i][0] = "img/characters/character "+(i+1)+".jpg";
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

    let imgNum=[1,2,3,4,5,6];


    var objImg1 = document.getElementById("card1");
    var objImg2 = document.getElementById("card2");
    var objImg3 = document.getElementById("card3");
    var objImg4 = document.getElementById("card4");




    objImg1.src = imgArray[0][0];
    objImg2.src = imgArray[1][0];
    objImg3.src = imgArray[2][0];
    objImg4.src = imgArray[3][0];

}

