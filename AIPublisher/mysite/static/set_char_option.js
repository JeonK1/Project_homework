var nameList = ["","","",""]; // 인물
var personalityList = ["","","",""]; // 성격
var etcList = ["","","",""]; // 기타
var mainCharacterNo = -1; //주인공 번호
var curNo = 0; //현재 작성중인 캐릭터 번호, 초기값은 첫번째 캐릭터라서 0이다.

function saveCharData(){
    // 현재 작성된 캐릭터 정보 저장
    nameList[curNo] = document.getElementById("name_text").value;
    // personalityList[curNo] = document.getElementById("name_text").value; // 성격 부분은 어떻게 하는지 몰라서 일단 비워둠
    etcList[curNo] = document.getElementById("etc_text").value;
    if(document.getElementById("ck1").checked){
        //주인공이 체크되어있으면
        mainCharacterNo = curNo;
    }
}
function settingCharData(num){
    // 해당 num의 data를 불러와서 세팅해주기
    saveCharData();

    curNo = num; // 현재 보고잇는 캐릭터 바꾸고
    // 현재 캐릭터 정보 load하기
    document.getElementById("name_text").value = nameList[curNo];
    // document.getElementById("name_text").value = personalityList[curNo]; // 성격 부분은 어떻게 하는지 몰라서 일단 비워둠
    document.getElementById("etc_text").value = etcList[curNo];
    if(curNo == mainCharacterNo){
        //현재 선택한 번호가 주인공이면
        document.getElementById("ck1").checked = true;
    } else {
        //현재 선택한 번호가 주인공이면
        document.getElementById("ck1").checked = false;
    }
    cardIdName = "card"+(curNo+1);
    document.getElementById("set_card").style.backgroundImage = document.getElementById(cardIdName).style.backgroundImage;
}

function sendToNextPage(){
    //다음페이지로 POST 데이터 넘기기
    var arrCharacter = new Array();
    for(i=0;i<4; i++){
        charIdName = "card"+(i+1);
        characterObject = new Object(); // 인물 JsonObject

        characterObject.url = document.getElementById(charIdName).style.backgroundImage.slice(4, -1).replace(/"/g, ""); // url 설정
        characterObject.name = nameList[i];
        //characterObject.personality = personalityList[i]; // 성격 부분은 어떻게 하는지 몰라서 일단 비워둠
        characterObject.etc = etcList[i];
        if(i == mainCharacterNo){
            characterObject.isMainChar = 1; // 현재 번호가 주인공일 때
        } else {
            characterObject.isMainChar = 0; // 현재 번호가 주인공이 아닐 때
        }

        arrCharacter.push(characterObject);
    }

    var arrRelation = new Array();
    for(i=0; i<5; i++){
        arrRelation.push(relationList[i]);
    }

    var jsonObject = new Object();
    jsonObject.charList = arrCharacter;
    jsonObject.relList = arrRelation;
    var jsonData = JSON.stringify(jsonObject);
    console.log(jsonData);

    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();
}