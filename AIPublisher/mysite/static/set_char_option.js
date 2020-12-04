var curNo = 0; //현재 작성중인 캐릭터 번호, 초기값은 첫번째 캐릭터라서 0이다.
var arrCharacter = new Array();
var pListObject;

function initCharData(){

    arrCharacter = new Array();
    for(var i=0;i<4; i++){
        charIdName = "card_"+(i+1);
        if(document.getElementById(charIdName)==null){
            break;
        }
        else{
            characterObject = new Object();
            characterObject.url = document.getElementById(charIdName).src; // url 설정
            characterObject.name = "";
            characterObject.personality = new Array(11);
            for (var j = 1; j < 12; j++){
                characterObject.personality[j-1] = ""
            }
            characterObject.isMainChar = 0;
            arrCharacter.push(characterObject);
        }
    }
}

function saveCharData(){
    // 현재 작성된 캐릭터 정보 저장
    arrCharacter[curNo].name = document.getElementById("name_box").value;


    for (var i = 1; i < 12; i++)
    {
        person = "personality"+(i);
        if($("#personality"+i).css("backgroundColor") == "rgb(81, 80, 57)"){
            arrCharacter[curNo].personality[i-1] = document.getElementById(person).innerText;
        }
    }

    if($("#main_char_yes").css("backgroundColor") == "rgb(81, 80, 57)"){
        //주인공이 체크되어 있을 때
        for(i=0; i<arrCharacter.length; i++){
            arrCharacter[i].isMainChar = 0;
        }
        arrCharacter[curNo].isMainChar = 1;
    } else {
        arrCharacter[curNo].isMainChar = 0;
    }
}
function settingCharData(num){
    // 해당 num의 data를 불러와서 세팅해주기
    saveCharData();

    curNo = num; // 현재 보고잇는 캐릭터 바꾸고

    // 현재 캐릭터 정보 load하기
    document.getElementById("name_box").value = arrCharacter[curNo].name;

    for (var i = 1; i < 12; i++)
    {
        person = "personality"+(i);
        person_id = "#personality"+(i);
        if(arrCharacter[curNo].personality[i-1] == document.getElementById(person).innerText){

            $(person_id).css("background","#515039");
            $(person_id).css("color","#FFFEF1");
        }

        if(arrCharacter[curNo].personality[i-1] != document.getElementById(person).innerText){

            $(person_id).css("background","");
            $(person_id).css("color","#918F7B");
        }
    }

    if(arrCharacter[curNo].isMainChar == 1) {
        //현재 선택한 번호가 주인공이면
        $("#main_char_yes").css("background", "#515039");
        $("#main_char_yes").css("color", "#FFFEF1");
        $("#main_char_no").css("background","");
        $("#main_char_no").css("color","#918F7B");
    }

    else {
        //현재 선택한 번호가 주인공이 아닐 때
        $("#main_char_no").css("background","#515039");
        $("#main_char_no").css("color","#FFFEF1");
        $("#main_char_yes").css("background","");
        $("#main_char_yes").css("color","#918F7B");
    }
    cardIdName = "card_"+(curNo+1);
    document.getElementById("setCard").src = document.getElementById(cardIdName).src;
}

function sendToNextPage(){
    settingCharData(curNo);
    // 인물 이름을 설정하지 않았거나, 주인공을 아무도 설정하지 않으면 에러메시지
    isCharNameAllExist = 0;
    isMainCharSelected = 0;
    for(i=0; i<arrCharacter.length; i++){
        isMainCharSelected += arrCharacter[i].isMainChar;
        if(arrCharacter[i].name != "")
            isCharNameAllExist += 1;
    }
     if(isCharNameAllExist != arrCharacter.length){
         // 이름을 작성하지 않은 인물이 있음
         createModal_warn("이름을\n작성하지 않은\n인물이 있어요");
     } else if (isMainCharSelected == 0){
         // 주인공을 설정하지 않은 인물이 있음
         createModal_warn("주인공을\n설정해주세요");
     } else {
         //다음페이지로 POST 데이터 넘기기
         var jsonObject = new Object();
         jsonObject.charList = arrCharacter;
         var jsonData = JSON.stringify(jsonObject);
         document.getElementById("jsonData").value = jsonData;
         document.getElementById("sendJson").submit();
     }
}

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
    }
}

function create_personality_element(str) {
    var element = document.createElement("div");
    element.className = "charWord_word";
    element.innerHTML = str;
    pListObject.append(element);
}

function get_personality_word() {
    var url_GET = '../get_personality_word/';
    var req = new XMLHttpRequest();
    req.open('GET', url_GET, true);
    req.responseType = 'json';
    req.onreadystatechange = function(e) {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status == 200) {
                var words = req.response["result"];
                for (var i = 0; i < words.length; i++) {
                    create_personality_element(words[i]);
                }
            }
        }
    }
    req.send();
}

function click_effect(input){

    if($("#"+input.id).css("backgroundColor") == "rgb(81, 80, 57)"){
        $("#"+input.id).css("background","");
        $("#"+input.id).css("color","#918F7B");

    }
    else{
        $("#"+input.id).css("background","#515039");
        $("#"+input.id).css("color","#FFFEF1");
    }

}

function click_effect_yes(){

    if($("#main_char_yes").css("backgroundColor") == "rgba(0, 0, 0, 0)"){
        $("#main_char_yes").css("background","#515039");
        $("#main_char_yes").css("color","#FFFEF1");
        $("#main_char_no").css("background","");
        $("#main_char_no").css("color","#918F7B");
    }

    else if($("#main_char_no").css("backgroundColor") == "rgba(0, 0, 0, 0)"){
        $("#main_char_no").css("background","#515039");
        $("#main_char_no").css("color","#FFFEF1");
        $("#main_char_yes").css("background","");
        $("#main_char_yes").css("color","#918F7B");
    }

}

function click_effect_no(){

    if($("#main_char_no").css("backgroundColor") == "rgba(0, 0, 0, 0)"){
        $("#main_char_no").css("background","#515039");
        $("#main_char_no").css("color","#FFFEF1");
        $("#main_char_yes").css("background","");
        $("#main_char_yes").css("color","#918F7B");
    }

    else if($("#main_char_yes").css("backgroundColor") == "rgba(0, 0, 0, 0)"){
        $("#main_char_yes").css("background","#515039");
        $("#main_char_yes").css("color","#FFFEF1");
        $("#main_char_no").css("background","");
        $("#main_char_no").css("color","#918F7B");
    }

}

// 말풍선
function createSpeechBox(){
    document.getElementById("speech_box").style.display="";
}
function removeSpeechBox(){
    document.getElementById("speech_box").style.display="none";
}
function createWordList(){
    document.getElementById("charWord_wrap").style.visibility="";
    pListObject = document.getElementById("charWord_list");
    if (pListObject.hasChildNodes() == false) {
        get_personality_word();
    }

}
function removeWordList(){
    document.getElementById("charWord_wrap").style.visibility="hidden";
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

function createModal_warn(message){
    document.querySelector('.modal_warn_wrap').style.display ='block';
    document.querySelector('.black_bg_warn').style.display ='block';
    document.getElementById('modal_warn_title').innerText = message;
}
function removeModal_warn(){
    document.querySelector('.modal_warn_wrap').style.display ='none';
    document.querySelector('.black_bg_warn').style.display ='none';
}