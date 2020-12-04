function sendToNextPage(){

    jsonData = document.getElementById("jsonData").value;
    // 참조 : jsonParse 하기 위해선 key와 value는 "로 둘러쌓여있어야한다. 그리고 제일 겉은 '로 둘러쌓여야함
    jsonData = jsonData.replaceAll('\'', '\"');
    jsonObject = JSON.parse(jsonData);



    var jsonData = JSON.stringify(jsonObject);
    console.log(jsonData);
    document.getElementById("jsonData").value = jsonData;
    document.getElementById("sendJson").submit();
}

