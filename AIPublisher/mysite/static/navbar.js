function navbar_function(){
//사용자 이름
    var username = document.getElementById("username");
    username.innerHTML = "Coople";

    // $("#AI_Publisher_image").click(function() {
    //     createModal_nav("warning", "이 페이지를 나가겠습니까?", "지금까지 만든 동화는 저장되지 않습니다.\n그래도 나가겠습니까?")
    //     console.log("선택완료")
    // });

    $("#user_icon").click(function() {
        createModal_nav("warning", "이 페이지를 나가겠습니까?", "지금까지 만든 동화는 저장되지 않습니다.\n그래도 나가겠습니까?")
    });
}

function createModal_nav(type, title, message){
    if(type=="warning"){
        //경고일 때
        document.querySelector('#modal_button_ok').style.display = 'none';
        document.querySelector('#modal_button_yes').style.display = '';
        document.querySelector('#modal_button_no').style.display = '';

        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('#modal_title').innerText = title;
        document.querySelector('#modal_context').innerText = message;
    }
}

function removeModal(){
    document.querySelector('.modal_wrap').style.display ='none';
    document.querySelector('.black_bg').style.display ='none';
}

function modalOk(){
    removeModal();
}

function modalYes_nav(){
    location.href='http://127.0.0.1:8000/AI_Publisher/user_info'
    removeModal();
}

function modalNo_nav(){

    removeModal();
}