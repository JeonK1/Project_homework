var relationListId = ["", "", "", "", ""]; // 설정한 5개의 관계 들어간 현황
var relationList = ["", "", "", "", ""]; // 설정한 5개의 관계 들어간 현황
var subCharNo = -1 // 대립되는 서브주인공 번호

function onDragStart(e){
    console.warn('drag Start'+e.target.id);
    e.dataTransfer.setData('IdName', e.target.id); // 드래그해보세요 문자열 전달
    e.dataTransfer.setData('innerText', e.target.innerText); // 드래그해보세요 문자열 전달
}
function onDrag(e){
    console.log("drag");
}

function onDragOver(e){
    e.preventDefault();
    console.log('dragOver');
}

function onDrop(e){
    console.log("drop");
    idName = e.dataTransfer.getData('IdName');
    innerText = e.dataTransfer.getData('innerText');
    console.warn(idName);
    console.warn(innerText);
    relationListPos = parseInt(idName.charAt(idName.length-1))-1;

    console.warn(e.target.innerText);
    targetId = e.target.id.substr(8,1);
    if(e.target.innerText.length>0) {
        //뭔가가 들어와있으면 원래있던거 빼고 교체해주는식으로 구현하기
        console.log(targetId);
        console.log(relationListPos);
        document.getElementById(relationListId[targetId-1]).style.display="";
    }
    console.log(idName);
    document.getElementById(idName).style.display='none';
    e.target.innerText = innerText;
    relationList[targetId-1] = innerText;
    relationListId[targetId-1] = idName;
}

function sendSubChar(num){
    subCharNo=num;
    charIdName = "card_"+num;
    document.getElementById('characterSub').src = document.getElementById(charIdName).src;
}

function sendToNextPage(){
    // 예외처리
    var relCnt = 0;
    for(i=0; i<5; i++){
        if(relationList[i]==""){
            // 비어는 개수 세어보기
            relCnt += 1;
        }
    }
    if(relCnt > 0){
        //비어있는 관계 카드가 1개 이상임
        createModal_warn('관계 카드를\n모두 설정해주세요');
    } else if(subCharNo==-1) {
        //부 주인공 선택안함
        createModal_warn('관계 설정할 \n인물을\n선택해주세요');
    } else {
        jsonData = document.getElementById("jsonData").value;
        // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
        jsonData = jsonData.replaceAll('\'', '\"');
        jsonObject = JSON.parse(jsonData);

        var sendJsonObject = new Object();
        var subCharUrl = document.getElementById('characterSub').src;
        var otherCharList = new Array();
        for(i=0; i<jsonObject.charList.length; i++){
            if(jsonObject.charList[i].isMainChar == 1){
                //주인공
                sendJsonObject.mainChar = jsonObject.charList[i];
            } else if(jsonObject.charList[i].url.includes(subCharUrl)) {
                //부 주인공
                sendJsonObject.subChar = jsonObject.charList[i];
            } else {
                otherCharList.push(jsonObject.charList[i]);
            }
        }
        sendJsonObject.charList = otherCharList;

        //관계 정보 넣어주기
        var arrRelation = new Array();
        for(i=0; i<5; i++){
            arrRelation.push(relationList[i]);
        }
        sendJsonObject.relList = arrRelation;

        var jsonData = JSON.stringify(sendJsonObject);
        console.log(jsonData);

        document.getElementById("jsonData").value = jsonData;
        document.getElementById("sendJson").submit();
    }
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