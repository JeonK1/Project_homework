var ImgArray = new Array(4);
var check = new Array(4);
var check2 = new Array(4);
var character = new Array(4);
for(var i=0;i<character.length;i++){
    character[i] = new Array(5);
} // 등장인물 정보를 저장할 2차원 배열

function setCard(){
    var characterID = "card";
    console.log(characterID)

    for(var i=0;i<4;i++){
        characterID = "card"+(i+1);
        //""이거랑 url(~~~) 이 부분 없애주는 역할.
        ImgArray[i] = document.getElementById(characterID).style.backgroundImage.slice(4, -1).replace(/"/g, "");
        if(i==0) //setcard의 이미지가 1번째 이미지가 무조건 쓰이고 시작하기 때문에 이렇게 해둠.
        {
            check[i]=true;
            check2[i]=false;
        }
        else{
            check[i]=false;
            check2[i]=false;
        }
    }
    var objImg = document.getElementById("set_card");
    console.log(objImg)
    objImg.src = ImgArray[0];
    console.log(objImg.src)
    console.log(ImgArray)
    console.log(check)

    $("#card1").click(function() {
        var x;
        for(var i=0; i<check.length;i++){
            if(check[i]){
                x = i;
                break;
            }
        }
        console.log(x);
        console.log(check);
        console.log(check2);

        character[x][0]=ImgArray[x];
        character[x][1]=document.getElementById("name_text").value;
        character[x][2]="성격들어갈 자리"
        character[x][3]=document.getElementById("etc_text").value;
        if($(ck1).is(":checked") == true) {// 주인공은 1명만 가능합니다.
            for(i=0;i<4;i++)
            {
                character[i][4] = false;
            }
            character[x][4] = true;
        }

        //화면의 값들 지우기.
        document.getElementById("set_card").style.backgroundImage = ImgArray[0];
        document.getElementById("name_text").value = "";
        document.getElementById("etc_text").value = "";
        if($(ck1).is(":checked") == true)
        {
            $(ck1).is(":checked").attr( 'checked', false );
        }
        check[x]=false;
        check2[x]=true;
        check[0]=true;
        //x번째 카드의 정보가 저장된 값이 있는지 체크
        if(check2[0]){
            document.getElementById("name_text").value = character[0][1];
            document.getElementById("etc_text").value = character[0][3];
            if(character[0][4]){
                $(ck1).is(":checked").attr( 'checked', true );
            }

        }
    });

    $("#card2").click(function() {
        var x;
        for(var i=0; i<check.length;i++){
            if(check[i]){
                x = i;
                break;
            }
        }
        console.log(x);
        console.log(check);
        console.log(check2);

        character[x][0]=ImgArray[x];
        character[x][1]=document.getElementById("name_text").value;
        character[x][2]="성격들어갈 자리"
        character[x][3]=document.getElementById("etc_text").value;
        if($(ck1).is(":checked") == true) {// 주인공은 1명만 가능합니다.
            for(i=0;i<4;i++)
            {
                character[i][4] = false;
            }
            character[x][4] = true;
        }
        console.log(character)
        //화면의 값들 지우기.
        document.getElementById("set_card").style.backgroundImage = ImgArray[1];
        document.getElementById("name_text").value = "";
        document.getElementById("etc_text").value = "";
        if($(ck1).is(":checked") == true)
        {
            $(ck1).is(":checked").attr( 'checked', false );
        }
        check[x]=false;
        check2[x]=true;
        check[1]=true;
        //x번째 카드의 정보가 저장된 값이 있는지 체크
        if(check2[1]){
            document.getElementById("name_text").value = character[1][1];
            document.getElementById("etc_text").value = character[1][3];
            if(character[1][4]){
                $(ck1).is(":checked").attr( 'checked', true );
            }

        }
    });

    $("#card3").click(function() {
        var x;
        for(var i=0; i<check.length;i++){
            if(check[i]){
                x = i;
                break;
            }
        }
        console.log(x);
        console.log(check);
        console.log(check2);

        character[x][0]=ImgArray[x];
        character[x][1]=document.getElementById("name_text").value;
        character[x][2]="성격들어갈 자리"
        character[x][3]=document.getElementById("etc_text").value;
        if($(ck1).is(":checked") == true) {// 주인공은 1명만 가능합니다.
            for(i=0;i<4;i++)
            {
                character[i][4] = false;
            }
            character[x][4] = true;
        }

        //화면의 값들 지우기.
        document.getElementById("set_card").style.backgroundImage = ImgArray[2];
        document.getElementById("name_text").value = "";
        document.getElementById("etc_text").value = "";
        if($(ck1).is(":checked") == true)
        {
            $(ck1).is(":checked").attr( 'checked', false );
        }
        check[x]=false;
        check2[x]=true;
        check[2]=true;
        //x번째 카드의 정보가 저장된 값이 있는지 체크
        if(check2[2]){
            document.getElementById("name_text").value = character[2][1];
            document.getElementById("etc_text").value = character[2][3];
            if(character[2][4]){
                $(ck1).is(":checked").attr( 'checked', true );
            }

        }
    });

    $("#card4").click(function() {
        var x;
        for(var i=0; i<check.length;i++){
            if(check[i]){
                x = i;
                break;
            }
        }
        console.log(x);
        console.log(check);
        console.log(check2);

        character[x][0]=ImgArray[x];
        character[x][1]=document.getElementById("name_text").value;
        character[x][2]="성격들어갈 자리"
        character[x][3]=document.getElementById("etc_text").value;
        if($(ck1).is(":checked") == true) {// 주인공은 1명만 가능합니다.
            for(i=0;i<4;i++)
            {
                character[i][4] = false;
            }
            character[x][4] = true;
        }

        //화면의 값들 지우기.
        document.getElementById("set_card").style.backgroundImage = ImgArray[3];
        document.getElementById("name_text").value = "";
        document.getElementById("etc_text").value = "";
        if($(ck1).is(":checked") == true)
        {
            $(ck1).is(":checked").attr( 'checked', false );
        }
        check[x]=false;
        check2[x]=true;
        check[3]=true;
        //x번째 카드의 정보가 저장된 값이 있는지 체크
        if(check2[3]){
            document.getElementById("name_text").value = character[3][1];
            document.getElementById("etc_text").value = character[3][3];
            if(character[3][4]){
                $(ck1).is(":checked").attr( 'checked', true );
            }

        }
    });
}



function nextStep(){

}

