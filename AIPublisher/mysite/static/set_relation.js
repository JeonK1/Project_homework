var relationListId = ["", "", "", "", ""]; // 설정한 5개의 관계 들어간 현황
var relationList = ["", "", "", "", ""]; // 설정한 5개의 관계 들어간 현황
var subCharNo = -1 // 대립되는 서브주인공 번호

function onDragStart(e){
    console.warn('drag Start'+e.target.id);
    var parentNode = e.target.parentElement;
    e.dataTransfer.setData('parentClassName', e.target.parentElement.className); // 드래그해보세요 문자열 전달
    e.dataTransfer.setData('parentIdName', e.target.parentElement.id); // 드래그해보세요 문자열 전달
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
    parentClassName = e.dataTransfer.getData('parentClassName');
    idName = e.dataTransfer.getData('parentIdName');
    innerText = e.dataTransfer.getData('innerText');
    console.warn(parentClassName);
    console.warn(idName);
    console.warn(innerText);

    myParentIdName = e.target.parentElement.id;
    relationListPos = parseInt(myParentIdName.charAt(myParentIdName.length-1))-1;
    if(e.target.innerText.length>0) {
        //뭔가가 들어와있으면 원래있던거 빼고 교체해주는식으로 구현하기
        document.getElementById(relationListId[relationListPos]).style.display="";
    }
    if(parentClassName.includes('positive')){
        e.target.parentElement.className = "relation_selected_card_pos";
    } else if(parentClassName.includes('neutrality')){
        e.target.parentElement.className = "relation_selected_card_neu";
    } else if(parentClassName.includes('negative')){
        e.target.parentElement.className = "relation_selected_card_neg";
    }
    document.getElementById(idName).style.display='none';
    e.target.innerText = innerText;
    relationList[relationListPos] = innerText;
    relationListId[relationListPos] = idName;
}

function sendSubChar(num){
    subCharNo=num;
    charIdName = "character_"+num;
    bgImageUrl = document.getElementById(charIdName).style.backgroundImage.slice(4, -1).replace(/"/g, "");
    query = "url('" + bgImageUrl + "')";
    document.getElementById('character_sub').style.backgroundImage = query;
}

function sendToNextPage(){
    jsonData = document.getElementById("jsonData").value;
    // jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);

    //부 주인공은 charList에서 지우고, subChar object로 새로 넣어줌
    jsonObject.subChar = jsonObject.charList[subCharNo-2];
    delete jsonObject.charList[subCharNo-2];

    //관계 정보 넣어주기
    var arrRelation = new Array();
    for(i=0; i<5; i++){
        arrRelation.push(relationList[i]);
    }
    jsonObject.relList = arrRelation;

    var jsonData = JSON.stringify(jsonObject);
    console.log(jsonData);

    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();
}